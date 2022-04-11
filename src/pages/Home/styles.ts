import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: stretch;
  position: relative;
  z-index: 1;
  overflow: hidden;

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--color-span);
    flex: 1;
    position: relative;

    p {
      color: white;
      text-align: center;
      font-size: 4rem;
      margin-bottom: 2rem;

      span {
        font-weight: bold;
        color: #eead35;
      }
    }

    img {
      width: 20rem;
    }
    .astronaut{
      animation-name: astronaut; 
      animation-timing-function: linear;
      animation-duration: 8000ms; 
      animation-iteration-count: infinite; 
    }
    @keyframes astronaut{
      from{top: 0px;}
      to{top: 100px;}
    }
  } 

  main {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1.1;
    span {
      font-size: 14rem;
      margin-left: 9rem;
      color: #272727;
    }

    div {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
    div:nth-child(2) {
      color: var(--gray-800);
      margin-bottom: 4rem;
      font-size: 1rem;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    display: flex;

    aside {
      display: none;
    }

    main {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      span {
        margin-left: 2.4rem;
      }
      width: 100vw;
      height: 100vh;
    }
  }
`;

export const FormId = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  margin-top: -1rem; 

  input {
    width: 33rem;
    height: 3rem;

    border: 1px solid var(--yellow);
    background-color: transparent;

    border-radius: 1rem;
    color: white;
    font-size: 1.3rem;
    text-align: center;

    margin-bottom: 3rem;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 512px) {
    input {
      margin: 1rem;
      width: 22rem;
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-content: center;
  margin-top: -1rem; 
  height: 3rem;
  font-size: 1.2rem;

  border: 3px solid var(--color-span);
  border-radius: 1rem;

  background-color: transparent;
  color: var(--color-span);
  font-weight: bold;
  transition: all 0.6s;
  cursor: pointer;

  .towel {
    margin-right: 2rem;
  }

  &:not(:disabled):hover {
    background-color: var(--color-span);
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 512px) {
    margin-left: 1rem;
    width: 22rem;
    margin-top: 1rem; 
  }
`;

export const Dot = styled.div`
  position: absolute;
  left: -2rem;
  top: -2.5rem;
  height: 15rem;
  width: 15rem;
  opacity: 65%;
  background-color: #eead35;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  animation-name: dot-transitions;
  animation-duration: 8000ms;
  animation-delay: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  transition: all 0.5s;

  &:nth-child(1) {
    top: 50rem;
    left: 10rem;
    opacity: 70%;
    height: 15rem;
    width: 15rem;
    background-color: pink;
  }
`;

export const GoogleButton = styled.button`
  align-items: center;
  display: flex;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 3rem;
  width: 33rem;
  background-color: var(--red-delete);

  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid var(--red-delete);
  border-radius: 1rem;
  transition: all 0.4s;
  cursor: pointer;

  .googleIcon {
    margin-right: 1rem;
    transition: all 0.4s;
  }
  &:not(:disabled):hover {
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 512px) {
    margin: 1rem;
    width: 23rem;
  }
`;
