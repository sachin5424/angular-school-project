import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http:HttpClient) { }

  fnGet(path:string){
    return this._http.get(environment.apiUrl+path)
  }
  fnPost(path:string,data:any){
    return this._http.post(environment.apiUrl+path,data)
  }
  fnDelete(path:string,id:Number){
    return this._http.get(environment.apiUrl+path+'delete/'+id)
  }
}
