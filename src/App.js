import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Left from './Components/Left/left.js'
import Right from './Components/Right/right.js'


let initialState = { page: 1, right: "projects" } 

let reducer = (state = initialState, action) => {
   console.log(state)
   console.log(action)

   switch (action.type) {
      case ("INCREMENT"): 
         if (state.page >= 3) {
            return { 
               ...state,
               page: 1 
            }
         }
         return { 
            ...state,
            page: state.page + 1 
         }
   
      case ("DECREMENT"):
         if (state.page <= 1) {
            return { 
               ...state,
               page: 3 
            }
         }
         return { 
            ...state,
            page: state.page - 1
         }

      case ("FLIP_TO_PHOTOS"):
         return { 
            ...state, 
            right: "photos" 
         }

      case ("FLIP_TO_PROJECTS"):
         return { 
            ...state,
            right: "projects"
         }
   
      default:
         return state
   }
}

const store = createStore(reducer)

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <Left />
            <Right />
         </div>
      </Provider>
   );
}

export default App;
