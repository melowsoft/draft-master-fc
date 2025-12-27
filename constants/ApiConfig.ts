// constants/ApiConfig.ts
import Constants from 'expo-constants';

export const API_FOOTBALL_CONFIG = {
  BASE_URL: 'https://v3.football.api-sports.io',
  API_KEY:
    Constants.expoConfig?.extra?.apiFootballKey ||
    process.env.EXPO_PUBLIC_API_FOOTBALL_KEY ||
    process.env.EXPO_PUBLIC_APISPORTS_KEY ||
    process.env.API_FOOTBALL_KEY,
};
