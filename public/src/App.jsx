import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;