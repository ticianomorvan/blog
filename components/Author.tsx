import Image from 'next/image'
import Socials, { SocialsType } from './Socials'

type AuthorType = {
  name: string,
  photo: string,
  socials: SocialsType
}

const Author = ({ name, photo, socials }: AuthorType) => (
  <div className="m-4 flex justify-center gap-4">
    <Image
      src={photo}
      alt={`${name}'s profile picture.`}
      width={48}
      height={48}
      className="rounded-full"
    />

    <span className="flex items-center gap-4">
      <p className="font-bold">{name}</p>
      {'>'}
      <Socials
        instagram={socials.instagram}
        github={socials.github}
        linkedin={socials.instagram}
      />
    </span>
  </div>
)

export default Author;
