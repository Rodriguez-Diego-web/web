import { useState } from 'react';

interface FormState {
  values: any;
  errors: any;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

interface UseFormProps {
  initialValues: any;
  validate?: (values: any) => any;
  onSubmit: (values: any) => Promise<void> | void;
}

export const useForm = ({ initialValues, validate, onSubmit }: UseFormProps) => {
  const [state, setState] = useState<FormState>({
    values: initialValues,
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form if validation function is provided
    let errors = {};
    if (validate) {
      errors = validate(state.values);
    }
    
    setState(prev => ({
      ...prev,
      errors,
    }));
    
    // If there are no errors, call the submit handler
    if (Object.keys(errors).length === 0) {
      setState(prev => ({
        ...prev,
        isSubmitting: true,
      }));
      
      try {
        await onSubmit(state.values);
        
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          isSubmitted: true,
          // Reset form values on successful submission
          values: initialValues,
        }));
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
          setState(prev => ({
            ...prev,
            isSubmitted: false,
          }));
        }, 5000);
      } catch (error) {
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          errors: { form: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
        }));
      }
    }
  };

  return {
    values: state.values,
    errors: state.errors,
    isSubmitting: state.isSubmitting,
    isSubmitted: state.isSubmitted,
    handleChange,
    handleSubmit,
    setValues: (values: any) => setState(prev => ({ ...prev, values })),
    setErrors: (errors: any) => setState(prev => ({ ...prev, errors })),
    reset: () => setState({
      values: initialValues,
      errors: {},
      isSubmitting: false,
      isSubmitted: false,
    }),
  };
};

export default useForm;
