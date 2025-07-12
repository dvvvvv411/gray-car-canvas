interface MinimalWaveProps {
  className?: string;
  color?: string;
  flip?: boolean;
  height?: number;
}

export const MinimalWave = ({ 
  className = "", 
  color = "currentColor",
  flip = false,
  height = 60
}: MinimalWaveProps) => {
  return (
    <div className={`w-full ${className}`} style={{ height: `${height}px` }}>
      <svg 
        viewBox={`0 0 1200 ${height}`}
        preserveAspectRatio="none" 
        className={`w-full h-full ${flip ? "rotate-180" : ""}`}
        style={{ display: 'block' }}
      >
        <path 
          d={`M0,${height}V${height/2}Q300,0,600,${height/2}T1200,${height/2}V${height}Z`}
          fill={color}
        />
      </svg>
    </div>
  );
};