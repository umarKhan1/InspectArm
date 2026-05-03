import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'expo-router';

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function useForgotPassword() {
  const router = useRouter();
  
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    // API logic goes here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Reset Password Data:', data);
    // Usually navigate to OTP or success screen. We can route back to login for now.
    router.replace('/auth/login');
  };

  return {
    control,
    errors,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit),
    router,
  };
}
