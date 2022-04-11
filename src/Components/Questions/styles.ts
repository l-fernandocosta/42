import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;
  margin-bottom: 1rem;
  width: 55rem;
  background-color: var(--question-color);
  border-radius: 1rem;
  color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  p {
    word-break: break-all;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border-bottom: 1px solid var(--gray-800);
    width: 100%;
  }

  &.highlighted-class{
    border: 2px solid var(--color-span); 
    box-shadow: 0px 0px 10px 2px rgb(112, 22, 180, 0.3);
    background-color: rgb(148, 141, 179, 0.2); 
    font-weight: bold; 
    transition: all 0.4s; 
  }

  &.answered-class{
    cursor: not-allowed;
    background-color: rgb(100, 100, 100, 0.10);
    color: gray; 
    transition: all 0.3s; 

    .like-count{
      display: none;
    }
    #answered-question{
      display: none; 
    }

    #highlight-question{
      display: none; 
    }
  }

  @media (max-width: 512px) {
    width: 20rem; 
  }

`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
`;

export const UserProfile = styled.div`
  display: flex;
  width: 45rem;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 3rem; 
  
  img {
    box-shadow: 0px 0px 6px 4px rgb(0, 0, 0, 0.3);
    margin-top: 2.5rem;  
    width: 4rem;
    border-radius: 5rem;
    margin-bottom: 1rem;
  }
  span {
    margin-top: -0.5rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 512px) {
    img{
      width: 3rem; 
      margin-top: 5.2rem; 
    }
    span{
      font-size: 0rem; 
    }
  
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 8px; 
  flex-direction: row;
  align-items: flex-end;
  margin-top: 3rem;
  

  padding-right: 1rem;
  padding-bottom: 1rem;
`;

export const IconButton = styled.button`

  background: none;
  border: ${props => props.className === "delete" ? "1px solid var(--red-delete)" :  "none"};
  display: flex;
  padding: ${props => props.className === "delete" ? "1rem" : "none"};
  border-radius: 1rem; 
  transition: all 0.5s; 

 
  &:hover{
    background-color: ${props => props.className=== "delete" ? "#f4796b" : "none"};
    cursor: ${props=> props.className === "delete" ? "pointer" : "none"};
    transform: ${props => props.className === "delete" ? "translateY(-10px)" : "none"};
    .delete-icon{
      color: white; 
    }
  };

  span {
    font-size: 0.8rem;
    display: flex;
    color: var(--yellow);
    gap: 4px;

    .likebtn {
      display: flex;
      align-items: flex-end;
      margin-right: 1rem;
      font-size: 2rem;
      cursor: pointer;
      color: whitesmoke;
      transition: all 0.5s;
      :hover {
        color: var(--yellow);
        transform: translateY(-8px);
      }
    }
  }

  &.liked {
    .likebtn {
      color: var(--yellow);
    }
  }

  .delete-icon{
    transition: all 0.5s; 
    font-size: 2rem; 
    color: var(--red-delete); 
  }


  .highlight-icon{
    
    transition: all 0.5s; 
    font-size: 2rem; 
    color: var(--color-span); 
  }

  &#highlight-question{
    border: 1px solid var(--color-span);
    padding: 1rem; 
    cursor: pointer; 
    

    &:hover{
      background-color: var(--color-span);
      transform: translateY(-10px);
      .highlight-icon{
        color: white;
        
      }
    }
  };

  &#answered-question{  
    border: 1px solid var(--green); 
    
    padding: 1rem; 
    cursor: pointer; 

    &:hover{
      background-color: var(--green);
      transform: translateY(-10px);
      .answered-icon{
        color: white; 
      } 
    }
    .answered-icon{
      color: var(--green);
      font-size: 2rem; 
    }
  };

  @media (max-width: 512px) {
    .likebtn{
     font-size: 1.5rem; 
    }

    &#highlight-question {
      background-color: var(--color-span);
      padding: 0.3rem; 
      .highlight-icon{
        color: white; 
      }
    }
    &#answered-question{
      background-color: var(--green);
      padding: 0.3rem; 
      .answered-icon{
        color: white; 
      }
    }
    &.delete{
      background-color: var(--red-delete);
      padding: 0.3rem;
      .delete-icon{
        color: white; 
      }
    }
  
  }
`;
