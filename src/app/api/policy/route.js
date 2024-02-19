import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        let {searchParams}=new URL(req.url);
        let type= searchParams.get('type');
        const result=await prisma.policies.findMany({where:{type:type}})
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}
export async function POST(req, res) {
    try {
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.policies.create({data:reqBody})
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}