import User from 'lib/user';

export default function Footer() {
  return (
    <footer className="p-4 mt-6 flex justify-center w-screen bg-black">
      <p className="text-gray-300">
        Desarrollado por
        {' '}
        {User.name}
      </p>
    </footer>
  );
}
