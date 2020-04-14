import { IBrewery } from '../interfaces/ibrewery';

const BREWERIES: IBrewery[] = [
  {
    name: 'Samuel Adams Brewery',
    foundedDate: new Date('5/5/1984'),
    cityState: 'Boston, MA',
    flagshipBeer: 'Boston Lager',
  },
  {
    name: 'Dogfish Head Brewery',
    foundedDate: new Date('6/1/1995'),
    cityState: 'Milton, DE',
    flagshipBeer: '60 Minute IPA',
  },
  {
    name: 'Yuengling',
    foundedDate: new Date('1/1/1829'),
    cityState: 'Pottsville, PA',
    flagshipBeer: 'Traditional Lager',
  },
  {
    name: 'Stone Brewing',
    foundedDate: new Date('1/1/1996'),
    cityState: 'Escondido, CA',
    flagshipBeer: 'Stone IPA',
  },
  {
    name: 'Anchor Brewing Company',
    foundedDate: new Date('1/1/1896'),
    cityState: 'San Francisco, CA',
    flagshipBeer: 'Anchor Steam',
  },
  {
    name: 'Boulevard Brewing Company',
    foundedDate: new Date('1/1/1989'),
    cityState: 'Kansas City, MO',
    flagshipBeer: 'Unfiltered Wheat',
  },
  {
    name: 'Spoetzl Brewery',
    foundedDate: new Date('1/1/1909'),
    cityState: 'Shiner, TX',
    flagshipBeer: 'Shiner Bock',
  },
  {
    name: 'Oskar Blues Brewery',
    foundedDate: new Date('1/1/1997'),
    cityState: 'Longmont, CO',
    flagshipBeer: 'Dales Pale Ale',
  },
  {
    name: 'Sierra Nevada Brewing Company',
    foundedDate: new Date('1/1/1980'),
    cityState: 'Chico, CA',
    flagshipBeer: 'Pale Ale',
  },
  {
    name: 'New Belgium Brewing Company',
    foundedDate: new Date('1/1/1991'),
    cityState: 'Fort Collins, CO',
    flagshipBeer: 'Fat Tire Amber Ale',
  },
];

export { IBrewery };
