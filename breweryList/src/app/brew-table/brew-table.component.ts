import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreweryService } from '../services/brewery.service';
import { MatSort } from '@angular/material/sort';
import { BREWERIES } from '../data/breweries-data';

@Component({
  selector: 'app-brew-table',
  templateUrl: './brew-table.component.html',
  styleUrls: ['./brew-table.component.css'],
})
export class BrewTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'foundedDate',
    'cityState',
    'flagshipBeer',
  ];
  dataSource = new MatTableDataSource(BREWERIES);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private breweryService: BreweryService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(
      this.breweryService.getBreweries()
    );
    this.dataSource.sort = this.sort;
  }
}
