import type { ReactNode } from 'react'

type LayoutType = {
  id: string,
  children: ReactNode
}

export default function Layout({ id, children }: LayoutType) {
  return (
    <main id={id} className="container flex justify-center">
      <section className="w-4/5 mt-10">
        {children}
      </section>
    </main>
  )
}