import { ITrack } from "../../models/interfaces/track";

import { PraiseTrackApiService } from "./apiService";

export class PraiseTrackOrchestratorService {
    apiService = new PraiseTrackApiService();

    createPraiseTrack = async (data: ITrack) => {
        try {
            const response = await this.apiService.createPraiseTrack(data);

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    getAllPraiseTracks = async () => {
        try {
            const response = await this.apiService.getAllPraiseTracks();

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    sendPraiseVote = async (trackId: string, totalVotes: number) => {
        try {
            const response = await this.apiService.sendPraiseVote(trackId, totalVotes);

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
}