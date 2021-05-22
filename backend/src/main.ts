import server from "src/data/infrastructure/config/server"

async function bootstrap() {
  await server.createServer();
}

bootstrap();
