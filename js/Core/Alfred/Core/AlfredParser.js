class Parser {
    fields(args) {
        let fields = [];

        for (let i in args) {
            if (typeof args[i] !== 'object') {
                fields.push(args[i]);
            } else {
                fields = this.fields(args[i]).reduce( function(coll,item){
                    coll.push( item );
                    return coll;
                }, fields );
            }
        }

        return fields;
    }


    data(args) {
        let data = args[0];

        return data;
    }

}

export default Parser;