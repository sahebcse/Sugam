import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  Route,
  Link,
  Routes,
  BrowserRouter as Router,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { app } from "./config/firebase-config";
import LandingPage from "./views/basic/LandingPage";
import AboutPage from "./views/basic/About";
import SuperLogin from "./views/basic/SuperLogin";
import Register from "./views/basic/Register";
import Navbar from "./views/basic/Navbar";
import { useDispatch } from "react-redux";
import { userDirLogin } from "./actions/auth";
import 'mapbox-gl/dist/mapbox-gl.css';
import { v4 as uuidv4 } from 'uuid';


import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import Dashboard from "./views/dashboard/Dashboard";
import CreateSos from "./components/Patient/CreateSos";
import BookAppointment from "./components/Patient/BookAppointment";
import OrderPrescription from "./components/Patient/OrderPrescription";
import ConfirmAppointment from "./components/Doctor/ConfirmAppointment";
import RespondToSos from "./components/Doctor/RespondToSos";
import CreatePrescription from './components/Doctor/CreatePrescription'
import Prescription from "./components/Appointment/Prescription";

import Medicine from "./components/Medicine";


import Video from './components/conference/Video'
import MapMarker from "./components/Map/MapMarker";
import MapGeolocation from "./components/Map/MapGeolocation";
import MapTwoPoints from "./components/Map/MapTwoPoints";
import MapCustomSource from "./components/Map/MapCustomSource";

import AppointmentWindow from "./views/basic/AppointmentWindow";
import PatientChatWindow from "./components/chat/PatientChatWindow";
import DoctorChatWindow from "./components/chat/DoctorChatWindow";
import HealthcareWorkerChatWindow from "./components/chat/HealthcareWorkerChatWindow";
import ConfirmPrescription from "./components/HealthWorker/ConfirmPrescription";
import WorkerRespondToSos from "./components/HealthWorker/WorkerRespondToSos";


function App() {
  const dispatch = useDispatch();

  

  return (
    <div className="App">
      <Router>
      <NotificationContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<SuperLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book_appointment" element={<BookAppointment />} />
          <Route path="/create_sos" element={<CreateSos />} />
          
          <Route path="/medicines" element={<Medicine />} />


          <Route path="/video" element={<Navigate to={`/room/${uuidv4()}`} replace />} />

          <Route path={`/room/:id`} element={<Video />} />

          <Route path="/order_prescription" element={<OrderPrescription />} />
          <Route path="/confirm_appointment" element={<ConfirmAppointment />} />
          <Route path="/createPrescription" element={<CreatePrescription />} />
          <Route path="/respond_to_sos" element={<RespondToSos />} />
          
          <Route path="/map_marker" element={<MapMarker />} />
          <Route path="/map_geolocation" element={<MapGeolocation />} />
          <Route path="/map_two_points" element={<MapTwoPoints />} />
          <Route path="/map_custom_source" element={<MapCustomSource />}  />

          

          <Route path="/appointment/:appointmentId" element={<AppointmentWindow/>} />
          <Route path="/prescription/:id" element={<Prescription/>} />


          {/* HEALTHWORKER DASHBOARD ROUTES */}
          <Route exact path="/confirm_prescription" element={<ConfirmPrescription/>} />
          <Route exact path="/worker_respond_to_sos" element={<WorkerRespondToSos/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
