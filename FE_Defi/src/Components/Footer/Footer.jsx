import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import {AiFillFacebook,AiFillInstagram,AiFillYoutube} from "react-icons/ai"




function Footer() {
    return (
        <div className="mt-48">
            <svg className="-mb-16" width="full" height="auto" viewBox="0 0 1920 264" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 75.4286H240H480H720V113.143H960V0H1200H1440V75.4286H1680V37.7143H1920V264H1680H1440H1200H960H720H480H240H0V75.4286Z" fill="#F2CB05"/>
</svg>

            <div className="bg-C3 w-full h-fit pb-12 ">


                <div className="lg:max-w-[1400px] px-12 mx-auto flex  justify-evenly lg:flex-row flex-col gap-5">
                    <div className="flex items-start flex-col w-fit">
                        <div>
                            <h1 className="text-6xl font-monta font-bold uppercase">XD</h1>
                            <h2 className="text-lg font-monta font-light uppercase">We Share Fun</h2>
                        </div>
                        <div className="my-4">
                            <h3 className="flex items-center justify-center gap-2 font-pop text-lg"><HiOutlineMail /> <span>contact@tasty.com</span></h3>
                            <h3 className="flex items-center justify-center gap-2 font-pop text-lg"><HiOutlinePhone /> (00216) 97 854 858</h3>
                            <h3 className="flex items-center justify-center gap-2 font-pop text-lg"> <HiOutlinePhone /> (00216) 97 854 858</h3>
                        </div>
                        <p className="font-pop text-lg md:w-[50%] w-full">Lorem ipsum dolor sit amet consectetur. Neque volutpat purus integer volutpat viverra sit suspendisse.</p>
                    </div>
                    <div>
                    <div className="flex gap-4 md:flex-row flex-col ">
                        <div className="flex justify-start flex-col">
                            <h1 className="text-xl font-bold font-monta">General</h1>
                            <a href="https://test.com" className="text-lg font-normal font-monta">Home</a>
                            <a href="https://test.com" className="text-lg font-normal font-monta">Contact</a>
                            <a href="https://test.com" className="text-lg font-normal font-monta">Catalogue</a>
                        </div>
                        <div className="flex justify-start flex-col">
                            <h1 className="text-xl font-bold font-monta">Support</h1>
                            <a href="https://test.com" className="text-lg font-normal font-monta">Privacy Policy</a>
                            <a href="https://test.com" className="text-lg font-normal font-monta">Terms & Conditions</a>
                            <a href="https://test.com" className="text-lg font-normal font-monta">Cookies use</a>
                        </div>
                        <div className="flex justify-start flex-col">
                            <h1 className="text-xl font-bold font-monta">Follow Us</h1>
                            <div className="flex gap-2 items-center">
                            <a href="https://test.com" className="text-3xl font-normal font-monta text-primary">  <AiFillFacebook/> </a>
                            <a href="https://test.com" className="text-3xl font-normal font-monta text-primary"> <AiFillInstagram/> </a>
                            <a href="https://test.com" className="text-3xl font-normal font-monta text-primary"> <AiFillYoutube/> </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
