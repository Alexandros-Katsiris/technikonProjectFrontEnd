import AddProperty from "./AddProperty";
import { useState } from "react";

const Properties = () =>{
    
    const [showModal,setShowModal] = useState(false);
    
    const toggleModal = () => {
        setShowModal((show) => !show);
    };


    return(
        <div>
        <button class="btn btn-primary" type="button" onClick={toggleModal}>Add Property</button>
        
        <AddProperty
            showModal={showModal}
            toggleModal={toggleModal}
            />
        </div>
    );
    
}
export default Properties