import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
// import { MatListModule } from "../app/shared/modules/material-module.module";

@Injectable({
  providedIn: "root"
})
/*
interface Arrivals {
  ArrDate: string;
  ArrStationCode: String;
  ArrTime: String;
  DepStationCode: String;
  DepTime: String;
}
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _jsonURL = 'assets/results.json';
  private data:any = [];
  

  title = 'Tickets'; 
  showInput: boolean = false;
  showPCInput: boolean = false;
  item: any;
  temps:any;
  ticketData:any;
  results:any;
  // arrivals: Arrivals[];
  
  constructor(private http: HttpClient) {  
  } 
  
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
 }
 
 ngOnInit(): void {
  this.http.get<any>('assets/results.json')
      .subscribe(res => {
     console.log(res);
     this.data = res;
  });
}
 getData(){
  this.getJSON().subscribe(data => {
    console.log(data);
    this.ticketData = data;
    console.log(typeof this.ticketData);
  })
}
 buyButtonAction() {
  return;
}
 closeManualAmount(): void {
  this.showInput = false;

}
 isAmountValid(): boolean {
  if (this.showPCInput) 
  {
    return true;
  } 
}
};


