import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieModule } from './components/movie/movie.module';

import { AppComponent } from './app.component';
import { UserModule } from './components/user/user.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, MovieModule, UserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
