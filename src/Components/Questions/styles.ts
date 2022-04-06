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
  box-shadow: 0px 0px 15px 6px rgb(0, 0, 0, 0.3);

  p {
    word-break: break-all;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border-bottom: 1px solid var(--gray-800);
    width: 100%;
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
  margin-left: 5rem;

  img {
    margin-top: 2.5rem;  
    width: 4rem;
    border-radius: 5rem;
    margin-bottom: 1rem;
  }
  span {
    margin-top: -0.5rem;
    margin-bottom: 1rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 4rem;
  margin-right: 5rem;

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
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--gray-800);
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

`;
