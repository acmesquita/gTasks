import { Request, Response } from "express";
import { CreateNewUser } from "../service/create-new-user";
import { present } from "../validations/present";

export class UserController {
  constructor(){
  }
  
  async create(req:Request, res: Response) {
    const createNewUserService = new CreateNewUser()

    const { name, avatarUrl } = req.body

    if (!validateParams(name, avatarUrl)) {
      return res.status(404).json({
        error: {
          msg: 'Bad Request',
          details: 'Invalid params, send name and avatar_url valid'
        }
      })
    }

    const user = await createNewUserService.create({
      name,
      avatarUrl
    })

    return res.json({
      user: {
        ...user
      }
    })
    
    function validateParams(name: any, avatar_url: any) {
      return present(name) || present(avatar_url)
    }
  }

}