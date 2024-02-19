import React from 'react';
import Hero from "@/components/news/Hero";
import PlainLayout from "@/components/master/Plain-Layout";
import NewsList from "@/components/news/NewsList";
import PopularList from "@/components/news/PopularList";

async function getData() {
    let Slider = (await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`)).json())['data']
    let Featured = (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`)).json())['data']
    let Popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
    let Latest = (await (await fetch(`${process.env.HOST}/api/news/latest`)).json())['data']
    return {Slider:Slider,Featured:Featured,Popular:Popular,Latest:Latest}
}

const Page = async () => {

    const data = await getData();

    return (
        <PlainLayout>
            <Hero featured={data['Featured']} slider={data['Slider']}/>
            <div className="container mt-5">
               
                <div className="row">
                <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                  <NewsList latest={data['Latest']}/>
              </div>
            <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            
                    <PopularList popular={data['Popular']}/>
                    </div>
                </div>
            </div>
        </PlainLayout>
    );
};
export default Page;
