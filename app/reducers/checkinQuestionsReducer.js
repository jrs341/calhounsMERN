export default function reducer(state={
    cabin: false,
    cabinStatic: false,
    rvSpace: false,
    rvSpaceStatic: false,
    thirtyAmp: true,
    thirtyAmpStatic: false,
    fiftyAmp: true,
    fiftyAmpStatic: false,
    daily: true,
    dailyStatic: false,
    weekly: true,
    weeklyStatic: false,
    monthly: true,
    monthlyStatic: false,
    adultNum_0: true,
    adultNum_0Static: false,
    adultNum_1: true,
    adultNum_1Static: false,
    adultNum_2: true,
    adultNum_2Static: false,
    adultNum_3: true,
    adultNum_3Static: false,
    childNum_0: true,
    childNum_0Static: false,
    childNum_1: true,
    childNum_1Static: false,
    childNum_2: true,
    childNum_2Static: false,
    childNum_3: true,
    childNum_3Static: false,
    petNo: true,
    petNoStatic: false,
    petYes: true,
    petYesStatic: false,
    petNum_1: true,
    petNum_2: true,
    petNumMore: true,
    dogNo: true,
    dogNoStatic: false,
    dogYes: true,
    dogYesStatic: false,
    dogBreedNo: true,
    dogBreedYes: true,
    vehicleNum_0: true,
    vehicleNum_0Static: false,
    vehicleNum_1: true,
    vehicleNum_1Static: false,
    vehicleNum_2: true,
    vehicleNum_2Static: false,
    vehicleNumMore: true,
    trailerNumNo: true,
    trailerNumYes: true,
    checkInDate: true,
    checkInDateStatic: 0,
    checkOutDate: true,
    checkOutDateStatic: 0,
    thirtyAmpSpaces: true,
    fiftyAmpSpaces: true,
    cabins: true,
    chosenCabin: 'none',
    chosenRvSpace: 'none'
  }, action) {

    switch (action.type) {
      case 'CABIN_STATE':
        if(action.payload) {
            return {...state, cabin: false,
              cabinStatic: true,
              rvSpace: true,
              thirtyAmp: true,
              fiftyAmp: true,
              daily: true,
              weekly: true,
              monthly: false
            } 
        } else {
            return {...state, cabin: false,
              cabinStatic: false,
              rvSpace: false,
              thirtyAmp: true,
              fiftyAmp: true,
              daily: true,
              weekly: true,
              monthly: true,
            }
        };
      case 'RV_SPACE_STATE':
        if(action.payload) {
            return {...state, rvSpace: false,
              rvSpaceStatic: true,
              cabin: true,
              daily: false,
              weekly: false,
              monthly: false
            }
        } else {
            return {...state, cabin: false,
              rvSpaceStatic: false,
              rvSpace: false,
              daily: true,
              weekly: true,
              monthly: true
            }
        };
      case 'THIRTY_AMP':
        if(action.payload) {
            return {...state, thirtyAmp: false,
              thirtyAmpStatic: true,
              fiftyAmp: true,
              rvSpace: true,
              daily: true,
              weekly: true,
              monthly: true
            }
        } else {
            return {...state, thirtyAmp: false,
              thirtyAmpStatic: false,
              fiftyAmp: false,
              // daily: false,
              // weekly: false,
              // monthly: false
            }
        };
      case 'FIFTY_AMP':
        if(action.payload) {
            return {...state, fiftyAmp: false,
              fiftyAmpStatic: true,
              thirtyAmp: true,
              rvSpace: true,
              daily: true,
              weekly: true,
              monthly: true
              }
          } else {
              return {...state, fiftyAmp: false,
                fiftyAmpStatic: false,
                thirtyAmp: false,
                // daily: false,
                // weekly: false,
                // monthly: false
              }
          };
      case 'DAILY':
        if(action.payload && state.cabinStatic) {
            return {...state, daily: false,
              dailyStatic: true,
              cabin: true,
              weekly: true,
              monthly: true,
              adultNum_0: false,
              adultNum_1: false,
              adultNum_2: true,
              adultNum_3: true,
              }
          } else if (action.payload && state.rvSpaceStatic) {
              return {...state, daily: false,
                dailyStatic: true,
                weekly: true,
                monthly: true,
                thirtyAmp: false,
                fiftyAmp: false,
                adultNum_0: false,
                adultNum_1: false,
                adultNum_2: false,
                adultNum_3: false,
                }
          } else {
              return {...state, daily: false,
                dailyStatic: false,
                weekly: false,
                monthly: false,
                thirtyAmp: true,
                fiftyAmp: true,
                adultNum_0: true,
                adultNum_1: true,
                adultNum_2: true,
                adultNum_3: true
                }
          };
      case 'WEEKLY':
        if(action.payload && state.cabinStatic) {
          return {...state, weekly: false,
              weeklyStatic: true,
              cabin: true,
              daily: true,
              monthly: true,
              adultNum_0: false,
              adultNum_1: false,
              adultNum_2: true,
              adultNum_3: true,
              }
          } else if (action.payload && state.rvSpaceStatic) {
              return {...state, weekly: false,
                weeklyStatic: true,
                daily: true,
                monthly: true,
                thirtyAmp: false,
                fiftyAmp: false,
                adultNum_0: false,
                adultNum_1: false,
                adultNum_2: false,
                adultNum_3: false,
              }
          } else {
              return {...state, weekly: false,
                weeklyStatic: false,
                daily: false,
                monthly: false,
                thirtyAmp: true,
                fiftyAmp: true,
                adultNum_0: true,
                adultNum_1: true,
                adultNum_2: true,
                adultNum_3: true
                }
          };
      case 'MONTHLY':
        if(action.payload && state.cabinStatic) {
          return {...state, monthly: false,
              monthlyStatic: true,
              cabin: true,
              daily: true,
              weekly: true,
              adultNum_0: false,
              adultNum_1: false,
              adultNum_2: true,
              adultNum_3: true,
              }
          } else if (action.payload && state.rvSpaceStatic) {
              return {...state, monthly: false,
                monthlyStatic: true,
                daily: true,
                weekly: true,
                thirtyAmp: false,
                fiftyAmp: false,
                adultNum_0: false,
                adultNum_1: false,
                adultNum_2: false,
                adultNum_3: false,
              }
          } else {
              return {...state, monthly: false,
                monthlyStatic: false,
                daily: false,
                weekly: false,
                thirtyAmp: true,
                fiftyAmp: true,
                adultNum_0: true,
                adultNum_1: true,
                adultNum_2: true,
                adultNum_3: true
                }
          };
      case 'ADULT0':
        if(action.payload && state.cabinStatic) {
          return {...state, adultNum_0: false,
            adultNum_0Static: true,
            adultNum_1: true,
            adultNum_2: true,
            adultNum_3: true,
            childNum_0: false,
            childNum_1: false,
            childNum_2: false,
            childNum_3: true,
            daily: true,
            weekly: true,
            monthly: true
          }
        } else if (action.payload && state.rvSpaceStatic) {
            return {...state, adultNum_0: false,
              adultNum_0Static: true,
              adultNum_1: true,
              adultNum_2: true,
              adultNum_3: true,
              childNum_0: false,
              childNum_1: false,
              childNum_2: false,
              childNum_3: false,
              thirtyAmp: true,
              fiftyAmp: true
            }
        } else {
            if (state.cabinStatic) {
              return {...state, adultNum_0: false,
                adultNum_0Static: false,
                adultNum_1: false,
                adultNum_2: true,
                adultNum_3: true,
                childNum_0: true,
                childNum_1: true,
                childNum_2: true,
                childNum_3: true,
               }
            } else {
                return {...state, adultNum_0: false,
                  adultNum_0Static: false,
                  adultNum_1: false,
                  adultNum_2: false,
                  adultNum_3: false,
                  childNum_0: true,
                  childNum_1: true,
                  childNum_2: true,
                  childNum_3: true,
                } 
            }
        };
      case 'ADULT1':
        if(action.payload && state.cabinStatic) {
          return {...state, adultNum_1: false,
            adultNum_1Static: true,
            adultNum_0Static: true,
            adultNum_0: true,
            adultNum_2: true,
            adultNum_3: true,
            childNum_0: false,
            childNum_1: false,
            childNum_2: true,
            childNum_3: true,
            daily: true,
            weekly: true,
            monthly: true
          }
        } else if (action.payload && state.rvSpaceStatic) {
            return {...state, adultNum_1: false,
              adultNum_1Static: true,
              adultNum_0Static: true,
              adultNum_0: true,
              adultNum_2: true,
              adultNum_3: true,
              childNum_0: false,
              childNum_1: false,
              childNum_2: false,
              childNum_3: false,
              thirtyAmp: true,
              fiftyAmp: true
            }
        } else {
            if (state.cabinStatic) {
              return {...state, adultNum_1: false,
                adultNum_1Static: false,
                adultNum_0Static: false,
                adultNum_0: false,
                adultNum_2: true,
                adultNum_3: true,
                childNum_0: true,
                childNum_1: true,
                childNum_2: true,
                childNum_3: true,
               }
            } else {
                return {...state, adultNum_1: false,
                  adultNum_1Static: false,
                  adultNum_0Static: false,
                  adultNum_0: false,
                  adultNum_2: false,
                  adultNum_3: false,
                  childNum_0: true,
                  childNum_1: true,
                  childNum_2: true,
                  childNum_3: true,
                } 
            }
        };
      case 'ADULT2':
        if(action.payload) {
          return {...state, adultNum_2: false,
            adultNum_0Static: true,
            adultNum_1Static: true,
            adultNum_2Static: true,
            adultNum_0: true,
            adultNum_1: true,
            adultNum_3: true,
            childNum_0: false,
            childNum_1: false,
            childNum_2: false,
            childNum_3: false,
            thirtyAmp: true,
            fiftyAmp: true
          }
        } else {
          return {...state, adultNum_2: false,
            adultNum_0Static: false,
            adultNum_1Static: false,
            adultNum_2Static: false,
            adultNum_0: false,
            adultNum_1: false,
            adultNum_3: false,
            childNum_0: true,
            childNum_1: true,
            childNum_2: true,
            childNum_3: true,
          }
        };
      case 'ADULT3':
        if(action.payload) {
          return {...state, adultNum_3: false,
            adultNum_3Static: true,
            adultNum_0Static: true,
            adultNum_1Static: true,
            adultNum_2Static: true,
            adultNum_0: true,
            adultNum_1: true,
            adultNum_2: true,
            childNum_0: false,
            childNum_1: false,
            childNum_2: false,
            childNum_3: false,
            thirtyAmp: true,
            fiftyAmp: true
          }
        } else {
          return {...state, adultNum_3: false,
            adultNum_3Static: false,
            adultNum_0Static: false,
            adultNum_1Static: false,
            adultNum_2Static: false,
            adultNum_0: false,
            adultNum_1: false,
            adultNum_2: false,
            childNum_0: true,
            childNum_1: true,
            childNum_2: true,
            childNum_3: true,
          }
        };
      case 'CHILD0':
        if(action.payload && state.cabinStatic) {
          return {...state, childNum_0: false,
            childNum_0Static: true,
            childNum_1: true,
            childNum_2: true,
            childNum_3: true,
            adultNum_0: true,
            adultNum_1: true,
            adultNum_2: true,
            adultNum_3: true,
            petNo: false
          }
        } else if (action.payload && state.rvSpaceStatic) {
            return {...state, childNum_0Static: true,
              childNum_1: true,
              childNum_2: true,
              childNum_3: true,
              adultNum_0: true,
              adultNum_1: true,
              adultNum_2: true,
              adultNum_3: true,
              petNo: false,
              petYes: false
            }
        } else {
            if (state.cabinStatic) {
              return {...state, childNum_0: false,
                  childNum_0Static: false,
                  childNum_1: false,
                  childNum_2: false,
                  childNum_3: true,
                  petNo: true,
                  petYes: true
               }
            } else {
                return {...state, childNum_0: false,
                  childNum_0Static: false,
                  childNum_1: false,
                  childNum_2: false,
                  childNum_3: false,
                  petNo: true,
                  petYes: true
                }
            } 
        };
      case 'CHILD1':
        if(action.payload && state.cabinStatic) {
          return {...state, childNum_1: false,
            childNum_1Static: true,
            childNum_0: true,
            childNum_2: true,
            childNum_3: true,
            adultNum_0: true,
            adultNum_1: true,
            adultNum_2: true,
            adultNum_3: true,
            petNo: false
          }
        } else if (action.payload && state.rvSpaceStatic) {
            return {...state, childNum_1: false,
              childNum_1Static: true,
              childNum_0: true,
              childNum_2: true,
              childNum_3: true,
              adultNum_0: true,
              adultNum_1: true,
              adultNum_2: true,
              adultNum_3: true,
              petNo: false,
              petYes: false
            }
        } else {
            if (state.cabinStatic && state.adultNum_0Static) {
              return {...state, childNum_1: false,
                  childNum_1Static: false,
                  childNum_0: false,
                  childNum_2: false,
                  childNum_3: true,
                  petNo: true,
                  petYes: true
                }
            } else if (state.cabinStatic && state.adultNum_1Static) {
              return {...state, childNum_1: false,
                  childNum_1Static: false,
                  childNum_0: false,
                  childNum_2: true,
                  childNum_3: true,
                  petNo: true,
                  petYes: true
                  }
             }
            else {
                return {...state, childNum_1: false,
                  childNum_1Static: false,
                  childNum_0: false,
                  childNum_2: false,
                  childNum_3: false,
                  petNo: true,
                  petYes: true
                }
            } 
        };
      case 'CHILD2':
        if(action.payload && state.cabinStatic) {
          return {...state, childNum_2: false,
            childNum_1Static: true,
            childNum_2Static: true,
            childNum_0: true,
            childNum_1: true,
            childNum_3: true,
            adultNum_0: true,
            adultNum_1: true,
            adultNum_2: true,
            adultNum_3: true,
            petNo: false
          }
        } else if (action.payload && state.rvSpaceStatic) {
            return {...state, childNum_2: false,
              childNum_1Static: true,
              childNum_2Static: true,
              childNum_0: true,
              childNum_1: true,
              childNum_3: true,
              adultNum_0: true,
              adultNum_1: true,
              adultNum_2: true,
              adultNum_3: true,
              petNo: false,
              petYes: false
            }
        } else {
            if (state.cabinStatic && state.adultNum_0Static) {
              return {...state, childNum_2: false,
                  childNum_1Static: false,
                  childNum_2Static: false,
                  childNum_0: false,
                  childNum_1: false,
                  childNum_3: true,
                  petNo: true,
                  petYes: true
                }
            } else {
                return {...state, childNum_2: false,
                  childNum_1Static: false,
                  childNum_2Static: false,
                  childNum_0: false,
                  childNum_1: false,
                  childNum_3: false,
                  petNo: true,
                  petYes: true
                }
            } 
        };
      case 'CHILD3':
        if(action.payload && state.rvSpaceStatic) {
          return {...state, childNum_3: false,
            childNum_1Static: true,
            childNum_2Static: true,
            childNum_3Static: true,
            childNum_0: true,
            childNum_1: true,
            childNum_2: true,
            adultNum_0: true,
            adultNum_1: true,
            adultNum_2: true,
            adultNum_3: true,
            petNo: false,
            petYes: false
          }
        } else {
          return {...state, childNum_3: false,
            childNum_1Static: false,
            childNum_2Static: false,
            childNum_3Static: false,
            childNum_0: false,
            childNum_1: false,
            childNum_2: false,
            petNo: true,
            petYes: true
          }
        };
      case 'PET_NO':
        if(action.payload) {
        return {...state, petNo: false,
            petNoStatic: true,
            petYes: true,
            childNum_0: true,
            childNum_1: true,
            childNum_2: true,
            childNum_3: true,
            vehicleNum_0: false,
            vehicleNum_1: false,
            vehicleNum_2: false,
            vehicleNumMore: false
          }
        } else {
          if(state.cabinStatic){
            return {...state, petNo: false,
              petNoStatic: false,
              vehicleNum_0: true,
              vehicleNum_1: true,
              vehicleNum_2: true,
              vehicleNumMore: true
            }
          } else {
            return {...state, petNo: false,
              petNoStatic: false,
              petYes: false,
            }
          }
        };
      case 'PET_YES':
        if(action.payload) {
        return {...state, petYes: false,
            petYesStatic: true,
            petNo: true,
            childNum_0: true,
            childNum_1: true,
            childNum_2: true,
            childNum_3: true,
            petNum_1: false,
            petNum_2: false,
            petNumMore: false
          }
        } else {
            if(state.cabinStatic){
              return {...state, petNo: false
              }
            } else {
              return {...state, petYes: false,
                petYesStatic: false,
                petNo: false,
                petNum_1: true,
                petNum_2: true,
                petNumMore: true
              }
            }
        };
      case 'PET_NUM_1':
        if(action.payload) {
          return {...state, petNum_1: false,
            petNum_1Static: true,
            petNum_2: true,
            petNumMore: true,
            petYes: true,
            petNo: true,
            dogNo: false,
            dogYes: false
          }
        } else {
          return {...state, petNum_1: false,
            petNum_1Static: false,
            petNum_2: false,
            petNumMore: false,
            dogNo: true,
            dogYes: true
          }
        };
      case 'PET_NUM_2':
        if(action.payload) {
          return {...state, petNum_2: false,
            petNum_2Static: true,
            petNum_1: true,
            petNumMore: true,
            petYes: true,
            petNo: true,
            dogNo: false,
            dogYes: false 
          }
        } else {
          return {...state, petNum_2: false,
            petNum_2Static: false,
            petNumMore: false,
            petNum_1: false,
            dogNo: true,
            dogYes: true
          }
        };
      case 'PET_NUM_MORE':
        if(action.payload) {
          return {...state, petNumMore: false,
            petNumMoreStatic: true,
            petNum_1: true,
            petNum_2: true,
            petYes: true,
            petNo: true 
          }
        } else {
          return {...state, petNumMore: false,
            petNumMoreStatic: false,
            petNumMore: false,
            petNum_1: false,
            petNum_2: false,
          }
        };
      case 'DOG_NO':
        if(action.payload) {
          return {...state, dogNo: false,
            dogNoStatic: true,
            dogYes: true,
            petNum_1: true,
            petNum_2: true,
            petNumMore: true,
            vehicleNumOk: false,
            vehicleNumMore: true
          }
        } else {
          return {...state, dogNo: false,
            dogNoStatic: false,
            dogYes: false,
            vehicleNumOk: true,
            vehicleNumMore: true
          }
        };
      case 'DOG_YES':
        if(action.payload) {
          return {...state, dogYes: false,
            dogYesStatic: true,
            dogNo: true,
            dogBreedNo: false,
            dogBreedYes: false,
            petNum_1: true,
            petNum_2: true,
            petNumMore: true
          }
        } else {
          return {...state, dogYes: false,
            dogYesStatic: false,
            dogNo: false,
            dogBreedNo: false,
            dogBreedYes: false
          }
        };
      case 'DOG_BREED_NO':
        if (action.payload) {
          return {...state, dogBreedNo: false,
            dogNo: true,
            dogYes: true,
            dogBreedYes: true,
            vehicleNum_0: false,
            vehicleNum_1: false,
            vehicleNum_2: false,
            vehicleNumMore: false
            }
        } else {
          return {...state, dogBreedNo: false,
            dogBreedYes: false,
            vehicleNum_0: true,
            vehicleNum_1: true,
            vehicleNum_2: true,
            vehicleNumMore: true
            }
        }
      case 'DOG_BREED_YES':
        if (action.payload) {
          return {...state, dogBreedYes: false,
            dogNo: true,
            dogYes: true,
            dogBreedNo: true
            }
        } else {
          return {...state, dogBreedYes: false,
            dogBreedNo: false
            }
        }
      case 'VEHICLE_NUM_0':
        if (action.payload) {
          return {...state, vehicleNum_0: false,
            vehicleNum_0Static: true,
            vehicleNum_1: true,
            vehicleNum_2: true,
            vehicleNumMore: true,
            petNo: true,
            trailerNumNo: false,
            trailerNumYes: false
            }
        } else {
          return {...state, vehicleNum_0: false,
            vehicleNum_0Static: false,
            vehicleNum_1: false,
            vehicleNum_2: false,
            vehicleNumMore: false,
            trailerNumNo: true,
            trailerNumYes: true
            }
        }
      case 'VEHICLE_NUM_1':
        if (action.payload) {
          return {...state, vehicleNum_1: false,
            vehicleNum_1Static: true,
            vehicleNum_0: true,
            vehicleNum_2: true,
            vehicleNumMore: true,
            petNo: true,
            trailerNumNo: false,
            trailerNumYes: false
            }
        } else {
          return {...state, vehicleNum_1: false,
            vehicleNum_1Static: false,
            vehicleNum_0: false,
            vehicleNum_2: false,
            vehicleNumMore: false,
            trailerNumNo: true,
            trailerNumYes: true
            }
        }
      case 'VEHICLE_NUM_2':
        if (action.payload) {
          return {...state, vehicleNum_2: false,
            vehicleNum_1Static: true,
            vehicleNum_2Static: true,
            vehicleNum_0: true,
            vehicleNum_1: true,
            vehicleNumMore: true,
            petNo: true,
            trailerNumNo: false,
            trailerNumYes: false
            }
        } else {
          return {...state, vehicleNum_2: false,
            vehicleNum_1Static: false,
            vehicleNum_2Static: false,
            vehicleNum_0: false,
            vehicleNum_1: false,
            vehicleNumMore: false,
            trailerNumNo: true,
            trailerNumYes: true
            }
        }
      case 'VEHICLE_NUM_MORE':
        if (action.payload) {
          return {...state, vehicleNumMore: false,
            vehicleNum_0: true,
            vehicleNum_1: true,
            vehicleNum_2: true,
            petNo: true
            }
        } else {
          return {...state, vehicleNumMore: false,
            vehicleNum_0: false,
            vehicleNum_1: false,
            vehicleNum_2: false,
            }
        }
      case 'TRAILER_NUM_NO':
        if (action.payload) {
          return {...state, trailerNumNo: false,
            trailerNumYes: true,
            vehicleNum_0: true,
            vehicleNum_1: true,
            vehicleNum_2: true,
            vehicleNumMore: true,
            checkInDate: false 
            }
        } else {
          return {...state, trailerNumYes: false,
            trailerNumNo: false,
            checkInDate: true
          }
        };
      case 'TRAILER_NUM_YES':
        if (action.payload) {
          return {...state, trailerNumYes: false,
            trailerNumNo: true,
            vehicleNumOk: true,
            vehicleNumMore: true 
            }
        } else {
          return {...state, trailerNumNo: false,
            trailerNumYes: false
          }
        };
      case 'CHECK_IN_DATE':
        if (action.payload) {
          return {...state, checkInDate: false,
            checkInDateStatic: action.payload,
            checkOutDate: false,
            trailerNumYes: true,
            trailerNumNo: true,
            thirtyAmpSpaces: false,
            fiftyAmpSpaces: false,
            cabins: false
          }  
        } else {
            return {...state, checkInDate: true,
              checkOutDate: true,
              thirtyAmpSpaces: false,
              fiftyAmpSpaces: false,
              cabins: false
            } 
        }; 
      case 'CHECK_OUT_DATE':
        if (action.payload) {
          return {...state, checkOutDate: false,
            checkOutDateStatic: action.payload,  
          }  
        } else {
            return {...state, checkOutDate: true,
              thirtyAmpSpaces: true,
              fiftyAmpSpaces: true,
              cabins: true,
            } 
        };
      case 'CHOSEN_CABIN':
        if (action.payload) {
          return {...state, chosenCabin: action.payload }
        };
      case 'CHOSEN_RV_SPACE':
        if (action.payload) {
          return {...state, chosenRvSpace: action.payload}
        };
      default:
        return state;
    }
}