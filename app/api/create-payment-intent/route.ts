import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(req:Request){
    const user = await currentUser();

    if(!user){
        return new NextResponse('Unauthorized',{status:401})
    }

    const body = await req.json();
    const {booking,payment_Intent_id} = body;

    const bookingData = {
        ...booking,
        userName:user.firstName,
        userEmail:user.emailAddresses[0].emailAddress,
        userId:user.id,
        currency:'usd',
        paymentIntentId:payment_Intent_id
    };

    let foundBooking;
    if(payment_Intent_id){
        foundBooking = await prismadb.booking.findUnique({
            where: {PaymentIntentId:payment_Intent_id,userId:user.id}
        })
    }

    if(foundBooking && payment_Intent_id) {
        //update
    } else {
        //create
        
    }
}