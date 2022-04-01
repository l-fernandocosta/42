import { Home } from "./pages/Home";
import { NewChat } from "./pages/NewChat";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { Room } from "./pages/Room";


export function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/room/new" element={<NewChat />} />
          <Route path=":id" element={<Room/>} />
        </Routes>
    </BrowserRouter>
  );
}

