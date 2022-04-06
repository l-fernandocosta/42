export type FirebaseQuestionProps = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
      authorId: string;
      email: string; 
    };
    
    isAnswered: boolean;
    isHighlighted: boolean;
    question: string;
    like: Record<string, {
      authorId: string; 
    }>
    
  }
>;

export type QuestionsProps = {
  questionId: string;
  author: {
    name: string;
    avatar: string;
    authorId: string;
    email: string; 
  };
  isAnswered: boolean;
  isHighlighted: boolean;
  content: string;
  likeId: string | undefined;
  likeCount: number; 
 
};
