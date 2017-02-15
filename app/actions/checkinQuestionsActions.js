export function changeCabinState(event, isInputChecked) {
    return {
      type: 'CABIN_STATE',
      payload: isInputChecked
    }
  }

  export function changeRvSpaceState(event, isInputChecked) {
    return {
      type: 'RV_SPACE_STATE',
      payload: isInputChecked
    }
  }

  export function changeThirtyAmpState(event, isInputChecked) {
    return {
      type: 'THIRTY_AMP',
      payload: isInputChecked
    }
  }

  export function changeFiftyAmpState(event, isInputChecked) {
    return {
      type: 'FIFTY_AMP',
      payload: isInputChecked
    }
  }

  export function changeDailyState(event, isInputChecked) {
    return {
      type: 'DAILY',
      payload: isInputChecked
    }
  }

  export function changeWeeklyState(event, isInputChecked) {
    return {
      type: 'WEEKLY',
      payload: isInputChecked
    }
  }

  export function changeMonthlyState(event, isInputChecked) {
    return {
      type: 'MONTHLY',
      payload: isInputChecked
    }
  }

  export function changeAdultNum_0State(event, isInputChecked) {
    return {
      type: 'ADULT0',
      payload: isInputChecked
    }
  }

  export function changeAdultNum_1State(event, isInputChecked) {
    return {
      type: 'ADULT1',
      payload: isInputChecked
    }
  }

  export function changeAdultNum_2State(event, isInputChecked) {
    return {
      type: 'ADULT2',
      payload: isInputChecked
    }
  }

  export function changeAdultNum_3State(event, isInputChecked) {
    return {
      type: 'ADULT3',
      payload: isInputChecked
    }
  }
  
  export function changeChildNum_0State(event, isInputChecked) {
    return {
      type: 'CHILD0',
      payload: isInputChecked
    }
  }

  export function changeChildNum_1State(event, isInputChecked) {
    return {
      type: 'CHILD1',
      payload: isInputChecked
    }
  }

  export function changeChildNum_2State(event, isInputChecked) {
    return {
      type: 'CHILD2',
      payload: isInputChecked
    }
  }

  export function changeChildNum_3State(event, isInputChecked) {
    return {
      type: 'CHILD3',
      payload: isInputChecked
    }
  }

  export function changePetNoState(event, isInputChecked) {
    return {
      type: 'PET_NO',
      payload: isInputChecked
    }
  }

  export function changePetYesState(event, isInputChecked) {
    return {
      type: 'PET_YES',
      payload: isInputChecked
    }
  }

  export function changePetNum_1State(event, isInputChecked) {
    return {
      type: 'PET_NUM_1',
      payload: isInputChecked
    }
  }

  export function changePetNum_2State(event, isInputChecked) {
    return {
      type: 'PET_NUM_2',
      payload: isInputChecked
    }
  }

  export function changePetNumMoreState(event, isInputChecked) {
    return {
      type: 'PET_NUM_MORE',
      payload: isInputChecked
    }
  }

  export function changeDogNoState(event, isInputChecked) {
    return {
      type: 'DOG_NO',
      payload: isInputChecked
    }
  }

  export function changeDogYesState(event, isInputChecked) {
    return {
      type: 'DOG_YES',
      payload: isInputChecked
    }
  }
  export function changeDogBreedNoState(event, isInputChecked) {
    return {
      type: 'DOG_BREED_NO',
      payload: isInputChecked
    }
  }

  export function changeDogBreedYesState(event, isInputChecked) {
    return {
      type: 'DOG_BREED_YES',
      payload: isInputChecked
    }
  }

  export function changeVehicleNumOkState(event, isInputChecked) {
    return {
      type: 'VEHICLE_NUM_OK',
      payload: isInputChecked
    }
  }

  export function changeVehicleNumMoreState(event, isInputChecked) {
    return {
      type: 'VEHICLE_NUM_MORE',
      payload: isInputChecked
    }
  }

  export function changeTrailerNumNoState(event, isInputChecked) {
    return {
      type: 'TRAILER_NUM_NO',
      payload: isInputChecked
    }
  }

  export function changeTrailerNumYesState(event, isInputChecked) {
    return {
      type: 'TRAILER_NUM_YES',
      payload: isInputChecked
    }
  }

  export function changeCheckInDateState(empty, date) {
    return {
      type: 'CHECK_IN_DATE',
      payload: date
    }
  }

  export function changeCheckOutDateState(empty, date) {
    return {
      type: 'CHECK_OUT_DATE',
      payload: date
    }
  }

  export function changeChosenCabinState(event, isInputChecked) {
    return {
      type: 'CHOSEN_CABIN',
      payload: event
    }
  }