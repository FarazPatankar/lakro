import { FastifyInstance, FastifyReply } from 'fastify';
import { authenticateUserCookieSession } from '../../lib/auth/authenticate';

// TODO: finish this route
export default (fastify: FastifyInstance, opts, done) => {
  fastify.get(
    '/delete-account',
    { preHandler: [authenticateUserCookieSession] },
    async (req: any, reply: FastifyReply) => {}
  );
};
