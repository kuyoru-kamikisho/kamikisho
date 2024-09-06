const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer({})

const server = http.createServer((req, res) => {
  console.log(`收到请求: ${req.method} ${req.url}`);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // let body = ''
  // req.on('data', chunk => {
  //   body += chunk.toString();
  // })

  // req.on('end', () => {
  //   console.log(`请求负载：${body}`)
  // })

  // req.on('error', (err) => {
  //   console.error('请求错误:', err)
  //   res.writeHead(400, {'Content-Type': 'text/plain'})
  //   res.end('Bad Request')
  // })

  proxy.web(req, res, {target: 'http://192.128.5.152', changeOrigin: true}, (error) => {
    console.error('代理出错:', error)
    res.writeHead(500, {'Content-Type': 'text/plain'})
    res.end('代理服务器出错')
  })
})

proxy.on('proxyRes', (proxyRes, req, res) => {
  console.log(`${req.url} 已成功转发`);
})

const PORT = 7077
server.listen(PORT, () => {
  console.log(`代理服务器正在监听 http://localhost:${PORT}`)
})
