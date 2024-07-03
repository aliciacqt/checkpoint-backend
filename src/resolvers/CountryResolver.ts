import { Resolver, Query } from "type-graphql";
import Country from "../entities/Country";

@Resolver(Country)
export default class CountriesResolver {
  @Query(() => [Country])
  async countries() {
    return await Country.find();
  }
}
