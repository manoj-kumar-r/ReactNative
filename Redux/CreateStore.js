const {createStore} = Redux;

const initState = {
    todos:[],
    posts:[]
}

//create a function to prefrom action 
function myReducer(state = initState ,action){
    console.log(action,state);
    if(action.type === 'ADD_TODO'){
      console.log("Action ADD")
      return {
        todos: [...state.todos,action.todo]
      }
    }
}

//create a store 
const store = createStore(myReducer);

//create a action 
const toDoAction = {
    type: 'ADD_TODO',
    todo: 'Buy Milk'
}

//pass action of the do 
store.dispatch(toDoAction);