import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { authenticateUserCookieSession } from '../../../lib/auth/authenticate';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default (fastify: FastifyInstance, opts, done) => {
  fastify.get(
    '/me',
    { preHandler: [authenticateUserCookieSession] },
    async (req: any, reply: FastifyReply) => {
      const authUser = await prisma.user.findUnique({
        where: { email: req.email },
      });

      if (!authUser) {
        return reply.status(404).send({
          success: false,
          error: 'User not found',
        });
      }

      reply.status(200).send({
        success: true,
        user: authUser,
      });
    }
  );

  done();
};
