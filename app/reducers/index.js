import { combineReducers } from "redux"

import cabinState from "./checkinQuestionsReducer.js"
import rvSpaceState from "./checkinQuestionsReducer.js"
import thirtyAmpState from "./checkinQuestionsReducer.js"
import fiftyAmpState from "./checkinQuestionsReducer.js"
import dailyState from "./checkinQuestionsReducer.js"
import weeklyState from "./checkinQuestionsReducer.js"
import monthlyState from "./checkinQuestionsReducer.js"
import adultNum_0State from "./checkinQuestionsReducer.js"
import adultNum_1State from "./checkinQuestionsReducer.js"
import adultNum_2State from "./checkinQuestionsReducer.js"
import adultNum_3State from "./checkinQuestionsReducer.js"
import childNum_0State from "./checkinQuestionsReducer.js"
import childNum_1State from "./checkinQuestionsReducer.js"
import childNum_2State from "./checkinQuestionsReducer.js"
import childNum_3State from "./checkinQuestionsReducer.js"
import petNoState from "./checkinQuestionsReducer.js"
import petYesState from "./checkinQuestionsReducer.js"
import petNum_1State from "./checkinQuestionsReducer.js"
import petNum_2State from "./checkinQuestionsReducer.js"
import petNumMoreState from "./checkinQuestionsReducer.js"

export default combineReducers({
  cabinState,
  rvSpaceState,
  thirtyAmpState,
  fiftyAmpState,
  dailyState,
  weeklyState,
  monthlyState,
  adultNum_0State,
  adultNum_1State,
  adultNum_2State,
  adultNum_3State,
  childNum_0State,
  childNum_1State,
  childNum_2State,
  childNum_3State,
  petNoState,
  petYesState,
  petNum_1State,
  petNum_2State,
  petNumMoreState
})