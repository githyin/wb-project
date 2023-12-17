import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Professor from "./Routes/Professor";
import Student from "./Routes/Student";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/professor" element={<Professor />}></Route>
        <Route path="/student" element={<Student />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
