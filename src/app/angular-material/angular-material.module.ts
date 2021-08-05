import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
const material_ui=[
   MatIconModule,
   MatFormFieldModule,
   MatTableModule,
   MatButtonModule,
   MatDividerModule,
   MatInputModule,
   MatSelectModule,
   MatDialogModule,
   MatGridListModule,
   MatCardModule,
   MatMenuModule

]

@NgModule({
  exports: [material_ui],
  imports: [material_ui]
})
export class AngularMaterialModule { }
