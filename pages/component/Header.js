import { useState, useEffect } from 'react'



function Header(){

    const [ toggleClass,  setToggleClass] = useState(false);
       

    useEffect(() => {

        if(!toggleClass){

           document.getElementById('mobileMenu').classList.add('hidden');
        
        } else {

           document.getElementById('mobileMenu').classList.remove('hidden');
        
        }
        
    });


    return(
        <>
            <header className="py-[17px] px-3">
                <div className="container flex flex-wrap items-center justify-between">
                    <div className="lg:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[250px] flex justify-between items-center order-1">
                        <div className="max-w-[200px] 2xl:max-w-[250px]">
                            <a href="#"><Image src="Logo.png" alt="logo" width="250" height="50.5" loading="lazy"/></a>
                        </div>
                    </div>
                    <nav className="order-3 hidden lg:block lg:order-2">
                        <ul className="flex lg:text-base xl:text-lg 2xl:text-xl leading-[25.56px] font-montFontRegular">
                            <li className="lg:px-2 xl:px-3 2xl:px-4 font-montFontRegular font-semibold"><a href="#">About</a></li>
                            <li className="lg:px-2 xl:px-3 2xl:px-4 font-montFontRegular font-semibold"><a href="#">Services</a></li>
                            <li className="lg:px-2 xl:px-3 2xl:px-4 font-montFontRegular font-semibold"><a href="#">Technology</a></li>
                            <li className="lg:px-2 xl:px-3 2xl:px-4 font-montFontRegular font-semibold"><a href="#">Marketing</a></li>
                            <li className="lg:px-2 xl:px-3 2xl:px-4 font-montFontRegular font-semibold"><a href="#">Our Work</a></li>
                            <li className="lg:px-2 xl:px-3 2xl:px-4 font-montFontRegular font-semibold"><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="flex justify-between items-center lg:w-full lg:max-w-[200px] 2xl:max-w-[230px] order-2 lg:order-3">
                        <div className="text-base lg:text-base xl:text-lg 2xl:text-xl leading-[25.56px] relative hidden xs:block pr-3">
                            <Image src="header-circle.png" alt="header-circle" width="34" height="34" loading="lazy" className="absolute -z-10 -left-5 top-1/2 -translate-y-2/4"/>
                            <a href="#" className='font-montFontRegular font-semibold'>Start a Project</a>
                        </div>
                        <div className="px-2">
                            <Image src="call.png" alt="call" width="24" height="24" loading="lazy"/>
                        </div>
                        <div className="lg:hidden" id="toggleBtn" onClick={ () => {setToggleClass(true)} }>
                            <Image src="menu-black.png" alt="menu-black" width="40" height="40" loading="lazy"/>
                        </div>
                    </div>
                   
                    <div className="fixed h-full w-full px-3 pt-3 top-0 left-0 z-40 shutter hidden" id="mobileMenu">
                        <div className="fade-in-menu flex items-center justify-between">
                            <div className="z-50">
                                <a href="#"><Image src="Logo.png" alt="logo" width="250" height="50.5" loading="lazy"/></a>
                            </div>
                            <div className="flex items-center justify-end z-50" onClick={ () => {setToggleClass(false)} }>
                                <a href="#" id="close" className="w-[40px]"><Image src="cancel-button.png" alt="cancel button"/></a>
                            </div>
                        </div>
                        <div className="flex list-none text-center text-[24px] lg:hidden w-full flex-col justify-around z-50 relative top-[20%] -translate-y-[20%] shutter-second" id="menu">
                            <li className="my-2"><a href="#" className="text-white hover:border-b-2 hover:border-white font-montFontRegular font-semibold">About</a></li>
                            <li className="my-2"><a href="#" className="text-white hover:border-b-2 hover:border-white font-montFontRegular font-semibold">Services</a></li>
                            <li className="my-2"><a href="#" className="text-white hover:border-b-2 hover:border-white font-montFontRegular font-semibold">Technology</a></li>
                            <li className="my-2"><a href="#" className="text-white hover:border-b-2 hover:border-white font-montFontRegular font-semibold">Marketing</a></li>
                            <li className="my-2"><a href="#" className="text-white hover:border-b-2 hover:border-white font-montFontRegular font-semibold">Our Work</a></li>
                            <li className="my-2"><a href="#" className="text-white hover:border-b-2 hover:border-white font-montFontRegular font-semibold">Contact</a></li>
                        </div>
                        <div className=" bg-gradient-to-r from-[#9aa6cb] to-[#4562ae] absolute w-full h-full top-0 left-0 z-30"></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;