import { Home } from "./pages/Home";
import { NewChat } from "./pages/NewChat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";


export function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new-room" element={<NewChat />} />
        </Routes>
    </BrowserRouter>
  );
}

