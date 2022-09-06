async function currentLocation() {
  let response = null

  if(!navigator.geolocation) {
    console.error('Geolocation is not supported by your browser')
  }
  else {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    response = [latitude, longitude]
  }

  return response
}

export { currentLocation }