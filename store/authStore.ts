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
  email?: string;
  onboardingData: OnboardingData;
  login: (email?: string) => void;
  logout: () => void;
  updateOnboardingData: (data: Partial<OnboardingData>) => void;
  resetOnboardingData: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  email: undefined,
  onboardingData: {},
  login: (email) => set({ isLoggedIn: true, email }),
  logout: () => set({ isLoggedIn: false, onboardingData: {}, email: undefined }),
  updateOnboardingData: (data) => 
    set((state) => ({ 
      onboardingData: { ...state.onboardingData, ...data } 
    })),
  resetOnboardingData: () => set({ onboardingData: {} }),
}));
