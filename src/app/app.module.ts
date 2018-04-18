import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutes } from './app.routing';
import { LibraryComponent } from './library/library.component';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent
  ],
  imports: [
	BrowserModule,
	CoreModule,
	AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
