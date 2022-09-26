// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}




const sources = {
  types: ["ws", "printer", "server"],
  areas: ["north", "center", "south"],
  scheldue: {
    main: { 
      1: 
    } 
  }
}


               

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  // time: 1: 10-13, 2: 14-16, 3: 16-18
  // area: 1: north, 2: center, 3: south
  // location: 
  
  res.status(200).json({ id: 1,type: 'ticket', location: [55,77], time: 1, area: 1, status: ["new"], timeline: {}  })
}
