import { Metadata } from 'next';
import Slider from 'react-slick';
import Testimonial from '@/components/Testimonial';
import VideoCarousel from '@/components/videotestemonial';
import Newsletter from '@/components/Newsletter';
import PostSlider from '@/components/PostSlider';
import { useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Anton } from 'next/font/google';
import client from 'apollo-client';
import Partner from '@/components/partner';
import SwiperSection from '@/components/postbannerslider';
import ReactPlayer from 'react-player';
import { POSTS_QUERY_SEC, POSTS_QUERY } from '@/queries/home';
import Image from 'next/image';
import Link from 'next/link';
const anton = Anton({ weight: '400', subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
//   description: "This is Home for Solid Pro",
//   // other metadata
// };

async function fetchData() {
    const { data } = await client.query({
        query: POSTS_QUERY,
    });
    return data;
}

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
export default async function Home() {
    const data = await fetchData();
    console.log(data);
    return (
        <main className="mt-[-96px]">
            {/* body start */}
            {/* bg-[url('/banner.jpg')] */}
            <section className="w-full">
                <div className="container-fluid mx-auto">
                    <div className="relative w-full bg-cover bg-[center_top_-100px] h-[90vh] md:h-[850px]">
                        <Image
                            src="/banner.jpg"
                            alt="banner"
                            className="w-full h-full object-cover absolute top-0 left-0"
                            width="2000"
                            height="2000"
                        />
                        <div className="container max-w-[1480px] mx-auto relative h-[90vh] md:h-[780px] flex">
                            <div className="relative w-full text-white flex flex-col md:justify-center justify-end md:mt-20 mb-10">
                                <strong
                                    className={`${anton.className} block uppercase md:text-[126px] leading-[50px] text-[37px] font-light xl:leading-[130px]  md:leading-none`}
                                >
                                    {data.page.bannerHome.textBanner + ` `}
                                    <br className="hidden md:block" />
                                    {data.page.bannerHome.textBanner2 + ` `}
                                    <br className="hidden md:block" />
                                    {data.page.bannerHome.textBanner3}
                                </strong>
                                <p className="mt-2 md:mb-10 mb-10 md:w-[26%] font-light xl:leading-6 md:leading-none">
                                    {data.page.bannerHome.subtitle_bottom}{' '}
                                </p>
                                <a
                                    href={
                                        data.page.bannerHome
                                            .buttonLinkBannerHome
                                    }
                                    className="flex w-fit  items-center gap-2.5 md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                                >
                                    {data.page.bannerHome.buttonText}
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
                                </a>
                            </div>
                            <div className="hidden md:block absolute right-[17px] md:right-[55px]  md:max-w-[427px]   bottom-[8px]  w-[40%] swiper-slider">
                                <SwiperSection />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full bg-cover bg-center"
                // style={{
                //   backgroundImage: `url('${data.page.bannerHomesecond.bannersecondbackground?.node?.link}')`,
                // }}
            >
                <div className="container mx-auto max-w-[1480px]">
                    <div className="flex md:p-[105px] md:pb-[280px] flex-col md:flex-row h-full justify-between">
                        <div className="w-full md:w-1/3 p-4 md:p-2 flex flex-col justify-center">
                            <h2 className="font-bold text-gray-800 text-3xl md:text-[56px] leading-tight mb-4 w-max">
                                {
                                    data.page.bannerHomesecond
                                        .heading_second_section
                                }
                            </h2>
                            <p className="max-w-[376px] md:text-[15px] text-black	 leading-normal mb-6 mt-4">
                                {data.page.bannerHomesecond.subtitleText}{' '}
                            </p>
                            <div className="flex flex-col md:flex-row md:mx-0 ">
                                <Link
                                    href={
                                        data.page.bannerHomesecond
                                            .buttonLinkSecondSection
                                    }
                                >
                                    {' '}
                                    <button className=" w-full md:w-auto flex items-center gap-2.5 text-black font-bold rounded mb-4 md:mb-0 md:mr-4">
                                        {data.page.bannerHomesecond.buttonText}
                                        <svg
                                            width="17"
                                            height="16"
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.94238 15.4655L13.6522 4.75571V14.1136C13.6522 14.8614 14.2658 15.4751 15.0137 15.4751C15.1912 15.4753 15.3671 15.4404 15.5312 15.3725C15.6953 15.3047 15.8444 15.2051 15.97 15.0795C16.0956 14.9539 16.1952 14.8048 16.263 14.6407C16.3309 14.4766 16.3658 14.3008 16.3656 14.1232L16.3656 1.4862C16.3658 1.30862 16.3309 1.13274 16.263 0.968636C16.1952 0.804533 16.0956 0.655428 15.97 0.529856C15.8444 0.404283 15.6953 0.30471 15.5312 0.236834C15.3671 0.168959 15.1912 0.134115 15.0137 0.134297L2.37669 0.134296C2.19916 0.134296 2.02336 0.169266 1.85934 0.237205C1.69532 0.305145 1.54629 0.404726 1.42075 0.530262C1.29522 0.655799 1.19563 0.804831 1.1277 0.968852C1.05976 1.13287 1.02479 1.30867 1.02479 1.4862C1.02479 1.66374 1.05976 1.83953 1.1277 2.00356C1.19564 2.16758 1.29522 2.31661 1.42075 2.44215C1.54629 2.56768 1.69532 2.66726 1.85934 2.7352C2.02336 2.80314 2.19916 2.83811 2.3767 2.83811L11.7346 2.83811L1.02479 13.5479C0.497448 14.0752 0.497448 14.9382 1.02479 15.4655C1.55213 15.9928 2.41505 15.9928 2.94238 15.4655Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>{' '}
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2  bg-cover bg-center ">
                            <div className="inner_Sec_div relative">
                                <div className="md:flex flex-col ">
                                    <div className="flex bg-white items-end md:w-5/12 w-full md:max-w-[300px] mx-auto !h-[280px] -bottom-[10px] relative px-3 py-3  md:absolute border border-solid border-black rounded -left-10">
                                        <div>
                                            {' '}
                                            <p className="font-bold text-black w-[100%] mb-3 text-[18px]">
                                                {' '}
                                                {
                                                    data.page.bannerHomesecond
                                                        .rightsmallsectiontext
                                                }
                                            </p>
                                            <Link
                                                href={
                                                    data.page.bannerHomesecond
                                                        .rightsmallsectionlink
                                                }
                                            >
                                                <p className="text-black text-[15px] underline">
                                                    {' '}
                                                    {
                                                        data.page
                                                            .bannerHomesecond
                                                            .rightsmallsectionlinktext
                                                    }
                                                </p>
                                            </Link>
                                        </div>
                                        <svg
                                            className="absolute top-[20px] right-[20px]"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </div>
                                    {/* <Image  src={data.page.bannerHomesecond.firstRightImage?.node?.link} className='md:w-4/12 w-[40%] bottom-0  p-4 h-auto absolute md:absolute' alt="" width="200" height="200" /> */}
                                    <Image
                                        src={
                                            data.page.bannerHomesecond
                                                .secondRightImage?.node?.link
                                        }
                                        className="w-full md:w-8/12 md:mx-0 md:relative left-6 bottom-6 mx-auto m-4 self-end rounded"
                                        quality={100}
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto  max-w-[1480px] ">
                <div className="w-[100%] md:mt-[-130px] mt-[50px] mx-auto flex flex-col md:flex-row border border-black border-solid ">
                    <div className=" flex flex-col md:flex-row md:w-6/12 bg-white ">
                        <div
                            style={{
                                backgroundImage: `url('${data.page.sectionHomethird.firstcolumnimage?.node?.link}')`,
                            }}
                            className="w-6/12  bg-no-repeat bg-cover bg-bottom h-[313px] md:w-[256px] md:h-[313px]   border-t border-transparent "
                        ></div>
                        <div className="md:w-6/12 md:pl-[14px] py-4 gap-0  text-left md:text-left px-4 md:px-0">
                            <h1 className="text-[32px] text-black leading-none mt-3 ">
                                {data.page.sectionHomethird.firstcolumnheading}
                            </h1>
                            <h5 className="text-[16px] text-black font-bold mt-2">
                                {data.page.sectionHomethird.subtitletextfirst}
                            </h5>
                            <hr className="w-[20px mt-2" />
                            <p className="text-[14px] text-black leading-normal my-5">
                                {data.page.sectionHomethird.buttontxtfirst}
                            </p>
                            <p className="text-[14px] text-black leading-normal mb-4">
                                <b> Date:</b> November 15, 2024 <br />
                                <b>Time:</b> 10:00 AM - 12:00 PM
                            </p>
                            <a
                                href={
                                    data.page.sectionHomethird
                                        .buttonLink1ThirdSection
                                }
                            >
                                {' '}
                                <button className="container mb-6 md:mb-0 max-w-[109px] flex items-center gap-2.5 justify-center  md:w-1/2 float-left bg-[#A1CF5F] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[13px]">
                                    Sign up{' '}
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="md:w-6/12 flex flex-col md:flex-row ">
                        <div className="md:w-6/12  md:text-left text-left py-4 px-4 bg-[#224334]">
                            <h3 className="text-[32px] text-white  leading-none mt-3">
                                {data.page.sectionHomethird.secondcolumnheading}
                            </h3>
                            <h5 className="text-[16px] text-white font-bold  mt-2">
                                {data.page.sectionHomethird.subtitletextsecond}
                            </h5>
                            <hr className="w-[20px] md:mx-0 mx-auto" />
                            <div className="flex flex-row md:flex-row md:gap-[10px] gap-[28px] items-center justify-between md:items-end mt-10 md:mt-22">
                                <a
                                    href={
                                        data.page.sectionHomethird
                                            .buttonLink2ThirdSection
                                    }
                                >
                                    {' '}
                                    <button className="container max-w-[109px] md:max-w-[100%] flex items-center gap-2.5 justify-center  md:w-[100%] px-1 md:px-3 float-left bg-[#A1CF5F] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px]">
                                        {
                                            data.page.sectionHomethird
                                                .buttontxtsecond
                                        }
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>
                                </a>
                                <Image
                                    src={
                                        data.page.sectionHomethird
                                            .secondcolumnimage?.node?.link
                                    }
                                    alt=""
                                    className="object-cover w-[106px] h-[106px]"
                                    alt=""
                                    width="200"
                                    height="200"
                                />
                            </div>
                        </div>
                        <div className="md:w-6/12 py-4 px-4  md:text-left  bg-[#a1cf5f]">
                            <h3 className="text-[32px] text-black   leading-none mt-3">
                                {data.page.sectionHomethird.thirdcolumnheading}
                            </h3>
                            <h5 className="text-[16px] text-black font-bold  mt-2">
                                {data.page.sectionHomethird.subtitletextthird}
                            </h5>
                            <hr className="w-[20px] md:mx-0 mx-auto" />
                            <div className="flex flex-row md:flex-row md:gap-[10px] gap-[28px] items-center  justify-between md:items-end  mt-10 md:mt-22">
                                <a
                                    href={
                                        data.page.sectionHomethird
                                            .buttonLink3ThirdSection
                                    }
                                >
                                    {' '}
                                    <button className="container max-w-[109px] md:max-w-[100%] flex items-center gap-2.5 justify-center  md:w-[100%] px-1  md:px-3 float-left bg-[#FFFFFF] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px]">
                                        {
                                            data.page.sectionHomethird
                                                .buttontxtthird
                                        }{' '}
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>{' '}
                                </a>
                                <Image
                                    src={
                                        data.page.sectionHomethird
                                            .thirdcolumnimage?.node?.link
                                    }
                                    alt=""
                                    className="object-cover w-[106px] h-[106px]"
                                    alt=""
                                    width="200"
                                    height="200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-[1480px] mx-auto">
                {' '}
                <div className="container w-[100%] mx-auto pt-[30px]  md:pt-[150px] md:pb-[100px]">
                    <h1 className=" px-5 md:px-0 text-[25px] md:max-w-[1062px] md:mx-auto  md:text-[48px] pb-5 mt-10 md:mt-0 md:pb-15 text-black font-bold leading-[30.09px] md:leading-[46.09px] text-center">
                        {/* Confused over your calling?<br className="hidden md:block" />
          Is ministry the only work that 'counts'? */}
                        {data.page.homefourtsection.mainheadingfourth}
                    </h1>
                    <div className="pl-[23px] md:pl-[14px] flex items-center p-[23px] ">
                        <div className=" md:w-6/12 md:flex md:gap-3 md:items-center md:justify-center">
                            <div className=" md:w-6/12 p-2">
                                <Image
                                    src={
                                        data.page.homefourtsection.firstimage
                                            ?.node?.link
                                    }
                                    alt=""
                                    className="md:h-auto mx-auto w-full md:w-auto md:mx-0 h-[100%]"
                                    alt=""
                                    width="200"
                                    height="200"
                                />
                            </div>

                            <div className=" md:w-6/12 mt-4 md:mt-0 ">
                                <span className="mt-10 md:mt-0 text-[13px] bg-[#a1cf5f] text-black text-left mx-auto md:mx-0 w-[55%] rounded-[20px] px-3 py-1 font-bold">
                                    {data.page.homefourtsection.firstsubtitle1}
                                </span>
                                <h5 className="text-[20px] pt-3 text-black  text-left md:text-left font-bold">
                                    {data.page.homefourtsection.firstheading}
                                </h5>
                                <p className="text-[16px] text-black text-left md:text-left leading-tight mt-3">
                                    {data.page.homefourtsection.firstparagraph}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" pl-[23px] md:pl-[14px] flex items-center p-[23px] justify-end md:mt-[-80px]">
                        <div className="md:w-6/12 grid md:flex  items-center justify-center">
                            <div className="md:w-6/12 float-right md:order-1 order-2  mt-4 md:mt-0 ">
                                <span className="text-[13px] bg-[#a1cf5f] mx-auto md:mx-0 text-black text-left w-[55%] rounded-[20px] px-3 py-1 font-bold">
                                    {data.page.homefourtsection.secondsubtitle}
                                </span>
                                <h5 className="text-[20px] pt-3 text-left md:text-left  text-black font-bold">
                                    {data.page.homefourtsection.secondheading}
                                </h5>
                                <p className="text-[16px] text-left md:text-left text-black leading-normal mt-3 pe-6">
                                    {data.page.homefourtsection.secondparagraph}
                                </p>
                            </div>
                            <div className="md:w-6/12 p-2 md:order-2">
                                <Image
                                    src={
                                        data.page.homefourtsection.secondimage
                                            ?.node?.link
                                    }
                                    alt=""
                                    className="md:h-auto mx-auto md:w-1/2 md:mx-0 h-[100%] w-full"
                                    alt=""
                                    width="200"
                                    height="200"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pl-[23px] md:pl-[14px] md:pl-[120px] flex items-center p-[23px]  md:mt-[-70px]">
                        <div className="md:w-6/12 md:flex md:items-center md:justify-center grid">
                            <div className="md:w-6/12 order-2 md:order-1  mt-4 md:mt-0 mb-10 md:mb-0">
                                <span className="text-[13px] bg-[#a1cf5f] text-black text-left mx-auto md:mx-0  w-[55%] rounded-[20px] px-3 py-1 font-bold">
                                    {data.page.homefourtsection.thirdsubtitle}
                                </span>
                                <h5 className="text-[20px] pt-3  text-black text-left md:text-left font-bold">
                                    {data.page.homefourtsection.thirdheading}
                                </h5>
                                <p className="text-[16px] text-black text-left md:text-left leading-normal  mt-3 ">
                                    {data.page.homefourtsection.thirdparagraph}
                                </p>
                            </div>
                            <div className="md:w-6/12 p-2 order-1 md:order-2">
                                <Image
                                    src={
                                        data.page.homefourtsection.thirdimage
                                            ?.node?.link
                                    }
                                    alt=""
                                    className="  md:w-[60%] md:h-auto mx-auto md:mx-0 h-[100%] w-full"
                                    alt=""
                                    width="200"
                                    height="200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Book section */}
            <div className="container mx-auto max-w-[1481px] ">
                <div
                    className="flex flex-col md:flex-row w-[100%] mx-auto items-center rounded-[5px]"
                    style={{ backgroundColor: 'rgb(3, 4, 2)' }}
                    // data.page.homefifthsection.fifthfirstimage?.node?.link
                >
                    <div className="md:w-5/12 w-full p-[40px] md:p-[40px] mt-10 md:mt-0">
                        <span className="text-[18px] bg-[#fff]   text-black font-bold mx-auto md:mx-0 text-center w-[45%] rounded-[20px] px-4 py-1 font-bold">
                            {data.page.homefifthsection.fifthfirstsubtitle}
                        </span>
                        <h5 className="md:text-[45px] text-[26px] w-max text-[#A1CF5F] md:text-left text-left font-bold pt-[20px] pb-[10px] md:leading-10 ">
                            {data.page.homefifthsection.mainheadingfifth}
                        </h5>
                        <p className="md:text-[45px] md:w-[87%] text-[22px] md:text-left text-left text-white md:leading-tight font-bold">
                            {data.page.homefifthsection.fifthheadingsimple}
                        </p>
                        <Image
                            src={
                                data.page.homefifthsection.authorimage?.node
                                    ?.link
                            }
                            className="md:h-[150px] mx-unset mt-10 md:mt-0 md:mx-0 h-[83px]"
                            alt=""
                            width="200"
                            height="200"
                            objectFit="cover"
                        />

                        <h5 className="text-[30px] text-white md:text-left text-left font-bold pb-2 md:pb-5">
                            {data.page.homefifthsection.authortitle}
                        </h5>
                        <h5 className="text-[12px] text-white md:text-left text-left font-bold">
                            {data.page.homefifthsection.authordesignation}
                        </h5>
                    </div>
                    <div className="md:w-8/12 relative h-max">
                        {/* <Image
                            src={
                                data.page.homefifthsection.fifthfirstimage?.node
                                    ?.link
                            }
                            className="w-full h-full object-cover h-max"
                            quality={100}
                            alt=""
                            width="1000"
                            height="1000"
                        /> */}

                        <Image
                            src="/video.gif"
                            className="w-[224px] video-gif"
                            alt=""
                            width="200"
                            height="200"
                        />
                        <div className="md:float-right md:mt-[-50px] md:mr-3 mt-5 z-99999 relative">
                            <a href={data.page.homefifthsection.buttonlinkone}>
                                {' '}
                                <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                                    {data.page.homefifthsection.fifthbuttonone}{' '}
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
                            </a>
                            <a
                                href={
                                    data.page.homefifthsection.buttonlinksecond
                                }
                            >
                                {' '}
                                <button className=" mx-auto mt-[21px] md:mx-0 md:mt-4   flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]">
                                    {
                                        data.page.homefifthsection
                                            .textbuttonsecond
                                    }{' '}
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
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Partner />
            <div className="container mx-auto max-w-[1481px]">
                {' '}
                <section className=" md:flex w-[100%] mt-[54px] mx-auto  bg-[#000]">
                    <div className=" md:w-4/12 p-10 relative">
                        <h2
                            className={`${anton.className} text-[#A1CF5F] text-[30px] md:w-[73%] md:text-[48px] uppercase   leading-[50px] md:leading-[72px]`}
                        >
                            {data.page.homesixthsection.heading}
                        </h2>
                        <p className="text-white text-[16px] leading-tight pt-5">
                            {data.page.homesixthsection.paragraph}
                        </p>
                        <p className="text-white text-[17px] md:text-[20px] font-bold pt-[29px] ">
                            {data.page.homesixthsection.author}
                        </p>
                        <p className="text-white text-[16px] pl-0 md:pl-8  ">
                            {data.page.homesixthsection.designations}
                        </p>
                        <Image
                            src="/84.png"
                            className="absolute top-[38%] right-3 md:top-3"
                            alt=""
                            width="200"
                            height="200"
                        />
                    </div>
                    <div
                        className=" md:w-8/12   bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${data.page.homesixthsection.rightimage?.node?.link}')`,
                        }}
                    ></div>
                </section>
            </div>
            <PostSlider />
            <Testimonial />
            <VideoCarousel />
            <Newsletter />
        </main>
    );
}
