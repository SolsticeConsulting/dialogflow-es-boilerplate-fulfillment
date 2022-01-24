import express from 'express';
import { initializeApp } from './loaders';

async function startServer() {
  console.log('Starting the Server')
  const app: express.Application = express();

  await initializeApp(app);

  app.listen(3000, () => {
      console.log(`
          ###############################################
          🛡️  Server listening on port: 3000 🛡️
          ################################################
      `)
  })
}
startServer();