import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';

import {MatRadioModule} from '@angular/material/radio';

import {MatSelectModule} from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSortModule } from '@angular/material/sort';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ToastrModule } from 'ngx-toastr';
import { ConfirmComponent } from './confirm/confirm.component';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConfirmComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,

    MatDialogModule,
    MatButtonModule,
 MatFormFieldModule,
 MatInputModule,
MatDatepickerModule,
 MatNativeDateModule,
 MatRadioModule,

 MatSelectModule,
 NgxSpinnerModule,
ReactiveFormsModule,
 HttpClientModule,
 MatTableModule,
 MatPaginatorModule,
 MatSortModule,
 MatProgressSpinnerModule,
 ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
