'use client';
import { useState } from 'react';

export default function Counter({initialCount=0,initialStep=1}) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  return (
    <div>
      <p aria-live="polite"> Current Sales Count: {count}</p>

      <label>Step:</label>
      <input type="number" min="1" value={step} onChange={(event =>setStep(Number(event.target.value)))}/>
      <div>
      <button onClick={() => setCount(c => c + step)}> Increment </button>
      <button onClick={() => setCount(c => c - step)}disabled={count-step<0}> Decrement </button>
       <button onClick={() => setCount(initialCount)}> Reset </button>
       </div>
    </div>
  );
}