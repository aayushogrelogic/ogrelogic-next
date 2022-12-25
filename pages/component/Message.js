function Message(){
    return(
        <>
            <section className="container py-10 sm:py-11 md:py-12 lg:py-14 xl:py-16 2xl:py-[85px]">
                <h4 className="text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] leading-[40px] font-bold font-ttfirsNeueFontBold text-blue text-center">A Message from Our CEO</h4>
                <div className="pt-8 sm:pt-9 md:pt-10 lg:pt-14 xl:pt-16 2xl:pt-[77px] pb-16 color-circles max-w-[180px] xl:max-w-[200px] 2xl:max-w-[263px] m-auto">
                    <img src="GauravSharma.png" alt="GauravSharma" width="263" height="251" loading="lazy" className="m-auto"/>
                </div>
                <div>
                    <p className="pb-6 lg:pb-8 xl:pb-9 2xl:pb-10 max-w-[991px] m-auto text-lg sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-3xl lg:leading-9 xl:leading-10 2xl:leading-[44px] text-center font-medium font-montFontRegular">“Intellectuals Solve Problems, Geniuses Prevent Them” said Albert Einstein. At Ogrelogic, this is exactly the motto that we follow.</p>
                    <h5 className="font-ttfirsNeueFontBold font-bold text-lg sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-3xl leading-10 text-center">Gaurav Sharma</h5>
                    <p className="lg:leading-8 xl:leading-9 2xl:leading-10 text-lg md:text-xl xl:text-[22px] 2xl:text-[25px] text-center font-montFontRegular font-medium pt-[10px]">(Co-Founder and CEO)</p>
                </div>
            </section>
        </>
    )
}

export default Message;