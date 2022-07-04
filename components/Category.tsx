type CategoryType = {
  name: string
}

const Category = ({ name }: CategoryType) => (
  <p className="w-min underline">{name}</p>
)

export default Category;
