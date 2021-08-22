const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  res.write('<h1>hello from nodejs</h1>')
  res.write('<h2>hello from nodejs</h2>')
  res.write('<h3>hello from nodejs</h3>')
  res.end('<div>This end!!!</div>')
})

server.listen(3000, () => {
  console.log('Server is running...')
})