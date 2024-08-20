import React from 'react';

import { TrackCard } from '../../components/TrackCard';
import { toast } from '../../components/Toast';

import { ITrack } from '../../models/interfaces/track';

import { ChanelTrackOrchestratorService } from '../../services/chanelTracks/orchestrator';

import TrackImage from '../../assets/track.svg';

import { TRanking } from '../../models/types/ranking';

import * as S from './styles';

interface IRankingProps {
    rankingType: TRanking;
    rankingList?: ITrack[];
}

export function Ranking({ rankingList, rankingType }: IRankingProps) {
    const [voteControl, setVoteControl] = React.useState<number>(0);

    const services = new ChanelTrackOrchestratorService();

    const onSendVote = async (trackId: string, totalVotes: number) => {
        try {
            if (voteControl >= 3) {
                toast({ message: 'Ops seus votos acabaram :(', type: 'error' });
                return;
            }

            setVoteControl(voteControl + 1);

            await services.sendChanelVote(trackId, totalVotes + 1, rankingType);

            toast({ message: 'Boa! Seu voto foi computado com sucesso!', type: 'success' });

            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.Container>
            <S.Title>Ranking Geral</S.Title>

            {rankingList?.map((item, index) => item?.totalVotes > 0 && (
                <TrackCard
                    key={item.id}
                    image={TrackImage}
                    trackName={item.musicName}
                    author={item.author}
                    hasRanking
                    rankPosition={index + 1}
                    quantityVotes={item?.totalVotes}
                    onAction={() => onSendVote(item?.id || '', item?.totalVotes || 0)}
                />
            ))}
        </S.Container>
    );
}