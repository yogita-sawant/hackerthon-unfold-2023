import React from "react";
import heroAnimation from "../img/heroAnimation.json";
import Lottie from "lottie-react";
import logoScreen from './../img/nft1.webp'

const HeroComp = () => {
  return (
    <>
      <div className="flex mt-5">
        <div className="w-2/6 text-black grid justify-center content-center "   style={{
          backgroundImage: 'url(https://img.freepik.com/free-vector/nice-handmade-brush-with-colors-rainbow_24972-205.jpg)',
          backgroundSize: 'cover', // Adjust this property based on your needs
          backgroundPosition: 'center', // Adjust this property based on your needs
        }}>
          <span className="font-creepy font-thin text-6xl leading-[5rem] text-center">Embark <br/>on NFT Wealth Creation</span><br/>
        </div>
        <div className="w-4/6 "
    
        >
          <div className="flex">
            <div className="w-4/6 h-3/5">
              <img className="w-full aspect-video p-2 h-5/6" src="https://wallpapercave.com/wp/wp5718549.jpg"  />
            </div>


            <div className="w-4/12 h-3/5">
              <img className="w-full aspect-video p-2 h-4/5" src="https://c0.wallpaperflare.com/preview/65/735/657/blurred-background-close-up-equipment-focus.jpg" />
              {/* <img className="w-full aspect-video p-1 h-2/12" src={require('./../img/nft1.webp')} /> */}
              <img className="w-full aspect-video p-2 h-2/12" src=" https://wallpaperaccess.com/full/2883592.jpg" />
            </div>
          </div>


          <div className="flex">

            <div className="w-2/5 h-2/5">
              <img className="w-full aspect-video p-2 h-3/5" src={require('./../img/nft1.webp')} />
            </div>
            <div className="w-3/5 ">
              <img className="w-full aspect-video p-2 h-3/5" src="https://live.staticflickr.com/4309/35819544881_886063a95a_b.jpg" />
            </div>
          </div>
        </div>
      </div>


    </>
    // <div className="md:grid md:grid-flow-col md:gap-16 md:mt-28 justify-center">
    //   <div className="md:hidden flex col-span-2 text-center md:text-left mt-6 md:mt-0 text-[3.5rem] md:text-[9.5rem] font-extrabold leading-tight">
    //     Start Making Money With NFT's
    //   </div>
    //   <div className="row-span-3 flex flex-col">
    //     <Lottie animationData={heroAnimation} />

    //     <p className=" text-subtitleColor md:pl-10 text-center md:text-left">
    //       Unlocking NFT Potential Across All Chains: Your Journey, Your Way (Cross chain Lending and Borrowing for NFT's)
    //     </p>
    //     <button className=" md:ml-10 font-semibold bg-primaryColor p-4 px-8 text-backgroundColor rounded-lg mt-8" src="https://blog.chain.link/cross-chain-defi/#:~:text=Cross%2Dchain%20lending%20allows%20users,within%20that%20on%2Dchain%20environment.">
    //       Learn more
    //     </button>
    //   </div>

    //   <div className="hidden md:flex col-span-2 text-center md:text-left mt-6 md:mt-0 text-[3.5rem] md:text-[8.5rem] font-extrabold leading-tight">
    //     Start Making Money With NFT's--
    //   </div>
    // </div>
  );
};

export default HeroComp;
