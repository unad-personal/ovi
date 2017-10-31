import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  contador = 1;
  items: Observable<any[]>;
  
  constructor(afDB: AngularFireDatabase) { 
    this.items = afDB.list('menus', ref => ref.orderByChild('orden')).valueChanges();
    
    this.items.subscribe(res => {
      console.log(res);
      //$($("nav li")[0]).css("background-color","#333333");
    })
  }
  
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
