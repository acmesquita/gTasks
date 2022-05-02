import { HOST, grpc, taskPackage } from 'grpc/configTaskPackage'

export const client = new taskPackage.Task(
  HOST,
  grpc.credentials.createInsecure()
)
