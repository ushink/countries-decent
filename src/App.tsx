import { Route, Routes } from "react-router";
import { Countries } from "./pages/Countries/Countries";
import { NotFound } from "./pages/NotFound/NotFound";
import { CountryDetail } from "./pages/CountryDetail/CountryDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/country/:id" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
