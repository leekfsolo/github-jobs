import { filteredActionType } from "../enum";
import { filteredValues } from "../model";

export interface filteredAction {
  type: filteredActionType;
  payload: string;
}

export const filteredReducer = (
  state: filteredValues,
  action: filteredAction
) => {
  const { type, payload } = action;

  switch (type) {
    case filteredActionType.CATEGORY:
      return { ...state, category: payload };
    case filteredActionType.LEVEl:
      return { ...state, level: payload };
    default:
      return state;
  }
};
