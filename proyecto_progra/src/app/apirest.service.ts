import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  listado=[];
  private apiURL = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }
  // metodo para leer 
  getUsers()
  {
    this.listado = []
    let url = this.apiURL + "users";
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: []) =>{
        data.forEach(item => {this.listado.push(item)});
        //console.log(listado)
      },
      error =>
      {
        console.log("No se puede conectar");
      })
    })
  }
}