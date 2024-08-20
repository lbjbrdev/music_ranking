import { AxiosPromise, AxiosRequestConfig } from "axios";

import { EMethodsTypes } from "../../models/enums/methodsTypes";
import { ITrack } from "../../models/interfaces/track";

import { api } from "../../configs/axios";
import { TRanking } from "../../models/types/ranking";

export class ChanelTrackApiService {
    createChanelTrack = (data: ITrack): AxiosPromise<ITrack> => {
        const configs: AxiosRequestConfig = {
            method: EMethodsTypes.post,
            url: '/musics',
            data: {
                musicName: data.musicName,
                author: data.author,
                totalVotes: data.totalVotes, 
            } as ITrack,
        }

        return api(configs);
    };

    getAllChanelTracks = (): AxiosPromise<ITrack[]> => {
        const configs: AxiosRequestConfig = {
            method: EMethodsTypes.get,
            url: '/musics',
        };

        return api(configs);
    };

    sendChanelVote = (trackId: string, totalVotes: number, rankingType: TRanking): AxiosPromise<ITrack> => {
        const configs: AxiosRequestConfig = {
            method: EMethodsTypes.put,
            url: `/${rankingType}/${trackId}`,
            data: { totalVotes }
        };

        return api(configs);
    }
}