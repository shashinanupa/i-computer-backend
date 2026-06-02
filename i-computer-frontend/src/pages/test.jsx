import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTwitterSquare } from "react-icons/fa";

export default  function Testpage() {

    const [score, setScore] = useState(50)
    const [mood, setMood] = useState('😊')
    const[isfollowing,setIsFollowing] = useState(false)


    return (
        <div className="w-full h-full bg-amber-500 flex items-center justify-center">
            <div className="w-[450px] h-[450px] bg-white  flex items-center justify-center  flex-col">
                <h1  className="font-bold text-7xl"> {score}</h1>
                <div className="w-full h-[100px] flex items-center justify-center">
                    <button className="w-[100px] h-[40px] bg-red-500 mx-5 " onClick={() => {
                        setScore(score - 1);
                        
                    }}>
                        decrease
                    </button>
                    <button className="w-[100px] h-[40px] bg-green-500 mx-5 "
                        onClick={() => {
                            setScore(score + 1);
                           
                        }}
                            >
                        increase
                    </button>
                </div>
                <h1 className='w-full h-[100px] flex items-center justify-center  text-7xl'>{mood}</h1>
                <div className='w-full h-[100px] flex justify-center items-center'>
                    <button className='w-[100px] h-[40px] bg-blue-500 mx-5' onClick={()=>{toast.error("You feel sad!"); setMood("😓")}}>sad</button>
                    <button className='w-[100px] h-[40px] bg-green-500 mx-5' onClick={()=>{toast.success("You feel neutral!"); setMood("😐")}}>nutral</button>
                    <button className='w-[100px] h-[40px] bg-red-500 mx-5' onClick={()=>{toast.success("You feel happy!"); setMood("😊")}}>happy</button>
                </div>

                <FaTwitterSquare className={isfollowing ? 'text-7xl text-blue-500' : 'text-7xl text-amber-200'} onClick={() => {toast.success("follow us on twitter!",{
                    icon: <FaTwitterSquare className='text-2xl text-blue-500' />
                })
                    setIsFollowing(!isfollowing)
                }}/>
                
  
            </div>

        </div>
    )
}