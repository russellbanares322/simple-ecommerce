export function Hero() {
  return (
    <div className="page-padding-y bg-gradient-to-r from-cyan to-blue-400 px-[7rem] h-auto relative">
      <div className="my-28">
        <p className="font-semibold text-soft-green lg:text-[2.7rem] lg:w-[30rem]">
          Shopping And Department Store.
        </p>
        <p className="my-10 lg:w-[25rem]">
          Shopping is a bit of relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="button-filled-style">Learn More</button>
      </div>
      <svg
        className="absolute left-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#C6B195"
          fill-opacity="1"
          d="M0,160L1440,32L1440,320L0,320Z"
          preserveAspectRatio="none"
        ></path>
      </svg>
    </div>
  );
}
