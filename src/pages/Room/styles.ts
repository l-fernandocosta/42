import styled from "styled-components";

export const Container = styled.div`
`
export const Header = styled.header`
height: 5rem;
width: 100%;
background-color: var(--color-span);

display: flex;
align-items: center;
justify-content: space-between;

box-shadow: 0 4px 10px 1px rgb(0, 0, 0, 0.20);
span{
  margin-left: 5rem;
  font-weight: bold;
  font-size: 4rem;
  font-style: italic;
  color: white;
}


button{
  margin-right: 1rem;
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: transparent;
  color: white;
  border-radius: 1rem;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.4s;
  font-weight: bold;
  font-size: 1rem;
  padding: 0rem 1rem 0 2rem;

  :hover{
    background-color: var(--yellow-700);
    border: transparent;

  }

  .icon-copy{
    border-left: 1px solid white;
    height: 100%;
    margin-left: 1rem;
    padding: 0 0 0 1rem;
    width: 1rem;
    height: 2.1rem;
    width: 30%;
  }
}
`

export const MainArea = styled.main`
display: flex;
margin-top: 2rem;
flex-direction: column;

width: 100%;


`
export const TitleRoom = styled.div`

display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 2rem;
>h1 {
  margin-right: 2rem;
  color: white;
  font-size: 4rem;
}

>span{
  margin-right: 0.3rem;
  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.20);
  background-color: var(--color-span);
  padding: 1rem;
  border-radius: 2rem;
  color: white;
  font-size: 1.3rem;
}


`
export const QuestionArea = styled.form`
width: 100%;
margin-top: 3rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

textarea{
  width: 55rem;
  height: 15rem;
  background-color: transparent;
  border-radius: 1rem;
  border: 3px solid var(--color-span);
  color: white;
  padding: 10px 0 0 10px;
  outline: none;
}


`
export const UserAvatar = styled.div`
display: flex;
flex-direction: row;
padding-bottom: 1rem;
align-items: center;
margin-left: -40rem;


>img{
  box-shadow: 0px 0px 8px 1px rgb(0, 0, 0, 0.20);
  border-radius: 5rem;
  width: 4rem;
  margin: 1rem 0 0 0;
}

>span {
  font-size: 1rem;
  margin-left: 1rem;
  color: white;
}

`
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
box-shadow: 0px 0px 10px 2px rgb(0, 0, 0, 0.20);
transition: all 0.4s;

:hover {
  background-color: var(--yellow-700);
  font-weight: bold;
  border: transparent;
  transform: translateY(-5px);


}

.astronaut-icon{
  margin-left: 1rem;
}

`



