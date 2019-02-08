const User = require('../models/user')
require('dotenv').config()
const axios = require('axios')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("55756582365-n6paiep178nvng2rv515hvrk13sehms7.apps.googleusercontent.com");
const jwt = require('jsonwebtoken')


class UserController {
    static googleLogin(req, res) {
        let logged = ''
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: "55756582365-n6paiep178nvng2rv515hvrk13sehms7.apps.googleusercontent.com"
        })
            .then(data => {
                const payload = data.getPayload()
                logged = payload
                return User.findOne({ email: payload.email })
                    .then(data => {
                        if (data) {
                            res.status(200).json({
                                message: 'data verify',
                                data: jwt.sign({
                                    email: payload.email
                                }, process.env.JWTTOKEN)

                            })
                        } else {
                            return User.create(
                                {
                                    first_name: logged.given_name,
                                    last_name: logged.family_name,
                                    email: logged.email
                                }
                            )
                                .then(data => {
                                    res.status(200).json({
                                        message: 'data verify',
                                        data: jwt.sign({
                                            email: payload.email
                                        }, process.env.JWTTOKEN)
                                    })
                                })
                        }
                    })


            })
            .catch(err => {
                res.status(500).json({ message: 'internal server serror' })
            })
    }

    static tokenVerification(req, res) {
        
        
        try {
            console.log(req.body.token);
            
            let decoded = jwt.verify(req.body.token, process.env.JWTTOKEN)
            User
                .findOne({ email: decoded.email })
                .then(user => {
                    if (!user) {
                        res.status(404).json({ message: 'user not found' })
                    } else {
                        res.status(200).json({message : 'token benar', action : true})
                    }
                })
                .catch(err => {
                    res.status(500).json({ message: 'internal server error', error: err })
                })

        } catch (err) {
            console.log(err)
            res.status(402).json({ message: "you're not authorize for this session" })
        }
    }

}

module.exports = UserController