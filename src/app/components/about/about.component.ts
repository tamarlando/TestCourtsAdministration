import { Component, OnInit } from '@angular/core';
import { LineOfHistory } from 'src/app/model/line-of-history';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public historyList: LineOfHistory[] = [];
  constructor(private _service: AppService) { }

  ngOnInit(): void {
    this.historyList = this._service.getHisory();
  }

}
