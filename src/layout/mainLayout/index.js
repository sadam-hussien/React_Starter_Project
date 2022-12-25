import React from "react";

import Footer from "./components/footer";

import Header from "./components/header";

export default function MainLayout({ children }) {
  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: "calc(100vh - (var(--header-height) + var(--space-md) * 2)",
      }}
    >
      <Header />
      <main className="app-content" id="app-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
