import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ViewName from './views/Name';
import RouteGuard from './components/RouteGuard';
import ViewHelp from './views/Help';
import ViewDate from './views/Date';
import Header from './components/Header';
import Footer from './components/Footer';

export const UIContext = React.createContext({
  steps: [],
  currentStep: '',
  setCurrentStep: () => {},
  completedSteps: [],
  setCompletedSteps: () => {},
  name: {
    name: '',
    setName: () => {},
  }
});

function App() {
  const steps = ['name', 'help', 'date']; // determines order
  const firstStep = steps[0];

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to={`/${firstStep}`} replace /> },
    { path: "/name", element: <ViewName />},
    { path: "/help", element: <RouteGuard redirect="/" required={['name']} View={ViewHelp} /> },
    { path: "/date", element: <RouteGuard redirect="/" required={['name', 'help']} View={ViewDate} /> }
  ]);

  const [currentStep, setCurrentStep] = useState('');
  const [completedSteps, setCompletedSteps] = useState([]);
  const [name, setName] = useState('');
  const [optionA, setOptionA] = useState(false);
  const [optionB, setOptionB] = useState(false);
  const [optionC, setOptionC] = useState(false);
  const [option4, setOption4] = useState(false);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const context = {
    steps,
    currentStep,
    setCurrentStep,
    completedSteps,
    setCompletedSteps,
    name: { name, setName },
    help: { optionA, setOptionA, optionB, setOptionB, optionC, setOptionC, option4, setOption4 },
    date: { month, setMonth, day, setDay, year, setYear }
  };

  return (
    <UIContext.Provider value={context}>
      <main>
        <Header />
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
        <Footer activeStep={currentStep} />
      </main>
    </UIContext.Provider>
  );
}

export default App;
