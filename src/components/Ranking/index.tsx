import { TrackCard } from '../TrackCard';

import TrackImage from '../../assets/track.svg';
import SpotifyIcon from '../../assets/icons/spotify.svg';

import { fakeUrls } from '../../mocks/fake_urls';

import * as S from './styles';

export function Ranking() {
    return (
        <S.Container>
            <S.Title>Ranking Geral</S.Title>

            <TrackCard
                image={TrackImage}
                trackName='Deu moral'
                trackAuthor='Zé Neto e Cristiano'
                actionLabel='Abrir no Spotify'
                rightIcon={SpotifyIcon}
                onAction={() => window.open(fakeUrls.spotifyLink, '_blank')}
                hasRanking
            />
        </S.Container>
    );
}