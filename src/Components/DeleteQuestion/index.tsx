import { getDatabase, ref, remove } from "firebase/database";
import swal from "sweetalert";
import "./styles.css";

export interface ModalProps {
  roomId: string | undefined;
  questionId: string;
}

export const DeleteQuestion = ({ roomId, questionId }: ModalProps) => {
  swal({
    className: "swal-modal",
    title: "HOLD ON, SPACE-TRAVELLER ! ✋",
    text: "Do you wanna remove this question ? ",
    icon: "error",
    dangerMode: true,

    buttons: ["Oh noez!", "F**K YES, DUDE!"],
  }).then((value) => {
    if (value === true) {
      const db = getDatabase();

      const questionRef =  ref(db, `rooms/${roomId}/questions/${questionId}`);
      remove(questionRef).then(() => {
        swal({
          className: "swal-modal", 
          icon: "info",
          title: "Removed succesfully 🚀 ",
          
        })
      });
    }
  });
};
