import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Survey from './Pages/Survey';
import ClientForm from './Components/ClientForm';
import FreelanceForm from './Components/FreelanceForm';
import Error from './Components/Error';
import Results from './Pages/Results';
import Freelances from './Pages/Freelances';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />}>
                    {/* <Route path="client" element={<ClientForm />} />
                    <Route path="freelance" element={<FreelanceForm />} /> */}
                </Route>
                <Route path="*" element={<Error />} />
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
