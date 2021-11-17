import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApirestService } from '../apirest.service';


@Component({
  selector: 'app-listadoposts',
  templateUrl: './listadoposts.page.html',
  styleUrls: ['./listadoposts.page.scss'],
})
export class ListadopostsPage implements OnInit {
  
  listadoposts=[];
  datoUsuario: any;
  datos: any;

  constructor(private api: ApirestService,
    private router: Router) { }

  ngOnInit() {
    this.listar()
   
  }

  async listar(){

    if(this.datoUsuario = JSON.parse(localStorage.getItem('Bret'))){

    let id = this.datoUsuario.id
    this.api.getPost(id);

    await this.api.getPost(id)
    this.listadoposts =  this.api.datos;
    console.log(this.listadoposts)
    }

    else if (this.datoUsuario = JSON.parse(localStorage.getItem('Antonette'))){

      let id = this.datoUsuario.id
     
      await this.api.getPost(id)
      this.listadoposts =  this.api.datos;
      console.log(this.listadoposts)
    }
  
  }
salir(){
  localStorage.clear()
  this.router.navigateByUrl('login');
  
}

}
