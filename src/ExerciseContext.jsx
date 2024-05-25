import React, { createContext, useState } from 'react';

// Create the context
export const ExerciseContext = createContext();

// Create the provider component
export const ExerciseProvider = ({ children }) => {
  const [savedExercises, setSavedExercises] = useState([]);
  const [text, setText] = useState("Save");

  const saveExercise = (exercise) => {
    if (!savedExercises.some(ex => ex.id === exercise.id)) {
      setSavedExercises([...savedExercises, exercise]);
      //   document.getElementById("save").textContent= "SAVED"
      setText(txt => ({...txt, [exercise.id]: "Saved"}))
      alert('Exercise saved!');
    } else {
      alert('Exercise already saved.');
    }
  };

  const deleteExercise = (exerciseId) => {
    setSavedExercises(savedExercises.filter(ex => ex.id !== exerciseId));
    setText(txt => ({...txt, [exerciseId]: "Save"}))
  };

  return (
    <ExerciseContext.Provider value={{ savedExercises, saveExercise, deleteExercise, text }}>
      {children}
    </ExerciseContext.Provider>
  );
};
