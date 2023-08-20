import {Response, Request} from 'express';
import { authentication, random } from 'helpers';
import { createUser, getUserByEmail } from './userController';

export const register = async(req: Request, res: Response) => {
    try {
        const {email, password, username} = req.body;

        if(!email || !password || !username){
            return res.sendStatus(400)
        }

        const existingUser = await getUserByEmail(email);
        if(existingUser) {
            return res.sendStatus(400)
        }
        const salt = random();
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password)
            }
        })
        return res.sendStatus(200).json(user)
    } catch (err) {
        return res.sendStatus(400)
    }
}