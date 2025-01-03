
export type ValidationErrors = Record<string, string>;

export const validateGoal = (goal: GoalToCreate): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!goal.title) errors.title = "O título é obrigatório.";
  else if (goal.title.trim().length < 5)
    errors.title = "O título da tarefa deve ser maior que 5 caracteres e não pode conter apenas espaços em branco.";

  if (!goal.startDate) errors.startDate = "A data de início é obrigatória.";
  if (!goal.endDate) errors.endDate = "A data de término é obrigatória.";
  else if (goal.startDate && goal.endDate < goal.startDate)
    errors.endDate = "A data de término não pode ser antes da data de início.";

  goal.subTasks.forEach((task) => {
    if (!task.title) errors[`subTasks.${task.id}.title`] = "Título obrigatório.";
    else if (task.title.trim().length < 5)
      errors[`subTasks.${task.id}.title`] = "O título deve ter mais de 5 caracteres e não pode conter apenas espaços em branco.";

    if (!task.startDate)
      errors[`subTasks.${task.id}.startDate`] = "Início obrigatório.";
    if (!task.endDate)
      errors[`subTasks.${task.id}.endDate`] = "Término obrigatório.";
    else if (task.startDate && task.endDate < task.startDate)
      errors[`subTasks.${task.id}.endDate`] = "Término não pode ser antes do início.";

    if (
      task.startDate &&
      (task.startDate < (goal.startDate || "") || task.startDate > (goal.endDate || ""))
    )
      errors[`subTasks.${task.id}.startDate`] = "Início fora do intervalo da meta.";

    if (
      task.endDate &&
      (task.endDate < (goal.startDate || "") || task.endDate > (goal.endDate || ""))
    )
      errors[`subTasks.${task.id}.endDate`] = "Término fora do intervalo da meta.";
  });

  return errors;
};