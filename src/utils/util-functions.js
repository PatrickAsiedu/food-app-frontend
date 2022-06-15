import Swal from "sweetalert2";

export const formatDateToDateString = (date) => {
    const dateObject = new Date(date);
    return dateObject.toDateString()
};

export const formatDateToStringNoYear = (date) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}


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

export const sortByMenuDate = (array) => {
  const sorter = (a, b) => {
    return new Date(b.menu_date).getTime() - new Date(a.menu_date).getTime();
  }
  array.sort(sorter);
  // console.log(array)
  return array
}

export const displaySuccess = (successMessage) => {
  Swal.fire({
    title: 'Success!',
    text: successMessage,
    icon: 'success',
    confirmButtonText: 'Okay'
  }).then(result=>{
    if(result.isConfirmed){
      window.location.reload();
    }
  })
};


export const displayError = (errorMessage) => {
  Swal.fire({
    title: 'No way!',
    text: errorMessage,
    icon: 'error',
    confirmButtonText: 'Okay'
  }).then(result=>{
    if(result.isConfirmed){
      window.location.reload();
    }
  })
}
