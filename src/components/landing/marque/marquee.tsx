/* eslint-disable @next/next/no-img-element */
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-gray-700 font-medium mb-4">
                &quot;Focusify transformou a forma como gerencio meu tempo!&quot;
              </p>
              <span className="text-green-500 font-bold">- Ana Silva</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-gray-700 font-medium mb-4">
                &quot;Nunca pensei que poderia alcançar tantas metas em tão pouco tempo.&quot;
              </p>
              <span className="text-green-500 font-bold">- João Souza</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-gray-700 font-medium mb-4">
                &quot;A funcionalidade Pomodoro é incrível!&quot;
              </p>
              <span className="text-green-500 font-bold">- Marina Costa</span>
            </div>
          </div>

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Focusify transformou a forma como gerencio meu tempo",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Nunca pensei que poderia alcançar tantas metas em tão pouco tempo..",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "A funcionalidade Pomodoro é incrível!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Que bom que alguém teve essa brilhante ideia!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Amei o Focusify! Recomendo a todos os meus amigos.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: " Focusify é a melhor ferramenta de produtividade que já usei.",
    img: "https://avatar.vercel.sh/james",
  },
];



export const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
   
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
