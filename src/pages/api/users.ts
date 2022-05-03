/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'André' },
        { id: 2, name: 'André Luis' },
        { id: 3, name: 'André Luis Andrade' },
    ]
    return response.json(users)
}