import MainLayout from "layout/mainLayout";

export default function ProtectedPage({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
