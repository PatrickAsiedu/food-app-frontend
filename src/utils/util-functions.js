import Swal from "sweetalert2";
import { unparse } from 'papaparse';

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

export const displayErrorNoReload = (errorMessage) => {
  Swal.fire({
    title: 'No way!',
    text: errorMessage,
    icon: 'error',
    confirmButtonText: 'Okay'
  })
}


export const exportCSVFile = (headers, items, fileTitle) => {

  fileTitle = fileTitle ?? 'Exported';
  
  let csvHeader = unparse({
    fields: [...headers.map(item => item.name)],
    data: [],
  })

  let csvVal = unparse(items, {
    header: false,
    columns: [...headers.map(item => item.key)]
  })

  let csv = csvHeader + csvVal
  
  var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

  var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  }
}
