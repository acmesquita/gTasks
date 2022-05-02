import { HOST, grpc } from 'grpc/configTaskPackage'
import { getTaskServer } from './taskServer'

const server = getTaskServer();

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