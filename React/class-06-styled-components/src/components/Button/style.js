import styled from "styled-components";

export const ButtonHome = styled.button`
background: ${({theme}) => theme.color.main};
color: ${({theme}) => theme.color.complementary};
padding: .4rem .8rem;
border-radius: .4rem;
margin-top: 1.2rem;
&:hover {
  filter: brightness(1.5);
  cursor: pointer;;
}
`
