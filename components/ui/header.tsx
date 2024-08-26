import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-30 bg-black bg-opacity-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className=" h-full w-28"
                width={300}
                height={100}
                src="/images/UAV Sync White.png"
                alt="uav sync"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow items-center justify-end">
            {/* Desktop sign in links */}
            <Menu />
          </nav>
          <ul className="hidden md:flex grow justify-end   items-center">
            <li>
              <Link
                href="/signin"
                className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
              >
                Sign up
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
