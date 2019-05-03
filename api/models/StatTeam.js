module.exports = {
    attributes: {
        place: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        win: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        lose: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        points: {
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
        three_points_attemps: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        free_throws: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        free_throws_attempted: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        offensive_rebounds: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        defensive_rebounds: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        asits: {
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
        steals: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        blocks: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        personal_fouls: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        id_team: {
            model: "team",
            required: true
        }
    }
};
