import AddProperty from "./AddProperty";
import { useState } from "react";
import { PropertyCard } from "./PropertyCard";

const Properties = () =>{
    
    const [showModal,setShowModal] = useState(false);
    
    const toggleModal = () => {
        setShowModal((show) => !show);
    };


    return(
        <div>
        <button className="btn btn-primary" type="button" onClick={toggleModal}>Add Property</button>
        
        <AddProperty
            showModal={showModal}
            toggleModal={toggleModal}
            />

<div style={{margin:"20px"}}>
        <PropertyCard/>
        </div>
        </div>
    );
    
}
export default Properties