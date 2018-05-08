import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider, Credenciales } from '../../providers/usuario/usuario';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: Credenciales={};

  constructor(public navCtrl: NavController,
              public usuarioProv : UsuarioProvider ) {

                console.log(this.usuarioProv.usuario);

                this.user= this.usuarioProv.usuario;

  }

}
