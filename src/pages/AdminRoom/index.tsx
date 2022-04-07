import { Header, QuestionArea, Container } from "../Room/styles";

import { IoCopy } from "react-icons/io5";
import { FaDoorClosed } from "react-icons/fa";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { Questions } from "../../Components/Questions";

import { Fade } from "react-awesome-reveal";
import { useRoom } from "../Room/useRoom";
import { database } from "../../services/firebase";
import { ref, update } from "firebase/database";
import swal from "sweetalert";

export function AdminRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { title, questions } = useRoom(id);

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(String(id));
    return toast.info("Copied to clipboard.  😊", {
      position: "top-left",
    });
  };

  const handleCloseRoom = (id: string | undefined) => {
    const roomRef = ref(database, `rooms/${id}`);
    swal("Hey, this will remove your room 😐", "Are you sure?", {
      icon: "error",
      buttons: ["NAAAH", "OOOOH, YESS!"],
      dangerMode: true, 
    }).then((value) => {
      if (value === true) {
        const updateRoom = update(roomRef, {
          closedAt: new Date(),
        }).then(() => {
          navigate("/");
          toast.success("Your journey has ended succesfuly. Thank you. ❤️");
        });
      }
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

        <button
          onClick={() => {
            handleCloseRoom(id);
          }}
        >
          Encerrar Sala <FaDoorClosed className="close-room" />
        </button>
      </Header>

      <QuestionArea>
        <h1>
          There are {questions.length} question(s) in the {title} room!
        </h1>
        {questions.map((question) => {
          return (
            <>
              <Fade direction="down">
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
