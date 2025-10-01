export interface ItunesApp {
  id: number;
  name: string;
  bundleId: string;
  iconUrl: string;
  screenshots: string[];
  price: string;
  genre: string;
  rating: {
    average: number;
    count: number;
  };
  releaseDate: string;
  version: string;
  description: string;
  developer: {
    name: string;
    url: string;
  };
  trackUrl: string;
}
