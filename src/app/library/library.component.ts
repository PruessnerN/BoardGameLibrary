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
	searchedBoardGames: BoardGame[] = [ new BoardGame() ];
	searchValue: string = "";

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
			this.searchBoardGames();
		}, 
		(error) => {
			console.log(error);
		});
	}

	sanitizeThumbnail(url): any {
		return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
	}

	searchBoardGames(): void {
		this.searchedBoardGames = this.boardGames.filter((game) => {
			if(this.searchValue === "") {
				return true;
			}
			let intSearchValue = parseInt(this.searchValue);
			if(!isNaN(intSearchValue)) {
				let playerCount: number[] = [];
				for (let index = game.MinPlayers; index <= game.MaxPlayers; index++) {
					playerCount.push(index);
				}
				return playerCount.includes(intSearchValue);
			} else {
				return game.Title.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
					|| game.Tags.includes(this.searchValue.toLocaleLowerCase())
					|| game.Description.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase());
			}
		});
	}

}
