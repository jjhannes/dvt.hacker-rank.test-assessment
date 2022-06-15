import { Component, OnInit } from '@angular/core';
import { IArtist } from '../interfaces/iartist';
import { ITrack } from '../interfaces/itrack';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {

  title: string = 'DeeVerT';
  queryInput: string = "";
  artistQuery: string = "";
  matchingTracks!: ITrack[];
  matchingArtists!: IArtist[];

  constructor(private deezerSvc: DeezerService) {

  };

  ngOnInit(): void {
    
  }
  
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
