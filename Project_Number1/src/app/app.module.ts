import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
 

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
