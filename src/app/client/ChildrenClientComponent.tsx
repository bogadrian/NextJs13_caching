'use client';

import { useState } from 'react';
import { useInterval } from '../useInterval';

export const ChildrenClientComponent = () => {
  const [time, setTime] = useState();

  useInterval(() => {
    fetch('http://localhost:3000/api/clock')
      .then(res => res.json())
      .then(res => setTime(res));
  }, 1000);

  return (
    <>
      <h1>Time in client {time}</h1>
    </>
  );
};
