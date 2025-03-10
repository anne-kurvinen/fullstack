const dotenv = require('dotenv'),
    express = require('express'),
   { Client } = require('pg')

  const app = express()

  dotenv.config()

  const client = new Client({
    connectionString: process.env.PGURI
  })
  
  client.connect()

/*   app.get('/', async (_request, response) => {
    const { rows } = await client.query(
    'SELECT * FROM cities WHERE name = $1',
    ['Stockholm']
    )
    response.send(rows)
}) */

app.get('/', async (_request, response) => {
    const { rows } = await client.query(
    'SELECT * FROM cities WHERE population > $1',
    [4000]
    )
    response.send(rows)
})

 
  const port = process.env.PORT || 3000

  app.listen(port, () => {
    console.log(`Redo på http://localhost:${port}`);
  })

