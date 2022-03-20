import astronaut from '../assets/astronaut.png';
import { Container, Dot, FormId, GoogleButton, SubmitButton } from '../styles/home.styles';
import { FcGoogle } from 'react-icons/fc';
import { GiTowel } from 'react-icons/gi';




export function Home() {


  return (
    <Container>

      <aside>
        <Dot></Dot>
        <Dot></Dot>

        <img src={astronaut} alt="SPACE WALLPAPER" />
        <p>JUST MAKE THE <span>RIGHT</span> QUESTION<span>.</span> <br />
          BUT <span>DON'T PANIC!</span></p>
      </aside>

      <main>
        <div>
          <span>42</span>
          <GoogleButton><FcGoogle className={"googleIcon"} size={'25px'}/>LOGIN WITH GOOGLE</GoogleButton>
        </div>
        <div> - ou entre em uma sala - </div>

        <FormId action="">
          <input type="text" id='room-id' placeholder='Type the ID room' />
          <SubmitButton type='submit'>TAKE THE TOWEL<GiTowel size={'35px'} className='towel'/></SubmitButton>
        </FormId>

      </main>
    </Container>
  )
}