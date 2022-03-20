import styled from 'styled-components'

export const Container = styled.div`

display: flex;
height: 100vh;
justify-content: stretch;
position: relative;
z-index: 1;

aside{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--color-span);
  flex: 1;
  position: relative;


  p {
    color: white;
    margin-top: 3rem;
    text-align: center;
    font-size: 4rem;
    span{
      font-weight: bold;
      color: #eead35;
    }
  }

  img {
    transition: all 2s;
    width: 20rem;
    margin-top: -13rem;
  }

  img:hover{
    transform: translateY(-4rem);
  }
  
}


main{
 position: relative;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 flex: 1;
  span{
    font-size: 10rem;
    margin-left: 9rem;
    color: #272727;
  }

 div {
   display: flex;
   flex-direction: column;
   align-content: center;

   
 }
 div:nth-child(2){
   color: gray;
   margin-bottom: 4rem;
   font-size: 1.3rem;
 }

 
}
`

export const FormId = styled.form`

   display: flex;
   flex-direction: column;
   padding-bottom: 3rem;

    input{
      width: 35rem;
      height: 3rem;

      border: 1px solid var(--yellow);

      background-color: transparent;
      
      border-radius: 1rem;
      color: white;
      font-size: 1.4rem;
      text-align: center;

      margin-bottom: 3rem;

      &:focus{
        outline:none;
      }
    }

 `

export const SubmitButton = styled.button`

      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      font-size: 1.4rem;
      border: 3px solid var(--color-span);
      border-radius: 1rem;
      background-color: transparent;
      color: var(--color-span);
      font-weight: bold;
      transition: all 0.6s;
     
      .towel {
        margin-left: 2rem;
      }
      
      &:hover{
        background-color: var(--color-span);
        color: white;
      }

 
    `

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

  
  &:nth-child(1){
    top: 59rem;
    left: 10rem;
    opacity: 100%;
    height: 15rem;
    width: 15rem;
    background-color: pink;
   
  
  }
`

export const GoogleButton = styled.button`

text-align: center;
margin-top: 3rem;
margin-bottom: 3rem;
height: 3rem;
width: 35rem;

background-color:var(--yellow);
color:var(--yellow);
font-size: 1.4rem;
font-weight: bold;
background-color: transparent;
border: 1px solid var(--yellow);
border-radius: 1rem;
transition: all 0.4s;
.googleIcon{
  margin-right: 1rem;
}
&:hover{
  background-color: var(--yellow);
  color: whitesmoke;
}

`