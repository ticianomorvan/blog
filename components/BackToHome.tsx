import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'

const BackToHome = () => (
  <Link href="/">
    <span className="flex max-w-max gap-2 transition duration-150 hover:cursor-pointer hover:text-blue-700">
      <FaArrowLeft className="self-center" />
      Volver al inicio
    </span>
  </Link>
)

export default BackToHome;
