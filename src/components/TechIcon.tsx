export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="#4E2BCD" />
          <stop offset="100%" stopColor="#8F5AF5" />
        </linearGradient>
      </svg>
    </>
  );
};
