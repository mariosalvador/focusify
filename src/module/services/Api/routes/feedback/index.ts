import { _axios } from "@/lib/axios";


class FeedbackRoute {
   async createFeedback(feedback:IFeedbackCreate) {
    const response = await _axios.post<IFeedback[]>(`feedback/create`, feedback);
    return response.data;
  }
}

export const feedbackRoute = new FeedbackRoute();