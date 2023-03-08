import styled from "styled-components";

export const Container = styled.div`
  background: #000c;
  width: 100%;
  padding: 2.4rem;

  height: calc(100vh - 10rem);
  position: absolute;

  display: grid;
  place-content: center;

  ul {
    list-style: none;
    font-size: 1.8rem;
    text-align: center;
    display: grid;
    gap: 4.8rem;
    color: lightgray;
    
  }

  h1 {
    color: ${({ theme }) => theme.colors.main3};
  }

  a {
    color: lightgray;
    padding: 0.2rem;
    border-radius: 0.4rem;
    border-bottom: 0.2rem solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  a:hover {
    border-bottom-color: ${({ theme }) => theme.colors.main3};
  }

  .select {
    color: ${({ theme }) => theme.colors.main3};
  }
`;
