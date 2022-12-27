import { ACTION_TYPES } from "../actions/crudActions";

export function crudReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.READ_ALL_DATA: {
      return {
        ...state,
        data: action.data
      };
    }

    case ACTION_TYPES.CREATE_DATA: {
      return {
        ...state,
        data: [...state.data, action.item]
      };
    }

    case ACTION_TYPES.UPDATE_DATA: {
      const newData = state.data.map((element) =>
        element.id === action.item.id ? action.item : element
      );
      return {
        ...state,
        data: newData
      };
    }

    case ACTION_TYPES.DELETE_DATA: {
      const newData = state.data.filter((element) => element.id !== action.id);
      return {
        ...state,
        data: newData
      };
    }

    case ACTION_TYPES.NO_DATA: {
      return crudInitialState;
    }

    default:
      throw Error("Unknown action: " + action.type);
  }
}

export const crudInitialState = {
  data: null
};
