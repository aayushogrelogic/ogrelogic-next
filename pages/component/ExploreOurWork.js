import { Carousel } from 'react-responsive-carousel';
function ExploreOurWork(){
    return(
        <>
            <section className="bg-blue relative pt-[66px] my-10 sm:my-11 md:my-12 lg:my-16 xl:my-20 2xl:my-[100px]">
                <div className="explore-background bg-cover md:bg-contain">
                    <div className="container">
                        <h3 className="px-3 text-left md:text-center text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-bold font-ttfirsNeueFontBold text-white">Explore Our Work</h3>
                        <p className=" px-3 text-left md:text-center text-white font-montFontRegular font-medium text-lg sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-3xl lg:leading-8 xl:leading-9 2xl:leading-10 max-w-[1155px] m-auto pt-[45px]">Explore some of our projects that showcase how we utilize our design and development capabilities to ideate, build and launch mobile apps and websites based on the clients’ vision, budget and timelines</p>
                    </div>
                    <div className="pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-[70px] 2xl:pt-20">
                        <Carousel>
                        <div>
                            <div className="flex flex-wrap lg:flex-nowrap">
                                <div className="container xs:max-w-[475px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[400px] 2xl:max-w-[420px] m-auto w-full animate-slide-text">
                                    <h3 className="px-3 text-xl text-left sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] font-bold font-ttfirsNeueFontBold text-white">Sleep Solution Hub</h3>
                                    <p className="px-3 font-medium text-left text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[25px] lg:leading-6 xl:leading-7 2xl:leading-[31px] font-montFontRegular text-white py-5 max-w-[401px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas laboriosam</p>
                                    <h5 className="px-3 font-bold text-left font-ttfirsNeueFontBold text-base xl:text-lg 2xl:text-xl xl:leading-6 2xl:leading-[25.8px] text-white py-4">View Case Study</h5>
                                </div>
                                <div className="animate-slide lg:max-w-[634px] xl:max-w-[882px] 2xl:max-w-[1421px]">
                                    <img src="sleep-solution-image.webp" alt="sleep-solution-image" width="1421" height="804" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap lg:flex-nowrap">
                                <div className="container xs:max-w-[475px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[400px] 2xl:max-w-[420px] m-auto w-full animate-slide-text">
                                    <h3 className="px-3 text-xl text-left sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] font-bold font-ttfirsNeueFontBold text-white">Sleep Solution Hub</h3>
                                    <p className="px-3 font-medium text-left text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[25px] lg:leading-6 xl:leading-7 2xl:leading-[31px] font-montFontRegular text-white py-5 max-w-[401px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas laboriosam</p>
                                    <h5 className="px-3 font-bold text-left font-ttfirsNeueFontBold text-base xl:text-lg 2xl:text-xl xl:leading-6 2xl:leading-[25.8px] text-white py-4">View Case Study</h5>
                                </div>
                                <div className="animate-slide lg:max-w-[634px] xl:max-w-[882px] 2xl:max-w-[1421px]">
                                    <img src="sleep-solution-image.webp" alt="sleep-solution-image" width="1421" height="804" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                        </Carousel>
                    </div>
                    {/* <div className="absolute top-0 left-0 w-full h-full">
                        <img src="work-background.png" alt="work-background" width="915" height="1107" loading="lazy"/>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default ExploreOurWork;