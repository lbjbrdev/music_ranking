import { AxiosPromise, AxiosRequestConfig } from "axios";

import { EMethodsTypes } from "../../models/enums/methodsTypes";
import { ITrack } from "../../models/interfaces/track";

import { api } from "../../configs/axios";

export class PraiseTrackApiService {
    createPraiseTrack = (data: ITrack): AxiosPromise<ITrack> => {
        const configs: AxiosRequestConfig = {
            method: EMethodsTypes.post,
            url: '/Praises',
            data: {
                musicName: data.musicName,
                author: data.author,
                totalVotes: data.totalVotes, 
            } as ITrack,
        }

        return api(configs);
    };

    getAllPraiseTracks = (): AxiosPromise<ITrack[]> => {
        const configs: AxiosRequestConfig = {
            method: EMethodsTypes.get,
            url: '/Praises',
        };

        return api(configs);
    };

    sendPraiseVote = (trackId: string, totalVotes: number): AxiosPromise<ITrack> => {
        const configs: AxiosRequestConfig = {
            method: EMethodsTypes.put,
            url: `/Praises/${trackId}`,
            data: { totalVotes }
        };

        return api(configs);
    }
}