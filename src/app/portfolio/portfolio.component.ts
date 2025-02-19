import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
Hidden:boolean = true
imgs:string[] = [
    '/poert1.png',
    '/port2.png',
    '/port3.png',
    '/poert1.png',
    '/port2.png',
    '/port3.png',

]

modeltheimg:string='';

dblockmodel( item1:EventTarget | null , item2:HTMLImageElement):void{
  if(item1 !=  item2 ){
    this.Hidden = true;
  }
}


}
