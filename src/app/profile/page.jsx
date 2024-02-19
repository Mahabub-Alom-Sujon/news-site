import React from 'react';
import { cookies } from 'next/headers'
import SideLayout from "@/components/master/Side-Layout";
import ProfileUpdate from '@/components/profileupdate/ProfileUpdate';
async function getData(cookies) {
    let option={method:"GET",headers:{'Cookie':cookies},cache:"no-cache"}
    let Profile= (await (await fetch(`${process.env.HOST}/api/user/profile/details`,option)).json())['data']

    return{Profile:Profile}
}

const Page =async () => {
    const cookieStore = cookies()
    const data=await getData(cookieStore);
    return (
        <SideLayout>
            <ProfileUpdate data={data['Profile']} />
        </SideLayout>
    );
};

export default Page;