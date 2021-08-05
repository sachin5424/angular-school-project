import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { TableComponent } from './table/table.component';
import {StudentDelete} from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentTableComponent } from './student-table/student-table.component';


@NgModule({
  declarations: [
    TableComponent,
    StudentDelete,
    ModalComponent,
    StudentTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ClassesRoutingModule
  ]
})
export class ClassesModule { }
