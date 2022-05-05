// Original file: proto/task.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _taskPackage_Empty, Empty__Output as _taskPackage_Empty__Output } from '../taskPackage/Empty';
import type { TaskIdResquest as _taskPackage_TaskIdResquest, TaskIdResquest__Output as _taskPackage_TaskIdResquest__Output } from '../taskPackage/TaskIdResquest';
import type { TaskRequest as _taskPackage_TaskRequest, TaskRequest__Output as _taskPackage_TaskRequest__Output } from '../taskPackage/TaskRequest';
import type { TaskResponse as _taskPackage_TaskResponse, TaskResponse__Output as _taskPackage_TaskResponse__Output } from '../taskPackage/TaskResponse';
import type { TasksResponse as _taskPackage_TasksResponse, TasksResponse__Output as _taskPackage_TasksResponse__Output } from '../taskPackage/TasksResponse';

export interface TaskClient extends grpc.Client {
  Create(argument: _taskPackage_TaskRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  Create(argument: _taskPackage_TaskRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  create(argument: _taskPackage_TaskRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  create(argument: _taskPackage_TaskRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  
  List(argument: _taskPackage_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TasksResponse__Output>;
  List(argument: _taskPackage_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TasksResponse__Output>;
  list(argument: _taskPackage_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TasksResponse__Output>;
  list(argument: _taskPackage_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TasksResponse__Output>;
  
  MarkDone(argument: _taskPackage_TaskIdResquest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  MarkDone(argument: _taskPackage_TaskIdResquest, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  markDone(argument: _taskPackage_TaskIdResquest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  markDone(argument: _taskPackage_TaskIdResquest, options?: grpc.CallOptions): grpc.ClientReadableStream<_taskPackage_TaskResponse__Output>;
  
}

export interface TaskHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleServerStreamingCall<_taskPackage_TaskRequest__Output, _taskPackage_TaskResponse>;
  
  List: grpc.handleServerStreamingCall<_taskPackage_Empty__Output, _taskPackage_TasksResponse>;
  
  MarkDone: grpc.handleServerStreamingCall<_taskPackage_TaskIdResquest__Output, _taskPackage_TaskResponse>;
  
}

export interface TaskDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_taskPackage_TaskRequest, _taskPackage_TaskResponse, _taskPackage_TaskRequest__Output, _taskPackage_TaskResponse__Output>
  List: MethodDefinition<_taskPackage_Empty, _taskPackage_TasksResponse, _taskPackage_Empty__Output, _taskPackage_TasksResponse__Output>
  MarkDone: MethodDefinition<_taskPackage_TaskIdResquest, _taskPackage_TaskResponse, _taskPackage_TaskIdResquest__Output, _taskPackage_TaskResponse__Output>
}
