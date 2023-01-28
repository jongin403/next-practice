import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/about">
        <div>About</div>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        div {
          color: black;
        }
      `}</style>
    </nav>
  );
}
