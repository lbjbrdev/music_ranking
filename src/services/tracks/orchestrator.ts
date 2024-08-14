import { ITrack } from "../../models/interfaces/track";
import { TrackApiService } from "./apiService";

export class TrackOrchestratorService {
    apiService = new TrackApiService();

    createTrack = async (data: ITrack) => {
        try {
            const response = await this.apiService.createTrack(data);

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    getAllTracks = async () => {
        try {
            const response = await this.apiService.getAllTracks();

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    sendVote = async (trackId: string, totalVotes: number) => {
        try {
            const response = await this.apiService.sendVote(trackId, totalVotes);

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
}