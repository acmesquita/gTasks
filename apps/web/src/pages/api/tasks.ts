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
    res.status(200).json({ tasks: [
      {
        id: '1234',
        contant: "Marcar Academia",
        avatarUrl: "https://github.com/acmesquita.png",
        createdAt: "02/05/2022",
        done: false,
        name: "Catharina Mesquita"
      },
      {
        id: '3456',
        contant: "Marcar pra sair para o cinema",
        avatarUrl: "https://github.com/acmesquita.png",
        createdAt: "02/05/2022",
        done: false,
        name: "Catharina Mesquita"
      }
    ]})
  }
}