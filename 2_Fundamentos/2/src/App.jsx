import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";

import Event from "./components/Event";
function App() {
  return (
    <div className="App">
      <h1>my First Comp</h1>
      <FirstComponent />
      <TemplateExpression />
      <Event />
    </div>
  );
}

export default App;
