import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  datos: any
  constructor(private activatedRouter : ActivatedRoute, 
              private api : ApirestService) { }

ngOnInit() {    
  this.leer()
}
async leer(){
  
  let idposts ="";
  this.activatedRouter.paramMap.subscribe(async param => {
    idposts = param.get('idposts');
  })
  
  await this.api.getPost(idposts);
  this.datos =  this.api.datos;
  console.log(this.datos);

  
}
}