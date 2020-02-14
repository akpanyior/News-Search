navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
})

navigator.geolocation.watchPosition(position =>{
    console.log(position)
})

//stop watching after 10 seconds
setTimeout(()=>{
    navigator.geolocation.clearWatch(id)
},10 * 1000)

navigator.geolocation.getCurrentPosition(position =>{
    console.log(position)
}, error => {
    console.error()
}, {
    timeout: 1000,
    maximumAge: 10000,
    enableHighAccuracy: true
})

