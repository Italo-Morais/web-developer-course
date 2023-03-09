import styled from 'styled-components';

export const Container = styled.div`
  
  width: 100%;
  height: 100vh;
  overflow: auto;

  main {
    max-width: 32.0rem;
    margin: 0 auto;
    padding: 2.4rem 0 7.4rem; 
    text-align: justify;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${({theme}) => theme.colors.background};
    border-top: ${({theme}) => theme.colors.neutral8};
    color: white;

    font-size: 1.6rem;
    padding: 1.6rem;
    border-top: .4rem solid ${({theme}) => theme.colors.neutral8};
    text-align: center;
  }

`; 