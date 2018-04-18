import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';

const appRoutes: Routes = [
	{ path: 'library', component: LibraryComponent },
	{ path: '', redirectTo: '/library', pathMatch: 'full' },
	{ path: '**', component: LibraryComponent }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);