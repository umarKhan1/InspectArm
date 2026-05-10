import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'expo-router';
import { CountryCode, Country } from 'react-native-country-picker-modal';

const signupSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  companyName: z.string().min(1, 'Company Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z.string().min(8, 'Phone number is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

export function useSignup() {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [callingCode, setCallingCode] = useState<string>('1');

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onCountrySelect = (country: Country) => {
    setCountryCode(country.cca2);
    if (country.callingCode && country.callingCode.length > 0) {
      setCallingCode(country.callingCode[0]);
    }
  };

  const onSubmit = async (data: SignupFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Signup Data:', { ...data, countryCode, callingCode: `+${callingCode}` });
    router.replace('/auth/verify-otp' as any);
  };

  return {
    control,
    errors,
    isSubmitting,
    countryCode,
    callingCode,
    onCountrySelect,
    onSubmit: handleSubmit(onSubmit),
    router,
  };
}
