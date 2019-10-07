 DELETE_DELETE_TASK = 'DELETE_TASK'
 DELETE_TOGGLE_TASK = 'TOGGLE_TASK'
 DELETE_CREATE_TASK= 'CREATE_TASK'
function task_reducer(state = [], action){

    switch (action.type){
        case 'DELETE_TASK'
    }
    
   


























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    const dispatch = (action) => {
        state = root_reducer(state, action)

        listenersArray.forEach(rec => rec())
    }
    const getState = () => state

    return {

        getState,
        subscribe,
        dispatch

}







//unsubscribe()










































const store = createStore.root_reducer

unsubcribe = store.subcribe(
    () => console.log("change in state happening now : ", store.getState)
)

//unsubscribe

store.subscribe(
    () => addTasksToDOMM()
)

store.subscribe(
    () => addMoviesToDOMM()
)

store.subscribe(
    () => console.log("listener compleated!!")
)

function addTasksToDOM(){
    const task = store.getState()

    task.forEach( (r) => {

        const ol = document.getElementById ('task_list')

        const child = document.createElement ('li')
        const text = document.createTextNode()

    })
}





function delete_task_action_creator(id){
    return {
        type : DELETE_TASK,
        id :id
    }
}
function toggle_task_action_createor(id){
    return{
        type :TOGGLE_TASK,
        id :id
    }
}
function create_task_action_createor(newId, newTask){
    return{
        type :CREATE_TASK,
        task : {
            id :newId,
            name :newTask,
            done :false
        }
    }
}












function toggle_movie_action_creator(id){
    return {
        type : TAGLE_MOVIE,
        id :id
    }
}


function deleate_movie_action_createor(id){
    return{
        type :TOGGLE_TASK,
        id :id
    }
}
function create_task_action_createor(newId, newTask){
    return{
        type :CREATE_TASK,
        task : {
            id :newId,
            name :newTask,
            done :false
        }
    }
}




















     function toggle_movie_actio_creator(id){
    return{
        type : TOGGLE_MOVIE,
        movie : {
            id : newId,
            name : newMovie,
            done :false
        }
    }
}
store.dispatch(
    create = task_actio_creator(0, 'will go for walk)
)

function add_movie({
    store.dispatch(toggle_tast_action_creator(0))
    store.dispatch(delete_task_action_creator(0))
    store.dispatch
    store.dispatch(deleate_task_action_creator() 'Mr. Bean)
    */

function add_task(){
    const newTask = document.getElementById('taxt_task' .value)
}
store.despatch(
    create_task_action_creator(0, newTask){

    }
)


function add_movie(){
    const newMovie = document.getElementById('txt_movie') .value

    store.dispatch(
        add_movie_action_creator(0, newMovie)
    )

    
}





function add_task()











function add_movie_action_creat(newId, newName){
    return{
        type : add_movie,
        movies : {
            id : Named,
            name : newMovie,
            done :false
        }
    }
}





     


































































function add_task() {
    const newTask = document.getElementById('txt_task').value

    store.dispatcher(
        create_task_action_creator(0, newTask)
    )
}

function add_movie() {
    const newMovie = document.getElementById('txt_movie').value

    store.dispatcher(
        create_movie_action_creator(0, newMovie)
    )
}
    









