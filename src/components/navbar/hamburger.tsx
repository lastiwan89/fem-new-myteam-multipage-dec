"use client";

export default function Hamburger({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: (e: any) => void;
}) {
  return (
    <div className="md:hidden" onClick={handleClick}>
      {!isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
          />
        </svg>
      )}
    </div>
  );
}
