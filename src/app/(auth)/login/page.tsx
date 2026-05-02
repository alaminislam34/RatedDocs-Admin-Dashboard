import { AuthInfoPanel } from "@/app/components/auth/auth-info-panel";
import { LoginForm } from "@/app/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-white">
      <LoginForm />
      <AuthInfoPanel />
    </main>
  );
}
