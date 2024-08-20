import { ITrack } from "../../models/interfaces/track";
import { TRanking } from "../../models/types/ranking";
import { ChanelTrackApiService } from "./apiService";

export class ChanelTrackOrchestratorService {
    apiService = new ChanelTrackApiService();

    createChanelTrack = async (data: ITrack) => {
        try {
            const response = await this.apiService.createChanelTrack(data);

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    getAllChanelTracks = async () => {
        try {
            const response = await this.apiService.getAllChanelTracks();

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    sendChanelVote = async (trackId: string, totalVotes: number, rankingType: TRanking) => {
        try {
            const response = await this.apiService.sendChanelVote(trackId, totalVotes, rankingType);

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
}