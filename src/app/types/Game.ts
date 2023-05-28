export type Game = {
	homeTeam: string;
	awayTeam: string;
	homeScore: number;
	awayScore: number;
	name: string;
	shortName: string;
	id: string;
	date: string;
	midsizeName: string;
	status: {
		displayClock: string;
		type: {
			completed: boolean;
			detail: string;
			shortDetail: string;
            state: string;
            startDate: string;
		};
	};
	season: {
		slug: string;
	};

	competitions: {
		id: string;
		status: {
			displayClock: string;
			type: {
				shortDetail: string;
				detail: string;
				state: string;
			};
		};
		competitors: [
			{
				id: string;
				name: string;
				score: string;
				homeAway: string;
				winner: boolean;
				form: string
				records: [
					{
						summary: string;
					}
				];
				team: {
					abbreviation: string;
					displayName: string;
					shortDisplayName: string;
					name: string;
					logo: string;
					color: string;
					alternateColor: string;
					id: number;
				};
			},
			{
				id: string;
				name: string;
				score: string;
				homeAway: string;
				winner: boolean;
				form: string
				athlete?: {
					fullName: string;
					flag: {
						href: string;
					};
				};
				records: [
					{
						summary: string;
					}
				];
				team: {
					abbreviation: string;
					displayName: string;
					shortDisplayName: string;
					logo: string;
					color: string;
					alternateColor: string;
					id: number;
				};
			}
		];
		odds: {
			homeTeamOdds: {
				value: number
			}
			awayTeamOdds: {
				value: number
			}
			drawOdds: {
				value: number
			}
		}
		venue: {
			fullName: string;
			address: {
				city: string;
				state: string;
				country: string;
			};
		};
	}[];
};

interface League {
    name: string;
    abbreviation: string;
    slug: string;
  }
  
 export interface Sport {
    sport: string;
    icon: any;
    leagues: League[];
  }

export type UfcSelectProps = {
	selectedSport: string | null;
	handleSportClick: (sport: string) => void;
  };

export interface Article {
	headline: string;
	published: string;
	images: { url: string }[];
	description: string;
  }
  