import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    margin-top: 80px;
`;

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 230px;
    height: 55px;

    border-radius: 10px;
    border: none;

    cursor: pointer;
    
    background-color: ${props => props?.color || colors.blue.primary};

    transition: all .3s;

    &:hover {
        opacity: .8;
    }
`;

export const SearchButtonLabel = styled.p`
    color: ${colors.white};

    font-size: 15px;
`;

export const Results = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    margin-top: 20px;
    margin-bottom: 60px;

    > p {
        font-size: 30px;
        font-weight: bold;

        color: ${colors.blue.primary};
    }
`;

export const NoDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const NoDataMessage = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: ${colors.blue.primary};
`;

export const Headline = styled.p`
    font-size: 23px;
    font-weight: bold;
    color: ${colors.blue.primary};
`;