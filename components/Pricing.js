import GetStartedButton from "./GetStartedButton";

const Pricing = () => {
  return (
    <section lassName="py-32 px-8 bg-[#ffffff]" id="pricing">
      <div className="py-32 px-8 max-w-3xl mx-auto">
        <p className="text-sm uppercase font-medium text-center text-primary mb-4">
          Pricing
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          A pricing that adapts to your needs
        </h2>

        <div className="p-8 bg-[#f8f9fc] max-w-96 rounded-3xl mx-auto space-y-6 shadow-lg">
          <div className="flex gap-2 items-baseline">
            <div className="text-4xl font-black">$19</div>
            <div className="uppercase text-sm font-medium opacity-60">/One</div>
          </div>

          <ul className="space-y-2">
            {[
              "Collect customer feedback",
              "Unlimited boards",
              "Admin dashboard",
              "24/7 support",
            ].map((priceItem) => (
              <li className="flex gap-2 items-center" key={priceItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-green-600 size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
                {priceItem}
              </li>
            ))}
          </ul>

          <GetStartedButton />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
