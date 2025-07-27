import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name={"Madhuresh"}
      School={"Sunbeam School"}
      total={294}
      goal={300}
      />
    </div>
  );
}

export default App;
