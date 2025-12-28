import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, G, Line, Polygon, Text as SvgText } from 'react-native-svg';
import { useTheme } from '@/hooks/use-theme';
import { Colors } from '@/constants/theme';

interface RadarChartProps {
  size?: number;
}

const LABELS = [
  'Pace',
  'Shooting',
  'Passing',
  'Dribbling',
  'Defending',
  'Physical',
];

// Dummy data (0–100)
const player1 = [88, 91, 84, 90, 60, 78];
const player2 = [82, 86, 89, 85, 72, 80];

export function RadarChart({ size = 280 }: RadarChartProps) {
  const { theme } = useTheme();
  const radius = size / 2;
  const center = radius;
  const levels = 5;

  const angleStep = (2 * Math.PI) / LABELS.length;

  const getPoint = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const buildPolygon = (data: number[]) =>
    data.map((v, i) => {
      const p = getPoint(v, i);
      return `${p.x},${p.y}`;
    }).join(' ');

  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width={size} height={size}>
        {/* Grid */}
        {[...Array(levels)].map((_, i) => (
          <Circle
            key={i}
            cx={center}
            cy={center}
            r={((i + 1) / levels) * radius}
            stroke={theme.border}
            strokeWidth={1}
            fill="none"
            opacity={0.4}
          />
        ))}

        {/* Axes */}
        {LABELS.map((label, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

          const labelX = center + (radius + 18) * Math.cos(angle);
          const labelY = center + (radius + 18) * Math.sin(angle);

          return (
            <G key={label}>
              <Line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke={theme.border}
                strokeWidth={1}
              />
              <SvgText
                x={labelX}
                y={labelY}
                fontSize={11}
                fill={theme.textSecondary}
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {label}
              </SvgText>
            </G>
          );
        })}

        {/* Player 1 */}
        <Polygon
          points={buildPolygon(player1)}
          fill={Colors.light.gold + '55'}
          stroke={Colors.light.gold}
          strokeWidth={2}
        />

        {/* Player 2 */}
        <Polygon
          points={buildPolygon(player2)}
          fill={Colors.light.pitchGreen + '55'}
          stroke={Colors.light.pitchGreen}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
}
