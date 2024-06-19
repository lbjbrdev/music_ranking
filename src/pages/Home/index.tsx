import React from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input';
import { Icon } from '../../components/Icon';
import { TrackCard } from '../../components/TrackCard';

import * as S from './styles';

import SearchIcon from '../../assets/icons/search.svg';
import TrackImage from '../../assets/track.svg';


export function Home() {
    return (
        <React.Fragment>
            <Header />

            <S.Form>
                <Input placeholder='Pesquise aqui sua música (música ou artista)' />
                <S.SearchButton>
                    <Icon src={SearchIcon} width={30} />
                </S.SearchButton>
            </S.Form>

            <S.Results>
                <p>Resultados da pesquisa</p>

                <TrackCard
                    image={TrackImage}
                    trackName='Deu moral'
                    trackAuthor='Zé Neto e Cristiano'
                />

                <TrackCard
                    image={TrackImage}
                    trackName='Deu moral'
                    trackAuthor='Zé Neto e Cristiano'
                />

                <TrackCard
                    image={TrackImage}
                    trackName='Deu moral'
                    trackAuthor='Zé Neto e Cristiano'
                />
            </S.Results>
        </React.Fragment>
    );
}