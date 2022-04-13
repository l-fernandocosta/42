import styled from "styled-components";

export const Container = styled.div``;

export const DeleteButton = styled.button`
  background-color: var(--red-delete);
  border: transparent;
  color: white;

  display: flex;
  width: auto;
  text-align: center;
  margin-right: 2rem;
  padding: 1rem;

  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.7s;

  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.2);
  span {
    display: flex;
    align-items: center;
    width: auto;
    font-size: 1rem;
  }
  &:hover {
    filter: brightness(0.8);
    background-color: var(--red-delete);
    color: white;
  }
  .close-room {
    margin-left: 7px;
    font-size: 1.8rem;
  }

  @media (max-width: 512px) {
    width: 3.5rem;
    height: 3.5rem;
    align-items: center;

    > span {
      display: none;
    }
    .close-room {
      margin-left: -0.4rem;
      font-size: 10rem;
      width: 7rem;
      height: 20rem;
      width: 200rem;
    }
  }
`;
export const CopyButton = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  height: auto;
  background-color: transparent;
  color: white;
  border-radius: 1rem;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.7s;
  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.2);

  :hover {
    background-color: var(--yellow);
    border: transparent;
  }
  > span {
    margin: 0.3rem;
    text-align: center;
    word-break: keep-all;
    font-size: 1rem;
  }
  .icon-copy {
    color: white;
    border-left: 1px solid white;
    margin-left: 1rem;
    padding: 0 0 0 1rem;
    height: 2.1rem;
    width: 30%;
  }

  @media (max-width: 512px) {
    width: 3.5rem;
    height: 3.5rem;

    > span {
      display: none;
    }

    .icon-copy {
      margin-left: -0.4rem;
      font-size: 4rem;
      width: 3.5rem;
      border: 0px;
    }
  }
`;
export const MainArea = styled.main`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;

  width: 100%;
`;
export const TitleRoom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  > h1 {
    margin-right: 2rem;
    color: white;
    font-size: 4rem;
  }

  > span {
    margin-right: 0.3rem;
    box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.2);
    background-color: var(--color-span);
    padding: 1rem;
    border-radius: 2rem;
    color: white;
    font-size: 1.3rem;
  }
  @media (max-width: 512px) {
    flex-direction: column;
    h1 {
      font-size: 2.5rem;
      text-transform: uppercase;
    }
    > span {
      padding: 0.5rem;
      font-size: 1rem;
      margin-right: 1.1rem;
    }
  }
`;
export const UserAvatar = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  align-items: center;
  margin-left: -40rem;

  > img {
    box-shadow: 0px 0px 8px 1px rgb(0, 0, 0, 0.2);
    border-radius: 5rem;
    width: 4rem;
    margin: 1rem 0 0 0;
  }

  > span {
    font-size: 1rem;
    margin-left: 1rem;
    color: white;
  }
  @media (max-width: 512px) {
    margin-top: 1rem;
    margin-left: -5.2rem;
    margin-bottom: 5rem;
    img {
      width: 3rem;
    }
  }
`;
export const QuestionArea = styled.form`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  textarea {
    width: 55rem;
    height: 15rem;
    background-color: transparent;
    border-radius: 1rem;
    border: 3px solid var(--color-span);
    color: white;
    padding: 10px 0 0 10px;
    outline: none;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }

  @media (max-width: 512px) {
    textarea {
      width: 20rem;
      margin-top: -5rem;
    }
    h1 {
      text-align: center;
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;
export const SendQuestionBtn = styled.button`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 20rem;
  height: 3.5rem;
  border-radius: 2rem;
  background: transparent;
  border: 1px solid var(--yellow-700);
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0px 0px 10px 2px rgb(0, 0, 0, 0.2);
  transition: all 0.4s;

  :hover {
    background-color: var(--yellow-700);
    font-weight: bold;
    border: transparent;
    transform: translateY(-5px);
  }

  .astronaut-icon {
    margin-left: 1rem;
  }

  @media (max-width: 512px) {
    width: 15rem;
  }
`;

export const AdminButton = styled.button`
  position: absolute;
  right: 34rem;
  top: 17.4rem;
  padding: 0.3rem;
  cursor: pointer;
  border-radius: 5rem;
  background-color: transparent;
  color: var(--yellow-700);
  border: 1px solid var(--yellow-700);

  transition: all 0.7s;

  :hover {
    background-color: var(--yellow-700);
    color: white;
    transform: translateY(-10px);
    box-shadow: 0px 8px 15px rgba(255, 229, 124, 0.2);
    .gear-icon {
      animation-name: gear-rotate;
      animation-timing-function: linear;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      font-weight: bold;
    }
  }
  .gear-icon {
    font-size: 2rem;
  }
  @keyframes gear-rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @media (max-width: 512px) {
    top: 17rem;
    right: 3rem;
    .gear-icon {
      font-size: 1.4rem;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  span {
    color: var(--question-color);
  }
  img {
    opacity: 10%;
    margin-top: 3rem;
    animation-name: astronaut-sit;
    animation-fill-mode: forwards;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }

  @keyframes astronaut-sit {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      top: 0px;
    }
  }

  @media (max-width: 512px) {
    span {
      font-size: 1rem;
    }

    img {
      width: 22rem;
    }
  }
`;
