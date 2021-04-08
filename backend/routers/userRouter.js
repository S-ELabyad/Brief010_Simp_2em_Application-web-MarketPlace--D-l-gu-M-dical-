import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import { genrateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed',
// expressAsyncHandler is a package
expressAsyncHandler( async(req,res) => {
    // remove all user
    // await User.remove({});
    const createUsers = await User.insertMany(data.users);
    res.send({createUsers});
}));

userRouter.post('/signin' , expressAsyncHandler(async(req , res) => {
    const user = await User.findOne({email: req.body.email});
    if(user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email : user.emai,
                isAdmin : user.isAdmin,
                token: genrateToken(user),

            });
            return;
        }
    }

        res.status(401).send({message: 'Invalid emai or password'});
    
})
);

userRouter.post('/register' ,expressAsyncHandler( async(req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email, 
        password: bcrypt.hashSync(req.body.password, 8)
    });
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email : createdUser.emai,
        isAdmin : createdUser.isAdmin,
        token: genrateToken(createdUser),
    });
}));

export default userRouter;