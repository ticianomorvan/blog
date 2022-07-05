import Category from './Category';

type CategoryGroupType = {
  categories: string[],
}

export default function CategoryGroup({ categories }: CategoryGroupType) {
  return (
    <ul className="py-4 flex gap-2">
      {categories.map((category) => (
        <Category key={category} name={category} />
      ))}
    </ul>
  );
}
