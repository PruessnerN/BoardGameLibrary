import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

import { BoardGame } from '../models/boardGame';

@Injectable()
export class BoardGamesService {

	private mockBoardGamesUrl: string = "/assets/mockdata/boardgames.json";

	constructor(private http: Http) { }

	getBoardGames(): Observable<BoardGame[]> {
		return this.http
			.get(this.mockBoardGamesUrl)
			.map((response: Response) => {
				return <BoardGame[]>response.json();
			}).catch(this.handleError);
	}

	private handleError(error: Response) {
		return Observable.throw(error.statusText);
	}

}
