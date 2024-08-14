import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    margin-bottom: 10px;

    background-color: ${colors.white};

    width: 380px;

    padding: 25px;

    border-radius: 10px;
`;

export const TrackData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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

export const ChoicesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    margin-top: -20px;

    > img {
        width: 32px;
    }
`;

export const Choices = styled.p`
    color: ${colors.blue.primary};
        
    font-size: 21px;
    font-weight: bold;    
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;

    height: 45px;

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