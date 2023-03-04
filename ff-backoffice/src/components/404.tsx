import { Link } from "react-router-dom";

export function Page404() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <h1 className="pt-[112px] text-3xl">404 not found</h1>
      <Link to="/" className="hover:underline">Back to Home</Link>
    </div>
  )
}