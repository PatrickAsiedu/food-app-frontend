export const formatDateToDateString = (date) => {
    const dateObject = new Date(date);
    return dateObject.toDateString()
};


export const formatDateToDateAndTimeString = (date) => {
    const dateObject = new Date(date);
    return dateObject.toDateString().concat(', ', dateObject.toLocaleTimeString())
  }


export const sortByDate = (array) => {
    const sorter = (a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
    array.sort(sorter);
    // console.log(array)
    return array
  }
