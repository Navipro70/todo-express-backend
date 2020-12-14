import * as dotEnv from 'dotenv'
import { object, number, string } from 'yup'

dotEnv.config()

const schema = object({
  PORT: number().required(),
  MONGODB_CONNECTION: string().required(),
})

const schemaValid = schema.validateSync(process.env)

if (!schemaValid) {
  process.exit(1)
}

export const config = {
  port: schemaValid.PORT,
  mongodbConnection: schemaValid.MONGODB_CONNECTION,
}
