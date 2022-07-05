type BodyType = {
  content: string;
}

export default function Body({ content }: BodyType) {
  return (
    <div className="article-content" dangerouslySetInnerHTML={{ __html: content }} />
  );
}
