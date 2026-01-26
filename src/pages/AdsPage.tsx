const AdsPage = () => {
    return (
        <section
        className="relative md:w-[800px] bg-no-repeat bg-center bg-cover mx-auto rounded-4xl"
        style={{
            backgroundImage: "url('/images/ads_bg.png')",
        }}
        >
        <div className="absolute inset-0 bg-[#E1EFEF]/90" />

        <div className="relative container md:w-[453px] bg-white h-full py-20 z-10">
            <h2 className="text-[#0B0B0B] text-[32px] font-bold text-center quicksand">
            LIMITED OFFER
            </h2>

            <div className="flex items-center justify-center gap-1">
            <h2 className="text-[#025D5B] text-[100px] font-bold">50</h2>
            <div>
                <p className="text-[#025D5B] text-[48px] font-medium">%</p>
                <p className="text-[#025D5B] text-[48px] font-medium uppercase">
                off
                </p>
            </div>
            </div>

            <p className="text-[#0B0B0B] text-2xl text-center uppercase">
            THIS WEEK ONLY!
            </p>

            <img
            src="/images/ad_image.png"
            alt="ad image"
            className="mt-14"
            />
        </div>
        </section>
    );
};

export default AdsPage;
