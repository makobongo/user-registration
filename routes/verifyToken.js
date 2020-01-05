var jwt = require('jsonwebtoken');

module.exports = ( req, res, next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).json({
            msg: 'Access denied'
        })
    } else {
        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
            next();
        } catch (error) {
            res.status(400).json({
                msg: 'Invalid token!'
            })
        }
    }
}