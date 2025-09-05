import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-[#8F5AF5]" />
        <h3 className="font-serif text-4xl ">{title}</h3>
      </div>
      <h2 className="text-lg font-semibold text-white/70 mt-2">
        {description}
      </h2>
    </div>
  );
};
