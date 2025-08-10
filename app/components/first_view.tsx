import { CalendarIcon, CheckIcon, SignalIcon } from "lucide-react";
import Button from "./button";
import Cube from "./cubo";

export default function FirstView() {
    return (
      <>
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Text Container */}
        <div className="text-white text-center lg:text-left max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Respaldado por BTM Studio</h2>
          <p className="text-lg md:text-xl">
            ¡Empezar a trabajar y ganar dinero nunca fue tan fácil! Nuestra plataforma te conecta con oportunidades laborales de manera rápida y sencilla.
            Completa tareas, acumula ganancias y retira tu dinero inmediatamente. ¡Tu esfuerzo se ve recompensado al instante!
          </p>
        </div>

        {/* Cube Container */}
        {/* The Cube component is already defined and its automatic rotation was handled in cubo.tsx */}
        {/* We just need to ensure it's part of the flex container */}
        {/* The Cube component's own styling will handle its size and appearance */}

      <Cube/>
      </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <br/>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-blue">
                 La plataforma de Trabajo del siguiente nivel 
            </h1>
            <p className="text-white md:text-xl dark:text-gray-400">
            Nos comprometemos a brindar una experiencia cercana y segura. Nos preocupa tu inversión de tiempo y de dinero, por eso ofrecemos la mejor estrategia para proteger estos recursos. 
            </p>
            <div className="flex flex-col gap-2 md:flex-row">
                <Button className="w-full md:w-auto" size="lg" variant="primary">
                Comienza ahora
                </Button>
                <Button className="w-full md:w-auto" size="lg" variant="secondary">
                Conoce más
                </Button>
            </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                height="500"
                src="/trabajando.webp"
                width="500"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3">
            <div className="space-y-2 text-center">
              <CalendarIcon className="mx-auto h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-bold"></h3>
              <p className="text-gray-500 dark:text-gray-400">
                Organizamos las actividades de tal manera que sea facil cumplir con el trabajo a tiempo.
              </p>
            </div>
            <div className="space-y-2 text-center">
              <CheckIcon className="mx-auto h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-bold">Cumplir con las tareas</h3>
              <p className="text-gray-500 dark:text-gray-400">Esta plataforma facilita el seguimente de las tareas completadas y la recompeza por cumpliarlas.</p>
            </div>
            <div className="space-y-2 text-center">
              <SignalIcon className="mx-auto h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-bold">Covertura</h3>
              <p className="text-gray-500 dark:text-gray-400">En todo momento puedes ver el avance, notificar modificaciones, pausar entregas</p>
            </div>
          </div>
        </section>
      </>
    )
  }