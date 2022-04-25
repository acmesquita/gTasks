import { LocalCreateUser } from "./local-create-user"

describe('LocalCreateUser', () => {
  test('should thrwos if no provider no ony params', () => {
    const sut = new LocalCreateUser()

    expect(sut.create).toThrowError()
  })
})