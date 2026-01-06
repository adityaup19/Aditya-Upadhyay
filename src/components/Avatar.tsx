import avatarImage from "@/assets/avatar.png";

export const Avatar = () => {
  return (
    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
      <img
        src={avatarImage}
        alt="Aditya Upadhyay"
        className="w-full h-full object-cover object-[center_15%] contrast-[0.9] brightness-[1.05]"
      />
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 rounded-full opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
