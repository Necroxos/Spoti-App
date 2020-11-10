import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loading = true;
    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (err) => {
        this.loading = false;
        this.toastr.error('Error!', err.error.error.message);
      });
  }

}
