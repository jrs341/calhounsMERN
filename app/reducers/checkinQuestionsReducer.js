export default function reducer(state={
    cabin: false,
    rvSpace: false,
    thirtyAmp: true,
    fiftyAmp: true,
    daily: true,
    weekly: true,
    monthly: true,
    adultNum_0: true,
    adultNum_1: true,
    adultNum_2: true,
    adultNum_3: true,
    childNum_0: true,
    childNum_1: true,
    childNum_2: true,
    childNum_3: true,
  }, action) {

    switch (action.type) {
      case 'CABIN_STATE':
        if(action.payload) {
            return {...state, cabin: false,
              rvSpace: true,
              thirtyAmp: true,
              fiftyAmp: true,
              adultNum_0: false,
              adultNum_1: false
            } 
        } else {
            return {...state, cabin: false,
              rvSpace: false,
              thirtyAmp: true,
              fiftyAmp: true,
              adultNum_0: true,
              adultNum_1: true
            }
        };
      case 'RV_SPACE_STATE':
        if(action.payload) {
            return {...state, rvSpace: false,
              cabin: true,
              thirtyAmp: false,
              fiftyAmp: false,
              adultNum_0: false,
              adultNum_1: false,
              adultNum_2: false,
              adultNum_3: false,
            }
        } else {
            return {...state, cabin: false,
              rvSpace: false,
              thirtyAmp: true,
              fiftyAmp: true,
              adultNum_0: true,
              adultNum_1: true,
              adultNum_2: true,
              adultNum_3: true,
            }
        };
      case 'THIRTY_AMP':
        if(action.payload) {
            return {...state, thirtyAmp: false,
              fiftyAmp: true,
              rvSpace: true,
              daily: false,
              weekly: false,
              monthly: false
            }
        } else {
            return {...state, thirtyAmp: false,
              fiftyAmp: false,
              rvSpace: false,
              daily: true,
              weekly: true,
              monthly: true
            }
        };
      case 'FIFTY_AMP':
        if(action.payload) {
            return {...state, fiftyAmp: false,
              thirtyAmp: true,
              rvSpace: true,
              daily: false,
              weekly: false,
              monthly: false
              }
          } else {
              return {...state, fiftyAmp: false,
                thirtyAmp: false,
                rvSpace: false,
                daily: true,
                weekly: true,
                monthly: true
              }
          };
      case 'DAILY':
        if(action.payload) {
            return {...state, daily: false,
              weekly: true,
              monthly: true,
              thirtyAmp: true,
              fiftyAmp: true 
              }
          } else {
            return {...state, daily: false,
              weekly: false,
              monthly: false,
              thirtyAmp: false,
              fiftyAmp: false 
              }
          };
      case 'WEEKLY':
        if(action.payload) {
          return {...state, weekly: false,
              daily: true,
              monthly: true,
              thirtyAmp: true,
              fiftyAmp: true 
              }
          } else {
            return {...state, weekly: false,
              daily: false,
              monthly: false,
              thirtyAmp: false,
              fiftyAmp: false
            }
          };
      case 'MONTHLY':
        if(action.payload) {
          return {...state, monthly: false,
              daily: true,
              weekly: true,
              thirtyAmp: true,
              fiftyAmp: true 
              }
          } else {
            return {...state, monthly: false,
              daily: false,
              weekly: false,
              thirtyAmp: false,
              fiftyAmp: false
            }
          };
      case 'ADULT0':
        if(action.payload) {
          return {...state, adultNum_0: false,
            adultNum_1: true,
            adultNum_2: true,
            adultNum_3: true
          }
        } else {
          return {...state, adultNum_0: false,
            adultNum_1: false,
            adultNum_2: false,
            adultNum_3: false
          } 
        };
      case 'ADULT1':
        if(action.payload) {
          return {...state, adultNum_1: false,
            adultNum_0: true,
            adultNum_2: true,
            adultNum_3: true
          }
        } else {
          return {...state, adultNum_1: false,
            adultNum_0: false,
            adultNum_2: false,
            adultNum_3: false
          }
        };
      case 'ADULT2':
        if(action.payload) {
          return {...state, adultNum_2: false,
            adultNum_0: true,
            adultNum_1: true,
            adultNum_3: true
          }
        } else {
          return {...state, adultNum_2: false,
            adultNum_0: false,
            adultNum_1: false,
            adultNum_3: false
          }
        };
      case 'ADULT3':
        if(action.payload) {
          return {...state, adultNum_3: false,
            adultNum_0: true,
            adultNum_1: true,
            adultNum_2: true
          }
        } else {
          return {...state, adultNum_3: false,
            adultNum_0: false,
            adultNum_1: false,
            adultNum_2: false
          }
        };
      case 'CHILD0':
        if(action.payload) {
          return {...state, childNum_0: false,
            childNum_1: true,
            childNum_2: true,
            childNum_3: true
          }
        } else {
          return {...state, childNum_0: false,
            childNum_1: false,
            childNum_2: false,
            childNum_3: false
          }
        };
      case 'CHILD1':
        if(action.payload) {
          return {...state, childNum_1: false,
            childNum_0: true,
            childNum_2: true,
            childNum_3: true
          }
        } else {
          return {...state, childNum_1: false,
            childNum_0: false,
            childNum_2: false,
            childNum_3: false
          }
        };
      case 'CHILD2':
        if(action.payload) {
          return {...state, childNum_2: false,
            childNum_0: true,
            childNum_1: true,
            childNum_3: true
          }
        } else {
          return {...state, childNum_2: false,
            childNum_0: false,
            childNum_1: false,
            childNum_3: false
          }
        };
      case 'CHILD3':
        if(action.payload) {
          return {...state, childNum_3: false,
            childNum_0: true,
            childNum_1: true,
            childNum_2: true
          }
        } else {
          return {...state, childNum_3: false,
            childNum_0: false,
            childNum_1: false,
            childNum_2: false
          }
        };
      default:
        return state;
    }
}