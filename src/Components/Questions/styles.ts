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
  align-items: center;
  box-shadow: 0px 0px 15px 6px rgb(0, 0, 0, 0.3);
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1.2rem;
    border-bottom: 1px solid white;
    width: 100%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const UserProfile = styled.div`
  display: flex;
  width: 45rem;
  flex-direction: column;
  justify-content: center;
  margin-left: 5rem;

  img {
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

  .likebtn {
    margin-right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      color: var(--yellow);
      transform: translateY(-5px);
    }
  }
`;
