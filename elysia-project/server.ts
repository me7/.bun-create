import { Elysia } from "elysia";
import {cors} from '@elysiajs/cors'
import {staticPlugin} from '@elysiajs/static'

const app = new Elysia()
.use(cors())
.use(staticPlugin())
.get('/', () => 'Hello Elysia')
.get('/ping', () => new Date().toISOString())
.listen(4000)