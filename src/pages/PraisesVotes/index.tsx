import React from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input';
import { Icon } from '../../components/Icon';
import { TrackCard } from '../../components/TrackCard';
import { NoData } from '../../components/NoData';
import { toast } from '../../components/Toast';
import { Ranking } from '../../components/Ranking';

import { ITrack } from '../../models/interfaces/track';

import { PraiseTrackOrchestratorService } from '../../services/praiseTracks/orchestrator';

import { colors } from '../../theme/colors';

import SearchIcon from '../../assets/icons/search.svg';
import TrashIcon from '../../assets/icons/trash.svg';
import TrackImage from '../../assets/track.svg';

import * as S from './styles';

export function PraisesVotes() {
    const [voteControl, setVoteControl] = React.useState<number>(0);
    const [trackSearchTerm, setTrackSearchTerm] = React.useState<string>('');
    const [authorSearchTerm, setAuthorSearchTerm] = React.useState<string>('');
    const [startSearch, setStartSearch] = React.useState<boolean | null>(false);
    const [noDataContent, setNoDataContent] = React.useState<boolean>(false);
    const [trackResult, setTrackResult] = React.useState<ITrack | undefined>();
    const [allTracks, setAllTracks] = React.useState<ITrack[]>();

    const services = new PraiseTrackOrchestratorService();

    const handleSendVote = async (trackId: string, totalVotes: number) => {
        try {
            if (voteControl >= 3) {
                toast({ message: 'Ops seus votos acabaram :(', type: 'error' });
                return;
            }

            setVoteControl(voteControl + 1);

            const updatedTrack = await services.sendPraiseVote(trackId, totalVotes + 1);

            setTrackResult(updatedTrack!);

            toast({ message: 'Boa! Seu voto foi computado com sucesso!', type: 'success' });
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = async () => {
        if (!trackSearchTerm || trackSearchTerm === '') {
            toast({ message: 'Informe o nome da música para que a pesquisa possa ser realizada!', type: 'error' });
            setNoDataContent(true);
            return;
        }

        try {
            setStartSearch(true);

            const results = await services.getAllPraiseTracks();

            const track = results?.find(track => track.musicName?.toUpperCase() === trackSearchTerm.toUpperCase());

            if (!track) {
                const createdTrack = await services.createPraiseTrack({
                    id: crypto.randomUUID().toString(),
                    musicName: trackSearchTerm,
                    author: authorSearchTerm,
                    totalVotes: 0
                })

                setTrackResult(createdTrack);

                handleSearch();
            }

            setTrackResult(track);
            setNoDataContent(false);

        } catch (error) {
            console.error(error);
        }
    };

    const handleClearSearch = () => {
        setTrackSearchTerm('');
        setAuthorSearchTerm('');
        setStartSearch(null);
        setNoDataContent(false);
        setTrackResult(undefined);
    };

    const fetchAllTracksRanking = async () => {
        try {
            const response = await services.getAllPraiseTracks();

            const orderingVotes = response?.sort((a, b) => b.totalVotes - a.totalVotes);

            const hasVotes = orderingVotes?.find(item => item.totalVotes && item.totalVotes > 0);

            if (hasVotes) setAllTracks(orderingVotes);

        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        fetchAllTracksRanking();
    }, [trackResult]);

    const renderResultContent = () => {
        if (noDataContent) {
            return <NoData />
        } else if (startSearch) {
            return (
                <React.Fragment>
                    <S.Results>
                        <p>Resultados da pesquisa</p>

                        <TrackCard
                            image={TrackImage}
                            trackName={trackResult?.musicName || ''}
                            author={trackResult?.author}
                            onAction={() => handleSendVote(trackResult?.id || '', trackResult?.totalVotes || 0)}
                        />

                    </S.Results>
                </React.Fragment>
            );
        }
    };

    return (
        <React.Fragment>
            <Header />
            <S.Form>
                <S.Headline>
                    Aqui os fãs de Hebert Freire
                    têm o poder de escolher os próximos louvores do curso!
                </S.Headline>
                <Input
                    placeholder='Informe o nome da música'
                    value={trackSearchTerm}
                    onChange={event => setTrackSearchTerm(event.target.value)}
                />

                <Input
                    placeholder='Informe o nome do artista'
                    value={authorSearchTerm}
                    onChange={event => setAuthorSearchTerm(event.target.value)}
                />

                <S.Row>
                    <S.SearchButton onClick={handleSearch}>
                        <Icon src={SearchIcon} width={30} />
                        <S.SearchButtonLabel>Pesquisar</S.SearchButtonLabel>
                    </S.SearchButton>

                    <S.SearchButton
                        color={colors.red}
                        onClick={handleClearSearch}
                        disabled={!trackSearchTerm || trackSearchTerm === ''}
                    >
                        <Icon src={TrashIcon} width={30} />
                        <S.SearchButtonLabel>Limpar pesquisa</S.SearchButtonLabel>
                    </S.SearchButton>
                </S.Row>
            </S.Form>

            {renderResultContent()}

            {!noDataContent && allTracks?.length && 
                <Ranking 
                    rankingList={allTracks} 
                    rankingType='Praises'
                />
            }
        </React.Fragment >
    );
}