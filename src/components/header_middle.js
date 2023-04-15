import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Quienes somos", href: "aboutus" },
  { name: "Secciones", href: "sections" },
  { name: "Actividades", href: "#" },
];

export default function Header() {
  return (
    <header className="bg-blue-800">
      <nav className="px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full lg:flex-row mx-auto py-3 items-center border-b border-indigo-500 justify-center">
          <Link href="/">
            <Image
              className="lg:m-0 m-2"
              height={60}
              width={60}
              src="/lis_flower.png"
              alt=""
            />
          </Link>
          <div className="hidden ml-10 space-x-8 lg:block">
            {navigation.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div class="lg:ml-auto lg:block inline-block lg:m-0 m-2">
            <Image 
              height={50}
              width={50}
              src="/group_logo.gif"
              alt=""
            />
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
