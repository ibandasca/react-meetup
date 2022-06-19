import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MeetupsListProvider } from "./contexts/meetupListContext";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div data-test="app">
      <BrowserRouter>
        <MeetupsListProvider>
          <MainNavigation />
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/newmeetup" element={<NewMeetupsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </MeetupsListProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
