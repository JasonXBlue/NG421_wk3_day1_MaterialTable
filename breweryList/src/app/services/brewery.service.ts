import { Injectable } from '@angular/core';
import { IBrewery } from '../interfaces/ibrewery';
import { BREWERIES } from '../data/breweries-data';

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  breweryList: IBrewery[] = [];

  constructor() {
    this.breweryList = BREWERIES;
  }

  getBreweries(): IBrewery[] {
    return this.breweryList;
  }
}
