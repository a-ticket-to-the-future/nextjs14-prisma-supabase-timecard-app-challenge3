"use client"

import React, { useEffect, useState } from 'react'
import prisma from '../lib/prismaClient';
import { User } from '../types/types';
import { Timecard } from '../types/types';
import axios from 'axios';
import getCurrentUser from '../actions/getCurrentUser';




const Timecard =  () => {

    const [users, setUsers] = useState([]);
    const [timecards, setTimecards] = useState([])
    const [workingState, setWorkingState] = useState(false)
    // const { supabase } = useSpabase();

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("http://localhost:3000/api/users",{
                cache:'no-store',
            }) 
            
            const usersData:User = await response.json();

        
            // console.log(usersData)
            return usersData
        }
        fetchUsers()
    },[])

    useEffect( () => {
        const fetchTimecards = async () => {
            const response = await fetch("http://localhost:3000/api/timecard",{
                cache:'no-store',
            }) 
            
            const timecardData:Timecard = await response.json();
            return timecardData;
        }
        fetchTimecards()
    },[])

    const handleTimecardStart = async () => {
        setWorkingState(true)

        try{

            const currentUser = await getCurrentUser();
            if (currentUser){
                const response = await axios.post('/api/timecard/start',{currentUser});
                console.log(response.data)
            }
            
        } catch (error) {
            console.log(error)
        }
        // try {
        //     const currentUser = await getCurrentUser()
        //     const userId = currentUser?.id
        //     const startedResponse = await axios.put('http://localhost:3000/api/timecard/start',{userId})
    
        //     const startedTimecardData = await startedResponse.data;
            
        //     console.log(startedTimecardData);
        // } catch (error) {
        //     console.log(error);
        // }

    }

    const timeCardEnd = async () => {
        setWorkingState(false)
    }

  return (
    <div className=' flex flex-col'>
        <h1 className=' text-4xl bg-green-400 text-slate-50 rounded-md font-bold px-[50px] py-[5px] text-center'>
            タイムカード
        </h1>
        <div className=' flex flex-col mt-[60px] gap-5'>
            <div className=' bg-sky-400 w-[800px] h-[60px] flex gap-20 justify-center '>
                <button className='  border-2 border-slate-50 rounded-lg bg-gray-300 my-1 px-5 pt-3 pb-3 text-center hover:scale-105 active:scale-95 cursor-pointer' onClick={handleTimecardStart} >開始</button>
                {/* <form>

                </form> */}
                <div className='  border-2 border-slate-50 rounded-lg my-1 px-5 pt-3 bg-red-500 hover:scale-105 active:scale-95 cursor-pointer' onClick={timeCardEnd} >停止</div>

                { workingState ? (

                    <div className=' border-2 border-black  my-1 rounded-lg px-5 pt-3 text-red-500 font-bold'  >仕事中</div>
                ):
                (
                    <div className=' border-2 border-black  my-1 rounded-lg px-5 pt-3 text-blue-600 font-bold'  >準備中</div>
                    
                )}
                <div className='  border-2 border-slate-50 rounded-lg my-1 px-5 pt-3 '>経過時間</div>
                <div className=' border-2 border-black text-slate-50 my-1 rounded-lg px-5 pt-3'  >合計時間</div>


            </div>
            {/* <div className=' bg-sky-400 w-[800px] h-[50px] flex gap-20 justify-center '>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>ボタン</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >状態</div>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>計測値</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >合計時間</div>


            </div>
            <div className=' bg-sky-400 w-[800px] h-[50px] flex gap-20 justify-center '>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>ボタン</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >状態</div>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>計測値</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >合計時間</div>


            </div> */}
        </div>
    </div>
  )
}

export default Timecard