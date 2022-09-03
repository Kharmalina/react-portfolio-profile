import "./index.scss";
import PhotoK from "../../assets/images/photo-k.png";
// import { useRef } from "react";

const Photo = () => {

    // const bgRef = useRef();
    // const outlinePhotoRef = useRef();
    // const solidPhotoRef = useRef();

    return (
        <div className="photo-container">
            <img className="solid-photo" src={PhotoK} alt="photok" width="500"/>
            {/* <svg>
                <g className="svg-container">

                </g>
            </svg> */}
        </div>
    )
}

export default Photo