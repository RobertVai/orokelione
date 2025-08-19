import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import styles from "@/styles/AuthForm.module.css";
import { useZodForm } from "@/lib/useZodForm";
import { registerSchema, type RegisterValues } from "@/lib/validators";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    submitting,
  } = useZodForm<RegisterValues>({
    schema: registerSchema,
    initialValues: { name: "", email: "", password: "" },
    onSubmit: async (vals) => {
      const ok = await register(vals.name, vals.email, vals.password);
      if (ok) router.push("/");
      else alert("Registration failed");
    },
  });

  return (
    <main className={styles.wrap}>
      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <h1>Register</h1>

        <label className={styles.field}>
          <span>Name</span>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>

        <label className={styles.field}>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </label>

        <button className={styles.submit} disabled={submitting}>
          {submitting ? "Please wait..." : "Sign up"}
        </button>
      </form>
    </main>
  );
}
