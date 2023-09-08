const dynamic = 'force-dynamic';

import Link from 'next/link';
import styles from '../page.module.css';
import Children from './children';

const getTime = async () => {
  const time = await fetch('http:localhost:3000/api/clock');

  const res = await time.json();
  return res;
};

export default async function Clock() {
  const time = await getTime();

  return (
    <main className={styles.main}>
      <h1>Clock route</h1>
      <h1>Time {time}</h1>
      <Link href="/settings">
        <h1>Go to settings</h1>
      </Link>
      <Children />
    </main>
  );
}
