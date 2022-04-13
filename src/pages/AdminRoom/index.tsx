import {
  QuestionArea,
  Container,
  ContainerImage,
} from "../Room/styles";

import astronautAdminRoom from "../../assets/astronaut-admin-room.png";

import { useParams } from "react-router-dom";
import { Questions } from "../../Components/Questions";

import { Fade } from "react-awesome-reveal";
import { useRoom } from "../Room/useRoom";
import { useAuth } from "../../context/UserContext";
import { Header } from "../../Components/Header";

export function AdminRoom() {
  const { id } = useParams();
  const { questions } = useRoom(id);
  const { user } = useAuth();




  return (
    <Container>
      <Header id={id}/>
      <QuestionArea>
        <h1>
          Welcome, {user?.name}!  🚀 <br />
          {questions.length > 0 ? (
            <h2>There are {questions.length} question(s) 😊</h2>
          ) : (
            <ContainerImage>
              <span>THERE IS NO QUESTIONS YET</span>
              <img
                className="astronaut"
                src={astronautAdminRoom}
                alt="Just a astronaut sitting on the moon "
              />
            </ContainerImage>
          )}
        </h1>
        {questions.map((question) => {
          return (
            <>
              <Fade direction="down">
                <Questions
                  isHighlighted={question.isHighlighted}
                  isAnswered={question.isAnswered}
                  likeId={question.likeId}
                  likeCount={question.likeCount}
                  roomId={id}
                  questionId={question.questionId}
                  content={question.content}
                  author={question.author}
                  key={question.questionId}
                />
              </Fade>
            </>
          );
        })}
      </QuestionArea>
    </Container>
  );
}
