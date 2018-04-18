export class BoardGame {
	constructor(
		public Id: number = 0, 
		public Title: string = "",
		public Description: string = "",
		public Tags: string[] = [""],
		public Thumbnail: string = "",
		public MinPlayers: number = 0,
		public MaxPlayers: number = 0
	) {}
}