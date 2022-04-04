import {
  Header,
  QuestionArea,
  UserAvatar,
  TitleRoom,
  Container,
  SendQuestionBtn,
} from "./styles";

import { IoCopy } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { toast } from "react-toastify";

import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { child, get, getDatabase, push, ref, set } from "firebase/database";
import { Questions } from "../../Components/Questions";

import {Fade} from "react-awesome-reveal";
import { FirebaseQuestionProps, QuestionsProps } from "./props";


export function Room() {
  const { user, loginWithGoogle } = useAuth();
  const { id } = useParams();
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `rooms/${id}/questions`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const fbQuestions: FirebaseQuestionProps = data ?? {};
        const parsedQuestions = Object.entries(fbQuestions).map(
          (questionObj) => {
            const data = questionObj[1];
            const key = questionObj[0];

            return {
              id: key,

              author: {
                name: data.author.name,
                email: data.author.email,
                avatar: data.author.avatar,
              },
              content: data.question,
              isHighlighted: data.isHighlighted,
              isAnswered: data.isAnswered,
            };
          }
        );
        setQuestions(parsedQuestions);
      } else {
        toast.info("There's no questions in this room yet ! 😭 ");
      }
    });

    get(child(dbRef, `rooms/${id}`)).then((snapshot) => {
      const dataRef = snapshot.val();
      const roomTitle = dataRef.title;
      setTitle(roomTitle);
    });
  }, [id, questions]);

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(String(id));
    return toast.info("Copied to clipboard.  😊", {
      position: "top-left",
    });
  };

  const handleLogin = () => {
    loginWithGoogle().then(() => toast.success("Welcome traveller !"));
  };

  const handleNewQuestion = (e: FormEvent) => {
    e.preventDefault();

    if (newQuestion.trim() === "" || newQuestion.length < 15) {
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
        },
        question: newQuestion,
        isHighlighted: false,
        isAnswered: false,
      });

      setNewQuestion("");
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
          placeholder="Did you bring the towell ? So, make the right question "
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>

        <SendQuestionBtn type="submit">
          Ask Someone
          <FaUserAstronaut className="astronaut-icon" />
        </SendQuestionBtn>
        
        <div >
          {questions.map((question) => {
            return (
              <>
              <Fade direction="right">
                  <Questions
                  content={question.content}
                  author={question.author}
                  key={question.id}/>
              </Fade>
              </>
            );
          })}
        </div>
      </QuestionArea>
    </Container>
  );
}
