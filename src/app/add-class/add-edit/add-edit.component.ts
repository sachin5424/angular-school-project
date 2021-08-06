import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../../service/data.service';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  spinner:boolean =false
  formMeassage:Boolean = false
  error:Boolean= false
  studentForm=new FormGroup({
    class:new FormControl(null,[Validators.minLength(1)]),
  })
  constructor(private _apiStudent:DataService) { }
 

  ngOnInit(): void {
  }
  fnSumbit(){
    this.spinner = true
  
    if(this.studentForm.valid){
     
       this._apiStudent.fnPostClass(this.studentForm.value).subscribe((res:any)=>{
         console.log(res.data)
         this.error = true
         this.formMeassage =  true
         this.studentForm.reset()
         this.spinner = false
        
       },(err:any)=>{
        if(err.status === 500){
         
          this.spinner = false
        }
      })
    }
 
  }

}
