import styled from 'styled-components';

export const Container = styled.div `

    padding: 1rem;
    
    h1 {
        color: ${({theme}) => theme.colors.main3};
    }
`;