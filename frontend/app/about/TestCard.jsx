import Image from "next/image";

const TestCard = ({ name, image, test }) => {
  return (
    <div className="flex flex-col items-center justify-between text-center bg-[#0f172a]/50 border border-[#1e3a8a]/30 rounded-3xl p-6 shadow-lg max-w-sm sm:max-w-md lg:max-w-lg mx-auto w-full">
      {/* Header: Image + Name */}
      <div className="flex items-center gap-4 mb-4 sm:mb-5 w-full justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-blue-500 shadow-md flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-white text-base md:text-lg lg:text-xl font-medium tracking-wide capitalize transition-colors duration-300 group-hover:text-blue-400">
          {name}
        </h3>
      </div>

      {/* Testimonial Content */}
      <div className="relative text-white/80 text-sm md:text-base font-light leading-relaxed bg-white/5 border border-white/10 p-4 rounded-2xl shadow-inner backdrop-blur-2xl w-full">
        <span className="absolute -top-2 -left-2 text-blue-500 text-4xl font-bold opacity-20">
          “
        </span>
        <p className="">{test}</p>
        <span className="absolute -bottom-2 -right-2 text-blue-500 text-4xl font-bold opacity-20">
          ”
        </span>
      </div>

      {/* Divider */}
      <div className="mt-6 h-1 w-1/3 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full" />
    </div>
  );
};

export default TestCard;