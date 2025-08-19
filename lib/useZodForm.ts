import { useState } from "react";
import { z } from "zod";

export function useZodForm<T extends Record<string, any>>(opts: {
  schema: z.ZodType<T>;
  initialValues: T;
  onSubmit: (values: T) => Promise<void> | void;
}) {
  const { schema, initialValues, onSubmit } = opts;

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);

  const setValue = <K extends keyof T>(key: K, value: T[K]) =>
    setValues(v => ({ ...v, [key]: value }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValue(name as keyof T, value as any);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const msg = (flat as any)[name]?.[0];
      setErrors(prev => ({ ...prev, [name]: msg }));
    } else {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateAll = (): boolean => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      setErrors({});
      return true;
    }
    const flat = parsed.error.flatten().fieldErrors;
    const next: Partial<Record<keyof T, string>> = {};
    Object.keys(flat).forEach(k => {
      // @ts-expect-error generic key
      next[k] = flat[k]?.[0];
    });
    setErrors(next);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;
    setSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setSubmitting(false);
    }
  };

  return {
    values,
    errors,
    touched,
    setValue,
    handleChange,
    handleBlur,
    handleSubmit,
    submitting,
  };
}