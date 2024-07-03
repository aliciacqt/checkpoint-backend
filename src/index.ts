import sqlite from "sqlite3";
import express, { Request, Response } from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import CountriesResolver from "./resolvers/CountryResolver";

buildSchema({ resolvers: [CountriesResolver] }).then((schema) => {
  const server = new ApolloServer({ schema });
  startStandaloneServer(server, {
    listen: { port: 4001 },
  }).then(({ url }) => {
    console.log(`Server ready on ${url}`);
  });
});

const db = new sqlite.Database("./checkpoint-backend-db.sqlite");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/",async (req: Request, res: Response) => {
  try {
    const countries = db.all(`SELECT * FROM countries`);
    res.send(countries)
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})