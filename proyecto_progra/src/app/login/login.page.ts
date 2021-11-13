
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  datos: any

  constructor(private activatedRouter : ActivatedRoute, 
              private api : ApirestService) { }

ngOnInit() {    
  this.leer();
}

async leer()
{    
  let id ="1";
  this.activatedRouter.paramMap.subscribe(async param => {
    
    id = param.get('id');
  })
  
  await this.api.getUser(id);
  this.datos =  this.api.datos;
  localStorage.setItem(this.datos.id, JSON.stringify( this.datos))
  console.log("this.datos");
  console.log("lknlkn")
}
}

