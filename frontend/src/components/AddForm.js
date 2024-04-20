import {useEffect, useState} from 'react'

const AddForm = () =>{
    
    const [title,setTitle]=useState('');
    const [load,setLoad]=useState('');
    const [reps,setReps]=useState('');
    const [error,setError]=useState(null);
    const [date,setDate]=useState();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const newWorkout = {title,load,reps,date};

        const response = await fetch("/api/workouts",{
            method:"POST",
            body:JSON.stringify(newWorkout),
            headers:{
                'Content-Type':"application/json"
            }
        });
        const data = await response.json();

        if(!response.ok){
            console.log("ERRORR",data.error);
            setError(data.error);
        }

        if(response.ok){
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log("New workout added");
            window.location.reload();
        }
        
    }


    return(
        <div className="workout-form">
            <form  onSubmit={handleSubmit}>
        <h3>Add new Workout</h3>

        <label>Excersize Title:</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)}/>
       
        <label>Load(in kg):</label>
        <input type='text' onChange={(e)=>setLoad(e.target.value)}/>
      
        <label>Reps:</label>
        <input type='text' onChange={(e)=>setReps(e.target.value)}/>
        <label>Date:</label>
        <input type='date' onChange={(e)=>setDate(e.target.value)}/>

        <button >Add</button>
        {error && <div className='error'>{error}</div>}
            </form>
        </div>
    );
}

export default AddForm;