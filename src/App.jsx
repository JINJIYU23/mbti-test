import MainPage from "./pages/MainPage";
import QuestionPage from "./pages/QuestionPage";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/question" element={<QuestionPage/>} />
        <Route path="/result/:mbti" element={<ResultPage/>} />
      </Routes>
    </div>
  );
}

export default App;
