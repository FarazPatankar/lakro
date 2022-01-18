import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { authenticateUserCookieSession } from '../../lib/auth/authenticate';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// TODO: fix this later

export default (fastify: FastifyInstance, opts, done) => {
  fastify.delete(
    '/delete',
    { preHandler: [authenticateUserCookieSession] },
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: req.id },
        });

        if (!user) {
          return reply.status(404).send({
            success: false,
            error: 'User not found',
          });
        }

        await prisma.user.delete({ where: { id: req.id } });

        reply
          .setCookie('lakro-token', '', {
            httpOnly: true,
            sameSite: 'strict',
            path: '/',
            expires: new Date(),
          })
          .redirect(process.env.CLIENT_URL ?? 'http://localhost:3000');
      } catch (err) {
        reply.status(500).send({ success: false });
        console.log(err);
      }
    }
  );

  done();
};
