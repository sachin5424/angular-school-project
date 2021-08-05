import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../../service/data.service';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  error:Boolean= false
  studentForm=new FormGroup({
    class:new FormControl(null,[Validators.minLength(1)]),
  })
  constructor(private _apiStudent:DataService) { }


  ngOnInit(): void {
  }
  fnSumbit(){
   
    if(this.studentForm.valid){
       this._apiStudent.fnPostClass(this.studentForm.value).subscribe((res:any)=>{
         console.log(res.data)
         this.error = true
         this.studentForm.reset()
        
       })
    }
  }

}
