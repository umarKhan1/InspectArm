import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuthStore } from '@/store/authStore';

const step3Schema = z.object({
  state: z.string().min(1, 'State is required'),
  city: z.string().min(2, 'City is required'),
  zipCode: z.string().min(5, 'ZIP code is required'),
  addressLine1: z.string().min(5, 'Address is required'),
  addressLine2: z.string().optional(),
});

type Step3Data = z.infer<typeof step3Schema>;

export const useStep3 = (onNext: () => void) => {
  const { onboardingData, updateOnboardingData } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      state: onboardingData.state || '',
      city: onboardingData.city || '',
      zipCode: onboardingData.zipCode || '',
      addressLine1: onboardingData.addressLine1 || '',
      addressLine2: onboardingData.addressLine2 || '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: Step3Data) => {
    updateOnboardingData(data);
    onNext();
  };

  return {
    control,
    errors,
    isValid,
    handleSubmit: handleSubmit(onSubmit),
  };
};
