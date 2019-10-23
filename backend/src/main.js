import express from 'express';
import cors from 'cors';
import config from '@/config';

import graphqlHTTP from 'express-graphql';


import {connectDb} from "@/extensions";
import {schema} from '@/schema/schema';

const app = express();

// allow cross-origin requests
app.use(cors());




app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

connectDb().then(async () => {
  app.listen(config.app.port, () =>
    console.log(`Now app listening on port ${config.app.port}!`),
  );
});

//let server = app.listen(config.app.port, () =>
//  console.log(`Now app listening on port ${config.app.port}!`),
//);
//const wss = new SocketServer({ server });
