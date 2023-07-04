import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: any[];
  selectedCountry: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCountriesData().subscribe(data => {
      this.countries = data;
    });
  }

  onCountrySelect(event: any) {
    this.selectedCountry = event.target.value;
  }
  
}
