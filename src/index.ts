import express from 'express'
// import bodyParser from 'body-parser'
import swagger, { SwaggerOptions } from 'swagger-ui-express'
import mongoose from 'mongoose'

import { config } from './config'
import { todosRouter } from './routes/todos'
import { RegisterRoutes } from './routes/routes'

const app = express()
app.use('/todos', todosRouter)
RegisterRoutes(app)
try {
  const swaggerDocument = require('../swagger.json')
  app.use('/docs', swagger.serve, swagger.setup(swaggerDocument))
} catch (e) {
  console.error(e)
}

const run = async () => {
  try {
    await mongoose.connect(config.mongodbConnection, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })

    app.listen(config.port, () =>
      console.log(`Server is running on http://localhost:${config.port}`),
    )
  } catch (e) {
    console.error(e)
  }
}

run()
