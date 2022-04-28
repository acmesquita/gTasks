import { HOST, grpc, randomPackage, RandomHandlers } from './configPackage'

function main() {
  const server = getServer()
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
}

function getServer() {
  const server = new grpc.Server()
  server.addService(randomPackage.Random.service, {
    PingPong: (req, callback) => {
      if (req.request.message === 'ping') {
        console.log(`Some ony said ping`)
        callback(null, {
          message: 'pong'
        })
      } else {
        callback(new Error('não queria dizer ping?'), null)
      }
    }
  } as RandomHandlers)

  return server
}

main()