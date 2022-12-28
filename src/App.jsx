import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { CrudProvider } from "./contexts/CrudContext";

const Counter = lazy(() => import("./pages/Counter"));
const CounterImproved = lazy(() => import("./pages/CounterImproved"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));
const CrudAPI = lazy(() => import("./pages/CrudAPI"));

function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter-improved" element={<CounterImproved />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route
              path="/crud-api"
              element={
                <CrudProvider>
                  <CrudAPI />
                </CrudProvider>
              }
            />
            <Route path="" element={<Navigate to="/counter" />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
