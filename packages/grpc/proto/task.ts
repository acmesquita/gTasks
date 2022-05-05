import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TaskClient as _taskPackage_TaskClient, TaskDefinition as _taskPackage_TaskDefinition } from './taskPackage/Task';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  taskPackage: {
    Empty: MessageTypeDefinition
    Task: SubtypeConstructor<typeof grpc.Client, _taskPackage_TaskClient> & { service: _taskPackage_TaskDefinition }
    TaskIdResquest: MessageTypeDefinition
    TaskRequest: MessageTypeDefinition
    TaskResponse: MessageTypeDefinition
    TasksResponse: MessageTypeDefinition
  }
}

