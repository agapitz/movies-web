import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  params: any;
  movieDetails: any = {}
  seats: any = [];

  taken: any = [];
  modalSuccess: any = false;
  modalConfirm: any = false;
  modalLoading: any = false;
  modalEdit: any = false;
  modalDisable: any = false;
  modalDisableSuccess: any = false;
  modalMSG: any = "";
  modalAlert: any = false;
  modalPayment: any = false;
  selectedSeats: any = [];
  refNo: any = "";
  constructor(public http: HttpClient, public local: LocalService, public router: Router, public route: ActivatedRoute) {
    this.route.params.subscribe(params => this.params = params);
  }

  ngOnInit() {
    this.getReservation();
   

  }


  reserve(i, refference_no) {
    this.hideModal();
    this.refNo = refference_no;
    this.modalLoading = true
    let reservationData: any = {
      cinema_id: this.movieDetails.cinema_id,
      movie_id: this.movieDetails.movie_id,
      refference_no: refference_no,
      seat_no: this.selectedSeats[i].seat,
      status: true,
      payment: "",
      is_payed: true,
      amount: this.movieDetails.price,
      name: "",
      mobile: "",
      email: "",
      schedule_id: this.params.id
    }

    this.http.post(this.local.host + "/reserve/", reservationData).subscribe(data => {
      let res = data;
      //console.log(res)
      i++;
      if (i < this.selectedSeats.length) {
        this.reserve(i, refference_no)
      } else {
        this.modalLoading = false;
        this.modalSuccess = true;
        this.getReservation();
        // this.getSchedule();
      }
    });
  }

  generateCode() {
    let result = '';
    let characters = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    let charactersLength = characters.length;
    for (var i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    this.reserve(0, result)
  }

  selectSeat(i) {
    if (this.seats[i].status == 2) {
      this.modalAlert = true;
      this.modalMSG = "This seat is already reserved"
    } else {
      this.seats[i].status = (this.seats[i].status == 0) ? 1 : 0;
    }
  }

  opeForm() {
    this.selectedSeats = this.seats.filter(data => {
      return data.status == 1;
    })
    this.modalEdit = true
  }
  getReservation() {
    this.http.get(this.local.host + "/get/reservation/" + this.params.id).subscribe(data => {
      let res = data;
      this.taken = res;
      this.getSchedule();
      //console.log(this.taken)
    });
  }
  getSchedule() {
    this.http.get(this.local.host + "/get/schedule/" + this.params.id).subscribe(data => {
      let res = data;
      this.movieDetails = res[0];
      this.movieDetails.price = parseInt(this.movieDetails.price);
      this.setUpSeats()
      console.log(this.movieDetails)
    });
  }

  setUpSeats() {
    this.seats = []
    for (let i = 0; i < this.movieDetails.seats_available; i++) {
      let seatNo = i + 1;
      this.seats.push({
        seat: seatNo,
        status: (this.checkSeat(seatNo)) ? 0 : 2
      })
    }
    //console.log(this.seats)


  }
  hideModal() {
    this.modalConfirm = false;
    this.modalSuccess = false;
    this.modalEdit = false;
    this.modalAlert = false;
    this.modalPayment = false;
  }
  checkSeat(i) {
    let seats = this.taken.filter(data => {
      //console.log(data)
      return data.seat_no == i;
    })

    return (seats.length == 0);

  }

  goTo() {
    this.router.navigate(["movie-view", this.local.idHolder])
  }

}
