import * as express from 'express'
import { Controller, Get, Route, Post, Delete, Put, BodyProp } from 'tsoa'

@Route('/todos')
export class TodosController extends Controller {
  @Get()
  public async getAllTodos(): Promise<any> {
    return await Promise.resolve(setTimeout(() => '1231', 1000))
  }

  @Post()
  public async postTodo(@BodyProp() description: string): Promise<any> {
    return await Promise.resolve(setTimeout(() => '1231', 1000))
  }

  @Put('/{id}')
  public async updateTodo(id: string, @BodyProp() description: string): Promise<any> {
    return await Promise.resolve(setTimeout(() => '1231', 1000))
  }

  @Delete('/{id}')
  public async deleteTodo(id: string): Promise<any> {
    return await Promise.resolve(setTimeout(() => '1231', 1000))
  }
}
