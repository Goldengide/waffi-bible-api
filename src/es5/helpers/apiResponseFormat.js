 const apiResponse = (success, message, data, links, errorCode = null) => {
    let result = { success, message, data, links };
    if (errorCode !== null) {
        result.errorCode = errorCode;
    }
    return result;

}

module.exports = apiResponse;
