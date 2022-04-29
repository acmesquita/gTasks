import { HOST, grpc, randomPackage } from './configPackage'

const client = new randomPackage.Random(
  HOST,
  grpc.credentials.createInsecure()
)

const deadline = new Date()
// add 5 seconds
deadline.setSeconds(deadline.getSeconds() + 5)

client.waitForReady(deadline, (error) => {
  if (error) {
    console.error(error)
    return
  }

  onClientRead()
})

function onClientRead() {
  // client.PingPong({ message: 'ping'}, (error, resolve) => {
  //   if (error) {
  //     console.error(error)
  //     return
  //   }

  //   console.log(resolve)
  // })

  const stream = client.RandomNumbers({ maxVal: 43 })
  stream.on('data', (chunk) => {
    console.log(chunk)
  })
  stream.on('end', () => {
    console.log('end =D')
  })
}

