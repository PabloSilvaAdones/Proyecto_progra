import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  listadoApi = []
  datos : any
  private apiURL = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }
  // metodo para leer 
  getUsers()
  {
    this.listadoApi = []
    let url = this.apiURL + "users";
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: []) =>{
        resolve(data);
        data.forEach(item => {this.listadoApi.push(item)});
        //console.table(this.listado);
      },
      error =>
      {
        console.log("No se puede conectar");
      })
    })
  }

  async getUser(id:String)
  {
    let url = this.apiURL + "users/" + id ;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) =>{
        resolve(data);
        this.datos = data;
        //console.log(this.datos);
      },
      error =>
      {
        console.log("No se puede conectar");
      })
    })
  }



  async getPost(idposts:String)
  {
    let url = this.apiURL + "users/" + idposts + "/posts";
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) =>{
        resolve(data);
        this.datos = data;
        console.log(url);
      },
      error =>
      {
        console.log("No se puede conectar");
      })
    })
  }



  async getDetallePosts(idposts:String)
  {
    let url = this.apiURL + "posts/" + idposts;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) =>{
        resolve(data);
        this.datos = data;
        console.log(url);
      },
      error =>
      {
        console.log("No se puede conectar");
      })
    })
  }
}


