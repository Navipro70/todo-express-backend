import mongoose, { Document, model, Model, Schema } from 'mongoose'

export interface TodoDocument extends Document {
  id: string
  title: string
  done: boolean
  userId: string
}

const TodoSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
  userId: {
    type: String,
    required: true,
  },
})

const Todo: Model<TodoDocument> = model('Todo', TodoSchema)
