import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {


  tabId: any

  constructor() { }

  ngOnInit(): void {

    this.tabId = 1;

  }

  clickTab(id: any) {
    this.tabId = id;
  }


}
