import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = fastify();

app.register(fastifyStatic, {
  root: path.join(__dirname, '../dist'),
  prefix: '/dist/',
});

app.get('/', async (request, reply) => {
  try {
    const source = fs.readFileSync(path.join(__dirname, './pages/index.hbs'), 'utf8');
    const template = Handlebars.compile(source);
    const result = template({ title: 'CubeDood: ReCubed' });
    reply.type('text/html').send(result);
  } catch (error) {
    reply.status(500).send('Internal Server Error');
  }
});

const start = async () => {
  try {
    await app.listen({ port: 8080 });
    console.log('Server listening on http://localhost:8080');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
