import { Container, UserProfile, Footer, Icons, IconButton } from "./styles";
import { AiOutlineRocket, AiOutlineCheck } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import { RiSpaceShipLine } from "react-icons/ri";

import { getDatabase, push, ref, remove, set, update } from "firebase/database";
import { useMatch } from "react-router-dom";
import { DeleteQuestion, ModalProps } from "../DeleteQuestion";
import { toast } from "react-toastify";
import swal from "sweetalert";

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
    authorId: string;
  };
  roomId?: string;
  questionId: string;
  likeCount: number;
  likeId: string | undefined;
  key: string;
  isHighlighted: boolean;
  isAnswered: boolean;
}

export const Questions = ({
  content,
  author,
  questionId,
  roomId,
  likeCount,
  likeId,
  key,
  isHighlighted,
  isAnswered,
}: QuestionProps) => {
  const isAdminRoom = useMatch(`/admin/${roomId}`);

  const handleLike = (id: string, likeId: string | undefined) => {
    const db = getDatabase();
    if (likeId) {
      const likeReference = ref(
        db,
        `rooms/${roomId}/questions/${id}/like/${likeId}`
      );
      remove(likeReference);
    } else {
      const questionRef = ref(db, `rooms/${roomId}/questions/${id}/like`);
      const likeRef = push(questionRef);
      set(likeRef, {
        authorId: author.authorId,
      });
    }
  };

  const handleDelete = ({ roomId, questionId }: ModalProps) => {
    DeleteQuestion({ roomId, questionId });
  };

  const handleHighlightQuestionUp = ({ roomId, questionId }: ModalProps) => {
    const db = getDatabase();
    const questionRef = ref(db, `rooms/${roomId}/questions/${questionId}`);
    update(questionRef, {
      isHighlighted: true,
    }).then(() => {
      toast.success("The question now is highlighted !!");
    });
  };

  const handleAnsweredQuestion = ({ roomId, questionId }: ModalProps) => {
    const db = getDatabase();
    swal({
      title: "Kirk, if you want to abort the mission, that's completely cool.  🤔",
      text: "Marking the question as answered will not allow you to receive more likes and answers ",
      icon: "error", 
      dangerMode: true, 
      buttons: ["I'm not cool", "Abort Mission 🖖"]
    }).then(() => {
      const questionRef = ref(db, `rooms/${roomId}/questions/${questionId}`);
    update(questionRef, {
      isAnswered: true,
    }).then(() => {
     swal("YOU'RE BREATHTAKING ❤️", "You question is answered now. ", {
       dangerMode: true, 
     });
    });
    });
    
  };

  return (
    <Container
      className={
        !isAnswered && isHighlighted
          ? "highlighted-class"
          : "" || isAnswered
          ? "answered-class"
          : ""
      }
    >
      <div key={key}>
        <p>{content}</p>
      </div>

      <Footer>
        <UserProfile>
          <img src={author.avatar} alt="" />
          <span>{author.name}</span>
        </UserProfile>
        <Icons>
          {isAdminRoom?.pathname === `/admin/${roomId}` ? (
            <Icons>
              <IconButton
                className="delete"
                type="button"
                onClick={() => handleDelete({ roomId, questionId })}
              >
                <IoTrashOutline className="delete-icon" />
              </IconButton>
              <IconButton
                id="highlight-question"
                type="button"
                onClick={() =>
                  handleHighlightQuestionUp({ roomId, questionId })
                }
              >
                <RiSpaceShipLine className="highlight-icon" />
              </IconButton>
              <IconButton
                id="answered-question"
                type="button"
                onClick={() => handleAnsweredQuestion({ roomId, questionId })}
              >
                <AiOutlineCheck className="answered-icon" />
              </IconButton>
            </Icons>
          ) : (
            <IconButton
              className={likeId ? `liked` : ""}
              type="button"
              onClick={() => handleLike(questionId, likeId)}
            >
              <span className="like-count">
                {likeCount}
                <AiOutlineRocket
                  className={`likebtn`}
                  aria-label="Mark as  liked"
                />
              </span>
            </IconButton>
          )}
        </Icons>
      </Footer>
    </Container>
  );
};
