import React, {useState} from 'react'
import Details from './details'


const ShowButton = ({country}) => {

    const [show, setShow] = useState(false)

    const HandleShow = () => setShow(!show)
    if (show===false) {
        return (
        <button onClick={HandleShow}>Show</button>
        )
    } else {
        return (
        <div>
        <button onClick ={HandleShow}>Hide</button>
        <Details country = {country} />
        </div>
        )
    }
      }

  export default ShowButton;