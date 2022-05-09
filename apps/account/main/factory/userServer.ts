import { grpc, userPackage } from 'grpc/configUserPackage'
import { UserRoutes } from '../routes/user.routes';

export function getUserServer() {
  const server = new grpc.Server()
  server.addService(userPackage.User.service, new UserRoutes())
  return server;
}