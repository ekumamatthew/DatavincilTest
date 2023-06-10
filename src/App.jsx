import { useState } from "react";

import MainIndex from "./assets/assessment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <MainIndex />
    </div>
  );
}

export default App;
