import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import styles from "@/styles/AuthForm.module.css";
import { useZodForm } from "@/lib/useZodForm";
import { loginSchema, type LoginValues } from "@/lib/validators";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    submitting,
  } = useZodForm<LoginValues>({
    schema: loginSchema,
    initialValues: { email: "", password: "" },
    onSubmit: async (vals) => {
      const ok = await login(vals.email, vals.password);
      if (ok) router.push("/");
      else alert("Invalid email or password");
    },
  });

  return (
    <main className={styles.wrap}>
      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <h1>Login</h1>

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
          {submitting ? "Please wait..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}