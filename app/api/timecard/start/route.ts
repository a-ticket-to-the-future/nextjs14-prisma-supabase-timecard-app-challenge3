import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";
import getCurrentUser from '@/app/actions/getCurrentUser';

export default async  (req:NextRequest,res:NextResponse) => {

    try {

        // const userId = req.body

        
        //     if (userId) {


        //         const timecard = await prisma.timecard.create({
                
        //             data: {
        //                 userId:userId,
        //                 startedAt: new Date(),
        //             },
        //         });
        //         res.status(200).json({data:timecard})
        //     }
        // const body = req.json()    
        // // console.log(currentUserData)
        // const {} = body
        // if (currentUserData){

            
        // }
    

    
    } catch (error) {
        console.log(error)
        return new NextResponse('Error',{status:500})
    }

}

// export const createStartedTimecard = async () => {
//     try {
//         const currentUser = await getCurrentUser()

//         if(currentUser){
//             const startedTime = await prisma.timecard.update({
//                 where: {
//                     id:currentUser.id},
//                 data: {
//                     startedAt: new Date()

//                 },
//             })
//             console.log(startedTime)
//             return startedTime;
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }