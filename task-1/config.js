module.exports = {
  db: {
    host: '127.0.0.1',
    port: 5432,
    database: 'example',
    user: 'marcus',
    password: 'marcus',
  },
  logger: {
    path: './log',
    colors: {
      info: '\x1b[1;37m',
      debug: '\x1b[1;33m',
      error: '\x1b[0;31m',
      system: '\x1b[1;34m',
      access: '\x1b[1;38m',
    },
    datetimeLength: 19
  },
  api: {
    path: './api',
    port: 8001
  },
  static: {
    path: './static',
    port: 8000
  },
  crypto: {
    size: 16,
    keylen: 64,
    encoding: 'base64'
  },
  socket: {
    url: 'ws://127.0.0.1:8001/'
  },
  transport: 'http'
}
