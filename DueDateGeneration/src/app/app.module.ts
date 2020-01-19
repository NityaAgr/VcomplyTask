import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrequencyComponent } from './frequency/frequency.component';
import { DailyComponent } from './frequency/daily/daily.component';
import { WeeklyComponent } from './frequency/weekly/weekly.component';
import { MonthlyComponent } from './frequency/monthly/monthly.component';
import { YearlyComponent } from './frequency/yearly/yearly.component';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FrequencyComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
