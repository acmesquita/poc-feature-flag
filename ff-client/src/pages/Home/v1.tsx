'use client';

import { FormEvent, useRef } from "react";

export default function HomeV1() {
  const inputRef = useRef(null) as any

  function handleForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert(`Hi ${inputRef.current?.value}`)
  }

  return (
    <main className="flex items-center justify-center h-[90%] flex-col gap-5">
      <form className="flex items-center justify-center" onSubmit={handleForm}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter with your name"
          className="p-4 bg-white border-slate-200 w-[500px] shadow-md border rounded-3xl outline-slate-400"
        />
      </form>
    </main>
  )
}
