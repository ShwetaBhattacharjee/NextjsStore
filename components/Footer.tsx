import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Footer = () => {
  return (
    <>
      <Head>
        <title>HD PARTZ - Premium Car Parts and Accessories</title>
      </Head>

      <footer className="bg-[#05568C] text-white py-10">
        {/* 1st Row */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/20 pb-10">
          {/* 1st Column */}
          <div>
            <Image
              src="/logofooter.png"
              alt="HD PARTZ Logo - Premium Car Parts and Accessories"
              width={150}
              height={50}
              loading="lazy"
            />
            <h2 className="text-lg font-bold mt-4">WORLD OF AUTOMOTIVE</h2>
            <p className="text-sm mt-2">
              Your Trusted Car Parts Partner <br />
              Driven by passion for excellence, HD PARTZ provides premium car
              parts, accessories, and essentials to keep your vehicle running at
              its best. Quality you can trust, service you can rely on.
            </p>
          </div>

          {/* 2nd Column */}
          <div>
            <h2 className="text-lg font-bold">Need Help?</h2>
            <p className="text-sm mt-4">+971 502 487 319 </p>
            <p className="text-sm mt-2">
              Monday - Friday: 9:00-20:00 <br />
              Saturday: 11:00-15:00
            </p>
          </div>

          {/* 3rd Column */}
          <div>
            <h2 className="text-lg font-bold">Customer Service</h2>
            <ul className="text-sm mt-4 space-y-2">
              <li>
                <Link
                  href="/account"
                  className="hover:underline"
                  aria-label="Go to My Account"
                  rel="nofollow"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/track-products"
                  className="hover:underline"
                  aria-label="Track Your Products"
                  rel="nofollow"
                >
                  Track Products
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="hover:underline"
                  aria-label="View My Orders"
                  rel="nofollow"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="hover:underline"
                  aria-label="View Your Wishlist"
                  rel="nofollow"
                >
                  Your Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="hover:underline"
                  aria-label="Return Policy"
                  rel="nofollow"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th Column */}
          <div>
            <h2 className="text-lg font-bold"> Information</h2>
            <ul className="text-sm mt-4 space-y-2">
              <li>
                <Link
                  href="/AboutUs"
                  className="hover:underline"
                  aria-label="Learn About HD PARTZ"
                  rel="nofollow"
                >
                  About HD PARTZ
                </Link>
              </li>
              <li>
                <Link
                  href="/bestsellers"
                  className="hover:underline"
                  aria-label="Browse Bestsellers"
                  rel="nofollow"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/latest-products"
                  className="hover:underline"
                  aria-label="Shop Latest Products"
                  rel="nofollow"
                >
                  Latest Products
                </Link>
              </li>
              <li>
                <Link
                  href="/discounts"
                  className="hover:underline"
                  aria-label="Check New Discounts"
                  rel="nofollow"
                >
                  New Discounts
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 2nd Row */}
        <div className="container mx-auto px-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1st Column */}
          <div>
            <p className="text-sm font-bold">
              -5% for all orders this week{" "}
              <Link
                href="/shop"
                className="hover:underline"
                aria-label="Shop Now"
                rel="nofollow"
              >
                Shop now
              </Link>
            </p>
            <p className="text-sm mt-2">
              Free delivery for all orders over $200
            </p>
          </div>

          {/* 2nd Column */}
          <div>
            <p className="text-sm">
              <Link
                href="/refund-policy"
                className="hover:underline"
                aria-label="Refund and Returns Policy"
                rel="nofollow"
              >
                Refund and Returns Policy
              </Link>
            </p>
            <p className="text-sm">
              <Link
                href="/privacy-policy"
                className="hover:underline"
                aria-label="Privacy Policy"
                rel="nofollow"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* 3rd Row */}
        <div className="container mx-auto px-6 mt-6 border-t border-white/20 pt-6 text-center space-y-4">
          {/* Links Row */}
          <div className="text-sm">
            <Link
              href="/privacy-policy"
              className="hover:underline"
              aria-label="View Privacy Policy"
              rel="nofollow"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/order-tracking"
              className="hover:underline"
              aria-label="Track Your Orders"
              rel="nofollow"
            >
              Order Tracking
            </Link>{" "}
            |{" "}
            <Link
              href="/terms"
              className="hover:underline"
              aria-label="View Terms and Conditions"
              rel="nofollow"
            >
              Terms and Conditions
            </Link>
          </div>

          {/* Copyright Row */}
          <div className="text-sm">
            Copyright 2024 © HD PARTZ. All rights reserved. Powered by{" "}
            <Link
              href="https://klbtheme.com"
              className="hover:underline"
              aria-label="Visit KLBTheme"
              rel="nofollow noopener noreferrer"
            >
              KLBTheme
            </Link>
            .
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center space-x-4">
            <Image
              src="/visa.png"
              alt="Visa payment method"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/maestro.png"
              alt="Maestro payment method"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/paypal.png"
              alt="PayPal payment method"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/skrill.png"
              alt="Skrill payment method"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/mastercard.png"
              alt="Mastercard payment method"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/visaelectron.png"
              alt="Visa Electron payment method"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
