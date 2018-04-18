export class BoardGame {
	constructor(
		private Id: number = 0, 
		private Title: string = "",
		private Description: string = "",
		private Tags: string[] = [""],
		private Thumbnail: string = "",
		private	MinPlayers: number = 0,
		private MaxPlayers: number = 0
	) {}
}