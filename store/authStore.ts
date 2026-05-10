import { create } from 'zustand';

interface OnboardingData {
  // Step 1
  companyName?: string;
  registrationNumber?: string;
  industry?: string;
  website?: string;
  
  // Step 2
  photoUri?: string;
  
  // Step 3
  state?: string;
  city?: string;
  zipCode?: string;
  addressLine1?: string;
  addressLine2?: string;
}

interface AuthState {
  isLoggedIn: boolean;
  onboardingData: OnboardingData;
  login: () => void;
  logout: () => void;
  updateOnboardingData: (data: Partial<OnboardingData>) => void;
  resetOnboardingData: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  onboardingData: {},
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false, onboardingData: {} }),
  updateOnboardingData: (data) => 
    set((state) => ({ 
      onboardingData: { ...state.onboardingData, ...data } 
    })),
  resetOnboardingData: () => set({ onboardingData: {} }),
}));
