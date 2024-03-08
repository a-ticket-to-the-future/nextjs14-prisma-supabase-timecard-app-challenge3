import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";
import getCurrentUser from '@/app/actions/getCurrentUser';
import { User } from "@/app/types/types";

// export const PutStatedTimecard = async ({userId}:{userId:User}) => {
    
   export const PutStatedTimecard = async (req:Request, res:NextResponse) => {
    const currentUser = await getCurrentUser()

      // const data = await req.json()
    
    try {
      if (currentUser) {

        const response = await prisma.timecard.update({
          where: {
            id: currentUser.id,
            
        },
        data: {
          userId:currentUser.id,
          startedAt: new Date(),

        },
        
        });
        // return  NextResponse.json({response})
        console.log(response);

      }

    } catch (error) {

    }

}







// export default async  (req:NextRequest,res:NextResponse) => {

//   if(req.method === 'PATCH'){

//       try {
//             const userId = req.body.userId;
//             const timecard = prisma.timecard.create({
//                 data:{
//                     userId: userId,
//                     startedAt: new Date(),
//                 },
//             });
//           // const userId = req.body
//             res.status(200).json({ data: timecard});
          
//           //     if (userId) {
  
  
//           //         const timecard = await prisma.timecard.create({
                  
//           //             data: {
//           //                 userId:userId,
//           //                 startedAt: new Date(),
//           //             },
//           //         });
//           //         res.status(200).json({data:timecard})
//           //     }
//           // const body = req.json()    
//           // // console.log(currentUserData)
//           // const {} = body
//           // if (currentUserData){
  
              
//           // }
      
  
      
//       } catch (error) {
//           console.log(error)
//           return new NextResponse('Error',{status:500})
//       }
//   }  else {
//     res.setHeader('Allow',['PATCH']);
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }

// }

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