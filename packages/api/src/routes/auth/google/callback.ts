import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import dayjs from 'dayjs';

export default (fastify, opts, done) => {
  fastify.get('/callback', async (req: FastifyRequest, reply: FastifyReply) => {
    const token =
      await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);

    reply
      .setCookie('lakro-token', token.access_token, {
        httpOnly: true,
        sameSite: true,
        path: '/',
        expires: dayjs().add(14, 'days').toDate(),
      })
      .redirect(process.env.CLIENT_URL ?? 'http://localhost:3000');
  });

  done();
};
