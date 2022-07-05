export interface IUser {
  name: string,
  profilePicture: string,
  country: {
    name: string,
    emoji: string,
  }
  role: string,
  socials: { [index: string]: string }
}

const User: IUser = {
  name: 'Ticiano Morvan',
  profilePicture: '/images/profile.jpg',
  country: {
    name: 'Argentina',
    emoji: '🇦🇷',
  },
  role: 'Frontend Developer',
  socials: {
    instagram: 'ticianomorvan',
    linkedin: 'ticianomorvan',
    github: 'Ti7oyan',
  },
};

export default User;
