import { Platform } from "react-native";

const pitchGreen = "#1B5E20";
const pitchGreenLight = "#2E7D32";
const gold = "#FFD700";

export const Colors = {
  light: {
    text: "#212121",
    textSecondary: "#757575",
    buttonText: "#FFFFFF",
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: pitchGreen,
    link: pitchGreen,
    primary: pitchGreen,
    primaryLight: pitchGreenLight,
    accent: gold,
    gold,
    error: "#D32F2F",
    success: "#43A047",
    backgroundRoot: "#FFFFFF",
    background: "#FFFFFF",
    backgroundDefault: "#F5F5F5",
    backgroundSecondary: "#ECEFF1",
    backgroundTertiary: "#E0E0E0",
    pitchGreen: "#2E7D32",
    pitchGreenDark: "#1B5E20",
    border: "#E0E0E0",
    card: "#FFFFFF",
    
    // ADDITIONS FROM REPLIT (Common for FC apps)
    playerPosition: {
      gk: "#FF9800",      // Orange
      def: "#2196F3",     // Blue
      mid: "#4CAF50",     // Green
      att: "#F44336",     // Red
    },
    stats: {
      pace: "#FF5722",    // Deep Orange
      shooting: "#F44336", // Red
      passing: "#2196F3",  // Blue
      dribbling: "#4CAF50", // Green
      defending: "#673AB7", // Deep Purple
      physical: "#795548",  // Brown
    },
    rating: {
      bronze: "#CD7F32",
      silver: "#C0C0C0",
      gold: "#FFD700",
      special: "#E5E4E2", // Platinum
    },
  },
  dark: {
    text: "#ECEDEE",
    textSecondary: "#9BA1A6",
    buttonText: "#FFFFFF",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#4CAF50",
    link: "#4CAF50",
    primary: "#4CAF50",
    primaryLight: "#66BB6A",
    accent: gold,
    gold,
    error: "#EF5350",
    success: "#66BB6A",
    backgroundRoot: "#121212",
    background: "#121212",
    backgroundDefault: "#1E1E1E",
    backgroundSecondary: "#2A2A2A",
    backgroundTertiary: "#3A3A3A",
    pitchGreen: "#1B5E20",
    pitchGreenDark: "#0D3311",
    border: "#3A3A3A",
    card: "#1E1E1E",
    
    // ADDITIONS FROM REPLIT (Dark variants)
    playerPosition: {
      gk: "#FFB74D",      // Light Orange
      def: "#64B5F6",     // Light Blue
      mid: "#81C784",     // Light Green
      att: "#E57373",     // Light Red
    },
    stats: {
      pace: "#FF8A65",    // Light Deep Orange
      shooting: "#E57373", // Light Red
      passing: "#64B5F6",  // Light Blue
      dribbling: "#81C784", // Light Green
      defending: "#9575CD", // Light Purple
      physical: "#A1887F",  // Light Brown
    },
    rating: {
      bronze: "#D7A35E",
      silver: "#D8D8D8",
      gold: "#FFEB3B",
      special: "#F5F5F5",
    },
  },
};

// KEEP YOUR EXISTING Spacing, BorderRadius, Typography, Fonts, Shadows
// They look comprehensive already

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
  inputHeight: 48,
  buttonHeight: 52,
};

export const BorderRadius = {
  xs: 8,
  sm: 12,
  md: 18,
  lg: 24,
  xl: 30,
  "2xl": 40,
  "3xl": 50,
  full: 9999,
};

export const Typography = {
  h1: {
    fontSize: 32,
    fontWeight: "700" as const,
  },
  h2: {
    fontSize: 28,
    fontWeight: "700" as const,
  },
  h3: {
    fontSize: 24,
    fontWeight: "600" as const,
  },
  h4: {
    fontSize: 20,
    fontWeight: "600" as const,
  },
  body: {
    fontSize: 16,
    fontWeight: "400" as const,
  },
  small: {
    fontSize: 14,
    fontWeight: "400" as const,
  },
  link: {
    fontSize: 16,
    fontWeight: "400" as const,
  },
  // ADDITION: Player rating/number style
  playerNumber: {
    fontSize: 28,
    fontWeight: "800" as const,
  },
  playerRating: {
    fontSize: 20,
    fontWeight: "700" as const,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const Shadows = {
  xs: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  fab: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  // ADDITION: Player card specific
  playerCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
};

// NEW: FC-specific constants (from Replit data files)
export const GameConstants = {
  maxRating: 99,
  minRating: 40,
  positions: ["GK", "RB", "CB", "LB", "CDM", "CM", "CAM", "RM", "LM", "RW", "LW", "ST"] as const,
  formations: ["4-3-3", "4-4-2", "3-5-2", "4-2-3-1", "5-3-2"] as const,
};
