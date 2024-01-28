import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let keyword= searchParams.get('keyword');

        const prisma=new PrismaClient();
        const result = await prisma.news_list.findMany({
             
            where: {
                OR: [
                    { title: { contains: keyword } },
                    { short_des: { contains: keyword } },
                    { keywords: { contains: keyword } },
                    { long_des: { contains: keyword } },
                    {type:{contains:keyword}},
                    {
                        categories: {
                            name:{contains:keyword}
                        }
                    },
                    
                ]
                
            },
            include: {
                categories: {
                    select: {
                        name: true
                    }
                },
            
            }
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}