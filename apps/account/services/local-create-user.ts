import { InvalidParams } from '../domain/errors'
export class LocalCreateUser {
  create(params) {
    if (!params) {
      throw new InvalidParams()
    }
  }
}