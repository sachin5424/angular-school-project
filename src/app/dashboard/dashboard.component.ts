import {DataService} from '../service/data.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnInit,OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
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
 


  destroyed = new Subject<void>();
  currentScreenSize!: string;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '1'],
    [Breakpoints.Medium, '2'],
    [Breakpoints.Large, '2'],
    [Breakpoints.XLarge, '2'],
  ]);

  constructor(breakpointObserver: BreakpointObserver,private _classApi:DataService) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
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
