import styled from "styled-components";
export const Container = styled.header`
  height: 5rem;
  width: 100%;
  background-color: var(--color-span);

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 4px 10px 1px rgb(0, 0, 0, 0.2);
  > span {
    margin-left: 5rem;
    font-weight: bold;
    font-size: 4rem;
    font-style: italic;
    color: white;
    cursor: pointer;
  }
  .IconsCopyClose {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 512px) {
    span {
      margin-left: 1rem;
    }
  }
`;
