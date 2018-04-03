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
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component'

const routes : Routes = [
  {path: 'home', component: AppComponent},
  {path: 'user', component: AppComponent},
  {path: 'bets', component: AppComponent},
  {path: 'bets', component: AppComponent},
  {path: 'tournament', component: AppComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BetsComponent,
    TournamentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    DataFormService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
