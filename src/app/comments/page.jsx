import React from 'react';
import SideLayout from "@/components/master/Side-Layout";
import { cookies } from 'next/headers'
import Usercomment from '@/components/comments/Usercomment';
async function getData(cookies) {
    let option={method:"GET",headers:{'Cookie':cookies},cache:"no-cache"}
    //let Comments= (await (await fetch(`${process.env.HOST}/api/comments/manage?${pageNo}`,option)).json())
    let Comments= (await (await fetch(`${process.env.HOST}/api/comments/manage`,option)).json())
    ['data']

    return{Comments:Comments}
}

const Page = async () => {
    const cookieStore = cookies()
    const data = await getData( cookieStore);
    return (
        
        <SideLayout>
            <div>
                <Usercomment  data={data["Comments"] } />
            </div>
            
        </SideLayout>
    );
};

export default Page;