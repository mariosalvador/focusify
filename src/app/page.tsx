import React from "react";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import ShinyButton from "@/components/ui/shiny-button";
import { TextAnimate } from "@/components/ui/text-animate";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { MagicCard } from "@/components/ui/magic-card";
import BlurFade from "@/components/ui/blur-fade";
import { ReviewCard, reviews } from "@/components/landing/marque/marquee";
import Marquee from "@/components/ui/marquee";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white relative min-h-screen flex flex-col overflow-x-hidden ">
      {/* Header Section */}
      <div className=" absolute top-0 left-0 right-0 z-10">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-md">
        <section className=" flex pt-[15%] text-center h-screen z-10 whitespace-pre-wrap text-5xl font-medium tracking-normal ">
          <div className="container mx-auto px-6">
            <div className="flex flex-col">
              <TextAnimate animation="blurInUp" by="character" className="text-xl md:text-5xl text-wrap font-extrabold text-gray-800 mb-6">
                Conquiste suas metas com
              </TextAnimate>
              <p> </p>
              <TextAnimate animation="fadeIn" by="text" className="text-5xl font-extrabold text-green-500 mb-6">
                foco total
              </TextAnimate>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Transforme seu foco em resultados com o aplicativo que simplifica sua produtividade.
            </p>

            <Link href="/auth/login">
              <ShinyButton className="bg-green-500 text-white py-2.5 px-8 rounded-lg shadow-lg hover:bg-green-600/80 transition-all">
                Comece Agora
              </ShinyButton>
            </Link>
          </div>
        </section>
        <GridPattern
          width={20}
          height={20}
          x={1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent,transparent)] ",
          )}
        />
      </div>


      {/* Features Section */}
      <section id="features" className=" bg-white mb-[20%] px-20 ">
        <div className="container mx-auto px-6">
          <div className="z-10 flex min-h-64 items-center justify-center">
            <AnimatedGradientText>
              <span
                className={cn(
                  `inline animate-gradient  text-xl bg-gradient-to-r from-green-400 via-blue-500 to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                Funcionalidades
              </span>
            </AnimatedGradientText>
          </div>

          <div
            className={
              "flex h-[400px] w-full flex-col items-center mx-5 gap-4 lg:h-[200px] lg:flex-row lg:gap-8 lg:justify-center lg:items-center"
            }
          >
            <BlurFade delay={0.25 + 5 * 0.05} inView direction="down" className=" w-[350px] h-full">
              <MagicCard
                className="cursor-pointer w-[300px] md:w-[350px] flex-col text-center items-center justify-center whitespace-nowrap shadow-2xl px-2"
                gradientColor={"#D9D9D955"}
              >
                <h4 className="text-xl  font-semibold text-green-500 mb-2">Metas Personalizáveis</h4>
                <p className="text-gray-600 w-full text-wrap">Crie e gerencie metas de acordo com suas necessidades.</p>
              </MagicCard>
            </BlurFade>

            <BlurFade delay={0.25 + 1 * 0.05} inView direction="down" className=" w-[350px] h-full">
              <MagicCard
                className="cursor-pointer w-[300px]  md:w-[350px] flex-col text-center items-center justify-center whitespace-nowrap shadow-2xl px-2"
                gradientColor={"#D9D9D955"}
              >
                <h4 className="text-xl  w-full font-semibold text-blue-500 mb-2">Pomodoro Integrado</h4>
                <p className="text-gray-600 w-full text-wrap">Aumente seu foco com a técnica Pomodoro embutida.</p>
              </MagicCard>
            </BlurFade>
            <BlurFade delay={0.25 + 1 * 0.05} inView direction="down" className=" w-[350px] h-full">
              <MagicCard
                className="cursor-pointer  w-[300px]  md:w-[350px] flex-col text-center items-center justify-center whitespace-nowrap shadow-2xl px-2"
                gradientColor={"#D9D9D955"}
              >
                <h4 className="text-xl font-semibold text-yellow-500 mb-2">Feedback de Progresso</h4>
                <p className="text-gray-600 w-full text-wrap">Acompanhe seu progresso com estatísticas detalhadas.</p>
              </MagicCard>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className=" bg-white">
        <div className="container mx-auto px-6 text-center space-y-5">
          <AnimatedGradientText>
            <span
              className={cn(
                `inline animate-gradient text-xl bg-gradient-to-r text-gay-500  bg-[length:var(--bg-size)_100%]  `,
              )}
            >
              O que nossos usuários dizem
            </span>
          </AnimatedGradientText>


          <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Entre em contato</h3>
          <p className="text-gray-600 mb-8">Tem dúvidas? Fale conosco!</p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Seu E-mail"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Sua Mensagem"
                rows={5}
                maxLength={500}

                className="w-full max-h-[250px] min-h-[100px] px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 w-full rounded-md shadow-md hover:bg-green-600 transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-black py-6 text-center">
        <div className="border-t border-gray-200 py-4 mx-[20%] text-wrap"></div>
        <p className="text-sm md:text-md text-center text-wrap">&copy; 2024 Focusify. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
