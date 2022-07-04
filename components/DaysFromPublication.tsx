import { formatDistance, parseISO } from 'date-fns';
import esLocale from 'date-fns/locale/es';

type PropsType = {
  plainDate: string;
}

const DaysFromPublication = ({ plainDate }: PropsType) => {
  const formattedDate = formatDistance(
    new Date(parseISO(plainDate)),
    new Date(),
    { addSuffix: true, locale: esLocale }
  )

  return <p className="self-center text-center text-gray-600">{formattedDate}</p>
}

export default DaysFromPublication;