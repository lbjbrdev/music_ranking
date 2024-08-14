import { TrackCard } from '../TrackCard';

import { ITrack } from '../../models/interfaces/track';

import TrackImage from '../../assets/track.svg';

import * as S from './styles';
import { TrackOrchestratorService } from '../../services/tracks/orchestrator';

import { toast } from '../../components/Toast';
import React from 'react';

interface IRankingProps {
    rankingList?: ITrack[];
}

export function Ranking({ rankingList }: IRankingProps) {
    const [voteControl, setVoteControl] = React.useState<number>(0);

    const trackServices = new TrackOrchestratorService();

    const onSendVote = async (trackId: string, totalVotes: number) => {
        try {
            if (voteControl >= 3) {
                toast({ message: 'Ops seus votos acabaram :(', type: 'error' });
                return;
            }

            setVoteControl(voteControl + 1);

            await trackServices.sendVote(trackId, totalVotes + 1);

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