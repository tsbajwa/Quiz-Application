import { UPDATE_LAST_ANSWERED_Q_INDEX } from "../types";

export function updateIndex(index) {
  return {
    type: UPDATE_LAST_ANSWERED_Q_INDEX,
    index,
  };
}
