interface DynamicWaveProps {
  className?: string;
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
  animated?: boolean;
}

export const DynamicWave = ({ 
  className = "", 
  topColor = "currentColor", 
  bottomColor = "currentColor",
  flip = false,
  animated = false 
}: DynamicWaveProps) => {
  return (
    <div className={`w-full ${className}`}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className={`w-full h-full ${flip ? "rotate-180" : ""}`}
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={topColor} stopOpacity="0.3" />
            <stop offset="50%" stopColor={bottomColor} stopOpacity="0.6" />
            <stop offset="100%" stopColor={topColor} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        <path 
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill={bottomColor}
          className={animated ? "animate-pulse" : ""}
        />
        <path 
          d="M1200,0H0V27.35a600.21,600.21,0,0,0,321.39,28.66c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83,1055.71,111.31,1132.19,118.92,1200,95.8Z"
          fill="url(#waveGradient)"
          opacity="0.4"
          className={animated ? "animate-pulse" : ""}
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>
  );
};