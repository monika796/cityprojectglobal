
import React, { useState } from "react";
import { Anton } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { gql } from '@apollo/client';
import client from 'apollo-client';
import SecondSection from "@/components/VantageForm";

const POSTS_QUERY= gql `query MyQuery2 {
  page(id: "cG9zdDo1Njk=") {
    vantageForm {
      vantageFormMainHeading
      vantageFormSecondSectionSecondColumnDescription
      vantageFormSecondSectionSecondColumnHeading
      vantageFormSecondSectionSecondColumnPrice
      vantageFormFirstSectionRightImage {
        node {
          link
        }
      }
      vantageFormSecondSectionFirstColumnImage {
        node {
          link
        }
      }
      vantageFormSecondSectionThirdColumnImage {
        node {
          link
        }
      }
      vantageFormThirdSection {
        vantageFormThirdSectionImage1 {
          node {
            link
          }
        }
        vantageFormThirdSectionImage2 {
          node {
            link
          }
        }
        vantageFormThirdSectionImage3{
          node {
            link
          }
        }
        vantageFormThirdSectionImage4{
          node {
            link
          }
        }
        vantageFormThirdSectionImage5{
          node {
            link
          }
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
const anton = Anton({ weight: "400", subsets: ["latin"] });
const Form = async () => {

const data = await fetchData();
console.log(data);
return (
<div className="container mx-auto max-w-[1480px]">
   <div className="main-heading py-10">
      <div className="flex items-center justify-between flex-wrap">
         <h2 className="m-0 text-[64px] text-black font-bold"> {data.page.vantageForm.vantageFormMainHeading} </h2>
         <Image  width={200} height={200}  src={data.page.vantageForm.vantageFormFirstSectionRightImage?.node?.link} alt="Vantage Logo" />
      </div>
   </div>
   <section>
      <div className="flex">
         <Image  width={700} height={700} src={data.page.vantageForm.vantageFormSecondSectionFirstColumnImage?.node?.link} className="w-[30%]" alt="Vantage Image 1" />
         <div className="middle-content bg-[#263519] w-[40%] p-10">
            <h2 className="font-anton text-[#A1CF5F] text-[70px] font-medium leading-[97.3px]"> {data.page.vantageForm.vantageFormSecondSectionSecondColumnPrice} </h2>
            <h3 className="font-anton text-[64px] font-medium text-white leading-[88.96px]"> {data.page.vantageForm.vantageFormSecondSectionSecondColumnHeading}</h3>
            <p className="text-white text-[16px] mt-3"> {data.page.vantageForm.vantageFormSecondSectionSecondColumnDescription}</p>
            <div className="flex justify-end mt-10">
               <Link className="d-inline" href="#">
               <Image  width={70} height={70} src="/down-btn.png" alt="Down Button" />
               </Link>
            </div>
         </div>
         <Image  width={700} height={700} src={data.page.vantageForm.vantageFormSecondSectionThirdColumnImage?.node?.link} className="w-[30%]" alt="Vantage Image 2" />
      </div>
   </section>
    <SecondSection />
<section>
<div className="flex justify-center mx-auto w-fit mb-3 gap-3  mt-20">
  <div className=" ">
    <Image  width={700} height={700} alt=""
      className=""
      src={data.page.vantageForm.vantageFormThirdSection.vantageFormThirdSectionImage1?.node?.link}
    />
  </div>
  <div className=" ">
    <Image  width={700} height={700} alt=""
      className=""
      src={data.page.vantageForm.vantageFormThirdSection.vantageFormThirdSectionImage2?.node?.link}
    />
  </div>
  <div className=" ">
  <Image  width={700} height={700} alt=""
      className=""
      src={data.page.vantageForm.vantageFormThirdSection.vantageFormThirdSectionImage3?.node?.link}
    />
  </div>
  <div className="] ">
  <Image  width={700} height={700} alt=""
      className=""
      src={data.page.vantageForm.vantageFormThirdSection.vantageFormThirdSectionImage4?.node?.link}
    />
  </div>
  <div className="  ">
  <Image  width={700} height={700} alt=""
      className=""
      src={data.page.vantageForm.vantageFormThirdSection.vantageFormThirdSectionImage5?.node?.link}
    />
  </div>
</div>

</section>

</div>
);
};
export default Form;