const UserIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="currentColor"
      overflow="hidden"
      version="1.1"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g>
        <circle cx="48" cy="30" r="16" />
        <path d=" M 80 82 L 80 66 C 80 63.6 78.8 61.2 76.8 59.6 C 72.4 56 66.8 53.6 61.2 52 C 57.2 50.8 52.8 50 48 50 C 43.6 50 39.2 50.8 34.8 52 C 29.2 53.6 23.6 56.4 19.2 59.6 C 17.2 61.2 16 63.6 16 66 L 16 82 L 80 82 Z" />
      </g>
    </svg>
  );
};

export default UserIcon;
