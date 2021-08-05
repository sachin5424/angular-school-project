import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA , MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  disabled:boolean=false
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialog: MatDialog) {}
  studentForm=new FormGroup({
    name:new FormControl(this.data.class?this.data.class:null,),
    roll_no:new FormControl(this.data.max_no_students?this.data.max_no_students:null)
  })
  ngOnInit(): void {
    this.studentForm.disable()
  }
  updatestudent(){
    this.studentForm.enable()
    this.disabled = !this.disabled
  }

  closeDialog(){
    this.dialog.closeAll()
  }

}
