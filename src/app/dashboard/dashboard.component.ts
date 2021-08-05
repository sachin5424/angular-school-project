import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   classData:any
  //  gaugeType = "arch";
  //  gaugeValue = 9;
  //  gaugeLabel = "students";
  //  gaugeAppendText = "students";
  constructor(private _classApi:DataService) { }

  ngOnInit(): void {
    this.fnGetClassList()
  }
  fnGetClassList(){
    this._classApi.fnGetClass().subscribe((res:any)=>{
      this.classData = res.data
      console.log(res.data)
    })
  }

}
