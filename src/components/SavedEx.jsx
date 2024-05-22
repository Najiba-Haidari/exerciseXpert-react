import React, { useContext } from 'react';
import { ExerciseContext } from '../ExerciseContext'; // Adjust the import path

export default function SavedEx() {
  const { savedExercises, deleteExercise } = useContext(ExerciseContext);

  return (
    <div>
      <h1>Saved Items</h1>
      {savedExercises.length === 0 ? (
        <p>No exercises saved.</p>
      ) : (
        <div className="container-card p-3 d-flex flex-row flex-wrap justify-content-center text-start">
          {savedExercises.map((exercise) => (
            <div key={exercise.id} className="m-1 card-box p-1">
              <div className="card shadow card-exercise">
                <img src={exercise.gifUrl} className="" alt={exercise.name} />
                <div className="card-body">
                  <h5 className="card-title">{exercise.name}</h5>
                  <p className="card-text">Target: {exercise.target}</p>
                  <button className="btn btn-danger w-100" onClick={() => deleteExercise(exercise.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
