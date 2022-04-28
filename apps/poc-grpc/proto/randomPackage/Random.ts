// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _randomPackage_PingRequest, PingRequest__Output as _randomPackage_PingRequest__Output } from '../randomPackage/PingRequest';
import type { PongReponse as _randomPackage_PongReponse, PongReponse__Output as _randomPackage_PongReponse__Output } from '../randomPackage/PongReponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongReponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongReponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongReponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PongReponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongReponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongReponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongReponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PongReponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_randomPackage_PingRequest__Output, _randomPackage_PongReponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_randomPackage_PingRequest, _randomPackage_PongReponse, _randomPackage_PingRequest__Output, _randomPackage_PongReponse__Output>
}
