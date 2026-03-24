import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "#" },
  { label: "Store Locator", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-8 pb-6 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Footer card with logo overlapping top */}
        <div className="relative">
          {/* Logo - overlaps top of black box */}
          <div className="flex justify-center relative z-10">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/09a4cf6fe3e3c0d6827ab1e95a6f4e73a7627e67?width=574"
                alt="Johnny & Jugnu"
                width={200}
                height={88}
                className="w-40 md:w-52 h-auto"
              />
            </div>
          </div>

          {/* Black rounded box */}
          <div className="bg-black rounded-[45px] -mt-10 pt-16 pb-10 px-8 md:px-16">
            {/* Navigation links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-10">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-bebas text-white text-lg md:text-2xl capitalize hover:text-[#F4BD18] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social icons */}
            <div className="flex justify-center gap-6 mt-8">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity duration-200">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#fb-clip)">
                    <path
                      d="M16 0C24.8365 0 32 7.16345 32 16C32 24.1803 25.8607 30.9259 17.9384 31.8828V20.8893L22.2667 20.8893L23.1646 16H17.9384V14.2708C17.9384 12.9789 18.1918 12.0845 18.7731 11.5131C19.3545 10.9417 20.2638 10.6932 21.5756 10.6932C21.9076 10.6932 22.2132 10.6965 22.4844 10.7031C22.8788 10.7128 23.2002 10.7293 23.424 10.7529V6.32064C23.3346 6.29579 23.229 6.27094 23.1107 6.24648C22.8428 6.19107 22.5096 6.13765 22.1515 6.09075C21.4031 5.99271 20.5457 5.92307 19.9458 5.92307C17.5232 5.92307 15.6923 6.44137 14.4143 7.51492C12.8718 8.81055 12.1348 10.915 12.1348 13.8932V16H8.83545V20.8893H12.1348V31.5288C5.16576 29.7998 0 23.5037 0 16C0 7.16345 7.16345 0 16 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="fb-clip">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity duration-200">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M24.5269 9.36283C23.4673 9.3649 22.6057 8.50694 22.6037 7.44731C22.6016 6.38768 23.4596 5.52609 24.5197 5.52402C25.5798 5.52195 26.4414 6.38042 26.4435 7.44005C26.445 8.49968 25.587 9.36076 24.5269 9.36283Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0153 24.2147C11.4788 24.2235 7.79347 20.5532 7.78467 16.0155C7.77584 11.479 11.4471 7.79308 15.9837 7.78427C20.5212 7.77546 24.2071 11.4479 24.2159 15.9839C24.2247 20.5215 20.5523 24.2059 16.0153 24.2147ZM15.9894 10.6671C13.0449 10.6723 10.6613 13.0648 10.6664 16.0098C10.6721 18.9554 13.0651 21.3386 16.0096 21.3329C18.9552 21.3271 21.3388 18.9352 21.3331 15.9896C21.3274 13.044 18.9344 10.6614 15.9894 10.6671Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.49227 0.861972C6.50835 0.463834 7.67111 0.19115 9.37354 0.110798C11.0801 0.0288968 11.625 0.010228 15.9692 0.00193683C20.3144 -0.00635437 20.8592 0.0102248 22.5658 0.0859112C24.2688 0.159524 25.4321 0.428065 26.4502 0.822058C27.5036 1.22797 28.3973 1.77438 29.2879 2.66137C30.1786 3.5494 30.727 4.44003 31.1381 5.49187C31.5357 6.50899 31.8084 7.67074 31.8893 9.37423C31.9701 11.0803 31.9898 11.6246 31.9981 15.9694C32.0064 20.3137 31.9888 20.859 31.9141 22.5667C31.84 24.2686 31.572 25.4324 31.178 26.4501C30.7711 27.5035 30.2257 28.3972 29.3387 29.2878C28.4517 30.179 27.5601 30.7269 26.5083 31.1385C25.4911 31.5356 24.3294 31.8083 22.627 31.8897C20.9204 31.9706 20.3756 31.9898 16.0298 31.9981C11.6861 32.0064 11.1413 31.9898 9.43473 31.9146C7.73177 31.8399 6.56796 31.5719 5.55033 31.1785C4.49695 30.771 3.60323 30.2261 2.71261 29.3386C1.82148 28.4511 1.27251 27.56 0.861944 26.5081C0.46381 25.4915 0.192143 24.3293 0.110764 22.6273C0.0293812 20.9202 0.0102068 20.3748 0.00191875 16.0306C-0.00640125 11.6858 0.0107156 11.1415 0.0853556 9.43487C0.160533 7.7314 0.427516 6.56808 0.821506 5.54941C1.22844 4.49652 1.77379 3.60331 2.66182 2.71217C3.54881 1.82155 4.44044 1.27202 5.49227 0.861972Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#" aria-label="X (Twitter)" className="hover:opacity-80 transition-opacity duration-200">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M24.435 2.53857H28.933L19.1063 13.7699L30.6666 29.0532H21.615L14.5254 19.784L6.41324 29.0532H1.91256L12.4232 17.04L1.33331 2.53857H10.6148L17.0232 11.011L24.435 2.53857ZM22.8564 26.3609H25.3488L9.26051 5.08942H6.58593L22.8564 26.3609Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="hover:opacity-80 transition-opacity duration-200">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M22.7634 0H17.3704V21.7971C17.3704 24.3942 15.2963 26.5276 12.715 26.5276C10.1338 26.5276 8.05961 24.3942 8.05961 21.7971C8.05961 19.2464 10.0877 17.1594 12.5768 17.0667V11.5942C7.09164 11.6869 2.66669 16.1855 2.66669 21.7971C2.66669 27.4551 7.18383 32 12.7612 32C18.3384 32 22.8555 27.4087 22.8555 21.7971V10.6203C24.8837 12.1044 27.3727 12.9855 30 13.0319V7.55942C25.9438 7.42029 22.7634 4.08116 22.7634 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Powered by text */}
        <p className="text-center font-fredoka text-[#1A1919] text-sm md:text-base mt-4">
          Powered By{" "}
          <span className="text-[#F4BD18]">Simplex Technology Solutions</span>
        </p>
      </div>
    </footer>
  );
}
