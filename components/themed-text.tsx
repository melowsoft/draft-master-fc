// components/ThemedText.tsx
import { StyleSheet, Text, type TextProps } from 'react-native';

import { Typography } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 
         'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'playerNumber' | 'playerRating';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text') as string;
  const linkColor = useThemeColor({ light: lightColor, dark: darkColor }, 'link') as string;

  // Map type to appropriate style
  let typeStyle;
  
  // Handle Replit project types
  if (type === 'h1') {
    typeStyle = Typography.h1;
  } else if (type === 'h2') {
    typeStyle = Typography.h2;
  } else if (type === 'h3') {
    typeStyle = Typography.h3;
  } else if (type === 'h4') {
    typeStyle = Typography.h4;
  } else if (type === 'body') {
    typeStyle = Typography.body;
  } else if (type === 'small') {
    typeStyle = Typography.small;
  } else if (type === 'link') {
    typeStyle = Typography.link;
  } else if (type === 'playerNumber') {
    typeStyle = Typography.playerNumber || { fontSize: 28, fontWeight: '800' as const };
  } else if (type === 'playerRating') {
    typeStyle = Typography.playerRating || { fontSize: 20, fontWeight: '700' as const };
  }
  // Handle original template types
  else if (type === 'default') {
    typeStyle = styles.default;
  } else if (type === 'title') {
    typeStyle = styles.title;
  } else if (type === 'defaultSemiBold') {
    typeStyle = styles.defaultSemiBold;
  } else if (type === 'subtitle') {
    typeStyle = styles.subtitle;
  } else {
    typeStyle = styles.default;
  }

  return (
    <Text
      style={[
        { color },
        typeStyle,
        // Special handling for link type
        type === 'link' ? { 
          textDecorationLine: 'underline',
          color: linkColor
        } : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

// Original template styles (for backward compatibility)
const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
});
