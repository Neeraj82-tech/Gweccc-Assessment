import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import VideoSection from './components/VideoSection';
import DescriptionSection from './components/DescriptionSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoSection />
      <DescriptionSection />
      <Banner />
      <RegistrationForm />
      <About />
    </div>
  );
}

export default App;
