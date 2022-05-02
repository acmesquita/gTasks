/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import { api } from '../../lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, avatarUrl, content } = req.body
  
    const response = await api.post('/tasks', JSON.stringify(
      {
        name,
        avatarUrl,
        content,
      }
    ))
  
    res.status(response.status).json(response.data)

  } else {
    res.status(200).json({ msg: 'Hello'})
  }
}