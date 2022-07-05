type CategoryType = {
  name: string
}

export default function Category({ name }: CategoryType) {
  return <p className="w-min px-2 py-1.5 rounded-lg bg-gray-200 text-gray-800">{name}</p>;
}
