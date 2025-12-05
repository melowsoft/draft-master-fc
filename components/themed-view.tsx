import { View, type ViewProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Shadows } from '@/constants/theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  card?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  shadow?: 'card' | 'fab' | 'playerCard';
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  card = false,
  secondary = false,
  tertiary = false,
  shadow,
  ...otherProps
}: ThemedViewProps) {
  const colorName = card ? 'card' :
                   secondary ? 'backgroundSecondary' :
                   tertiary ? 'backgroundTertiary' :
                   'background';

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName as any
  );

  const shadowStyle = shadow ? Shadows[shadow] : undefined;

  return (
    <View 
      style={[
        { backgroundColor },
        card ? styles.card : undefined,
        shadowStyle,
        style
      ]} 
      {...otherProps} 
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
  },
});