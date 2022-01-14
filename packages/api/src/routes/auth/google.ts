import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { OAuth2Namespace } from 'fastify-oauth2';

export default (fastify: FastifyInstance, opts, done) => {
  fastify.get('/callback', async (req: FastifyRequest, reply: FastifyReply) => {
    const token =
      await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);

    reply
      .status(200)
      .send({ success: true, token })
      .redirect(process.env.CLIENT_URL ?? 'http://localhost:3000');
  });

  done();
};
