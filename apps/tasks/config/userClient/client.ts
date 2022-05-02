import { HOST, grpc, userPackage } from 'grpc/configUserPackage'

export const client = new userPackage.User(
  HOST,
  grpc.credentials.createInsecure()
)
