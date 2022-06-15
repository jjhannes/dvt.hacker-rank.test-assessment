import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artists/artist-details.component';
import { ArtistSearchComponent } from './artists/artist-search.component';

const routes: Routes = [
  { path: "", component: ArtistSearchComponent },
  { path: ":id", component: ArtistDetailsComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
