import styled from "styled-components";

export const Container = styled.div`

  background: #000c;
  width: 100%;
  padding: 2.4rem;
  height: calc(100vh - 10rem);
  position: absolute;
  z-index: 1;
  display: grid;
  place-content: center;

  ul {
    list-style: none;
    font-size: 2rem;
    text-align: center;
    display: grid;
    gap: 4.8rem;
  }

  a {
    color: ${({ theme }) => theme.colors.neutral8};
    padding: 0.2rem;
    border-radius: 0.4rem;
    border-bottom: 0.2rem solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }
  
  a:hover {
    border-bottom-color: ${({ theme }) => theme.colors.neutral8};
  }

  .select {
    color: white;
  }
`;
