import Input from "../components/Input";
import Textarea from "../components/ArrayTextArea";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Field Builder</h1>
        <div>
          <Input />
        </div>
        <div>
          <Textarea />
        </div>
      </header>
    </div>
  );
}
