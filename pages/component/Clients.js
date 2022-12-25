function Clients(){
    return(
        <>
            <section className="pt-8 sm:pt-9 md:pt-10 lg:pt-11 xl:pt-14 2xl:pt-[62px] pb-12 sm:pb-16 md:pb-24 lg:pb-28 xl:pb-36 2xl:pb-[170px] container px-3">
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-blue md:text-center">What our clients says about us</h3>
                    <p className="pt-5 sm:pt-6 md:pt-7 lg:pt-9 xl:pt-10 2xl:pt-[58px] text-lg sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-3xl lg:leading-8 xl:leading-9 2xl:leading-10 max-w-[1030px] font-montFontRegular font-medium md:text-center m-auto">Our results speak for themselves—and so do our clients! See what they have to say about our service.</p>
                </div>
                {/* review slider */}
                <div className="swiper-logo bg-contain pt-8 sm:pt-9 md:pt-10 lg:pt-11 xl:pt-12 2xl:pt-[60px]">
                    <div>
                        <div>
                            <Image src="client-swiper-1.webp" alt="client-swiper-1" width="400" height="789" className="m-auto"/>
                        </div>
                        <h5 className="font-ttfirsNeueFontBold font-bold text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 text-center pt-[35px]">Mike Richard</h5>
                    </div>
                </div>
                {/* testimonial tabs*/}
                <div className="grid md:grid-cols-3 pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[160px] pb-6 sm:pb-7 md:pb-8 lg:pb-9 xl:pb-10 2xl:pb-[52px]">
                    <div className="md:col-span-1">
                        <div className="client-active-tab">
                            <h5 className="mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px] pb-[2px] max-w-fit text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-black/[50%]">Bernie Scarpa</h5>
                        </div>
                        <div>
                            <h5 className="mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px] pb-[2px] max-w-fit text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-black/[50%]">Nick Palladino</h5>
                        </div>
                        <div>
                            <h5 className="mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px] pb-[2px] max-w-fit text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-black/[50%]">P. Casey Hurley</h5>
                        </div>
                        <div>
                            <h5 className="max-w-fit pb-[2px] text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-black/[50%]">Erik Radle</h5>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <div className="flex flex-wrap items-start justify-between ">
                            <div className="max-w-[180px] lg:max-w-[200px] xl:max-w-[230px] 2xl:max-w-[268px] my-5 md:mt-0 lg:mb-0">
                                <Image src="client-testimonial.png" alt="client-testimonial" width="268" height="251"/>
                            </div>
                            <p className="sm:max-w-[400px] lg:max-w-[435px] xl:max-w-[532px] 2xl:max-w-[717px] font-medium text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[25px] lg:leading-8 xl:leading-9 2xl:leading-[40px] font-montFontRegular">OgreLogic Solutions was a great help from start to finish. I have looked for a web master to help me for months and when I found this company and spoke to them about there service and how they can help me, I know I found the right service to help me. And what I really like about OgreLogic is when I have a question they are there for me. I highly recommend this service.</p>
                        </div>
                    </div>
                </div>
                <h6 className="text-base lg:text-lg 2xl:text-xl leading-[25.8px] font-bold font-ttfirsNeueFontBold">Testimonials</h6>
            </section>
        </>
    )
}

export default Clients;