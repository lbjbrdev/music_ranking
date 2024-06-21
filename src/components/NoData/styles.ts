import styled from 'styled-components';
import { colors } from '../../theme/colors';

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