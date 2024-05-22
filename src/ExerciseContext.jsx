import React, { createContext, useState } from 'react';

// Create the context
export const ExerciseContext = createContext();

// Create the provider component
export const ExerciseProvider = ({ children }) => {
  const [savedExercises, setSavedExercises] = useState([]);

  const saveExercise = (exercise) => {
    if (!savedExercises.some(ex => ex.id === exercise.id)) {
      setSavedExercises([...savedExercises, exercise]);
    //   document.getElementById("save").textContent= "SAVED"
      alert('Exercise saved!');
    } else {
      alert('Exercise already saved.');
    }
  };

  const deleteExercise = (exerciseId) => {
    setSavedExercises(savedExercises.filter(ex => ex.id !== exerciseId));
  };

  return (
    <ExerciseContext.Provider value={{ savedExercises, saveExercise, deleteExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
};
