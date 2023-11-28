
import { persisted } from "svelte-persisted-store";

export interface AddOn {
  index: number;
  feature: string;
  description: string;
  fee: number;
  selected: boolean;
}

export type AddOnStore = AddOn[];

export const initialAddOns: AddOnStore = [
  { index: 1, feature: 'Online service', description: 'Access to Multiplayer Games', fee: 10, selected: false },
  { index: 2, feature: 'Larger storage', description: 'Extra 1TB of cloud save', fee: 20, selected: false },
  { index: 3, feature: 'Customizable profile', description: 'Customize theme on your profile', fee: 20, selected: false }
];

export const addOnStore = persisted("addOns-MSF", initialAddOns);

