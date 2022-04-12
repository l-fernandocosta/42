import {
  Header,
  QuestionArea,
  UserAvatar,
  TitleRoom,
  Container,
  SendQuestionBtn,
  CopyButton,
  AdminButton,
} from "./styles";

import { IoCopy } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { FormEvent, useCallback, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { getDatabase, push, ref, set } from "firebase/database";
import { Questions } from "../../Components/Questions";

import { Fade } from "react-awesome-reveal";
import { useRoom } from "./useRoom";

export function Room() {
  const { user, loginWithGoogle } = useAuth();
  const { id } = useParams();
  const [newQuestion, setNewQuestion] = useState("");
  const navigate = useNavigate();
  const { questions, roomAuthorId, title } = useRoom(id);

  const handleCopyClipboard = useCallback(() => {
    navigator.clipboard.writeText(String(id));
    return toast.info("Copied to clipboard.  😊", {
      position: "top-left",
    });
  }, [id]);

  const handleLogin = () => {
    loginWithGoogle().then(() => toast.success("Welcome traveller !"));
  };

  const handleNewQuestion = (e: FormEvent) => {
    e.preventDefault();

    if (newQuestion.trim() === "" || newQuestion.length < 5) {
      toast.error("Wait, you have to write something ! 😒");
    } else {
      const db = getDatabase();
      const questionRef = ref(db, `rooms/${id}/questions`);
      const newQuestionRef = push(questionRef);

      set(newQuestionRef, {
        author: {
          name: user?.name,
          email: user?.email,
          avatar: user?.photo,
          authorId: user?.uid,
        },
        question: newQuestion,
        isHighlighted: false,
        isAnswered: false,
      });

      setNewQuestion("");
    }
  };
 
  const handleRedirectAdminRoom = (id: string | undefined) => {
    if(user?.uid === roomAuthorId){
      navigate(`/admin/${id}`)
    }
    
  }
  return (
    <Container>
      <Header>
        <span>42.</span>
        <CopyButton onClick={handleCopyClipboard}>
          <span>{id}</span>
          <IoCopy className="icon-copy" />
        </CopyButton>
      </Header> 
      {user?.uid === roomAuthorId && (
        <AdminButton onClick={() => handleRedirectAdminRoom(id)}>
        <BsGear className="gear-icon"/>
      </AdminButton>
      )}
      <QuestionArea onSubmit={handleNewQuestion}>
      
        <TitleRoom>
          <h1>Room {title}</h1>
          <span>{questions.length} questions</span>
        </TitleRoom>
        <UserAvatar>
          {user ? (
            <>
              <img src={String(user.photo)} alt="User avatar" />
              <span>{user?.name}</span>
            </>
          ) : (
            <span>
              To send a question, please
              <button onClick={handleLogin}>login</button>
            </span>
          )}
        </UserAvatar>
        <textarea
          id="placeholder-text"
          placeholder="Have you bring the towell ? So, make the right question. 🚀 "
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>

        <SendQuestionBtn type="submit">
          Ask Someone
          <FaUserAstronaut className="astronaut-icon" />
        </SendQuestionBtn>

        {questions.map((question) => {
          return (
            <>
              <Fade direction="down">
                <Questions
                  isHighlighted={question.isHighlighted}
                  isAnswered={question.isAnswered}
                  likeCount={question.likeCount}
                  likeId={question.likeId}
                  content={question.content}
                  author={question.author}
                  key={question.questionId}
                  questionId={question.questionId}
                  roomId={id}
                />
              </Fade>
            </>
          );
        })}
      </QuestionArea>
    </Container>
  );
}
