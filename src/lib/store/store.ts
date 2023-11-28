import { persisted } from 'svelte-persisted-store';
import type { AddOnStore } from './addOn';

export interface MainStore {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  selectedPlan: any; // Replace 'any' with the appropriate type for selectedPlan
  addOns: AddOnStore;
}

export const initialData: MainStore = {
  name: null,
  email: null,
  phoneNumber: null,
  selectedPlan: null,
  addOns: []
};

export const data = persisted('MultiStepFormData', initialData);


export const currentStep = persisted('currentStep-MSF', 1)
