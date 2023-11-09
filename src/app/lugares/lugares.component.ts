import { Component } from '@angular/core';
import { Lugar } from '../lugar';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  lugar : Lugar ={
    id:1,
    nombre: 'Real de catorce'
  }
}
