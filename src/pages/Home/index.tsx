import React from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input';
import { Icon } from '../../components/Icon';
import { TrackCard } from '../../components/TrackCard';
import { NoData } from '../../components/NoData';

import { toast } from '../../components/Toast';

import * as S from './styles';

import SearchIcon from '../../assets/icons/search.svg';
import TrashIcon from '../../assets/icons/trash.svg';
import TrackImage from '../../assets/track.svg';
import { colors } from '../../theme/colors';

export function Home() {
    const [voteControl, setVoteControl] = React.useState<number>(0);
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [startSearch, setStartSearch] = React.useState<boolean | null>(false);

    const renderResultContent = () => {
        if (startSearch) {
            return (
                <S.Results>
                    <p>Resultados da pesquisa</p>

                    <TrackCard
                        image={TrackImage}
                        trackName='Deu moral'
                        trackAuthor='Zé Neto e Cristiano'
                        onSendVote={() => handleSendVote()}
                    />

                    <TrackCard
                        image={TrackImage}
                        trackName='Deu moral'
                        trackAuthor='Zé Neto e Cristiano'
                        onSendVote={() => handleSendVote()}
                    />

                    <TrackCard
                        image={TrackImage}
                        trackName='Deu moral'
                        trackAuthor='Zé Neto e Cristiano'
                        onSendVote={() => handleSendVote()}
                    />
                </S.Results>
            );
        } else if (startSearch === false) {
            return <NoData />;
        }
    };

    const handleSendVote = () => {
        if (voteControl >= 3) {
            toast({ message: 'Ops seus votos acabaram :(', type: 'error' });
            return;
        }

        setVoteControl(voteControl + 1);
        toast({ message: 'Boa! Seu voto foi computado com sucesso!', type: 'success' });
    };

    const handleSearch = () => {
        if (!searchTerm || searchTerm !== 'Deu moral') {
            setStartSearch(false);
            toast({ message: 'Sua pesquisa nao obteve resultados :(', type: 'error' });
            return;
        }

        setStartSearch(true);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setStartSearch(null);
    };

    return (
        <React.Fragment>
            <Header />

            <S.Form>
                <Input
                    placeholder='Pesquise aqui sua música (música ou artista)'
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                />
                
                <S.SearchButton onClick={handleSearch}>
                    <Icon src={SearchIcon} width={30} />
                </S.SearchButton>

                <S.SearchButton color={colors.red} onClick={handleClearSearch}>
                    <Icon src={TrashIcon} width={30} />
                </S.SearchButton>
            </S.Form>

            {renderResultContent()}
        </React.Fragment >
    );
}