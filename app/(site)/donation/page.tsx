
import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import { gql } from '@apollo/client';
import client from 'apollo-client';
import DonationFaq from "@/components/DonationFaqSecition";
import Image from "next/image";
import Link from "next/link";
import donation from '/public/109.png';
export const revalidate = 60 // revalidate at most every 5 minutes
const anton = Anton({ weight: '400', subsets: ["latin"] }); 
const POSTS_QUERY= gql `query MyQuery2 {
  page(id: "cG9zdDo1MTQ=") {
    donatePageFeilds {
      donateFifthSectionDescription
      donateFifthSectionHeading
      donateFifthSectionLink
      donateFirstSectionMainDescription
      donateFirstSectionMainHeading
      donateSecondSectionLeftButtonLink
      donateSecondSectionLeftButtonText
      donateSecondSectionLeftDescription
      donateSecondSectionLeftHeading
      donateThirdSectionDescription
      donateThirdSectionHeading
      donate_fourth_section_scrolltext
      donateThirdSectionSubheading
      donateFifthSectionButtonText
      donateThirdSectionImage {
        node {
          link
        }
      }
      donateSecondSectionRightImage {
        node {
          link
        }
      }
      donateSecondSectionLeftFaqs {
        donateFaqDescription
        donateFaqTitle
        fieldGroupName
      }
      donateFourthSectionThirdImage {
        node {
          link
        }
      }
      donateFourthSectionSecondImage {
        node {
          link
        }
      }
      donateFourthSection {
        node {
          link
        }
      }
    }
  }
}`;
async function fetchData() {
    const { data } = await client.query({
      query: POSTS_QUERY,
    });
    return data;
  }
