import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TaskslistComponent } from './taskslist/taskslist.component';
import { OpenedtaskComponent } from './openedtask/openedtask.component';
import { TasksService } from './tasks.service';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatInputModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TaskslistComponent,
    OpenedtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule
  ],
  providers: [ TasksService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
