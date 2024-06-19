import styled from 'styled-components';
import { colors } from '../../../theme/colors';

export const Field = styled.input`
    border: 2px solid ${colors.blue.primary};
    border-radius: 10px;

    outline: none;
    
    height: 30px;
    width: 450px;

    font-size: 20px;

    padding: 10px;;
`