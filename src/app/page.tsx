import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <Link href="/login-component-1" >Login Component 1</Link>
      </div>
      <div>
        <Link href="/login-component-2" >Login Component 2</Link>
      </div>
    </div>
  )
}
