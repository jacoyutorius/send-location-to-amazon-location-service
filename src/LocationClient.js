import { LocationClient, BatchEvaluateGeofencesCommand } from "@aws-sdk/client-location"

async function SendLocation(deviceId, latitude, longitude) {
  // TODO: ここの認証処理はなんとかする
  const client = new LocationClient({
    credentials: {
      accessKeyId: '',
      secretAccessKey: '',
    },
    region: 'ap-northeast-1'
  })

  const input = {
    CollectionName: 'MyGeofenceCollection',
    DevicePositionUpdates: [
      {
        DeviceId: deviceId,
        Position: [longitude, latitude],
        // Position: [137.7176264,34.708227], exit
        SampleTime: new Date()
      }
    ]
  }

  const command = new BatchEvaluateGeofencesCommand(input);
  const response = await client.send(command);
  
  console.log(input, response)
  return response
}

export { SendLocation }