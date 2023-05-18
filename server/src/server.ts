import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true, // todas as urls de frontend poderam acessar no backend
  // origin: ['http://localhost:3000', 'http://rocketseat.com.br/'],
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
