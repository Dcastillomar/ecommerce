const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r
        from-sky-500 to-sky-700 mb-8">
            <div className="mx-auto px-8 py-12 flex
            flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="mb-8 md:mb0 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb4">
                    Summer Sale</h1>
                    <p className="text-lg med:text-xl text-white
                    mb-2">Enjoy discounts on select items</p>
                    <p className="text-2xl md:text-5xl text-white font-bold">GET UP TO 50% OFF</p>
                </div>
            </div>
        </div>
      );
}
 
export default HomeBanner;