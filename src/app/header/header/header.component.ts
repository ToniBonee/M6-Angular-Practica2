import { Component    } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent    {
 head={
  'background-color': '#31A626'
 }
 deNoche(){
 this.head ={
  'background-color': '#1A380D'
 }
 
 }
 deDia(){
  this.head ={
    'background-color': '#31A626'
   }
 }

 
}

