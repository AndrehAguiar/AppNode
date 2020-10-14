exports.mddCheckCSRF = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
};

exports.mddCSRF = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}