// genrate token 
//  jwt: json web token

import jwt from 'jsonwebtoken';

 export const genrateToken = (user) => {
     return jwt.sign(
         {
         _id:user._id ,
         name: user.name,
         email: user.email,
         isAdmin : user.isAdmin,
         }, 
    //  jsonwebtoken secret to encrupt data and generat token 
        process.env.JWT_SECRET || 'somethingsecret',
        {
              expiresIn: '30d',
        } 

        );
 };

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization) {
        const token = authorization.slice(7, authorization.length); //Bearer xxxxtoken
        // dcrypt token 
        jwt.verify(token,  process.env.JWT_SECRET || 'somethingsecret' , (err, decode) => {
            if(err) {
                res.status(401).send({message : 'Invaid Token'});
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.status(401).send({message : 'No Token'});
    }
};