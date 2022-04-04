export type FirebaseQuestionProps = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
      email: string;
    };
    isAnswered: boolean;
    isHighlighted: boolean;
    question: string;
  }
>;

export type QuestionsProps = {
  id: string;
  author: {
    name: string;
    avatar: string;
    email: string;
  };
  isAnswered: boolean;
  isHighlighted: boolean;
  content: string;
};
