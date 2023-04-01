import { Component } from '@angular/core';
import {Usuario} from '../shared/model/usuario';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'TESTE';
  usuario: Usuario = new Usuario;













}
