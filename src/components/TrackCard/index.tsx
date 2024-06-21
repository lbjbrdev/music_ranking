import React from 'react';

import { Icon } from '../Icon';

import * as S from './styles';

interface IProps {
    image: string;
    customImageSize?: number;
    trackName: string;
    trackAuthor: string;
    onSendVote?: () => void;
    disabled?: boolean;
}

export function TrackCard(props: IProps) {
    return (
        <React.Fragment>
            <S.Container>
                <Icon src={props.image} width={props?.customImageSize || 130} />

                <S.TrackData>
                    <p className='trackName'>{props.trackName}</p>
                    <p className='trackAuthor'>{props.trackAuthor}</p>

                    <S.Button onClick={props.onSendVote} disabled={props?.disabled}>
                        Escolher essa Música
                    </S.Button>
                </S.TrackData>
            </S.Container>
        </React.Fragment>
    );
}