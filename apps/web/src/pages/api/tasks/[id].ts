/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import { api } from '../../../lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    const { id } = req.query
  
    const response = await api.patch(`/tasks/${id}/mark`)
  
    res.status(response.status).json(response.data)

  } else if (req.method === 'DELETE') {
    const { id } = req.query
  
    const response = await api.delete(`/tasks/${id}`)
  
    res.status(response.status)
  }
}