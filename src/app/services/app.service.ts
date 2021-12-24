import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LineOfHistory } from '../model/line-of-history';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public history: LineOfHistory[] = [];
  constructor(private _http: HttpClient
  ) { }
  loadData() {
    return this._http.get(
      'http://api.exchangeratesapi.io/v1/latest?access_key=050beeaad0ad5cda72460c6758d5a11e&amp;format=1'
    );
  }

  addToHistory(line: LineOfHistory): void {
    this.history.push(line);
  }

  getHisory():LineOfHistory[]{
    return this.history;
  }
}
