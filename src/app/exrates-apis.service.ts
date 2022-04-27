import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { exRatesResponse } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class ExratesApisService {
  private exRatesApi: string =
    'https://api.coingecko.com/api/v3/exchange_rates';

  constructor(private http: HttpClient) {}
  /**
   * To get the Exchange rates list
   * @returns response of type exRatesResponse
   */
  getExRates(): Observable<exRatesResponse> {
    return this.http.get<exRatesResponse>(this.exRatesApi);
  }
}
