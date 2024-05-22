import React, { useContext } from 'react';
import { ExerciseContext } from '../ExerciseContext';

export default function Cards(props) {
    const { saveExercise } = useContext(ExerciseContext);

    return (
        <div className="container-card p-3 d-flex flex-row flex-wrap justify-content-center text-start">
            {props.bpData.map((e) => (
                <div key={e.id} className=" m-1 card-box p-1">
                    <div className="card shadow card-exercise">
                        <img src={e.gifUrl} className="" alt={e.name} />
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">Target: {e.target}</p>
                            <button className="btn btn-primary w-100" onClick={() => saveExercise(e)}>Save</button>
                            {/* <a href="#" className="btn btn-primary">Instructions</a> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}