// Importiere die redux-Bibliothek
import { createRoot } from 'react-dom/client';

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 2 };
      case 'DECREMENT':
        return { count: state.count - 3 };
      default:
        return state;
    }
  };
  
  // Aktionen
  const incrementAction = { type: 'INCREMENT' };
  const decrementAction = { type: 'DECREMENT' };
  
  // Beispielaufruf des Reducers
  console.log(counterReducer(undefined, incrementAction)); // { count: 1 }
  console.log(counterReducer({ count: 5 }, decrementAction)); // { count: 4 }
  