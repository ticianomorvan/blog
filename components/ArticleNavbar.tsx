import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import Socials from './Socials';

function BackButton() {
  return (
    <Link href="/">
      <span className="flex max-w-max gap-2 transition duration-150 hover:cursor-pointer hover:text-blue-700">
        <FaArrowLeft className="self-center" />
        <p className="hidden self-center sm:block">Volver al inicio</p>
      </span>
    </Link>
  );
}

export default function ArticleNavbar() {
  return (
    <div className="min-w-full p-2 rounded-b-lg bg-gray-100 z-10 top-0 flex justify-between shadow-md sm:sticky">
      <BackButton />
      <Socials />
    </div>
  );
}
