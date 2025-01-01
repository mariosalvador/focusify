"use client";
import { CardTask } from "@/components/apk/card-task"
import { useAuthStore } from "@/module/zustand-store/auth-store"
import { goalsRoute } from "@/module/services/Api/routes/goals"
import { useQuery } from "@tanstack/react-query"
import { formatDate } from "date-fns"


export const ActiveGoals = () => {
  const { user } = useAuthStore();

  const getTasks = useQuery({
    queryKey: ["tasks", user?.id],
    queryFn: async () => {
      return (await goalsRoute.getGoalsUserid(user!.id)).data;
    },
  })

  if (getTasks.isFetching || getTasks.isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Metas Ativas
        </h2>
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 h-20 rounded-md animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <article>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Metas Ativas
      </h2>
      <div className="space-y-4">
        {
          getTasks.data!.length > 0 ? (
            getTasks.data?.map((task) => (
              <CardTask
                key={task.id}
                title={task.title}
                progress={50}
                startDate={formatDate(new Date(task.startDate), "dd" + "' de, '" + "MMMM" + " Y")}
                endDate={formatDate(new Date(task.endDate), "dd" + "' de, '" + "MMMM" + " Y")}
              />
            ))
          ) : (
            <p className="text-center text-md text-gray-500">Não há  metas ativas no momento.</p>
          )
        }
      </div>
    </article>
  )
}