type TitleType = {
  text: string,
}

export default function Title({ text }: TitleType) {
  return <h1 className="mt-10 text-4xl font-bold text-center">{text}</h1>;
}
