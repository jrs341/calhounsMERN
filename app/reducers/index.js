import { combineReducers } from "redux"

import cabinState from "./checkinQuestionsReducer.js"
import rvSpaceState from "./checkinQuestionsReducer.js"
import thirtyAmpState from "./checkinQuestionsReducer.js"
import fiftyAmpState from "./checkinQuestionsReducer.js"

export default combineReducers({
  cabinState,
  rvSpaceState,
  thirtyAmpState,
  fiftyAmpState,
  dailyState,
  weeklyState,
  monthlyState,
})