import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 5rem;
    margin-bottom: 5rem;
`;

export const Title = styled.h1`
    color: ${colors.blue.primary};
`;