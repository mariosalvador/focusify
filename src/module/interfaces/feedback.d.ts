

interface IFeedback {
  id: string;
  message: string;
  userId: string;
  created_at: Date;
  updated_at: Date;
}

interface IFeedbackCreate {
  message: string;
  userId: string;
}