import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import {StudentTableComponent} from '../student-table/student-table.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'class', 'students', 'edit','delete'];
  dataSource:any;
  Refresh:boolean = false
  spinner:boolean =true;
  constructor(public dialog: MatDialog,private _studentData:DataService) {}
  ngOnInit(): void {
    this.fnGet();
    this.pageRefresh();
  }
  pageRefresh(){
    this._studentData.pagerefresh.subscribe(res=>{
      if(res==true){
        this.ngOnInit()
      }
    })
  }
  openDialog(data:any) {
    const dialogRef = this.dialog.open(StudentTableComponent,{
      data:data,
      width:"100vh",
      height:"63vh"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete(data:any){
    const dialogRef = this.dialog.open(StudentDelete,{
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  fnGet(){
    this._studentData.fnGetClass().subscribe((res:any)=>{
       this.dataSource=res.data;
       this.spinner= false
       console.log(res)
    })
  }
  fnDelete(id:Number){
    this._studentData.fnDeleteDelete(id).subscribe((res:any)=>{
      console.log(res)
      this.ngOnInit();
    })
  }
  update(){
   this.Refresh = !this.Refresh
   this.ngOnInit()
   setTimeout(()=>{
     this.Refresh = false
   },2000)
  }


}
@Component({
  selector: 'app-student-delete',
  templateUrl: './delete.html',

})
export class StudentDelete {
  constructor(private _studentData:DataService,private router:Router,@Inject(MAT_DIALOG_DATA) public data:any,public dialog: MatDialog){

  }
  fnDelete(id:Number){
    this._studentData.fnDeleteDelete(id).subscribe((res:any)=>{
      this.dialog.closeAll()
      this._studentData.pagerefresh.next(true)
    })
  }
  
}