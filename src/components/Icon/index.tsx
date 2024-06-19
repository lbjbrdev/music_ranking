import React from 'react';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function Icon(props: IProps) {
    return (
        <React.Fragment>
            <img {...props} />
        </React.Fragment>
    );
}