import { InvalidParams } from '../domain/errors'
import { LocalCreateUser } from "./local-create-user"

describe('LocalCreateUser', () => {
  test('should throws InvalidParams if no provider no ony params', () => {
    const sut = new LocalCreateUser()

    expect(sut.create).toThrowError(new InvalidParams())
  })
})