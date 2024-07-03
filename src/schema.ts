import { buildSchema } from "type-graphql";
import CountriesResolver from "./resolvers/CountryResolver";

export default buildSchema({
  resolvers: [CountriesResolver],
});