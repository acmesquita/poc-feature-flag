import { ReactNode } from "react"
import { Header } from "./header"

interface Params {
  children: ReactNode
}

export function Page({ children }: Params) {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <Header />
      <main className="p-4 max-w-[1040px] mx-auto w-full h-full ">
        {children}
      </main>
    </div>
  )
}