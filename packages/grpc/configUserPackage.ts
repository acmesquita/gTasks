import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoder from '@grpc/proto-loader'
import { UserHandlers } from './proto/userPackage/User'
import { ProtoGrpcType } from './proto/user'

const HOST = '0.0.0.0:8082'
const PROTO_FILE = path.resolve(__dirname, 'proto', 'user.proto')

const packegeDef = protoLoder.loadSync(PROTO_FILE)
const grpcObj = grpc.loadPackageDefinition(packegeDef) as unknown as ProtoGrpcType
const userPackage = grpcObj.userPackage

export {
  grpc,
  HOST,
  userPackage,
  UserHandlers
}