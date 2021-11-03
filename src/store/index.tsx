import { createStore } from "redux";
import { ADD_NEW, DECREMENT, DELETE, INCREMENT, UPDATE } from "./actions";
import { initialState } from "./initialState";

const store = createStore((state: any = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case ADD_NEW: {
      return {
        ...state,
        contacts: [...state.contacts, action.user],
      };
    }

    case DELETE: {
      let newArr = [...state.contacts];
      let index = newArr.findIndex((c) => c.id === action.user.id);
      newArr.splice(index, 1);
      return {
        ...state,
        contacts: newArr,
      };
    }
    case UPDATE: {
      let newArr = [...state.contacts];
      let index = newArr.findIndex((c) => c.id === action.user.id);
      newArr[index] = {
        id: action.user.id,
        name: action.user.name,
        address: action.user.address,
        number: action.user.number,
      };
      return {
        ...state,
        contacts: newArr,
      };
    }

    default:
      return state;
  }
});
export default store;
