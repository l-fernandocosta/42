import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/UserContext";
import { FirebaseQuestionProps, QuestionsProps } from "./props";

export const useRoom = (id: string | undefined) => {
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [title, setTitle] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const dbRef = ref(getDatabase());
    const db = getDatabase();
    const questionsRef = ref(db, `rooms/${id}/questions`);

    onValue(questionsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const fbQuestions: FirebaseQuestionProps = data ?? {};
        const parsedQuestions = Object.entries(fbQuestions).map(
          (questionObj) => {
            const data = questionObj[1];
            const key = questionObj[0];
          
            return {
              questionId: key,
              author: {
                name: data.author.name,
                authorId: data.author.authorId,
                avatar: data.author.avatar,
                email: data.author.email,
              },
              content: data.question,
              isHighlighted: data.isHighlighted,
              isAnswered: data.isAnswered,
              likeCount: Object.values(data.like ?? {}).length,
              likeId: Object.entries(data.like ?? {}).find(([key, like]) =>  like.authorId=== user?.uid)?.[0] ,
            
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
  }, [id, user?.uid]);
  return { questions, title };
};
