import { HOST, grpc } from 'grpc/configUserPackage'
import { getUserServer } from './factory/userServer'

const server = getUserServer();

server.bindAsync(
  HOST,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Your server as started on port http://${HOST}`)
    server.start()
  }
)