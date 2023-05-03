import fastify, { FastifyInstance } from 'fastify';

const app: FastifyInstance = fastify({ logger: true });

app.get('/', (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
