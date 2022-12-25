function Approach(){
    return(
        <>
            <section className="container py-6 2xl:py-24 px-3">
                <div className="pb-7 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 2xl:pb-[86px]">
                    <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-blue">Collaborative & Scientific Approach</h3>
                    <p className="pt-5 sm:pt-6 md:pt-7 lg:pt-9 xl:pt-10 2xl:pt-[58px] text-lg sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-3xl lg:leading-8 xl:leading-9 2xl:leading-10 max-w-[1116px] font-montFontRegular font-medium">Our custom Agile development method puts you in control, reducing risks and increasing transparency between our team and yours. This allows you to hit even aggressive timelines.</p>
                </div>
                <div className="grid md:grid-cols-2">
                    <div className="md:flex md:items-center">
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-blue pb-5 sm:pb-6 md:pb-7 xl:pb-8 2xl:pb-10">Solutions for Startups and Enterprises</h3>
                            <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-blue pb-5 sm:pb-6 md:pb-7 xl:pb-8 2xl:pb-10">Web & Mobile App Development</h3>
                            <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-blue pb-5 sm:pb-6 md:pb-7 xl:pb-8 2xl:pb-10">Product Design</h3>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="max-w-[718px] lg:max-w-[490px] xl:max-w-[580px] 2xl:max-w-[718px] w-full flex flex-wrap items-center justify-between">
                            <img src="startup-image.png" alt="startup-image" width="218" height="201" loading="lazy"/>
                            <p className="text-lg md:text-xl xl:text-[22px] 2xl:text-[25px] 2xl:leading-9 font-montFontRegular font-medium max-w-[457px] lg:max-w-[260px] xl:max-w-[303px] 2xl:max-w-[457px]">We address all design and technical challenges, identify any risk areas, and create a sound foundation for your product based on budget, timeline, and technology. We deliver your product blueprint, complete with the app's architecture.</p>
                        </div>
                    </div>
                </div>
                <h6 className="text-base lg:text-lg 2xl:text-xl leading-[25.8px] font-bold font-ttfirsNeueFontBold pt-4"><a href="#">Our Services</a></h6>
            </section>
            <div className="border-b border-light-grey max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1166px] m-auto"></div>
        </>
    )
}

export default Approach;