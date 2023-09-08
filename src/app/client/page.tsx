import Link from 'next/link.js';
import styles from '../page.module.css';
import { ChildrenClientComponent } from './ChildrenClientComponent';

export default async function Clock() {
  return (
    <main className={styles.main}>
      <h1>Client component route</h1>
      <Link href="/">Go home</Link>
      <ChildrenClientComponent />
    </main>
  );
}
