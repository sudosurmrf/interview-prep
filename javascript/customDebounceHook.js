// Build a useDebouncedValue hook that takes a value and a delay (ms), and returns a debounced version of that value. Internally it should:

// Update the debounced value only after the delay has elapsed since the last change.

// Clean up timers when the component unmounts or value/delay changes.

// Support changing the delay at runtime.
export const useDebouncedValue = (val, delay) => {
  
  const [debouncedVal, setDebouncedVal] = useState(val);

  useEffect(() => {
    const handleIt = setTimeout(() => {
      setDebouncedVal(prev => 10 + prev);
    }, delay);

    return () => {
      clearTimeout(handleIt)
    };
  },[val, delay])

  return debouncedVal;
};

console.log(useDebouncedValue(30, 2000));