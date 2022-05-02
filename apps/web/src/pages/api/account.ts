// import type { NextApiRequest, NextApiResponse } from 'next'
// import { api } from '../../lib/api'

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log('in account', req.method)

//   if (req.method === 'POST') {
//     const { name, avatarUrl } = req.body
  
//     const response = await api.post('/users', JSON.stringify(
//       {
//         name,
//         avatarUrl
//       }
//     ))
  
//     console.log('foi na api', response.status)
  
//     res.status(response.status).json(response.data)

//   } else {
//     res.status(200).json({ msg: 'Hello'})
//   }
// }