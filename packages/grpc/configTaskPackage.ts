import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoder from '@grpc/proto-loader'
import { TaskHandlers } from './proto/taskPackage/Task'
import { ProtoGrpcType } from './proto/task'

const HOST = '0.0.0.0:8083'
const PROTO_FILE = path.resolve(__dirname, 'proto', 'task.proto')

const packegeDef = protoLoder.loadSync(PROTO_FILE)
const grpcObj = grpc.loadPackageDefinition(packegeDef) as unknown as ProtoGrpcType
const taskPackage = grpcObj.taskPackage

export {
  grpc,
  HOST,
  taskPackage,
  TaskHandlers
}