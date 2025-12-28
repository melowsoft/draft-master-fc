import React, { useCallback, useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { G, Line, Polygon, Text as SvgText } from 'react-native-svg';

import { ThemedText } from '@/components/ThemedText';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ApiFootballPlayerRadarStats } from '@/services/apiFootballService';

type Metric = {
  key: keyof ApiFootballPlayerRadarStats;
  label: string;
  isPercent?: boolean;
};

type Props = {
  player1Label: string;
  player2Label: string;
  player1Color: string;
  player2Color: string;
  stats1: ApiFootballPlayerRadarStats;
  stats2: ApiFootballPlayerRadarStats;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function formatValue(value: number | null, isPercent: boolean) {
  if (value === null) return '—';
  if (isPercent) return `${Math.round(value)}%`;
  return `${Math.round(value)}`;
}

export function RadarChart({
  player1Label,
  player2Label,
  player1Color,
  player2Color,
  stats1,
  stats2,
}: Props) {
  const { theme } = useTheme();

  const metrics: Metric[] = useMemo(
    () => [
      { key: 'duelsWonPct', label: 'Duel%', isPercent: true },
      { key: 'possessionsWon', label: 'Pos won' },
      { key: 'progressiveCarries', label: 'Prog carries' },
      { key: 'forwardPasses', label: 'Fwd passes' },
      { key: 'forwardPassPct', label: 'Fwd pass%', isPercent: true },
      { key: 'keyPasses', label: 'Key passes' },
      { key: 'progressivePasses', label: 'Prog passes' },
    ],
    []
  );

  const chartSize = useMemo(() => {
    const screenWidth = Dimensions.get('window').width;
    const candidate = screenWidth - Spacing.xl * 2 - Spacing.lg * 2;
    return clamp(candidate, 220, 320);
  }, []);

  const center = chartSize / 2;
  const radius = chartSize / 2 - 44;
  const labelRadius = radius + 18;
  const levels = [0.25, 0.5, 0.75, 1];
  const angleOffset = -Math.PI / 2;

  const normalized = useMemo(() => {
    return metrics.map((m) => {
      const raw1 = stats1[m.key];
      const raw2 = stats2[m.key];

      const v1 = typeof raw1 === 'number' && Number.isFinite(raw1) ? raw1 : null;
      const v2 = typeof raw2 === 'number' && Number.isFinite(raw2) ? raw2 : null;

      const safe1 = m.isPercent ? clamp(v1 ?? 0, 0, 100) : Math.max(0, v1 ?? 0);
      const safe2 = m.isPercent ? clamp(v2 ?? 0, 0, 100) : Math.max(0, v2 ?? 0);

      const max = m.isPercent ? 100 : Math.max(1, safe1, safe2);

      return {
        metric: m,
        v1,
        v2,
        n1: (safe1 / max) * 100,
        n2: (safe2 / max) * 100,
      };
    });
  }, [metrics, stats1, stats2]);

  const axisPoints = useMemo(() => {
    const n = metrics.length;
    return metrics.map((_, index) => {
      const angle = (2 * Math.PI * index) / n + angleOffset;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      const lx = center + labelRadius * Math.cos(angle);
      const ly = center + labelRadius * Math.sin(angle);
      return { angle, x, y, lx, ly };
    });
  }, [metrics, center, radius, labelRadius, angleOffset]);

  const polygonPoints = useCallback(
    (values: number[]) => {
      const n = values.length;
      return values
        .map((val, idx) => {
          const angle = (2 * Math.PI * idx) / n + angleOffset;
          const r = (clamp(val, 0, 100) / 100) * radius;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);
          return `${x},${y}`;
        })
        .join(' ');
    },
    [angleOffset, center, radius]
  );

  const player1Points = useMemo(() => polygonPoints(normalized.map((x) => x.n1)), [normalized, polygonPoints]);
  const player2Points = useMemo(() => polygonPoints(normalized.map((x) => x.n2)), [normalized, polygonPoints]);

  return (
    <View>
      <View style={styles.svgContainer}>
        <Svg width={chartSize} height={chartSize}>
          <G>
            {levels.map((level) => {
              const points = polygonPoints(metrics.map(() => level * 100));
              return (
                <Polygon
                  key={`grid-${level}`}
                  points={points}
                  fill="transparent"
                  stroke={theme.border}
                  strokeWidth={1}
                />
              );
            })}

            {axisPoints.map((p, idx) => (
              <Line
                key={`axis-${idx}`}
                x1={center}
                y1={center}
                x2={p.x}
                y2={p.y}
                stroke={theme.border}
                strokeWidth={1}
              />
            ))}

            <Polygon
              points={player1Points}
              fill={player1Color}
              fillOpacity={0.18}
              stroke={player1Color}
              strokeWidth={2}
            />
            <Polygon
              points={player2Points}
              fill={player2Color}
              fillOpacity={0.12}
              stroke={player2Color}
              strokeWidth={2}
            />

            {axisPoints.map((p, idx) => {
              const label = metrics[idx]?.label ?? '';
              const cos = Math.cos(p.angle);
              const sin = Math.sin(p.angle);
              const textAnchor = cos > 0.2 ? 'start' : cos < -0.2 ? 'end' : 'middle';
              const dy = sin > 0.2 ? 10 : sin < -0.2 ? -2 : 4;

              return (
                <SvgText
                  key={`label-${idx}`}
                  x={p.lx}
                  y={p.ly}
                  fill={theme.textSecondary}
                  fontSize={11}
                  fontWeight="600"
                  textAnchor={textAnchor}
                  dy={dy}
                >
                  {label}
                </SvgText>
              );
            })}
          </G>
        </Svg>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <ThemedText type="small" style={[styles.tableCellLabel, { color: theme.textSecondary }]}>
            Metric
          </ThemedText>
          <ThemedText type="small" style={[styles.tableCellValue, { color: player1Color }]}>
            {player1Label}
          </ThemedText>
          <ThemedText type="small" style={[styles.tableCellValue, { color: player2Color }]}>
            {player2Label}
          </ThemedText>
        </View>

        {normalized.map(({ metric, v1, v2 }) => (
          <View key={String(metric.key)} style={styles.tableRow}>
            <ThemedText type="small" style={[styles.tableCellLabel, { color: theme.textSecondary }]}>
              {metric.label}
            </ThemedText>
            <ThemedText type="small" style={[styles.tableCellValue, { color: player1Color }]}>
              {formatValue(v1, Boolean(metric.isPercent))}
            </ThemedText>
            <ThemedText type="small" style={[styles.tableCellValue, { color: player2Color }]}>
              {formatValue(v2, Boolean(metric.isPercent))}
            </ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    marginTop: Spacing.lg,
    gap: Spacing.sm,
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableCellLabel: {
    flex: 1,
    fontWeight: '700',
  },
  tableCellValue: {
    width: 72,
    textAlign: 'right',
    fontWeight: '700',
  },
});
