import { Container, UserProfile, Footer, Icons } from "./styles";
import { AiOutlineLike, AiOutlineDislike} from "react-icons/ai"
import {FcLike} from "react-icons/fc"

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
    email: string;
  };
}

export const Questions = ({ content, author }: QuestionProps) => {
  return (
    <Container>
      <p>{content}</p>

      <Footer>
        <UserProfile>
          <img src={author.avatar} alt="" />
          <span>{author.name}</span>
        </UserProfile>

        <Icons>
        <AiOutlineLike className="likebtn"/>
        <AiOutlineDislike className="likebtn"/>
        <FcLike className="likebtn"/>
        </Icons>
      </Footer>
    </Container>
  );
};
