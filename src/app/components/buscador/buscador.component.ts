import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.spotify.getArtists(termino)
      .subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  }

}
