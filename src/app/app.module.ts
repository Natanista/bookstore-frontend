import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component'; 

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatButtonModule} from '@angular/material/button'; 

import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './components/template/nav/nav.component'; 
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/views/home/home.component';
import { CategoryReadComponent } from './components/views/categories/category-read/category-read.component'; 

import {MatTableModule} from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
import { CategoryCreateComponent } from './components/views/categories/category-create/category-create.component';

import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input'; 

import {MatFormFieldModule} from '@angular/material/form-field'; 

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CategoryDeleteComponent } from './components/views/categories/category-delete/category-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoryReadComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
