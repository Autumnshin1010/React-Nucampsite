const initialState = { //initial value
    coins: 0,
    health: 100
};

const actionsArray = [ //the action 
    { type: 'ADD_COINS', payload: 20 },
    { type: 'SUBTRACT_HEALTH', payload: 5 }
];
//how reducers are used in Redux
const marioReducer = (state, action) => {
                     //State(exsiting app) //each action from the actions arrays in turn(accumulator)
    console.log(action);
    
    switch (action.type) {
        case 'ADD_COINS':
            return {
                ...state,
                coins: state.coins + action.payload 
            };
        case 'SUBTRACT_COINS':
            return {
                ...state,
                coins: state.coins - action.payload
            };
        case 'ADD_HEALTH':
            return {
                ...state,
                health: state.health + action.payload
            };
        case 'SUBTRACT_HEALTH':
            return {
                ...state,
                health: state.health - action.payload
            };
        default: //If the action type is not recognized, the existing state is simply returned.
            return state;
    }
};
//for each action, the reducer ran, once each time returning, a new state object, based on the action,
//type and payload until the entire array of acions had been reduced and the final reduced value that was then returned as the current state.
const currentState = actionsArray.reduce(marioReducer, initialState);
                                        //reducer function as the first argument that reducer took in an accumulator value called State
                                        //passing in an initial State argument that held an object to represent the application state
//We reduce the array of actions using array reduce
console.log(currentState);



import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import './App.css';

const initState = {
    items: [
        { id: uuid(), name: 'milk' },
        { id: uuid(), name: 'coffee' },
        { id: uuid(), name: 'mochi' }
    ]
};

const listReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_ITEM':
            return {//curly bracket: package up all the properties that were spread out + updating items into a new object
                ...state,
                items: state.items.concat([ //concat: no mutating, just update react State
                    { id: uuid(), name: action.payload }
                ])
            };
        case 'REMOVE_ITEM':
            return {//returning a new object with this new items array
                ...state,
                items: state.items.filter( 
                    (item) => item.id !== action.payload.id //filtering out in the item from the new items array based on its ID
                )
            };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(listReducer, initState);
    const { items } = state;

    return (
        <div className="app-container">
            <div className="input-container">
                <AddItem dispatch={dispatch} />
        {/* component */} {/* pass the dispatch function to it as a prop */}
            </div>
            <div className="list-container">
                {items.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            item={item}
                            dispatch={dispatch}
                        /> 
        // Both AddItem and ListItem components have access to the **dispatch function** which can be used to update the state.
                    );
                })}
            </div>
        </div>
    );
}

export default App;

// Original code by Chris Kubick with modifications by Minae Lee, 2022


