fetch('https://open.er-api.com/v6/latest/USD')
.then((res) => {
  
  console.log('## response: ')
  console.log(res)
  console.log(res.status)
  return res.json()
})
.then(data => {
  console.log(data)
})

// console.log(fetch('https://open.er-api.com/v6/latest/USD'))