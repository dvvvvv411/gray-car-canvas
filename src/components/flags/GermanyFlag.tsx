export const GermanyFlag = ({ className = "w-5 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 5 3" className={className}>
    <rect width="5" height="1" fill="#000" />
    <rect width="5" height="1" y="1" fill="#DD0000" />
    <rect width="5" height="1" y="2" fill="#FFCE00" />
  </svg>
);