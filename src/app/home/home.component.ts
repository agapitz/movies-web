import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieListFull: any = [];
  movieList: any = [];
  constructor(public http: HttpClient, public local: LocalService, public router: Router) {

  }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.http.get(this.local.host + "/get/movies").subscribe(data => {
      this.movieListFull = data;
      this.movieList = data;
    });
  }

  goTo(id) {
    // this.local.idHolder = id;
    this.router.navigate(["movie-view", id])
  }

}
