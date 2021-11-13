import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  datos: any
  user = "";
  constructor(private activatedRouter : ActivatedRoute, 
              private api : ApirestService) { }

ngOnInit() {    
  this.leer()
}
async leer()
{if (this.datos == this.datos)
  {
  
  let id ="";
  this.activatedRouter.paramMap.subscribe(async param => {
    id = param.get('id');
  })
  
  await this.api.getUser(id);
  this.datos =  this.api.datos;
  localStorage.setItem(id,JSON.stringify(this.datos))
  console.log(this.datos);}
  
  alert(this.datos.name)

}
}