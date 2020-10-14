exports.mddHome = (req, res, next) => {
    res.locals.readJSON = 'JSON Values';
    next();
}