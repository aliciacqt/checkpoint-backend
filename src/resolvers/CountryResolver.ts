import { Resolver, Query } from "type-graphql";
import Country from "../entities/Country";

@Resolver(Country)
class CountriesResolver {
  @Query(() => [Country])
  async ads(
  ) {
    return Country.find();
  }
}

export default CountriesResolver;