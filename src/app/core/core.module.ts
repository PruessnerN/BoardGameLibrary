import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoardGame } from './models/boardGame';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		NavbarComponent,
		FooterComponent
	],
	exports: [
		NavbarComponent,
		FooterComponent
	]
})
export class CoreModule { }
