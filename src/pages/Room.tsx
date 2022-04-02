import {
  Header,
  QuestionArea,
  UserAvatar,
  TitleRoom,
  Container,
  SendQuestionBtn,
} from "../styles/room.styles";
import { IoCopy } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { FormEvent, useState } from "react";

export function Room() {
  const { id } = useParams();
  const [newQuestion, setNewQuestion] = useState("");

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(String(id));
    return toast.info("Copied to clipboard.  😊", {
      position: "top-left",
    });
  };

  const handleNewQuestion = (e: FormEvent) => {
    e.preventDefault();
    
    if (newQuestion.trim() === "") {
      toast.error("Wait, you have to write something ! 😒");
    }
  };
  return (
    <Container>
      <Header>
        <span>42.</span>
        <button onClick={handleCopyClipboard}>
          {id}
          <IoCopy className="icon-copy" />
        </button>
      </Header>

      <QuestionArea onSubmit={handleNewQuestion}>
        <TitleRoom>
          <h1>Room AskEarth</h1>
          <span> 5 questions</span>
        </TitleRoom>
        <UserAvatar>
          <img
            src="https://avatars.githubusercontent.com/u/98219451?s=96&v=4"
            alt="User avatar"
          />
          <span>Fernando Costa</span>
        </UserAvatar>
        <textarea
          id="placeholder-text"
          placeholder="Did you bring the towell ? So, make the right question "
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>

        <SendQuestionBtn type="submit">
          Ask Someone
          <FaUserAstronaut className="astronaut-icon" />
        </SendQuestionBtn>
      </QuestionArea>
    </Container>
  );
}
