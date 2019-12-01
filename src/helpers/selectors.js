export function getAppointmentsForDay(state, day) {
  const result = [];
 
  state.days.forEach(dayObj => {
    if(dayObj.name === day) {
      dayObj.appointments.map ((appointmentNo) => {
        result.push(state.appointments[appointmentNo])
      })
    }
  })
  return result;
}


export function getInterview(state, interview) {
  let result = {};
  if (interview) {
    for (let int in state.interviewers) {
      if (interview.interviewer === state.interviewers[int].id) {
        result.student = interview.student;
        result.interviewer = state.interviewers[int];
        return result;
      }
    }
  }
  return null;
}

export function getInterviewersByDay(state, day) {
  const result = [];
  state.days.forEach(dayObj => {
    if(dayObj.name === day) {

      dayObj.appointments.map ((appointmentNo) => {
        if (state.appointments[appointmentNo].interview !== null) {
          if(state.interviewers[state.appointments[appointmentNo].interview.interviewer] !== undefined){

            result.push(state.interviewers[state.appointments[appointmentNo].interview.interviewer])
          }
        }
      })
    }
  })
  return result;
}
