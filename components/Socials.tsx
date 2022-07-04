import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa';

export type SocialsType = {
  instagram?: string,
  linkedin?: string,
  github?: string
}

export type SocialIconType = {
  url: string;
  icon: ReactElement<IconType>
}

const SocialIcon = ({ url, icon }: SocialIconType) => (
  <a href={url} rel="noreferrer" target="_blank">
    <span className="text-xl transition duration-150 hover:text-blue-700">
      {icon}
    </span>
  </a>
)

const Socials = ({ instagram, linkedin, github }: SocialsType) => (
  <ul className="flex gap-2">
    {instagram ? <SocialIcon url={`https://instagram.com/${instagram}`} icon={<FaInstagram />} /> : null}
    {linkedin ? <SocialIcon url={`https://linkedin.com/${linkedin}`} icon={<FaLinkedinIn />} /> : null}
    {github ? <SocialIcon url={`https://github.com/${github}`} icon={<FaGithub />} /> : null}
  </ul>
)

export default Socials;