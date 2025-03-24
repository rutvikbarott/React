import react from "react";
import CheckboxList from "./CheckboxList";
import { ChecklistProvider } from "./ChecklistContext";

function App() {
  return (
    <ChecklistProvider>
   <div className="App">
   <h1>Interactive Checklist in React</h1>
   <CheckboxList/>
    </div>
    </ChecklistProvider>
   
  );
}

export default App;
