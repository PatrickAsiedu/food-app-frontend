import React from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'



const CustomInput = ({label, itemList, addToSelectedItems, styling}) => {

    // const itemList = [
    //     { id: 1, name: 'item1' },
    //     { id: 2, name: 'item2' },
    //     { id: 3, name: 'item3' },
    //   ]

    // console.log(value)
    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      // the item hovered
      // console.log(result)
    }
  
    // const handleOnSelect = (item) => {
    //   // the item selected
    //   console.log('selected item : ', item)
    //   this.addToSelectedItems(item)
    // }
  
    const handleOnFocus = () => {
      // console.log('Focused')
    }
  
    const formatResult = (item) => {
      return (
        <>
          {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
          <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
        </>
      )
    }

    return(
        <form style={{ marginBottom: 30 }}>
          <div style={{ marginBottom: 15 }}>{label}</div>
          <ReactSearchAutocomplete
            showIcon={false}
            items={itemList}
            // styling={{className: 'w-full border-b h-12 outline-0 '}}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={(item)=>addToSelectedItems(item)}
            onFocus={handleOnFocus}
            // autoFocus
            formatResult={formatResult}
            styling={styling} 
          />
        </form>
    )
}


export default CustomInput;



  
