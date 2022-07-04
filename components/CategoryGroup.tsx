import Category from './Category';

type CategoryGroup = {
  categories: string[],
}

const CategoryGroup = ({ categories }: CategoryGroup) => (
  <ul className="py-4 flex gap-2">
    {categories.map((category) => (
      <Category key={category} name={category} />
    ))}
  </ul>
)

export default CategoryGroup;