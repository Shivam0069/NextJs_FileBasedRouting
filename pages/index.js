import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
}
