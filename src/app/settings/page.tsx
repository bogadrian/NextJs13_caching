import styles from '../page.module.css';
import Link from 'next/link';

export default function Settings() {
  return (
    <main className={styles.main}>
      <h1>Settings route</h1>
      <Link href="/clock">
        <h1>Go to clock</h1>
      </Link>
      <Link href="/">
        <h1>Go home</h1>
      </Link>
    </main>
  );
}
