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
  
  let id ="";
  this.activatedRouter.paramMap.subscribe(async param => {
    id = param.get('id');
  })
  
  await this.api.getDetallePosts(id);
  this.datos =  this.api.datos;
 // console.log(this.datos);

  
}
}