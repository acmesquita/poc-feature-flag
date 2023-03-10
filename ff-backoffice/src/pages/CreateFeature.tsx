import { Form } from "react-router-dom";
import { Page } from "../components/page";

export function CreateFeature() {
  return (
    <Page>
      <h1 className="text-xl">Create Feature</h1>
      <Form method="post" action="/create-feature" className="flex flex-col gap-7 items-center justify-center max-w-[800px] mx-auto mt-10">
        <label htmlFor="flag" className="text-base text-zinc-300 flex flex-col gap-1">
          Flag
          <input type="text" id="flag" name="flag" className="p-3 rounded bg-zinc-700 border-zinc-900 w-[357px]" autoFocus/>
        </label>
        <button
          type="submit"
          className="w-[357px] bg-zinc-900 px-8 py-4 rounded-lg hover:bg-zinc-700"
        >
          Create
        </button>
      </Form>
    </Page>
  )
}