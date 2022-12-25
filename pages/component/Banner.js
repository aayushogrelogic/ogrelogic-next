function Banner(){
    return(
        <>
            <section className="py-5 sm:py-8 lg:py-11 2xl:py-[50px] overflow-hidden px-3">
                <div className="container">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="">
                    <h1 className="text-blue text-4xl sm:text-6xl md:text-5xl lg:leading-[75px] xl:leading-[85px] 2xl:leading-[105px] lg:text-7xl xl:text-[80px] 2xl:text-[104px] font-bold font-ttfirsNeueFontBold max-w-[719px] py-3">Mobile App<br></br>Design and<br></br> Development</h1>
                    <h4 className="font-semibold text-lg sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-3xl xl:leading-8 2xl:leading-[38.34px] max-w-[719px] py-2 2xl:py-[31px] font-montFontRegular">Developing top notch  innovative mobile apps customized to your vision</h4>
                    <h3 className="text-base xl:text-lg 2xl:text-xl xl:leading-6 2xl:leading-[25.8px] font-bold font-ttfirsNeueFontBold py-1">Lets Talk</h3>
                    </div>
                    <div className="relative m-auto pt-5">
                    <div className="circle-rotate w-full m-auto max-w-xs lg:max-w-[480px] xl:max-w-[580px] 2xl:max-w-[655px]">
                        <img src="circle-rotate.png" alt="circle-rotate" width="655.12" height="613.94" loading="lazy"/>
                    </div>
                    <div className="absolute top-1/2 -translate-y-2/4 w-full max-w-xs xl:max-w-[720px] 2xl:max-w-[794px]">
                        <img src="banner-mobile.webp" alt="banner-mobile" width="794" height="549.77" loading="lazy"/>
                    </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 pt-10">
                    <div className="grid grid-cols-2 gap-5 lg:gap-0 sm:flex sm:flex-wrap items-center justify-between w-full border-b-2 border-yellow pb-5 2xl:pb-[30px]">
                    <img src="web-Development-Companies-in-Austin-Badge.png" alt="web-Development-Companies-in-Austin-Badge" className="m-auto p-2 md:p-0 max-w-[60px] lg:max-w-[50px] xl:max-w-[55px] 2xl:max-w-[66px]" width="66" height="66" loading="lazy"/>
                    <img src="digital-best.png" alt="digital-best" width="66" height="66" loading="lazy" className="m-auto p-2 md:p-0 max-w-[60px] lg:max-w-[50px] xl:max-w-[55px] 2xl:max-w-[66px]"/>
                    <img src="clutch-firms.png" alt="clutch-firms" width="125" height="51" loading="lazy" className="m-auto p-2 md:p-0 max-w-[110px] lg:max-w-[90px] xl:max-w-[100px] 2xl:max-w-[125px]"/>
                    <img src="trustpilots.png" alt="trustpilots" width="135.11" height="60.75" loading="lazy" className="m-auto p-2 md:p-0 max-w-[120px] lg:max-w-[90px] xl:max-w-[110px] 2xl:max-w-[135.11px]"/>
                    <img src="top-software.png" alt="top-software" width="83" height="58" loading="lazy" className="m-auto p-2 md:p-0 max-w-[70px] lg:max-w-[50px] xl:max-w-[60px] 2xl:max-w-[83px]"/>
                    <img src="google-star.png" alt="google-star" width="127" height="24" loading="lazy" className="m-auto p-2 md:p-0 max-w-[97px] lg:max-w-[75px] xl:max-w-[97px] 2xl:max-w-[127px]"/>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Banner;