import { useState } from "react";

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;


interface UseFormSubmitResult {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  submit: (data: Record<string, any>) => Promise<boolean>;
  reset: () => void;
}

export function useFormSubmit(): UseFormSubmitResult {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const submit = async (data: Record<string, any>) => {
    setIsSubmitting(true);
    setIsError(false);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      return true;
    } catch {
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  return { isSubmitting, isSuccess, isError, submit, reset };
}
