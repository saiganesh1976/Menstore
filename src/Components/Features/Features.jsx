import React from "react";
import Productreturn from "../../assets/product_return.png";
import discount from "../../assets/discount.png";
import Eco from "../../assets/eco-friendly.png";
import Calender from "../../assets/calendar.png";

const Features = () => {
  return (
    <div className="p-10 bg-slate-400">
      <div className="lg:flex justify-center items-center gap-12 py-10">
        <div className="max-w-sm mb-10 rounded overflow-hidden">
          <div className="overflow-hidden flex justify-center">
            <img src={Productreturn} alt="return" className="w-20" />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              Free returns
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="text-sm text-center text-slate-200">
                Not what you expected? Place it back in the parcel and attach
                the pre-paid postage stamp.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden  ">
          <div className="overflow-hidden flex justify-center">
            <img src={discount} alt="return" className="w-20" />
          </div>
          <div className="px-6 py-4">
            <div className=" text-lg mb-2 text-center">All year discount</div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="text-sm text-center   text-slate-200">
                Looking for a deal? You can use the code "ALLYEAR" at checkout
                and get money off all year round.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden  ">
          <div className="overflow-hidden flex justify-center">
            <img src={Eco} alt="return" className="w-20" />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              Eco-freindly
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="text-sm text-center   text-slate-200">
                We’ve pledged 1% of sales to the preservation and restoration of
                the natural environment.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden  ">
          <div className="overflow-hidden flex justify-center">
            <img src={Calender} alt="return" className="w-20" />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              Same day delivery on Membership
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="text-sm text-center   text-slate-200">
                We offer a delivery service that has never been done before.
                Checkout today and receive your products within hours.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
