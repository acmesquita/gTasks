import { Request, Response } from "express";
import { CreateNewUser } from "../service/create-new-user";
import { present } from "../validations/present";

export class UserController {
  constructor(){
  }
  
  create(req:Request, res: Response) {
    const createNewUserService = new CreateNewUser()

    const { name, avatar_url } = req.body

    if (!validateParams(name, avatar_url)) {
      return res.status(404).json({
        error: {
          msg: 'Bad Request',
          details: 'Invalid params, send name and avatar_url valid'
        }
      })
    }

    const user = createNewUserService.create({
      name,
      avatar_url
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