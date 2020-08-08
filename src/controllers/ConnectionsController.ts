import { Request, Response } from 'express'
import db from '../database/connection';

export default class ConnectionsController {

    async create(req: Request, res: Response) {

        const { user_id } = req.body;

        console.log(user_id);

        await db('connections').insert({
            user_id,
        });

        return res.status(201).send();
    }
}