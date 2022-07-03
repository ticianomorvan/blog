import type { ReactNode } from 'react'

type LayoutType = {
  children: ReactNode
}

export default function Layout({ children }: LayoutType) {
  return (
    <main className="container flex justify-center">
      <section className="w-4/5 mt-10">
        {children}
      </section>
    </main>
  )
}