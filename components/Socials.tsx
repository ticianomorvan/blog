import type { ReactElement } from 'react';
import type { IconType } from 'react-icons';
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import User from 'lib/user';

const supportedSocials = [
  {
    name: 'instagram',
    icon: <FaInstagram />,
  },
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'github',
    icon: <FaGithub />,
  },
];

export type SocialIconType = {
  domain: string;
  user: string;
  icon: ReactElement<IconType>
}

function SocialIcon({ domain, user, icon }: SocialIconType) {
  return (
    <a href={`https://${domain}.com/${user}`} rel="noreferrer" target="_blank">
      <span className="text-2xl transition duration-150 hover:text-blue-700 sm:text-2xl">
        {icon}
      </span>
    </a>
  );
}

export default function Socials() {
  return (
    <ul className="flex gap-4">
      {supportedSocials.map(({ name, icon }) => {
        if (User.socials && name in User.socials) {
          return (
            <li key={name}>
              <SocialIcon
                domain={name}
                icon={icon}
                user={User.socials[name]}
              />
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
}
