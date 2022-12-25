function Newsletter(){
    return(
        <>
            <section className="bg-blue py-6 sm:py-7 md:py-12 lg:py-14 xl:py-16 2xl:py-[88px] bg-cover md:bg-contain newsletter-background bg-right">
                <div className="container px-3">
                    <h5 className="max-w-[610px] xl:max-w-[770px] 2xl:max-w-[820px] font-ttfirsNeueFontBold font-bold text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-9 2xl:leading-[47px] text-center m-auto text-white">7 years of building digital products and we are just getting started!</h5>
                    <div className="font-montFontSemiBold font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[136px] 2xl:text-[176px] lg:leading-[128px] xl:leading-[136px] 2xl:leading-[160px] text-center py-6 sm:py-7 md:py-12 lg:py-14 xl:py-16 2xl:py-[85px] text-white uppercase overflow-x-hidden">
                        <h3>Send</h3>
                        <h3 className="translate-x-[-7%]">Your</h3>
                        <h3 className="translate-x-[10%]">Request</h3>
                    </div>
                    <div className="pt-12 newsletter-input font-montFontRegular font-medium text-lg sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-3xl lg:leading-7 xl:leading-8 2xl:leading-9 flex flex-wrap items-center justify-between">
                        <input type="name" placeholder="Name" className="max-w-[300px] xs:max-w-[460px] sm:max-w-[620px] lg:max-w-[280px] md:max-w-[340px] xl:max-w-[350px] 2xl:max-w-[441.43px]"/>
                        <input type="email" placeholder="Email" className="my-2 lg:my-2 max-w-[300px] xs:max-w-[460px] sm:max-w-[620px] md:max-w-[340px] lg:max-w-[280px] xl:max-w-[350px] 2xl:max-w-[441.43px]"/>
                        <input type="text" placeholder="Message" className=" my-2 lg:my-2 max-w-[300px] xs:max-w-[460px] sm:max-w-[620px] md:max-w-[340px] lg:max-w-[280px] xl:max-w-[350px] 2xl:max-w-[441.43px]"/>
                        <button type="submit" className="my-2 lg:my-2 max-w-[45px] lg:max-w-[60px] xl:max-w-[70px] 2xl:max-w-[88px]"><img src="arrow-submit.png" alt="arrow-submit" width="88" height="32" loading="lazy"/></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter;