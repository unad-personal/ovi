import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pagina: string;
  Pagina: Observable<any>;
  constructor(private route: ActivatedRoute, private afDB: AngularFireDatabase) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.pagina = params['pagina'].toString();
        this.ObtenerInfoPagina();
      });
    
    this.cargarTwitter();
  }

    private ObtenerInfoPagina() {
        var info = this.afDB.list('/contenidos', (ref => ref.orderByChild('menu').equalTo(this.pagina))).valueChanges();
        this.Pagina = info;
    }

  private cargarTwitter() {
    !function (d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0],
        p = 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    }
      (document, "script", "twitter-wjs");
  }
}
