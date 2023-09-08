import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <Link href="/clock">
        <h1>Go to clock</h1>
      </Link>
      <Link href="/client">
        <h1>Go to client</h1>
      </Link>
    </main>
  );
}
