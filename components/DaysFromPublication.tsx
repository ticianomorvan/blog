import { format, parseISO } from 'date-fns';
import esLocale from 'date-fns/locale/es';

type PropsType = {
  plainDate: string;
}

export default function DaysFromPublication({ plainDate }: PropsType) {
  const formattedDate = format(
    new Date(parseISO(plainDate)),
    'PPP',
    { locale: esLocale },
  );

  return (
    <span className="self-center">
      <p className="text-gray-700">El día</p>
      <p className="font-bold">{formattedDate}</p>
    </span>
  );
}
