import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import AddForm from '../components/AddForm';

const Home = () =>{

    const [workouts, setWorkout] = useState(null);

    useEffect(()=>{

        const fetchWorkout = async ()=>{
        const response = await fetch("/api/workouts");
        const data =await response.json();
        try{
            if(response.ok){
                setWorkout(data);
                console.log(data[0].title);
            }

            }catch(e){

            }  
    

        } 
        fetchWorkout();
    },[]);

    return(
        <div className="home">
           <div className="workouts">
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
           </div>
           
            <AddForm></AddForm>
        </div>
    )
}

export default Home