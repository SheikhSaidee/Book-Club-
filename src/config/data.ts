import rawData from '../data/club.json';
import type { ClubData } from '../types/index';

export const data: ClubData = rawData as ClubData;

export const getMemberById = (id: string) => data.members.find((m) => m.id === id);
