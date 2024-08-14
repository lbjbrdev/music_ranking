import { AxiosPromise, AxiosRequestConfig } from "axios"
import { EMethodsTypes } from "../../models/enums/methodsTypes"
import { ITrack } from "../../models/interfaces/track"
import { api } from "../../configs/axios"

export class TrackApiService {
    createTrack = (data: ITrack): AxiosPromise<ITrack> => {
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

    getAllTracks = (): AxiosPromise<ITrack[]> => {
        const configs: AxiosRequestConfig = {
            method: EMethodsTypes.get,
            url: '/musics',
        };

        return api(configs);
    };

    sendVote = (trackId: string, totalVotes: number): AxiosPromise<ITrack> => {
        const configs: AxiosRequestConfig = {
            method: EMethodsTypes.put,
            url: `/musics/${trackId}`,
            data: { totalVotes }
        };

        return api(configs);
    }
}