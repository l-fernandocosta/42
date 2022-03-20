import styled from 'styled-components';



export const WhaleImg = styled.img`
  opacity: 0.6;
  width: 20rem;
  margin-bottom: 9rem;

`

export const Anchor = styled.a`
  display: flex;
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--gray-800);
  position: relative;
  transition: all 0.5s;


 
  &:hover{
    color: var(--yellow);
    transform: translateY(1px);
  }

`

export const Title = styled.h1`
  margin-bottom:2rem;
  font-size: 2rem;
  color: var(--gray-800);

`