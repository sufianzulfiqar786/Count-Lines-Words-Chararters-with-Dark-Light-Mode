import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = () => {


    const handleUpClickUppercase = () => {
        console.log("Upercase Click me")
        setText(text.toUpperCase())
        toast.success("Convert to Lowercase")
    }

    const handleUpClickLowercase = () => {
        console.log("Lower case Click me")
        setText(text.toLowerCase())
        toast.success("Convert to Uppercase")
    }

    const handleUpClickClearText = () => {
        console.log("Clear Text Click me")
        setText('')
        setWord(0)
        toast.success("Cleared")

    }

    const handleUpClickCopyText = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        toast.success("Selected")

    }





    const handleOnChange = (event) => {
        console.log("Change Click me")


        setText(event.target.value.split(/ +/).join(' ').replace(/^\s*\n/gm, ""))
        // setText(event.target.value.split(/ +/).join(' '))

    }

    const [text, setText] = useState('');


    const [word, setWord] = useState('0');



    const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const[btntext, setBtnText] = useState("Enable Dark mode")

    const toggleStyle= () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            })
            setBtnText("Enable Light Mode")
        }
    
    else{
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode")
    }
    toast.success(btntext)
} 

    return (
        <>

            <div className="bodyContainer" >

                <ToastContainer
                    position="top-right"
                    autoClose={300}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <div className="row" >

                    <div className=" column col-md-8 offset-md-2 my-5 border" style={myStyle}>



                        <div className="form-group" >
                            {/* <label htmlFor="exampleFormControlTextarea1">Enter Your Text Below</label>` */}
                            <textarea className="form-control my-3"
                                value={text}
                                id="myBox"
                                placeholder='Hi, Enter Your Data'
                                rows="7"
                                onChange={handleOnChange}
                                style={myStyle}
                            ></textarea>
                        </div>
                        <div className="btnClass">
                            <button className='btnFun mx-lg-0  my-1' onClick={handleUpClickUppercase}>Convert to Uppercase</button>
                            <button className='btnFun mx-lg-2 my-1' onClick={handleUpClickLowercase}>Convert to Lowercase</button>
                            <button className='btnFun mx-lg-0 my-1' onClick={handleUpClickClearText}>Clear All text</button>
                            <button className='btnFun mx-lg-0 my-1' onClick={handleUpClickCopyText}>Select All text</button>
                            <button className='btnFun mx-lg-2 my-1' onClick={toggleStyle}>{btntext}</button>
                        </div>
                        <p my-3>Line: {text.split("\n").length}&nbsp;&nbsp;Total Words :&nbsp;{text.split(' ').length - 1 + text.split("\n").length - 1} &nbsp;&nbsp;Total Characters :&nbsp;{text.length + 1 - text.split("\n").length}</p>
                        <p>Preview:&nbsp;{text}</p>

                    </div>



                </div>

            </div>

        </>
    )
}

export default Counter
