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