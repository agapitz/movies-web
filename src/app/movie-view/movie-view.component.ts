import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  params: any;
  movieDetails: any = {};
  movieSchedule: any = [];

  constructor(public http: HttpClient, public local: LocalService, public router: Router, public route: ActivatedRoute) {
    // this.local.pageName = "Rewards Management"
    // this.local.pageHolder = "reward"
    // console.log(this.local.rewardDetails)
    this.route.params.subscribe(params => this.params = params);
  }
  ngOnInit() {
    this.getMovie()
    this.getSchedule()
  }
  getMovie() {
    this.http.get(this.local.host + "/get/movies/" + this.params.id).subscribe(data => {
      let res = data;
      this.movieDetails = res[0];
    });
  }

  getSchedule() {
    this.http.get(this.local.host + "/get/movie-schedule/" + this.params.id).subscribe(data => {
      let res = data;
      this.movieSchedule = res;
    });
  }
  goToHome() {
    this.router.navigate([""])
  }
  goTo(id) {
    this.local.idHolder = this.params.id;
    this.router.navigate(["schedule", id])
  }
}
