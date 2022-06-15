import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IArtist } from '../interfaces/iartist';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
  
})
export class ArtistCardComponent implements OnInit {

  @Input() artist!: IArtist;

  constructor(private deezerService: DeezerService, private route: ActivatedRoute, private router: Router) { }

  navToArtist(): void {
    let fragment = this.route.snapshot.pathFromRoot;

    this.router.navigate([ `/${this.artist.id}` ]);
  };
  
  ngOnInit(): void {

    this.deezerService.getArtist(this.artist.id).subscribe(
      (artist: IArtist) => {
        this.artist = artist;
      },
      (error: any) => {
        console.error("Could not fetch artist.");
      },
      () => {
        console.info("Query complete.");
      }
    );

  };

}
