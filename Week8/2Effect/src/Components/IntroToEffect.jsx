import { useState, useEffect } from "react";

function IntroToEffect() {
  // State variables:
  // count: manually incremented by button click
  // seconds: automatically incremented every second
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Example 1: Basic Effect - Runs after EVERY render
  // This effect has no dependency array, so it runs after every state change
  // or prop update that causes a re-render
  useEffect(() => {
    console.log("Effect with no dependency array ran");
  });

  // Example 2: Effect with Dependencies - Runs only when count changes
  // The effect will only trigger when the 'count' value changes
  // This is useful for responding to specific state/prop changes
  useEffect(() => {
    console.log("Effect that depends on count ran");
  }, [count]);

  // Example 3: Effect with Empty Dependencies - Runs ONCE after initial render
  // The empty array [] means this effect runs only when the component mounts
  // Similar to componentDidMount in class components
  useEffect(() => {
    console.log("Effect with empty dependency array ran");
  }, []);

  // Example 4: Effect with Cleanup - Demonstrates cleanup function
  // The cleanup function (returned function) runs before:
  // 1. The effect runs again
  // 2. The component unmounts
  // This prevents memory leaks and unwanted behavior
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Effect that runs once after 2 seconds");
    }, 2000);
    return () => {
      clearTimeout(timer); // Cleanup: prevents the timeout from firing if component unmounts
    };
  }, []);

  // Example 5: Seconds Counter - Practical example combining concepts
  // - Uses setInterval to increment seconds every 1000ms (1 second)
  // - Uses cleanup to prevent multiple intervals running
  // - Uses functional update form of setState (prev => prev + 1) to ensure accuracy
  useEffect(() => {
    const secondsTimer = setInterval(() => {
      setSeconds((prev) => prev + 1); // Using functional update to prevent stale closures
    }, 1000);

    return () => {
      clearInterval(secondsTimer); // Cleanup: prevents memory leaks when component unmounts
    };
  }, []);

  return (
    <div>
      <h1>Understanding useEffect</h1>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <p>Time since page load: {seconds} seconds</p>
      </div>
      <div>
        <h2>Effect Examples:</h2>
        <ol>
          <li>
            Basic Effect: Check console for "Effect ran!" message on every
            render
          </li>
          <li>Effect with Dependencies: Check console for count updates</li>
          <li>
            Effect with Empty Dependencies: Check console for mount message
          </li>
          <li>
            Effect with Cleanup: Check console for 2-second delayed message
          </li>
          <li>Seconds Counter: Shows time since component mounted</li>
        </ol>
      </div>
    </div>
  );
}

export default IntroToEffect;
