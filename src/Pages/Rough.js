import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Rough = () => {


  const notify = () => {
    console.log("object")
    toast.success("success")
  };

  


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
   
      <button onClick={notify}>Show Snackbar</button>



    </>
  );
}

export default Rough
