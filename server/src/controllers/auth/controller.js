require('dotenv').config()
const jwt = require('jsonwebtoken');
const UserSchema = require('../../database/models/UserModel').User
const bcrypt = require('bcrypt-nodejs');

class AuthController {

    async createUser(req, res) {
        var {username, password, role } = req.body;
        console.log(req.body, 'user details')
        try{
            var salt = bcrypt.genSaltSync(10);
            let hashPassword = bcrypt.hashSync(password, salt);
            let newUser = new UserSchema(
                {
                    username: username,
                    userRole: role,
                    password: hashPassword
                })
            let user = await newUser.save();
            return res.send({
                message: user
            })
        } catch (err){
            if(err.code == 11000){
                return res.send({
                    message: "username is already exist",
                    error: err
                })
            } else {
                return res.send({
                    error: err
                })
            } 
        }
    }

    async authenticate(req, res) {
        let isAuthenticated = null;
        var {username, password } = req.body;
        let user = await UserSchema.findOne({ username: username });
        if (!user || !user._doc) return res.status(401).json("Incorrect username! Please try again!");
        isAuthenticated = bcrypt.compareSync(password, user.password)
        if (isAuthenticated) return this.setAccessToken(req, user._doc, res)
        else return res.status(401).json("Incorrect password! Please try again!");
    }

    async setAccessToken(req, user, res) {
        // Generate an access token
        const accessToken = await jwt.sign({id: user._id, username: user.username, role: user.userRole}, process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '100h',
                algorithm: "HS256"
            })
        console.log(`Login token ${accessToken} and setting to session..`, user);
        user.accessToken = accessToken
        user.password = null;
        user.exp = new Date(Date.now() + 60 * 60 * 100000)
        req.session.user = user;
        res.cookie('token', accessToken, { httpOnly: true });
        return res.status(200).json(user);
      }

}

module.exports = new AuthController()
