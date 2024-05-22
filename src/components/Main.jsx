import { useState, useEffect } from 'react';
import Card from "./Card.jsx"

export default function Main(props) {
    
    // console.log(props.bodyParts)
    // onChange={(e) => props.setBodyPart(e.target.value)}
    const [selectedBp, setSelectedBp] = useState("")
    const [bpData, setBpData] = useState([]);
    const [isSubmitted, setIsSubmitted]= useState(false)

    const handleChange = function (e) {
        setIsSubmitted(false)
        setSelectedBp(e.target.value)
    }
    
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBp}?limit=10`;
    const API_KEY = "90e977b5d8mshf5f1067f878f899p12c888jsnc176b90ca77c";
    const getBpData = async function () {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options)
            const data = await response.json()
              setBpData(data)
            console.log(bpData)

        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (selectedBp && isSubmitted){
            getBpData()
        }     
    }, [selectedBp, isSubmitted])


    
    const handleSubmit = function (e) {
        e.preventDefault();
        if (selectedBp) {
            setIsSubmitted(true);
        }
    }
    // console.log(selectedBp)
    // console.log(getBpData())
    return (
        <div className="">
        <h1 className='m-2'>Choose your <span>Exercise</span></h1>
            <form className="form my-5 py-5" onSubmit={handleSubmit}>
                <select placeholder='Select option' className="w-50 p-2 m-2" onChange={handleChange}>
                    {/* <option value="Select a body part " selected>Select a body part</option> */}
                    {props.bodyParts.map((b) => {
                        return <option key={b} value={b}>{b}</option>
                    })}
                </select>
                <input className="btn-submit " value="Search" type="submit" />
            </form>
            <div>
            {isSubmitted && bpData ? (
                    bpData.length > 0 ? (
                        <Card bpData={bpData} setBpData={setBpData} />
                    ) : (
                        <h2>Loading Exercises for {selectedBp}</h2>
                    )
                ) : (
                    <h2>Please select a body part and click Search</h2>
                )}
            </div>
        </div>
    )
}