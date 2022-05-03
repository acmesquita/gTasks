// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { UserIdRequest as _userPackage_UserIdRequest, UserIdRequest__Output as _userPackage_UserIdRequest__Output } from '../userPackage/UserIdRequest';
import type { UserRequest as _userPackage_UserRequest, UserRequest__Output as _userPackage_UserRequest__Output } from '../userPackage/UserRequest';
import type { UserResponse as _userPackage_UserResponse, UserResponse__Output as _userPackage_UserResponse__Output } from '../userPackage/UserResponse';

export interface UserClient extends grpc.Client {
  Create(argument: _userPackage_UserRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_UserResponse__Output>;
  Create(argument: _userPackage_UserRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_UserResponse__Output>;
  create(argument: _userPackage_UserRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_UserResponse__Output>;
  create(argument: _userPackage_UserRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_UserResponse__Output>;
  
  Find(argument: _userPackage_UserIdRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_UserResponse__Output>;
  Find(argument: _userPackage_UserIdRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_UserResponse__Output>;
  find(argument: _userPackage_UserIdRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_UserResponse__Output>;
  find(argument: _userPackage_UserIdRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_UserResponse__Output>;
  
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleServerStreamingCall<_userPackage_UserRequest__Output, _userPackage_UserResponse>;
  
  Find: grpc.handleServerStreamingCall<_userPackage_UserIdRequest__Output, _userPackage_UserResponse>;
  
}

export interface UserDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_userPackage_UserRequest, _userPackage_UserResponse, _userPackage_UserRequest__Output, _userPackage_UserResponse__Output>
  Find: MethodDefinition<_userPackage_UserIdRequest, _userPackage_UserResponse, _userPackage_UserIdRequest__Output, _userPackage_UserResponse__Output>
}
