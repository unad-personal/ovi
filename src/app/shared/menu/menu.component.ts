import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  contador = 1;
  constructor() { }

  ngOnInit() {
    $("nav li").click(function(e){
        $("nav li").css("background-color","#005883");  
        $(this).css("background-color","#333333"); 
    });
  }

  desplegarMenu(){    
    if (this.contador == 1) {
      $('nav').animate({
        left: '0'
      });
      this.contador = 0;
    } else {
      this.contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }
  }

}
