import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    background-color: ${colors.white};

    width: 480px;

    padding: 25px;

    border-radius: 10px;
`;

export const TrackData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: -20px;

    > p {
        color: ${colors.blue.primary};
        
        font-size: 21px;
        font-weight: bold;
    }

    > .trackAuthor {
        margin-top: -10px;
    }
`;

export const Button = styled.button`
    background-color: ${colors.blue.primary};

    border: none;

    padding: 15px;

    color: ${colors.white};

    border-radius: 10px;

    font-size: 14px;
    font-weight: 400;

    cursor: pointer;

    transition: all .3s;

    &:hover {
        opacity: .8;
    }
`;