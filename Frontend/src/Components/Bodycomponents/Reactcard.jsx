// import React, { useContext } from 'react';
// import {Link} from 'react-router-dom';
// import { UserContext } from '../../Context/Clientcontext';


// export default function CarCard({image}){

//     const {user} = useContext(UserContext);

//     return(
//         <>
//             <div className="card rounded-none group" style={{cursor:"pointer"}}>
//                 <div className="relative">
//                         <img className='rounded group-hover:opacity-50' src={image} alt=""/>
//                         <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                             <Link to={user ? '/account/bookings' : '/'} className="bg-orange rounded text-white px-8 py-4 font-bold">Reserve now</Link>
//                         </div>
//                 </div>
//             </div>
//         </>
//     )
// }
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Clientcontext";

export default function CarCard({ image }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleReserve = () => {
    console.log("RESERVE BUTTON CLICKED");

    if (user) {
      navigate("/account/bookings");
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="card rounded-none group"
      style={{ cursor: "pointer" }}
    >
      <div className="relative">
        <img
          className="rounded group-hover:opacity-50"
          src={image}
          alt=""
        />

        <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={handleReserve}
            className="bg-orange rounded text-white px-8 py-4 font-bold"
          >
            Reserve now
          </button>
        </div>
      </div>
    </div>
  );
}