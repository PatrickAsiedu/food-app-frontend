export const formatDateToDateString = (date) => {
    const dateObject = new Date(date);
    return dateObject.toDateString()
};


export const formatDateToDateAndTimeString = (date) => {
    const dateObject = new Date(date);
    return dateObject.toDateString().concat(', ', dateObject.toLocaleTimeString())
  }

