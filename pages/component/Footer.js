function Footer(){
    return(
        <>
            {/* top header */}
            <section className="container py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 2xl:py-12">
                <div className="max-w-[1330px] m-auto">
                    <div className="grid md:grid-cols-3 px-3 md:gap-4 lg:gap-0">
                        <div className="max-w-[369px]">
                            <h3 className="font-montFontBold font-bold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue">HEAD OFFICE</h3>
                            <p className="font-montFontRegular font-medium text-base xl:text-lg 2xl:text-xl leading-[25px] pt-3 2xl:pt-5">13809 Research Boulevard, Suite 500, Austin, TX 78750</p>
                        </div>
                        <div className="pt-4 md:pt-0">
                            <h3 className="font-montFontBold font-bold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue">SECONDRY OFFICE</h3>
                            <p className="font-montFontRegular font-medium text-base xl:text-lg 2xl:text-xl leading-[25px] pt-3 2xl:pt-5">255 Stewart Ave Bethpage, NY 11714</p>
                        </div>
                        <div className="pt-4 md:pt-0">
                            <h3 className="font-montFontBold font-bold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue">OFFSHORE DELIVERY CENTER</h3>
                            <p className="font-montFontRegular font-medium text-base xl:text-lg 2xl:text-xl leading-[25px] pt-3 2xl:pt-5">Suite No. G-02, H - 221 Infinity Business Park, Sector 63, Noida, Uttar Pradesh 201301</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="border-b border-blue"></div>
            <section className="container pt-5 sm:pt-6 md:pt-7 xl:pt-8 2xl:pt-10">
                <div className="max-w-[1330px] m-auto">
                    <div className="grid md:grid-cols-2 pb-[13px] px-3">
                        <div className="grid grid-cols-2">
                            <ul>
                                <li className="font-montFontSemiBold font-semibold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue"><a href="#">About</a></li>
                                <li className="font-montFontSemiBold font-semibold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue"><a href="#">Services</a></li>
                                <li className="font-montFontSemiBold font-semibold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue"><a href="#">Technology</a></li>
                            </ul>
                            <ul>
                                <li className="font-montFontSemiBold font-semibold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue"><a href="#">Marketing</a></li>
                                <li className="font-montFontSemiBold font-semibold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue"><a href="#">Our Work</a></li>
                                <li className="font-montFontSemiBold font-semibold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue"><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="flex justify-end items-start mt-3 md:mt-0">
                            <a href="#" className="max-w-fit font-montFontSemiBold font-semibold text-base xl:text-lg 2xl:text-xl leading-[25px] text-blue italic flex items-center "><span className="px-[2px]"><Image src="top.png" alt="top" width="10" height="14" loading="lazy"/></span>Back to top!</a>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end items-center pb-3 z-20">
                        <a href="#" className="pr-[25px] md:pr-3 lg:pr-4 xl:pr-5 2xl:pr-[25px]"><Image src="facebook-social.png" alt="facebook-social" width="24" height="24" loading="lazy"/></a>
                        <a href="#" className="pr-[25px] md:pr-3 lg:pr-4 xl:pr-5 2xl:pr-[25px]"><Image src="twitter-social.png" alt="twitter-social" width="24" height="24" loading="lazy"/></a>
                        <a href="#" className="pr-[25px] md:pr-3 lg:pr-4 xl:pr-5 2xl:pr-[25px]"><Image src="linkedin-social.png" alt="linkedin-social" width="24" height="24" loading="lazy"/></a>
                        <a href="#" className="pr-[25px] md:pr-3 lg:pr-4 xl:pr-5 2xl:pr-[25px]"><Image src="instagram-social.png" alt="instagram-social" width="24" height="24" loading="lazy"/></a>
                        <a href="#" className="pr-[25px] md:pr-3 lg:pr-4 xl:pr-5 2xl:pr-[25px]`"><Image src="pinterest-social.png" alt="pinterest-social" width="24" height="24" loading="lazy"/></a>
                        <a href="#"><Image src="youtube-social.png" alt="youtube-social" width="24" height="24" loading="lazy"/></a>
                    </div>
                    <div className="relative after:absolute after:content-[''] after:w-full after:border-b after:border-blue after:top-1/2 after:-translate-y-2/4 after:-z-10 md:-mt-6 -z-10"> 
                        <div className="max-w-[350px] m-auto bg-white z-10">
                            <a href="#" className="max-w-[190px] 2xl:max-w-[228px] m-auto"><Image src="Logo.png" alt="Logo" width="" height="" loading="lazy" className="m-auto"/></a>
                        </div>
                    </div>
                    <div className="font-montFontSemiBold font-semibold text-sm xl:text-base 2xl:text-lg leading-[25px] text-blue pb-4 flex flex-wrap justify-between items-center px-3 mt-3 md:mt-0">
                        <p>Copyright © 2022. All rights reserved.</p>
                        <p><a href="">Refund Policy</a> | <a href="#">Privacy Policy</a> | <a href="#">Site Map</a></p>
                    </div>
                </div>
            </section>
            <div className="border-b-8 border-blue"></div>
        </>
    )
}

export default Footer;