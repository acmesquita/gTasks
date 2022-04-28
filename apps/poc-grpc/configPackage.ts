import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoder from '@grpc/proto-loader'
import { RandomHandlers } from './proto/randomPackage/Random'
import { ProtoGrpcType } from './proto/random'

const HOST = '0.0.0.0:8082'
const PROTO_FILE = path.resolve(__dirname, 'proto', 'random.proto')

const packegeDef = protoLoder.loadSync(PROTO_FILE)
const grpcObj = grpc.loadPackageDefinition(packegeDef) as unknown as ProtoGrpcType
const randomPackage = grpcObj.randomPackage

export {
  grpc,
  HOST,
  randomPackage,
  RandomHandlers
}