// Original file: proto/task.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { TaskRequest as _taskPackage_TaskRequest, TaskRequest__Output as _taskPackage_TaskRequest__Output } from '../taskPackage/TaskRequest';
import type { TaskResponse as _taskPackage_TaskResponse, TaskResponse__Output as _taskPackage_TaskResponse__Output } from '../taskPackage/TaskResponse';

export interface TaskClient extends grpc.Client {
  Create(argument: _taskPackage_TaskRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  Create(argument: _taskPackage_TaskRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  create(argument: _taskPackage_TaskRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  create(argument: _taskPackage_TaskRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  
}

export interface TaskHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleServerStreamingCall<_taskPackage_TaskRequest__Output, _taskPackage_TaskResponse>;
  
}

export interface TaskDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_taskPackage_TaskRequest, _taskPackage_TaskResponse, _taskPackage_TaskRequest__Output, _taskPackage_TaskResponse__Output>
}
