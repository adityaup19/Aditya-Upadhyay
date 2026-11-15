import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-[80svh] flex-col items-start justify-end px-5 pb-16 pt-40 md:px-[72px]">
      <h1 className="display text-[clamp(4rem,12vw,9rem)] text-white">404</h1>
      <p className="mt-6 max-w-md text-[21px] text-white/80">That page isn’t on this site.</p>
      <Link to="/" className="mono mt-8 text-[14px] text-[#888] hover:text-white">
        Back home
      </Link>
    </div>
  );
};

export default NotFound;
