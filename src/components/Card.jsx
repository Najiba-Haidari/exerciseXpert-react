import React, { useContext } from 'react';
import { ExerciseContext } from '../ExerciseContext';

export default function Cards(props) {
    const { saveExercise, text } = useContext(ExerciseContext);

    return (
        <div className="container-card d-flex flex-row flex-wrap justify-content-center text-start">
            {props.bpData.map((e) => (
                <div className="card-box col-12 col-sm-12 col-md-12 col-lg-6 mb-3 p-2">
                    {/* <div className="card shadow card-exercise ">
                        <img src={e.gifUrl} className="" alt={e.name} />
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">Target: {e.target}</p> */}
                    <div className="card mb-1 shadow " key={e.id} >
                        <div className="row">
                            <div className="col-md-6">
                                <img src={e.gifUrl} className="img-fluid rounded-start" alt={e.name} />
                            </div>
                            <div className="col-md-6 bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">Target: {e.target}</p>
                                    <p className="card-text">Equipment: {e.equipment}</p>
                                    <ul className="card-text">Secondary Muscles: {e.secondaryMuscles.map((m, i) => (
                                        <li key={m}>{m}</li>
                                    ))}</ul>
                                    {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                                <button id="save" className="btn btn-primary w-25 p-2" onClick={() => saveExercise(e)}>{text[e.id] || "Save"}</button>

                            </div>

                        </div>

                    </div>

                    {/* <a href="#" className="btn btn-primary">Instructions</a> */}
                    {/* </div>
                    </div> */}
                </div>
            ))}
        </div>
    )
}