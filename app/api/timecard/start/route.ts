import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";
import getCurrentUser from '@/app/actions/getCurrentUser';
import { User } from "@/app/types/types";
import { NextApiRequest, NextApiResponse } from "next";

// export const PutStatedTimecard = async ({userId}:{userId:User}) => {
    
   export const POST = async (req:NextApiRequest, res:NextApiResponse) => {
    // const currentUser = await getCurrentUser()
    if(req.method === 'POST'){

        
      
      try {
          const {userId} = await req.body
  
          const response = await prisma.timecard.create({
            data: {
            id: userId,
            startedAt: new Date(),
            
  
          },
          
          });
          // return  NextResponse.json({response})
          console.log(response);
  
        
  
      } catch (error) {
        console.log(error);
        return new NextResponse('Error',{ status: 500})
      }
    } else {
        res.setHeader('Allow', ['PATCH']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}





