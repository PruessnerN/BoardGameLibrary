import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutes } from './app.routing';
import { LibraryComponent } from './library/library.component';
import { BoardGamesService } from './core/services/board-games.service';


@NgModule({
	declarations: [
		AppComponent,
		LibraryComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		AppRoutes,
		HttpModule
	],
	providers: [
		BoardGamesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
