const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    let { pathname, query } = parsedUrl
    pathname = decodeURIComponent(pathname)
    let sp = pathname.split('.')
    let ext = sp[sp.length-1]
    if (pathname.startsWith('/_next')) {
      handle(req, res, parsedUrl)
      // app.render(req, res, '/a', query)
    }else if (['json', 'png', 'ico'].indexOf(ext) >= 0){
      ext
    }else if(pathname.startsWith('/git')){
      console.log('pathname2', decodeURIComponent(pathname))
      app.render(req, res, pathname, query)
    }else{
      console.log(req.headers['user-agent'])
      console.log('pathname', pathname)
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})