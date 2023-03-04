export class InvalidParamsError extends Error {
  constructor(){
    super('Invalid Params')
    this.name = 'InvalidParamsError'
  }
}