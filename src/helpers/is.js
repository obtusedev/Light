const validator = require("validator");

// gross way of checking "", " ", ", s.length === 0
function isEmptyString(s) {
    if (typeof(s) === "string") {
        if (validator.isEmpty(s) || s === '\"\"' || s === '\" \"' || s === '\"') {
            return true;
        }
    }
    return false;
}

function isPositiveAndNumber(n) {
    if (typeof(n) === "number") {
        if (isNaN(parseInt(n))) {
            return false;
        }
        return true;
    }
    return false;
}

module.exports = {
    isEmptyString: isEmptyString,
    isPositiveAndNumber: isPositiveAndNumber
};
