import Counter from './counter';

export default function Home() {
  return (
    <main>
      <h1>Button Counter</h1>
      <Counter />
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}