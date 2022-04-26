import { UserDTO } from '../../domain/dto/user-dto'
import { InvalidParams } from '../../domain/errors'
import { User } from '../../domain/models/user'
import { UserRepository } from '../../domain/repositories/user-repository'
import { LocalCreateUser } from "./local-create-user"

class UserRepositorySpy implements UserRepository {
  async create(userDTO: UserDTO): Promise<User> {
    return {
      id: 'any_id',
      ...userDTO,
    }
  }
}

const makeSut = (): LocalCreateUser => {
  const userRepositorySpy = new UserRepositorySpy()
  return new LocalCreateUser(userRepositorySpy)
}

describe('LocalCreateUser', () => {
  test('should throws InvalidParams if no provider no ony params', async () => {
    const sut = makeSut()

    await expect(sut.create).rejects.toThrowError(new InvalidParams())
  })

  test('should throws InvalidParams if provider UserDTO invalid', async () => {
    const sut = makeSut()
    const userDTO: UserDTO = {
      name: null,
      avatar_url: null
    }

    await expect(() => sut.create(userDTO)).rejects.toThrowError(new InvalidParams())
  })

  test('should return User when proveider UserDTO correctly', async () => {
    const sut = makeSut()
    const userDTO: UserDTO = {
      name: "any_name",
      avatar_url: "any_url"
    }
    const user = await sut.create(userDTO)

    expect(user.id).toBeTruthy()
  })
})