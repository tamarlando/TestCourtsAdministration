import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LineOfHistory } from 'src/app/model/line-of-history';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  public data$: Observable<any>;
  public result: {
    key: string;
    value: any;
  }[];
  public form: FormGroup;
  public rates: any;
  public resultLine$$ = new BehaviorSubject<LineOfHistory>(null);

  constructor(private _service: AppService, private fb: FormBuilder
  ) {
    this.form = fb.group({
      source: [null],
      destination: [null],
      quantity: [0],
    });
  }

  ngOnInit(): void {
    this.data$ = this._service.loadData();
    this.data$.subscribe((data) => {
      this.rates = data.rates
      this.result = Object.keys(this.rates).map(key => ({ key: key, value: this.rates[key] }))
    });

    this.form.controls['source'].valueChanges.subscribe(() => {
      this.onValuechanged();
    });
    this.form.controls['destination'].valueChanges.subscribe(() => {
      this.onValuechanged();
    });
    this.form.controls['quantity'].valueChanges.subscribe(() => {
      this.onValuechanged();
    });
  }
  onValuechanged() {
    const quantity = this.form.controls['quantity'].value;
    const sourceKey = this.form.controls['source'].value;
    const destinationKey = this.form.controls['destination'].value;
    if (!!quantity && quantity > 0 && !!sourceKey && !!destinationKey) {
      const result = this.rates[sourceKey] * (1 / this.rates[destinationKey]) * quantity;
      const resultLine = {
        quantity: quantity,
        source: sourceKey,
        destination: destinationKey,
        result: result
      };
      this.resultLine$$.next(resultLine);
      this._service.addToHistory(resultLine);
    }
  }
}
