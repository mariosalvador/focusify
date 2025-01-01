interface Goal {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  status: "PENDING" | "COMPLETED" | "CANCELED";
  createdAt: Date;
  updatedAt: Date;
}
interface GoalToCreate {
  title: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  status: "PENDING" | "COMPLETED" | "CANCELED";
  subTasks: SubTask[];
}

interface GoalByUserId {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  status: "PENDING" | "COMPLETED" | "CANCELED";
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}













interface SubTask {
  id?: string;
  title: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  status: "PENDING" | "COMPLETED" | "CANCELED";
}


type Status = {
  PENDING: "PENDING" // Meta pendente
  COMPLETED: "COMPLETED" // Meta concluída
  CANCELED: "CANCELED" // Meta cancelada (opcional)
}