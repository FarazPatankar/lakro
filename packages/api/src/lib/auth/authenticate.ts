import { FastifyReply, FastifyRequest } from 'fastify';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authenticateUserCookieSession = async (
  req: any,
  reply: FastifyReply
) => {
  try {
    const token = req.cookies['lakro-token'] as string;

    if (!token) {
      return reply
        .status(401)
        .send({ success: false, error: 'Cookie not found.' });
    }
    const { data } = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
        },
      });
    }

    req.email = data.email;
    req.googleToken = token;

    return data;
  } catch (err) {
    req.email = undefined;
    req.googleToken = undefined;

    return reply.status(401).send({
      success: false,
      error: 'Invalid token',
    });
  }
};
