module.exports = {
    attributes: {
        age: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        position: {
            type: "string",
            columnType: "varchar",
            maxLength: 3,
            required: true
        },
        numero: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        weight: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        height: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        experience: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        headshot: {
            type: "string",
            columnType: "varchar",
            maxLength: 250,
            required: true
        },
        minute_played: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        two_points: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        three_points: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        block: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        turnover: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        player_infocol: {
            type: "string",
            columnType: "varchar",
            maxLength: 45,
            required: true
        },
        id_team: {
            model: "team",
            required: true
        },
        id_player: {
            model: "players",
            required: true
        }
    }
};
