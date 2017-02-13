export default function reducer(state={
    cabin: false,
    rvSpace: false,
    thirtyAmp: false,
    fiftyAmp: false
  }, action) {

    switch (action.type) {
      case 'CABIN_STATE':
        if(action.payload) {
            return {...state, cabin: false,
              rvSpace: true,
              thirtyAmp: true,
              fiftyAmp: true
            } 
        } else {
            return {...state, cabin: false,
              rvSpace: false,
              thirtyAmp: false,
              fiftyAmp: false
            }
        };
      case 'RV_SPACE_STATE':
        if(action.payload) {
            return {...state, rvSpace: false,
              cabin: true
            }
        } else {
            return {...state, cabin: false,
              rvSpace: false
            }
        };
      case 'THIRTY_AMP':
        if(action.payload) {
            return {...state, thirtyAmp: false,
              fiftyAmp: true
            }
        } else {
            return {...state, thirtyAmp: false,
              fiftyAmp: false
            }
        };
      case 'FIFTY_AMP':
        if(action.payload) {
            return {...state, fiftyAmp: false,
              thirtyAmp: true
              }
          } else {
              return {...state, fiftyAmp: false,
                thirtyAmp: false
              }
            }
      default:
        return state;
    }
}