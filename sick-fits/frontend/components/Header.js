import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">Sick fit</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </header>
  );
}
