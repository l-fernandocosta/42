import { Container, UserProfile, Footer, Icons, IconButton } from "./styles";
import { AiOutlineRocket } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import { getDatabase, push, ref, remove, set } from "firebase/database";
import {
  useMatch,
} from "react-router-dom";
import { Modal, ModalProps } from "../Modal";

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
  key: string, 
}

export const Questions = ({
  content,
  author,
  questionId,
  roomId,
  likeCount,
  likeId,
  key, 
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


  function handleDelete({roomId, questionId} : ModalProps) {
    Modal({roomId, questionId});
  }
  
  return (
    <Container>
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
            <IconButton className="delete"
              type="button"
              onClick={() =>  handleDelete({roomId, questionId})}
            >
              <IoTrashOutline className="delete-icon" />
            </IconButton>
          ) : (
            <IconButton
              className={likeId ? `liked` : ""}
              type="button"
              onClick={() => handleLike(questionId, likeId)}
            >
              <span>
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
