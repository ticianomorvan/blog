import { formatDistance, parseISO } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import Link from 'next/link';

interface IArticleCard {
  id: string,
  title: string,
  subtitle: string,
  categories: string[],
  date: string,
}

/**
 *
 * @param articleData - Required fields from the article
 * @returns a clickable card that redirects user to the shown article.
 */
export default function ArticleCard({
  id, title, subtitle, categories, date,
}: IArticleCard) {
  return (
    <Link href={`/articles/${id}`}>
      <section className="p-4 rounded-lg border-2 border-gray-600 animated shadow-lg bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
        <h3 className="text-3xl">{title}</h3>
        <h4 className="text-xl font-normal">{subtitle}</h4>
        <p className="text-gray-600 my-4">
          {formatDistance(parseISO(date), new Date(), { addSuffix: true, locale: esLocale })}
        </p>
        <ul className="flex gap-2">
          {categories.map((category) => (
            <li
              key={`category-${category}`}
              className="p-2 bg-blue-700 text-gray-100 rounded-lg"
            >
              {category}
            </li>
          ))}
        </ul>
      </section>
    </Link>
  );
}
