import Fastify from 'fastify';
import cors from 'fastify-cors';
import autoLoad from 'fastify-autoload';
import OAuth2 from 'fastify-oauth2';
import { join } from 'path';
import { API_URL, PORT } from './lib/constants';

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

fastify.register(OAuth2 as any, {
  name: 'googleOAuth2',
  credentials: {
    auth: OAuth2.GOOGLE_CONFIGURATION,
    client: {
      id: process.env.GOOGLE_OAUTH_CLIENT_ID,
      secret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  callbackUri: `${API_URL}/auth/callback`,
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
