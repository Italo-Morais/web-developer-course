import styled from 'styled-components';

export const Container = styled.div`

  img {
    width: 32.0rem;
  }

  p {
    margin-top: 1.6rem;
  }

  h1 {
    color: ${({theme}) => theme.colors.neutral9};
  }
`;