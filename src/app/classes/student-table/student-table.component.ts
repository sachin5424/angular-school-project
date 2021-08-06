import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'rollno','delete'];
  dataSource:any;
  error:boolean | undefined
  totalStudent:any
  showTable:boolean = true
  showForm:boolean = false
  formMessage:boolean = false
  spinner:boolean = true
  classId:any
  addStudent = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    class_id:new FormControl(null,[Validators.required]),
    roll_no:new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),]),
  })
  constructor(private _studentsApi:DataService,@Inject(MAT_DIALOG_DATA) public data:MatDialog,) { }
  ngOnInit(): void {
    this.fnGetClassId()
    this._studentsApi.fnStudentsFindClassId(this.data).subscribe((res:any)=>{
    this.dataSource=res.data
    this.spinner = false
    this.totalStudent = res.data.length
  })
  }
  toggle(){
    this.showTable = !this.showTable
    this.showForm = !this.showForm
  }
  fnSubmit(){
    console.log(this.addStudent.value)
    this.formMessage= true
    if(this.addStudent.valid){
      this._studentsApi.fnStudentsCreate(this.addStudent.value).subscribe((res)=>{
        console.log(res)
        this.addStudent.reset()
        this.showTable = true
        this.showForm = false
        
      
      },(err:any)=>{
        if(err.status === 500){
          // this.formMessage = true
          this.error  = true
          this.formMessage= false
        }
      })
    
    }
    else{
      this.formMessage  = false
    }
  
  }
  fnGetClassId(){
    this._studentsApi.fnGetClass().subscribe((res:any)=>{
      this.classId = res.data
       
      console.log(res.data,'classId')
    })
  }
}

