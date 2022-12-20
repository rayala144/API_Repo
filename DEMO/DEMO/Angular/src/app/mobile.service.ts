import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
  
  url = "http://localhost:3000/mobiles"
  

  fetchMobiles():Observable<any>{
    return this.http.get(this.url)
  }

  deleteMobile(id: string){
    return this.http.delete(this.url+"/"+id)
  }

  postMobile(body: { name: string; price: Number; ram: Number; storage: Number; }){
    return this.http.post(this.url,body)
  }

  putMobile(body: { name: string; price: Number; ram: Number; storage: Number; }){
    return this.http.put(this.url,body)
  }

  


}
