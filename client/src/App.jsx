import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SpotList from "./pages/SpotList"
import SpotDetailsPage from "./pages/SpotDetailsPage";
import EventList from "./pages/EventList";
import EventDetailPage from "./pages/EventDetailPage"
import LoginPage from "./pages/LoginPage";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";

import Navbar from "./components/Navbar/Navbar";
// import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import AddSpot from "./pages/AddSpot";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/spots/:spotId"
          element={
              <SpotDetailsPage />
          }
        />

        <Route
          path="/spots"
          element={
              <SpotList />
          }
        />

<Route
          path="/spots/create"
          element={
              <AddSpot />
          }
        />

<Route
          path="/events/:eventId"
          element={
              <EventDetailPage />
          }
        />

<Route
          path="/events"
          element={
              <EventList />
          }
        />

<Route
          path="/events/:spotId/create"
          element={
            <AddEvent />
          }
        />

<Route
          path="/events/:eventId/edit"
          element={
            <EditEvent />
          }
        />


        {/* <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          } */}
        {/* /> */}
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
