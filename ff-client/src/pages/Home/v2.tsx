'use client';

import { FormEvent, useRef, useState } from "react";

export default function HomeV2() {
  const inputRef = useRef(null) as any
  const [name, setName] = useState('')

  function handleForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setName(inputRef.current?.value)
  }

  return (
    <main className="flex items-center justify-center h-[90%] flex-col gap-5">
      <form className="flex items-center justify-center flex-col gap-5" onSubmit={handleForm}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter with your name"
          className="p-4 bg-white border-slate-200 w-[500px] shadow-md border rounded-3xl outline-slate-400"
        />
      </form>
      <h2 className="text-2xl">{name && `Hi ${name}!`}</h2>
    </main>
  )
}
