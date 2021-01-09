import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.css']
})
export class AppDataComponent implements OnInit {
  ApplicationName: string;
  constructor() {
    this.ApplicationName = "نام سرویس";
  }

  ngOnInit(): void {
  }

}
