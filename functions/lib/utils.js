function success(res, message) {
    res.status(200).json({
        success: true,
        message: message
    });
}

function failure(res, message, status_code) {
    status_code = status_code ? status_code : 400;
    res.status(status_code).json({
        success: false,
        message: message
    });
}

module.exports = {
    success: success,
    failure: failure
};
