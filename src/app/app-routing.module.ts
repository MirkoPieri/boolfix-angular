import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {path:'films', component: FilmsComponent},
  // definisco i paramentri che passeranno via url
  {path:'film/:type/:id', component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
