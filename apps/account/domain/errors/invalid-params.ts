export class InvalidParams extends Error {
  constructor(){
    super('Invalid Params')
    this.name = "InvalidParams"
  }
}