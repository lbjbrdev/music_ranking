export interface ITrack {
    id: string;
    musicName: string;
    author: string;
    totalVotes: number;
    deleted?: boolean;
}