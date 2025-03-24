import React from "react";
import { useChecklist } from "./ChecklistContext";


const checklistOptions = [
  "Are you a citizen?",
  "Are you over 21?"
];

const CheckboxList = () => {
  const { answers, handleAnswerChange } = useChecklist();


  return (
    <div>
      <h2>Checklist</h2>
      <form>
        {checklistOptions.map((question) => (
          <div key={question}>
            <h3>{question}</h3>
            <label>
              <input
                type="radio"
                name={question}
                value="Yes"
                checked={answers[question] === "Yes"}
                onChange={() => handleAnswerChange(question, "Yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name={question}
                value="No"
                checked={answers[question] === "No"}
                onChange={() => handleAnswerChange(question, "No")}
              />
              No
            </label>
          </div>
        ))}
      </form>

      <h3>Your Answers:</h3>
      <ul>
        {Object.keys(answers).map((question) => (
          <li key={question}>
            {question}: {answers[question] !== null ? answers[question] : "Not answered yet"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxList;
