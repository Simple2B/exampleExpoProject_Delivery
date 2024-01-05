import React from 'react';
import {useForm} from 'react-hook-form';

const useLogin = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => console.log('[onSubmit] data', data);

  return {
    control,
    handleSubmit,
    formState: {errors},
    onSubmit,
  } as const;
};

export default useLogin;
