import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import  { DataFormService } from './service/data-form.service'
import { AppComponent } from './app.component';


import { ComponentsModule } from './modules/components/components.module';
import { UserComponent } from './components/user/user.component';
import { BetsComponent } from './components/bets/bets.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { HomeComponent } from './components/home/home.component';

const routes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'bets', component: BetsComponent},
  {path: 'tournament', component: TournamentComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
  ],
  providers: [DataFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
