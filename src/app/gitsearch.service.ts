import { Injectable } from '@angular/core';
import  {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  constructor(private http:HttpClient) {
   
   }
   getrepos(id){
    
     
    return this.http.get('https://api.github.com/users/'+id+'/repos');
  }
  getfol(t){
    
    return this.http.get('https://api.github.com/users/'+t);
    
  }
}
