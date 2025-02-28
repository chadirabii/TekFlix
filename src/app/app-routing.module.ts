import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: 'movies-list', component: MoviesListComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
