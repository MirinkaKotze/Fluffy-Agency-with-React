import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./assets/styles/index.css";
import Header from "./header";
import GrowBlock from "./mainGrow";
import ServicesBlock from "./mainServices";
import StatsBlock from "./mainStats";
import ContactForm from "./contactForm";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <GrowBlock />
    <ServicesBlock />
    <StatsBlock />
    <ContactForm />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
