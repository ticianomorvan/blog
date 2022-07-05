import type { ReactNode } from 'react';
import Footer from './Footer';

type LayoutType = {
  id: string,
  children: ReactNode
}

export default function Layout({ id, children }: LayoutType) {
  return (
    <main id={id} className="container min-h-screen m-auto flex flex-col justify-between items-center">
      <section className="w-4/5 md:w-3/5 mt-10">
        {children}
      </section>
      <Footer />
    </main>
  );
}
