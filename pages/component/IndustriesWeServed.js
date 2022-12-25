import { useState, useEffect } from 'react'

function IndustriesWeServed(){

    // var startTab = document.getElementById('tab1')
    // cont [imageSelect, setImageSelect] = useState(startTab);

    return(
        <>
            <section className="container pb-5 sm:pb-6 md:pb-7 lg:pb-8 xl:pb-9 2xl:pb-10 px-3">
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-8 xl:leading-9 2xl:leading-10 font-ttfirsNeueFontBold text-blue">Industries Where We Serve</h3>
                    <p className="text-lg sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-3xl lg:leading-8 xl:leading-9 2xl:leading-10 max-w-[1116px] py-7 sm:py-8 md:py-9 lg:py-10 xl:py-11 2xl:py-[58px] font-montFontRegular font-medium">Curated brand- and industry-specific software solutions. As a custom software development company, we leverage our experience in diverse industries to solve industry-specific digital challenges in mobile app and website design and development.</p>
                </div>
                <div className="grid md:grid-cols-2">
                    <div className="py-5 md:py-0 md:m-auto w-full">
                        <div className='industry-image active-image' id='tab1'>
                            <Image src="edTech.webp" alt="edTech" width="734" height="423" loading="lazy"/>
                        </div>
                        <div className='industry-image hidden' id='tab2'>
                            <Image src="edTech.webp" alt="edTech" width="734" height="423" loading="lazy"/>
                        </div>
                        <div className='industry-image hidden' id='tab3'>
                            <Image src="edTech.webp" alt="edTech" width="734" height="423" loading="lazy"/>
                        </div>
                        <div className='industry-image hidden' id="tab4">
                            <Image src="edTech.webp" alt="edTech" width="734" height="423" loading="lazy"/>
                        </div>
                        <div className='industry-image hidden' id="tab5">
                            <Image src="edTech.webp" alt="edTech" width="734" height="423" loading="lazy"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="2xl:max-w-[746px] max-h-[355px] sm:max-h-[275px] md:max-w-[340px] md:max-h-[366px] lg:max-w-[410px] lg:max-h-[430px] xl:max-w-[600px] xl:max-h-[350px] md:m-auto lg:mr-0 2xl:max-h-[423px] overflow-y-scroll" id="scrollbarColor">
                            <div className="pb-5 2xl:pb-[30px] active-tab industry-name" data-id='#tab1'>
                                <h2 className="text-4xl sm:text-[40px] md:text-4xl lg:text-[50px] xl:text-6xl 2xl:text-[70px] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] font-ttfirsNeueFontBold font-bold text-blue/[50%]">EdTech</h2>
                                <p className="text-base md:text-lg 2xl:text-[22px] lg:leading-8 xl:leading-9 2xl:leading-10 pt-[10px] font-montFontSemiBold font-semibold text-black/[50%]">Custom curated brand- and industry-specific software solutions</p>
                            </div>
                            <div className="pb-5 2xl:pb-[30px] industry-name" data-id='#tab2'>
                                <h2 className="text-4xl sm:text-[40px] md:text-4xl lg:text-[50px] xl:text-6xl 2xl:text-[70px] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] font-ttfirsNeueFontBold font-bold text-blue/[50%]">FinTech</h2>
                                <p className="text-base md:text-lg 2xl:text-[22px] lg:leading-8 xl:leading-9 2xl:leading-10 pt-[10px] font-montFontSemiBold font-semibold text-black/[50%]">Custom curated brand- and industry-specific software solutions</p>
                            </div>
                            <div className="pb-5 2xl:pb-[30px] industry-name" data-id='#tab3'>
                                <h2 className="text-4xl sm:text-[40px] md:text-4xl lg:text-[50px] xl:text-6xl 2xl:text-[70px] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] font-ttfirsNeueFontBold font-bold text-blue/[50%]">MedTech</h2>
                                <p className="text-base md:text-lg 2xl:text-[22px] lg:leading-8 xl:leading-9 2xl:leading-10 pt-[10px] font-montFontSemiBold font-semibold text-black/[50%]">Custom curated brand- and industry-specific software solutions</p>
                            </div>
                            <div className="pb-5 2xl:pb-[30px] industry-name" data-id='#tab4'>
                                <h2 className="text-4xl sm:text-[40px] md:text-4xl lg:text-[50px] xl:text-6xl 2xl:text-[70px] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] font-ttfirsNeueFontBold font-bold text-blue/[50%]">HiTech</h2>
                                <p className="text-base md:text-lg 2xl:text-[22px] lg:leading-8 xl:leading-9 2xl:leading-10 pt-[10px] font-montFontSemiBold font-semibold text-black/[50%]">Custom curated brand- and industry-specific software solutions</p>
                            </div>
                            <div className="pb-5 2xl:pb-[30px] industry-name" data-id='#tab5'>
                                <h2 className="text-4xl sm:text-[40px] md:text-4xl lg:text-[50px] xl:text-6xl 2xl:text-[70px] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] font-ttfirsNeueFontBold font-bold text-blue/[50%]">Retail</h2>
                                <p className="text-base md:text-lg 2xl:text-[22px] lg:leading-8 xl:leading-9 2xl:leading-10 pt-[10px] font-montFontSemiBold font-semibold text-black/[50%]">Custom curated brand- and industry-specific software solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default IndustriesWeServed;