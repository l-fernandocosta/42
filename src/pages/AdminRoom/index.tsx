import {
  Header,
  QuestionArea,
  Container,
  CopyButton,
  DeleteButton,
  ContainerImage,
} from "../Room/styles";

import { IoCopy } from "react-icons/io5";
import { FaDoorClosed } from "react-icons/fa";
import { toast } from "react-toastify";
import astronautAdminRoom from "../../assets/astronaut-admin-room.png";

import { useNavigate, useParams } from "react-router-dom";
import { Questions } from "../../Components/Questions";

import { Fade } from "react-awesome-reveal";
import { useRoom } from "../Room/useRoom";
import { database } from "../../services/firebase";
import { getDatabase, onValue, ref, update } from "firebase/database";
import swal from "sweetalert";
import { useAuth } from "../../context/UserContext";

export function AdminRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { questions } = useRoom(id);
  const { user } = useAuth();

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
        <div className="IconsCopyClose">
          <CopyButton onClick={handleCopyClipboard}>
            <span>{id}</span>
            <IoCopy className="icon-copy" />
          </CopyButton>

          <DeleteButton
            onClick={() => {
              handleCloseRoom(id);
            }}
          >
            <span>Encerrar Sala</span>
            <FaDoorClosed className="close-room" />
          </DeleteButton>
        </div>
      </Header>

      <QuestionArea>
        <h1>
          Welcome, {user?.name} ! 🚀 <br />
          {questions.length > 0 ? (
            <h2>There are {questions.length} question(s) 😊</h2>
          ) : (
            <ContainerImage>
              <span>THERE IS NO QUESTIONS YET </span>
              <img className="astronaut"
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
