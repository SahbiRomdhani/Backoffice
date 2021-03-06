import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    'Content-Type':'application/json',
    'Accept':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  apiUrl: string = 'http://localhost:8000/api/produit/';

  constructor(private http: HttpClient) { }


  listProduit(): Observable<any> {

    return this.http.get( this.apiUrl);

  }
 ajouterProd(data:any): Observable<any> {
    console.log("data",data)
    return this.http.post( this.apiUrl,data,{headers:headers});

}

  Produittbyid(id:any): Observable<any> {

    return this.http.get( this.apiUrl+id);

  }
  deleteproduit(id:any): Observable<any> {

    return this.http.delete( this.apiUrl+id);

  }
  updateProd(id:any,data:any): Observable<any> {
      console.log("data",data)
      return this.http.put( this.apiUrl+'produit/'+id,data);

  }
}
