import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useAppDispatch } from "./hooks";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import Homepage from "./pages/Homepage/Homepage";
import { getCatsFromLocalStorage } from "./store/userSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCatsFromLocalStorage());
  }, [dispatch]);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="/favourite" element={<FavouritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
