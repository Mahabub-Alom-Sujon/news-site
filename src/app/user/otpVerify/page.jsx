import React from 'react';
import PINVerifyForm from "@/components/user/PINVerifyForm";
import PlainLayout from "@/components/master/Plain-Layout";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const Page = () => {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if (typeof token !=="undefined") {
        redirect('/')
    }
    return (
        <PlainLayout>
            <PINVerifyForm/>
        </PlainLayout>
    );
};

export default Page;