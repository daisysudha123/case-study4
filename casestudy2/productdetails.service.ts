import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
 

  constructor(private http:HttpClient) { }

  
  onRegister(userDetails: any){
    console.log(userDetails);
    return this.http.post<any>(`http://localhost:3000/products`,userDetails)
  }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/products')
  }

  getAllProducts(value:any){
    return this.http.post<any>('http://localhost:3000/products',value)
  }

  putProducts(id:any,value:any){
    return this.http.put<any>('http://localhost:3000/products/'+id,value)
  }

  deleteProducts(id:any){
    return this.http.delete<any>('http://localhost:3000/products/'+id)
  }
}

