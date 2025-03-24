import React, { createContext, useState, useContext } from "react";


const ChecklistContext = createContext();


export const ChecklistProvider = ({ children }) => {
  const [answers, setAnswers] = useState({
    "Are you a citizen?": null,  
    "Are you over 21?": null,    
  });


  const handleAnswerChange = (question, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,  
    }));
  };

  return (
    <ChecklistContext.Provider value={{ answers, handleAnswerChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};


export const useChecklist = () => {
  return useContext(ChecklistContext);
};
