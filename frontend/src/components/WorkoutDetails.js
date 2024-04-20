
const deleteWorkout = async (e) =>{
    e.preventDefault();
    //console.log(e.target.parentNode.id);
    let parrentId = e.target.parentNode.id;
    const id = parrentId;

    const response = await fetch('/api/workouts/'+id,{
        method:"DELETE",
        headers:{
            'Content-Type':"application/json"
        }
    });
    const data = await response.json();

    if(response.ok){
        console.log("Successfully deleted!");
        window.location.reload();
    }
    window.location.reload();
}



const WorkoutDetails=({workout})=>{
    return(
            <div className="workout-details" id={workout._id}>
                    <h2>{workout.title}</h2>
                    <p> <strong>Load(kg): </strong>{workout.load}</p>
                    <p> <strong>Reps: </strong>{workout.reps}</p>
                    <p className="date"><strong>Date: </strong>{workout.date}</p>
                    <button onClick={deleteWorkout}>delete</button>
            </div>
    );
}

export default WorkoutDetails;