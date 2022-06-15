import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorsAnywhereInterceptor } from './services/deezer.service';
import { ArtistCardComponent } from './artists/artist-card.component';
import { ArtistDetailsComponent } from './artists/artist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistCardComponent,
    ArtistDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CorsAnywhereInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
