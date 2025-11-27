import React from "react";

// const reducer = (state, action) => {
// switch(action.type) {
//     case 'ADD_TODO':
//     case 'TOGGLE_TODO':
//     case 'DELETE_TODO':
//     case 'DELETE_ALL':
//     case 'SET_ACTIVE_TAB':
//     case 'SET_SEARCH':

//     default:
//       return state;
//   }
// }

const TaskContext = React.createContext("");

export const TaskContextProvider = ({ children }: React.PropsWithChildren) => {
  // const [state, dispatch] = React.useReducer(reducer, undefined, init?)
  return <TaskContext.Provider value="">{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const ctx = React.useContext(TaskContext);
  if (!ctx) throw new Error("useTodoContext must be used inside TodoContextProvider");
  return ctx;
};
