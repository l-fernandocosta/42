import astronaut from '../assets/astronaut.png';

import { Container, Dot, FormId, GoogleButton, SubmitButton } from '../styles/home.styles';

import { GiTowel, GiAstronautHelmet } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';
import { toast } from 'react-toastify';


export function Home() {
  let navigate = useNavigate();
  const { loginWithGoogle, isLoading, user } = useAuth();


  async function handleCreateRoom() {

    if (user === undefined) {
      loginWithGoogle()
        .then(() => navigate("/rooms/new-room"))
        .then(() => toast.success('Welcome, SpaceTraveller 🚀 ', { position: "bottom-center", theme: "dark" }))
    } else {
      navigate("/rooms/new-room")
    }
  }

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
          {!user ? <GoogleButton
            disabled={isLoading}
            onClick={handleCreateRoom}><FcGoogle
              className={"googleIcon"}
              size={'25px'} /> CREATE A NEW ROOM</GoogleButton>
            :
            (
              <GoogleButton
                onClick={handleCreateRoom}><GiAstronautHelmet
                  className={"googleIcon"}
                  size={'30px'} /> CREATE A NEW ROOM</GoogleButton>
            )}
        </div>
        <div> - ou entre em uma sala - </div>

        <FormId action="">
          <input type="text" id='room-id' maxLength={10} placeholder='Type the ID room' />
          <SubmitButton type='submit'><GiTowel size={'35px'} className='towel' />TAKE THE TOWEL</SubmitButton>
        </FormId>

      </main>
    </Container>
  )
}