import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-2 shadow-lg rounded-full mx-6 mt-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <Image src="/focusiSvg.svg" alt="Logo" width={150} height={50} priority />
        </div>

        <div className="md:hidden block">
          <Popover>
            <PopoverTrigger>
              <Menu />
            </PopoverTrigger>
            <PopoverContent className='w-max mr-2'>
              <nav className="flex flex-col space-y-4">
                <a href="#features" className=" hover:text-yellow-300 transition">
                  Funcionalidades
                </a>
                <a href="#testimonials" className=" hover:text-yellow-300 transition">
                  Depoimentos
                </a>
                <a href="#contact" className=" hover:text-yellow-300 transition">
                  Contato
                </a>
              </nav>
            </PopoverContent>
          </Popover>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="#features" className=" hover:text-yellow-300 transition">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#testimonials" className=" hover:text-yellow-300 transition">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contact" className=" hover:text-yellow-300 transition">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}