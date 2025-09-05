import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Creativity",
  "Innovation",
  "Technology",
  "Performant",
  "Frontend",
  "User Experience",
  "Responsive",
  "Clean Code",
  "Interactivity",
  "Authenticity",
  "Focus",
];

export const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-[#3D209D] to-[#8F5AF5] -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:32s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-[#DBCFF1] uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-[#0F022D] -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
