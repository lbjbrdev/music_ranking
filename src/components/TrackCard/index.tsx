import React from 'react';

import { Icon } from '../Icon';

import TrophyIcon from '../../assets/icons/trophy.svg';

import * as S from './styles';

interface IProps {
    image: string;
    customImageSize?: number;
    trackName: string;
    trackAuthor: string;
    onAction?: () => void;
    disabled?: boolean;
    actionLabel?: string;
    rightIcon?: string;
    hasRanking?: boolean;
}

export function TrackCard(props: IProps) {
    return (
        <React.Fragment>
            <S.Container>
                <Icon src={props.image} width={props?.customImageSize || 130} />

                <S.TrackData>
                    <p className='trackName'>{props.hasRanking && '1 -'} {props.trackName}</p>
                    <p className='trackAuthor'>{props.trackAuthor}</p>

                    {props?.hasRanking && (
                        <S.ChoicesContainer>
                            <Icon src={TrophyIcon} />
                            <S.Choices>350 escolhas</S.Choices>
                        </S.ChoicesContainer>
                    )}

                    <S.Button onClick={props.onAction} disabled={props?.disabled}>
                        {props.actionLabel || 'Escolher essa Música'}
                        <Icon src={props.rightIcon} />
                    </S.Button>
                </S.TrackData>
            </S.Container>
        </React.Fragment>
    );
}