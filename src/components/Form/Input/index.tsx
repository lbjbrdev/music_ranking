import React from 'react';

import * as S from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: IProps) {
    return (
        <React.Fragment>
            <S.Field {...props} />
        </React.Fragment>
    );
}