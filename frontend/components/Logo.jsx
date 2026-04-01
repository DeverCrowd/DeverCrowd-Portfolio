import Image from "next/image";

export default function Logo({ width, height, className = "", priority = false }) {
  return (
    <Image
      alt="DeverCrowd logo"
      width={width}
      height={height}
      src="/logo.webp"
      className={className}
      priority={priority}
      sizes={`${width}px`}
    />
  );
}
