import React from 'react';

import { Icon } from '../Icon';

import TrophyIcon from '../../assets/icons/trophy.svg';

import * as S from './styles';

interface IProps {
    image: string;
    customImageSize?: number;
    trackName: string;
    author?: string;
    onAction?: () => void;
    disabled?: boolean;
    actionLabel?: string;
    rightIcon?: string;
    hasRanking?: boolean;
    rankPosition?: number;
    quantityVotes?: number;
}

export function TrackCard(props: IProps) {
    return (
        <React.Fragment>
            <S.Container>
                <S.TrackData>
                    <p className='trackName'>{props.hasRanking && `${props?.rankPosition} -`} {props.trackName} {props?.author && ` ( ${props?.author} )`}</p>

                    {props?.hasRanking && (
                        <S.ChoicesContainer>
                            {props?.rankPosition === 1 && <Icon src={TrophyIcon} />}
                            <S.Choices>{props?.quantityVotes} {props?.quantityVotes && props?.quantityVotes > 1 ? 'escolhas' : 'escolha'}</S.Choices>
                        </S.ChoicesContainer>
                    )}


                    <S.Button onClick={props.onAction} disabled={props?.disabled}>
                        {props.actionLabel || 'Votar nessa música'}
                        <Icon src={props.rightIcon} />
                    </S.Button>
                </S.TrackData>
            </S.Container>
        </React.Fragment>
    );
}