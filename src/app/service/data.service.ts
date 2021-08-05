import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pagerefresh = new Subject<boolean>()
  constructor(private _apiService:ApiService) { }
  fnGetClass(){
    return this._apiService.fnGet('class/list')
  }
  fnPostClass(data:any){
    return this._apiService.fnPost('class/create',data)
  }
  fnDeleteDelete(id:Number){
    return this._apiService.fnDelete('class/',id)
  }
  fnStudentslist(){
    return this._apiService.fnGet('student/list')
  }
  fnStudentsFindClassId(id:any){
    return this._apiService.fnGet('student/class/'+id)
  }
  fnStudentsCreate(data:any){
    return this._apiService.fnPost('student/create',data)
  }
}
