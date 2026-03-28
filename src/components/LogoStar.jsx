import './LogoStar.css'

export function LogoStar({ size = 200, color = "#f0ece3", className = "", animate = false }) {
  const createStarPath = () => {
    const centerX = size / 2;
    const centerY = size / 2;
    const outerRadius = size * 0.48;
    const innerRadius = size * 0.08;
    const points = 6;
    const rotation = 0;

    let path = '';
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI / points) + (rotation * Math.PI / 180);
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) path += `M ${x} ${y}`;
      else path += ` L ${x} ${y}`;
    }
    path += ' Z';
    return path;
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`logo-star ${animate ? 'logo-star--spin' : ''} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={createStarPath()} fill={color} />
    </svg>
  );
}