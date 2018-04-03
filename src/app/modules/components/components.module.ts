import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module'
import { UserComponent } from '../../components/user/user.component';
import { BetsComponent } from '../../components/bets/bets.component';
import { TournamentComponent } from '../../components/tournament/tournament.component';
import { HomeComponent } from '../../components/home/home.component';
import { HeaderComponent } from '../../components/templates/header/header.component';
import { FooterComponent } from '../../components/templates/footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserComponent,
    BetsComponent,
    TournamentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [
    UserComponent,
    BetsComponent,
    TournamentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
