import { Flat } from "./flat-rent-sdk";
import { HomyPlace } from "./HomyProvider";
import { Place } from "./Place";

export interface Provider {
  convertResponseToPlace(response: HomyPlace | Flat): Place;
  getById(id: string): Promise<Place>;
}
