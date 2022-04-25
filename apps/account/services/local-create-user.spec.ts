class LocalCreateUser {
  create(params) {
    if (!params) {
      throw new Error()
    }
  }
}

describe('LocalCreateUser', () => {
  test('should thrwos if no provider no ony params', () => {
    const sut = new LocalCreateUser()

    expect(sut.create).toThrowError()
  })
})