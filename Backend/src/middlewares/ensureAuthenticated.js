
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


module.exports = (request, response, next) => {
        
    const authHeader = request.headers.token;

        if (!authHeader) {
            return response.status(401).json({ error: 'Token is missing!'})
        }

        const [, token] = authHeader.split(' ');

        console.log(authHeader);

        try {
            const payload = jwt.verify(token, authConfig.secret);

            console.log(payload);
            response.userId = payload.userId;

            return next();

        } catch (error) {
            return response.status(401).json({ error: 'Invalid Token.'})
        }
};
