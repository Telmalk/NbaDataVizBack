
module.exports = {
    attributes: {
        name: {
            type: "string",
            columnType: "varchar",
            maxLength: 45,
            required: true
        },
        logo: {
            type: "string",
            columnType: "varchar",
            maxLength: 100,
            required: true
        },
        short_name: {
            type: "string",
            columnType: "varchar",
            maxLength: 5,
            required: true
        }
    }
};
