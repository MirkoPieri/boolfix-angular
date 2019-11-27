import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

      constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}
      // definisco le variabili
      filmDet;
      id;
      sub;
      type;

  ngOnInit() {
    // prendo i parametri iniati tramite url
    this.sub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.id = +params['id']; // (con il + converto la stringa in numero

    });
      // chiamata per scaricare film corrispondenti
      this.httpClient.get('https://api.themoviedb.org/3/'+this.type+'/'+this.id+'?api_key=7281fa587a1cb4960ded5c5f97ee3e8d').subscribe(data => {
            this.filmDet = data;
      });

    }
}
