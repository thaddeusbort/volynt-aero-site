import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

// export const getStaticProps: GetStaticProps = async () => {
//   const { frontMatter } = await getHomePageContent();
//   return {
//     props: { frontMatter },
//   };
// };

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const logo = "/img/logo.webp";
  const menu = [
    { "label": "Home", "link": "/" },
    { "label": "Team", "link": "/team"},
    { "label": "Solutions", "link": "/solutions" },
    { "label": "Contact Us", "link": "/contact" }
  ];
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row justify-between items-center my-5">
          <div className="flex w-full lg:w-auto items-center justify-between"> <a href="/" className="text-lg"> <img src={logo} alt="Volynt Aero" loading="eager" width="200" height="76" decoding="async"/> </a>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen) }
                className="text-gray-800">
                <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path className={`${isOpen ? "block" : "hidden"}`} fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
                  <path className={`${!isOpen ? "block" : "hidden"}`} fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <nav className={`w-full lg:w-auto mt-2 lg:flex lg:mt-0 ml-auto mr-10 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row lg:gap-3">
              {menu.filter(item => !!item?.link && item?.link != "/contact").map((item, i) => (
                <li key={i}> <Link href={item?.link!} className="flex lg:px-3 py-2 text-primary-100 font-medium border-b-4 border-solid border-white hover:opacity-80 lg:hover:border-primary-100"> {item?.label} </Link> </li>
              ))}
            </ul>
            <div className="lg:hidden flex items-center mt-3 gap-4">
              <a href="/contact" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-black text-white hover:bg-gray-800 border-2 border-transparent">Contact Us</a>
            </div>
          </nav>
          <div>
            <div className="hidden lg:flex items-center gap-4">
              <a href="/contact" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800 border-2 border-transparent">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
