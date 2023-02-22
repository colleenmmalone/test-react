import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div >
    <Header className="text-blue" />
      <Header />
      <Header text="nugget" />
      <Header />

    </div>
  );
}

export default App;
