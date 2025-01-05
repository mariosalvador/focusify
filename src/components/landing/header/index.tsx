import Image from 'next/image';

export const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-2 shadow-lg rounded-full mx-6 mt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <Image src="/focusiSvg.svg" alt="Logo" width={150} height={50} priority />
        </div>
        <nav>
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