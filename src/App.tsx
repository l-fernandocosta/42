import { Home } from "./pages/Home";
import { NewChat } from "./pages/NewChat";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";


export function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/room/new" element={<NewChat />} />
          <Route path="/admin/:id"   element={<AdminRoom/>}/>
          <Route path=":id" element={<Room/>} />
        </Routes>
    </BrowserRouter>
  );
}

