import Counter from './counter';

export default function Home() {
  return (
    <main>
     
      <h1>Default Button Counter</h1>
      <Counter />
      
      <h2>Custom Button Counter </h2>
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}