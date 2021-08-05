import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddClassRoutingModule } from './add-class-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    
    AddClassRoutingModule
  ]
})
export class AddClassModule { }
