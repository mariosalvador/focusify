import { _axios } from "@/lib/axios";


class GoalsRoute {
  async createGoals(goal: GoalToCreate) {
    const response = await _axios.post('/goal/create', goal);
    return response.data;
  }

  async getGoalsUserid(userId: string) {
    const response = await _axios.get<GoalByUserId[]>(`/goal/getByUserId/${userId}`);
    return response;
  }
}

export const goalsRoute = new GoalsRoute();


