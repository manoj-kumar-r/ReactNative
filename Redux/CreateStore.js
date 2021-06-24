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
        ...state,
        todos: [...state.todos,action.todo] 
      }
    }
  if(action.type === 'ADD_POST'){
    console.log("Action ADD")
      return {
        ...state,
        posts: [...state.posts,action.post] 
      }
  }
}

//create a store 
const store = createStore(myReducer);

store.subscribe(() => {
  console.log('State Updated');
  console.log(store.getState());
});

//create a action 
const toDoAction = { type: 'ADD_TODO', todo: 'Buy Milk'}

//pass action of the do 
store.dispatch(toDoAction);
store.dispatch({ type: 'ADD_TODO', todo: 'Sleep More'});
store.dispatch({ type: 'ADD_TODO', todo: 'Wake Up'});
store.dispatch({ type: 'ADD_POST', post: 'Posted New Comment'});
store.dispatch({ type: 'ADD_POST', post: 'Posted New Comment 2'});



