import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  FooterMessage:string;
  CompanyName:string = "نام شرکت" ;
  constructor() { 
    this.FooterMessage = "تمامی حقوق برای شرکت " + this.CompanyName + " محفوظ است";
  }

  ngOnInit(): void {
  }

}
