import './App.css';
import { ThemeProvider } from "./components/ThemeContext";
import Clock from "./components/Clock"
import Background from "./components/Background";
import Footer from "./components/Footer";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
        <ThemeProvider>
            <Background />
            <Settings />
            <Clock />
            <Footer />
        </ThemeProvider>
    </div>
  );
}

export default App;
