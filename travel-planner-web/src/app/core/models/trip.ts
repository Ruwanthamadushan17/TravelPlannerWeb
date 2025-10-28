import { Destination } from "./destination";

export interface Trip {
  id?: string; 
  ownerEmail: string; 
  startDate: string; 
  endDate: string;
  budget: number; 
  destinations: Destination[];
}