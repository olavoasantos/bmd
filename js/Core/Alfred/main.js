import $http from "axios";
import Parser from "./Core/AlfredParser";

/**
 * TODO
 * - Doc blocks... everywhere
 * - Back-end
 *      > User permissions
 * - Front-end:
 *      > Create
 *      > Update
 *      > Delete
 */
class Alfred {
    /**
     *
     * @param debug
     */
    constructor(debug = true) {
        this.__reset();
        this.__debug = debug;
    }

    from(url) {
        this.__url = url;
        this.__data = null;
        this.__method = 'get';

        return this;
    }

    /**
     *
     * @param model
     * @returns {Promise}
     */
    all(model) {
        this.__setup('post', model);

        return this;
    }

    /**
     *
     * @param model
     * @returns {Promise}
     */
    first(model) {
        this.__setup('post', model);
        this.__data[this.__model]['first'] = true;

        return this;
    }

    /**
     *
     * @param args
     * @returns {Alfred}
     */
    relationship(...args) {
        let model = args[0];
        delete args[0];

        if(this.__data[this.__model]['relationships'] == undefined) {
            this.__data[this.__model]['relationships'] = {};
        }

        this.__data[this.__model]['relationships'][model] = {};
        if(args.length > 1) {
            this.__data[this.__model]['relationships'][model]['fields'] = this.__parse.fields(args);
        }


        return this;
    }

    /**
     *
     * @param args
     * @returns {Alfred}
     */
    select(...args) {
        if(this.__method == 'post') {
            this.__data[this.__model]['fields'] = this.__parse.fields(args);
        } else if(this.__method == 'delete') {

        } else {

        }

        return this;
    }

    /**
     *
     * @param args
     * @returns {Alfred}
     */
    where(...args) {
        if(args.length == 1) {
            this.__data[this.__model]['where'] = ['id', '=', args[0]];
        } else if(args.length == 2) {
            this.__data[this.__model]['where'] = [args[0], '=', args[1]];
        } else if(args.length == 3) {
            this.__data[this.__model]['where'] = [args[0], args[1], args[2]];
        }

        return this;
    }

    /**
     *
     * @param max
     * @returns {Alfred}
     */
    limit(max) {
        this.__data[this.__model]['limit'] = max;

        return this;
    }

    /**
     *
     * @param field
     * @param sort
     * @returns {Alfred}
     */
    orderBy(field, sort = 'ASC') {
        this.__data[this.__model]['orderBy'] = [field, sort];

        return this;
    }

    /**
     *
     * @returns {Alfred}
     */
    latest() {
        delete this.__data[this.__model]['oldest'];
        this.__data[this.__model]['latest'] = true;

        return this;
    }

    /**
     *
     * @returns {Alfred}
     */
    oldest() {
        delete this.__data[this.__model]['latest'];
        this.__data[this.__model]['oldest'] = true;

        return this;
    }

    /**
     *
     * @returns {Promise}
     */
    get() {
        return new Promise((resolve, reject) => {
            $http[this.__method](this.__url, {data: this.__data})
                .then(response => {
                    this.__success(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.__fail(error.response.data);

                    reject(error.response.data);
                });
        });
    }

    /**
     *
     * @private
     */
    __reset() {
        this.__data = {};
        this.__model = null;
        this.__method = null;
        this.__url = '/api/alfred';
        this.__parse = new Parser();
    }

    /**
     *
     * @param method
     * @param model
     * @private
     */
    __setup(method, model) {
        this.__model = model;
        this.__method = method;
        this.__data[model] = {};
    }

    /**
     *
     * @param data
     * @returns {*}
     * @private
     */
    __success(data) {
        this.__reset();
    }

    /**
     *
     * @param data
     * @private
     */
    __fail(data) {
        if(this.__debug) {
            let message;
            switch (data) {
                case 'AQL001':
                    message = 'The Model was not found. Check the back-end models you created and make sure it is correctly referenced.';
                    break;
                case 'AQL002':
                    message = 'There was a problem while setting the fields. Try reviewing the defined fields within you "select" method.';
                    break;
                case 'AQL003':
                    message = 'There was a problem while structuring your relationships. Try reviewing the defined fields within you "relationship" method.';
                    break;
                case 'AQL004':
                    message = 'There was a problem while setting the limit of your query. Try reviewing the defined fields within you "limit" method.';
                    break;
                case 'AQL005':
                    message = 'There was a problem while setting your where clause. Try reviewing the defined fields within you "where" method.';
                    break;
                case 'AQL006':
                    message = 'There was a problem while ordering your query. Try reviewing the defined fields within you "orderBy" method.';
                    break;
                case 'AQL007':
                    message = 'There was a problem while ordering the query to get the latest results. Try reviewing the defined fields within you "latest" method.';
                    break;
                case 'AQL008':
                    message = 'There was a problem while ordering the query to get the older results. Try reviewing the defined fields within you "older" method.';
                    break;
                default:
                    message = 'Looks like something wen\'t wrong.';
            }

            console.error(`AlfredQL Error: ${message}`);
            this.__reset();
        }
    }
}

export default Alfred;