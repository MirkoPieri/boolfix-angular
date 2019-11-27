import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  constructor(private httpClient: HttpClient) {}

  films;
  query;
  type;
  // popolamento valore form con stringa vuota
  filmSearch = new FormGroup({
    query: new FormControl(''),
    type: new FormControl(''),
  });

  // funzione di submit che popola variabile con ricerca utente
  private onSubmit() {
    // popolamento query
    this.query = this.filmSearch.value;
    this.type = this.filmSearch.value;
    console.log(this.type);

      // chiamata per scaricare film corrispondenti
      this.httpClient.get('https://api.themoviedb.org/3/search/'+this.type['type']+'?api_key=7281fa587a1cb4960ded5c5f97ee3e8d&query='+this.query['query']).subscribe(data => {
            this.films = data['results'];
            this.type;
            console.log(this.films);
          });

    }

}
