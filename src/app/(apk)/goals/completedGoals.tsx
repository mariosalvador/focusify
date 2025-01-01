// import { CardCompletedTask } from "@/components/apk/cardCompleted-task"


export const CompletedGoals = () => {
  return (
    <article>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Metas Concluídas</h2>
      {/* <div className="space-y-4">
        <CardCompletedTask title="Aprender Flutter" progress={100} endDate="20 de Novembro" />
        <CardCompletedTask title="Aprender React" progress={100} endDate="20 de Novembro" />
      </div> */}

      <p className="w-full text-md  text-gray-600 text-center mt-4">Nenhuma meta concluida</p>
    </article>
  )
}