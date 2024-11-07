import { useState, useEffect } from "react";
function LocalStorage() {
  // State to store our value
  const [name, setName] = useState("");

  // Load from localStorage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setName(savedName);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Save to localStorage whenever name changes
  useEffect(() => {
    localStorage.setItem("userName", name);
  }, [name]); // This effect runs whenever name changes

  return (
    <div>
      <h2>Local Storage Example</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored name: {name}</p>
    </div>
  );
}

export default LocalStorage;
