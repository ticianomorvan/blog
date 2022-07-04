type SubtitleType = {
  text: string;
}

const Subtitle = ({ text }: SubtitleType) => <h2 className="m-2 text-2xl text-gray-600 text-center">{text}</h2>

export default Subtitle;