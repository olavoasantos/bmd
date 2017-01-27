import Trans from "../Trans/main";

class Alert {

    /**
     * Creates a new Alert instance.
     */
    constructor() {
        this.__alerts = [];

        this.__trans = Trans;

        this.__data = {
            highlight: '',
            message: '',
            icon: 'info',
            type: ''
        };
    }

    /**
     * Sets the highlight for the new Alert.
     *
     * @param highlight
     */
    highlight(highlight) {
        this.__data['highlight'] = highlight;

        return this;
    }

    /**
     * Sets the message for the new Alert.
     *
     * @param message
     */
    message(message) {
        this.__data['message'] = message;

        return this;
    }

    /**
     * Sets the type for the new Alert.
     *
     * @param type
     */
    type(type) {
        this.__data['type'] = type;

        return this;
    }

    /**
     * Sets the icon for the new Alert.
     *
     * @param icon
     */
    icon(icon) {
        this.__data['icon'] = icon;

        return this;
    }

    /**
     * Fires the new alert.
     *
     * @param alert
     */
    fire(alert = null) {
        if(alert !== null) {
            this.__alerts.push(alert);
        } else {
            this.__alerts.push(this.__data);
        }
        this.reset();
    }

    /**
     * Fires an alert.
     *
     * @param message
     */
    flash(message) {
        this.message(message);
        this.icon('bell');
        this.type('is-primary');
        this.highlight(this.__trans('alert.basic.highlight'));
        this.fire();
    }

    /**
     * Fires an error alert.
     *
     * @param message
     */
    error(message) {
        this.message(message);
        this.icon('exclamation');
        this.type('is-red');
        this.highlight(this.__trans('alert.error.highlight'));
        this.fire();
    }

    /**
     * Fires an success alert.
     *
     * @param message
     */
    success(message) {
        this.message(message);
        this.icon('check');
        this.type('is-green');
        this.highlight(this.__trans('alert.success.highlight'));
        this.fire();
    }

    /**
     * Fires an warning alert.
     *
     * @param message
     */
    warning(message) {
        this.message(message);
        this.icon('exclamation-triangle');
        this.type('is-yellow');
        this.highlight(this.__trans('alert.warning.highlight'));
        this.fire();
    }

    /**
     * Fires an info alert.
     *
     * @param message
     */
    info(message) {
        this.message(message);
        this.icon('info');
        this.type('is-blue');
        this.highlight(this.__trans('alert.info.highlight'));
        this.fire();
    }

    /**
     * Resets the Alert.
     */
    reset() {
        this.__data = {
            highlight: '',
            message: '',
            icon: 'info',
            type: 'is-blue'
        };
    }

    /**
     * Returns all alerts.
     *
     * @returns {Array|*}
     */
    all() {
        return this.__alerts;
    }

    /**
     * Clears all alerts.
     */
    clear() {
        this.__alerts = [];
    }

}

export default Alert;