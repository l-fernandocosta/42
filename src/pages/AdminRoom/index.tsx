import { Header, QuestionArea, Container } from "../Room/styles";

import { IoCopy } from "react-icons/io5";
import { FaDoorClosed } from "react-icons/fa";
import { toast } from "react-toastify";

import { useParams } from "react-router-dom";
import { Questions } from "../../Components/Questions";

import { Fade } from "react-awesome-reveal";
import { useRoom } from "../Room/useRoom";

export function AdminRoom() {
  const { id } = useParams();
  const { title, questions } = useRoom(id);

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(String(id));
    return toast.info("Copied to clipboard.  😊", {
      position: "top-left",
    });
  };

  return (
    <Container>
      <Header>
        <span>42.</span>
        <button onClick={handleCopyClipboard}>
          {id}
          <IoCopy className="icon-copy" />
        </button>
        <button>
          Encerrar Sala <FaDoorClosed />
        </button>
      </Header>

      <QuestionArea>
      <h1 color="white">
          There are {questions.length} question(s) in the {title} room!
        </h1>
        {questions.map((question) => {
          return (
            <>
              <Fade direction="right">
                <Questions
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
