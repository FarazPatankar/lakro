import { OAuth2Namespace } from 'fastify-oauth2';

declare module 'fastify' {
  interface FastifyInstance {
    googleOAuth2: OAuth2Namespace;
  }

  interface FastifyRequest {
    id: string | any;
    email: string;
    token: string | undefined;
  }
}
