import Image from 'next/image';

interface IAuthor {
  name: string,
  photo: string,
}

export default function Author({ name, photo }: IAuthor) {
  return (
    <div className="m-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Image
        src={photo}
        alt={`${name}'s profile picture.`}
        width={48}
        height={48}
        className="rounded-full"
      />

      <span>
        <p className="text-gray-700">Escrito por</p>
        <p className="font-bold">{name}</p>
      </span>

    </div>
  );
}
