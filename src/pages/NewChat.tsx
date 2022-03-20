import astronaut from '../assets/astronaut.png';
import cachalote from '../assets/cachalote.png';
import { Container, Dot, FormId, SubmitButton } from '../styles/home.styles';
import { GiTowel } from 'react-icons/gi';
import { Anchor, Title, WhaleImg } from '../styles/newfile.styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/UserContext';




export function NewChat() {
  const {user} = useAuth();

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
          <WhaleImg src={cachalote}/>
          <h1>NEW JOURNEY AS</h1>
          <Title>{(user?.name)?.toUpperCase()}   🚀</Title>
        </div>

        <FormId >
          <input type="text" id='room-id' placeholder='Create a new ID room' />
          <SubmitButton type='submit'>TAKE THE TOWEL<GiTowel size={'35px'} className='towel'/></SubmitButton>
        </FormId>

        <Link to={"/"}>
          <Anchor>Already have a room id?</Anchor>
        </Link>
      </main>
    </Container>
  )
}