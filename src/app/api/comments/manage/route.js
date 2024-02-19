import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import { headers } from "next/headers";
export async function GET(req,res) {
    try{
        let headerList = headers();
       let {searchParams}=new URL(req.url);
        let id = parseInt(headerList.get('id'));
        let pageNo = parseInt(searchParams.get('pageNo'));
        let perPage = parseInt(searchParams.get('perPage'));
        const prisma = new PrismaClient();
         // Query to get the total count
        const total = await prisma.comments.count({
            where: { userID: id },
        });
        const result=await prisma.comments.findMany({

            where: { userID: id },
           skip:(pageNo - 1) * perPage,
            take: perPage,
            include:{
                news_list: { select: { title: true } }
                
            }
        })


        return NextResponse.json({ status: "success", data: { total, result } })
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}

export async function POST(req,res) {
    try{
        let headerList=headers();
        let id=parseInt(headerList.get('id'));

        let reqBody=await req.json();
        reqBody.userID=id;

        const prisma=new PrismaClient();
        const result=await prisma.comments.create({
            data:reqBody
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}

export async function DELETE(req, res) {
    try {
        let headerList = headers();
        let user_id = parseInt(headerList.get('id'));

        let reqBody = await req.json();

        const prisma = new PrismaClient();
        const result = await prisma.comments.deleteMany({
            where: {
                AND: [
                    { userID: user_id },
                    { id: parseInt(reqBody['id']) },
                ],
            },
        })
        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "fail", data: e })
    }
}