import { Component, OnInit } from '@angular/core';
import { exRatesResponse } from '../data.model';
import { ExratesApisService } from '../exrates-apis.service';

@Component({
  selector: 'app-exrates-list',
  templateUrl: './exrates-list.component.html',
  styleUrls: ['./exrates-list.component.css'],
})
export class ExratesListComponent implements OnInit {
  result: exRatesResponse = { rates: {} };
  objectKeys = Object.keys;
  listkey: string[] = [];

  constructor(private exRatesApi: ExratesApisService) {}

  ngOnInit() {
    // Exchange rates data to be displayed on table

    this.exRatesApi.getExRates().subscribe((data) => {
      this.result = data;
      console.log(this.result.rates, 'result', typeof data);

      this.listkey = this.objectKeys(this.result.rates);
      console.log(this.listkey, 'keys');
    });
  }
}
