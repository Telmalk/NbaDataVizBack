
module.exports = {
    attributes: {
        id: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        createdAt: {
            type: "number",
            columnType: "bigint",
            isInteger: true
        },
        fromModel: {
            type: "string",
            columnType: "varchar",
            maxLength: 255
        },
        originalRecord: {
            type: "string",
            columnType: "longtext"
        },
        originalRecordId: {
            type: "string",
            columnType: "longtext"
        }
    }
};
