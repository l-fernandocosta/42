import styled from 'styled-components';



export const WhaleImg = styled.img`
  opacity: 0.6;
  width: 20rem;
  margin-bottom: 9rem;

`

export const Anchor = styled.a`
  display: flex;
  font-size: 1.2rem;
  color: var(--gray-800);
  transition: all 0.5s;
  position: relative; 
  
  
  &::after{
    content: "";
    position: absolute;
    bottom: 0.2rem;
    height: 2px;
    background-color: var(--yellow); 
    width: 0; 
    transition: width 0.8s;
  }
  
  &:hover::after{
    position: absolute; 
    width: 100%;
  }

  &:hover{
    color: var(--yellow);
    transform: translateY(1px);
  }

`
export const LinkField = styled.div`
  .link{
    text-decoration: none; 
  }
`

export const Title = styled.h1`
  margin-bottom:2rem;
  font-size: 2rem;
  color: var(--gray-800);

 

`