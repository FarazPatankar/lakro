import Fastify from 'fastify';
import cors from 'fastify-cors';
import autoLoad from 'fastify-autoload';
import { join } from 'path';
import { PORT } from './lib/constants';

const fastify = Fastify();

fastify.register(autoLoad, {
  dir: join(__dirname, './routes'),
  options: { prefix: '/v1' },
});

fastify.register(cors, {
  credentials: true,
  origin: ['https://lakro.app'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
});

fastify.get('/', (req, reply) => {
  reply.send({
    success: true,
    info: {
      package: 'api',
      version: '1.0.0',
    },
  });
});

fastify.listen(PORT, (error, address) => {
  if (error) throw error;
  console.log(`Lakro API running on port ${address}`);
});
