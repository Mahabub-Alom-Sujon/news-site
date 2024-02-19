import PlainLayout from '@/components/master/Plain-Layout';
import React from 'react';
import parse from 'html-react-parser';
async function getData() {
    return (await (await fetch(`${process.env.HOST}/api/policy?type=policy`)).json())['data']
}
const page =async () => {
    const data = await getData();
    return (
        <PlainLayout>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card p-4 shadow'>
                            {parse(data[0]["long_des"])}
                        </div>
                    </div>
                </div>
            </div>
        </PlainLayout>
    );
};

export default page;