export default async function Book() {
  const today = new Date().toISOString().split('T')[0];
   
      const data = await fetchData();
      // console.log(data.page.donatePageFeilds.donate_fourth_section_scrolltext);
    return (
        <main className="md:w-[90%] pt-10  mx-auto max-w-[1480px]">
            <h1 className="md:py-[15px] pt-10 py-[10px] md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%]     mx-auto md:leading-[49px] "> {data.page.donatePageFeilds.donateFirstSectionMainHeading}</h1>
            <h5 className="text-[18px]  text-black md:w-[52%] mx-auto text-center"> {data.page.donatePageFeilds.donateFirstSectionMainDescription}</h5>
            {/* <DonationFaq /> */}
            <section className="container mx-auto md:py-18 py-10 max-w-[1480px]">
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <div className="md:w-1/2 grid  w-full p-[20px] md:p-[48px] rounded-[30px] border border-[#dcdcdc] md:m-[0] m-0 ">
        <h1 className="text-[32px] md:text-[76px] text-[#000000] font-normal text-center leading-[51px]">
            $<span className="!text-[#cccccc]"><input
  type="tel"
  className="text-[#000000] !w-[200px] border p-2 w-full rounded-md focus:outline-none border-none focus:border-none"
  placeholder="0.00"
  pattern="[0-9]*"  // Allows only numbers
/> {data.page.donatePageFeilds.donateSecondSectionLeftHeading}
</span>
</h1>
<h4 className="text-[20px] w-full text-[#000000] md:w-[50%] font-bold leading-[24.2px] text-center m-auto py-5">
            {data.page.donatePageFeilds.donateSecondSectionLeftDescription}
          </h4>
<div className="grid rounded-[30px] gap-[48px] border border-[#dcdcdc] p-10">
<select id="frequency " className="border-b border-[#dcdcdc]">
                    <option value="1">Give this One Time</option>
                    <option value="W">Give this Weekly</option>
                    <option value="2W">Give this Every 2 Weeks</option>
                    <option value="M">Give this Monthly</option>
                    <option value="Y">Give this Yearly</option>
                </select>

                <input type='date'  min={today}  className="border-b border-[#dcdcdc]" />
                <select id="give_by" name="payment_type" className="border-b border-[#dcdcdc]">

			    
			    
			        <option value="card" data-method="card">Give by Credit/Debit Card</option>
			        <option value="ach" data-method="ach">Give by ACH Bank Transfer</option>

			    
			</select>
      <Link href={data.page.donatePageFeilds.donateSecondSectionLeftButtonLink}>
                <button className="mx-auto flex w-[90%] m-5 text-center justify-center mb-5 items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">
                  {data.page.donatePageFeilds.donateSecondSectionLeftButtonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    id="arrow"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
                </button>
              </Link>
      </div>
                </div>
<div className="w-1/2">
        <Image src={donation} width="733" height="791" alt=""></Image>
        </div>
        </div>

</section>
            <section className="container mx-auto max-w-[1480px]">
                    <div className="w-full md:w-[70%] mx-auto">
                        
                    <div className="grid items-end justify-end ">
                    <Image src={data.page.donatePageFeilds.donateThirdSectionImage?.node?.link} alt='' layout="responsive" width={16} height={9} className=""></Image>

                     
                    
                    </div>
                        <div className="grid gap-3">
                        <Image alt="" width={70} height={70}  src="/76.png" />
                        <h3 className={`${anton.className} w-full md:w-[65%]  text-center md:text-left md:text-[40px] text-[30px] text-black font-light leading-[50px]`}>
                        {data.page.donatePageFeilds.donateThirdSectionHeading}
                            </h3>
                            <p className={`${anton.className} text-[27px] text-[#A1CF5F] font-normal leading-[48.99px] text-left `}> {data.page.donatePageFeilds.donateThirdSectionSubheading}</p>
                            <hr className="w-[5%] m-0 " />
                            <h5 className="text-[18px] text-black md:w-[55%] mx-auto text-center md:text-left"> {data.page.donatePageFeilds.donateThirdSectionDescription}</h5>
                        </div>
                    </div>
                
            </section>
            <section className="container mx-auto max-w-[1480px]">
                <div className="flex p-0 md:p-10">
                    <div className="w-2/3">
                    <Image src={data.page.donatePageFeilds.donateFourthSection?.node?.link} className="w-[80%]" alt=''  width={740} height={439}></Image>

                       
                    </div>
                    <div className="relative w-1/3">
                    <Image src={data.page.donatePageFeilds.donateFourthSectionSecondImage?.node?.link} className="absolute bottom-0 right-0" alt='' layout="responsive" width={16} height={9}></Image>

                  
                    <Image alt="" width={220} height={220}  src="/116.png" className="absolute bottom-[30%] left-[-23%]" />
                    </div>
                </div>
                <div className="">
                <Image src={data.page.donatePageFeilds.donateFourthSectionThirdImage?.node?.link} className="w-[15%] mx-auto" alt=''  width={740} height={439}></Image>

                    
                </div>
            </section>
            <section className="relative  bg-[#A1CF5F] my-20">
            <Marquee className="absolute z-99999 text-white">
            {data.page.donatePageFeilds.donate_fourth_section_scrolltext}    </Marquee>
            </section>
            <section className="container mx-auto py-5 max-w-[1480px]">
            <div className="mx-auto text-[30px] pb-8 text-black w-full  md:w-[32%] leading-[33px] italic font-bold text-left ">
                
            {data.page.donatePageFeilds.donateFifthSectionHeading}
                </div>
                <div className="flex flex-wrap md:flex-no-wrap">
                    <div className="md:w-1/3 w-full">

                    </div>
                    <div className="md:w-2/3  w-full">
                    <h5 className="text-[18px] text-black md:w-[58%] italic mx-auto text-left">
                    {data.page.donatePageFeilds.donateFifthSectionDescription}
                
               <Link href={data.page.donatePageFeilds.donateFifthSectionLink   }> <button className="flex w-fit mb-5 items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[15px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">
               {data.page.donatePageFeilds.donateFifthSectionButtonText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M1 13 13 1M4 1h9v9"></path>
                </g>
              </svg>
                        </button></Link>
                        </h5>
                
                    </div>
                </div>
            </section>

            <Newsletter />
        </main>
    );
}