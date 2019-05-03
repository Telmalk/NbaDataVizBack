
module.exports = {
    attributes: {
        name: {
            type: "string",
            columnType: "varchar",
            maxLength: 45,
            required: true
        },
        college: {
            type: "string",
            columnType: "varchar",
            maxLength: 45
        },
        birthdate: {
            type: "string",
            columnType: "date",
            required: true
        },
        pictures: {
            type: "string",
            columnType: "varchar",
            maxLength: 150
        }
    }
};
