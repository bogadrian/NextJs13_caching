const getTime = async () => {
  const time = await fetch('http:localhost:3000/api/clock', {
    cache: 'no-store'
  });

  return await time.json();
};

export default async function Children() {
  const time = await getTime();

  return <h1>Time in children component {time}</h1>;
}
