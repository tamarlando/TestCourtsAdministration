import { Component, Input, OnInit } from '@angular/core';
import { LineOfHistory } from 'src/app/model/line-of-history';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() public result: LineOfHistory;
  constructor() { }

  ngOnInit(): void {
  }

}
