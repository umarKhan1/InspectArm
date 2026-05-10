import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuthStore } from '@/store/authStore';

const step1Schema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  registrationNumber: z.string().min(1, 'Registration number is required'),
  industry: z.string().min(1, 'Industry is required'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
});

export type Step1FormData = z.infer<typeof step1Schema>;

export const useStep1 = (onNext: () => void) => {
  const { onboardingData, updateOnboardingData } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      companyName: onboardingData.companyName || '',
      registrationNumber: onboardingData.registrationNumber || '',
      industry: onboardingData.industry || '',
      website: onboardingData.website || '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: Step1FormData) => {
    updateOnboardingData(data);
    onNext();
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
  };
};
