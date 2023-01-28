import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <div className="link-name">Home</div>
      </Link>
      <Link href="/about">
        <div className="link-name">About</div>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
      `}</style>
    </nav>
  );
}
