import { _axios } from "@/lib/axios";


class GoalsRoute {
  async createGoals(goal: GoalToCreate) {
    const response = await _axios.post('/goal/create', goal);
    return response.data;
  }

  async getGoalsUserid(userId: string) {
    const response = await _axios.get<Goal[]>(`"/goal/getByUserId/${userId}`);
    return response.data;
  }
}

export const goalsRoute = new GoalsRoute();