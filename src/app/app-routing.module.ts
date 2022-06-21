import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { RewardComponent } from './reward/reward.component';

import { RewardsViewComponent } from './rewards-view/rewards-view.component';

import { HomeComponent } from './home/home.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { ScheduleComponent } from './schedule/schedule.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-view/:id', component: MovieViewComponent },
  { path: 'reward', component: RewardComponent },
  { path: 'rewards-view/:id', component: RewardsViewComponent },
  { path: 'schedule/:id', component: ScheduleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
export const routingComponents = [

];