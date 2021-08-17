import { ICurrent } from "./currentComp";
import { ILocation } from "./locationComp";

export interface Weather {
  location: ILocation;
  current: ICurrent;
/*   name: string; 
  country: string; 
  region: string; 
  temperature: string; 
  weather_icons: string;
  weather_descriptions: string;
  wind_speed: string;
  humidity: string; */
}