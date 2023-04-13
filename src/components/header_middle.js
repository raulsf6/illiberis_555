import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Quienes somos', href: 'aboutus' },
  { name: 'Secciones', href: '#' },
  { name: 'Actividades', href: '#' },
]

export default function Header() {
  return (
    <header className="bg-blue-800">
      <nav className="px-4 sm:px-6 lg:px-8 mx-auto" aria-label="Top">
          <div className="flex w-full flex-col lg:flex-row mx-auto py-3 items-center border-b border-indigo-500 lg:border-none">
            <Link href="/">
              <Image
                className=""
                height={60}
                width={60}
                src="/lis_flower.png"
                alt=""
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link, index) => (
                <Link key={index} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </Link>
              ))}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
