import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppfirstComponent } from './appfirst/appfirst.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {  
  MatButtonModule,  
  MatMenuModule,  
  MatToolbarModule,  
  MatIconModule,  
  MatCardModule,  
  MatFormFieldModule,  
  MatInputModule,
  MatNativeDateModule,  
  MatRadioModule,  
  MatSelectModule,  
  MatOptionModule,  
  MatSlideToggleModule 
} from '@angular/material'; 
@NgModule({
  exports:[AppfirstComponent],
  declarations: [
    AppComponent,
    AppfirstComponent
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     FormsModule,

     MatButtonModule,  
     MatMenuModule,  
     MatToolbarModule,  
     MatIconModule,  
     MatCardModule,  
     MatFormFieldModule,  
     MatInputModule, 
     MatNativeDateModule,  
     MatRadioModule,  
     MatSelectModule,  
     MatOptionModule,  
     MatSlideToggleModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
