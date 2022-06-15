import { Component } from '@angular/core';
import { IArtist } from './interfaces/iartist';
import { ISearchResult } from './interfaces/isearch-result';
import { ITrack } from './interfaces/itrack';
import { DeezerService } from './services/deezer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'DeeVerT';
  queryInput: string = "";
  artistQuery: string = "";
  matchingTracks!: ITrack[];
  matchingArtists!: IArtist[];

  constructor(private deezerSvc: DeezerService) {

  };
  
  search(): void {
    
    // query deezer service
    this.deezerSvc.searchArtists(this.queryInput).subscribe(
      (result: any) => {
        console.log("Received data.", JSON.stringify(result));

        this.artistQuery = this.queryInput;
        this.matchingArtists = result;
      },
      (error: any) => {
        console.error("Could net receive data.");
      },
      () => {
        console.info("Search complete.");
      });

  };

}
