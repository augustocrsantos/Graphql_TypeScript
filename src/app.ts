import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { graphql } from 'graphql';
import SchemaDefinica from './graphql/schema';


class App{

public express: express.Application;

    constructor(){
        this.express = express();
        this.meiodoCaminho();
    
    }

    private meiodoCaminho(): void{
this.express.use('/graphql',graphqlHTTP({
    schema: SchemaDefinica,
    graphiql: true
    
}));

}
      
    }

export default new App().express;