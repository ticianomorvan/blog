type SubtitleType = {
  text: string;
}

export default function Subtitle({ text }: SubtitleType) {
  return <h2 className="m-2 text-2xl text-gray-600 text-center">{text}</h2>;
}
