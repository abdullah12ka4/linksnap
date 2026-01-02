export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="60" cy="60" r="55" className="fill-secondary dark:fill-transparent" />
      
      {/* Link chain - left part */}
      <path
        d="M35 50C35 44.4772 39.4772 40 45 40H50C55.5228 40 60 44.4772 60 50V55C60 60.5228 55.5228 65 50 65H45C39.4772 65 35 60.5228 35 55V50Z"
        className="stroke-black dark:stroke-white"
        strokeWidth="6"
        fill="none"
      />
      
      {/* Link chain - right part */}
      <path
        d="M60 65C60 70.5228 64.4772 75 70 75H75C80.5228 75 85 70.5228 85 65V60C85 54.4772 80.5228 50 75 50H70C64.4772 50 60 54.4772 60 60V65Z"
        className="stroke-black dark:stroke-white"
        strokeWidth="6"
        fill="none"
      />
      
      {/* Lightning bolt for "Snap" */}
      <path
        d="M67 35L55 60H63L57 85L75 55H67L73 35H67Z"
        className="fill-black"
      />
    </svg>
  );
}
