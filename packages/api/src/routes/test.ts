import { FastifyInstance } from 'fastify';

export default (fastify: FastifyInstance, opts, done) => {
  fastify.get('/test', (req, reply) => {
    reply.send('test');
  });

  done();
};
