import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { BoardGamesService } from './../core/services/board-games.service';
import { BoardGame } from '../core/models/boardGame';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

	boardGames: BoardGame[] = [ new BoardGame() ];

	constructor(
		private boardGamesService: BoardGamesService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.getBoardGames();
	}

	getBoardGames(): void {
		this.boardGamesService.getBoardGames().subscribe((boardGames) => {
			this.boardGames = boardGames;
		}, 
		(error) => {
			console.log(error);
		});
	}

	sanitizeThumbnail(url): any {
		return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
	}

}
