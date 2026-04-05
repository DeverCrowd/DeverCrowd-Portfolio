"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getAdminCookie, clearAdminCookie, STORAGE_TOKEN_KEY } from "@/lib/auth";
import { get } from "@/data/api";

export function AdminAuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (isLogin) {
      setVerified(true);
      return;
    }

    const token = getAdminCookie(STORAGE_TOKEN_KEY);

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    // تحقق من الـ backend إن التوكين صالح ومش blacklisted
    get("/api/admin/authtest")
      .then((res) => {
        if (res.ok) {
          setVerified(true);
        } else {
          clearAdminCookie(STORAGE_TOKEN_KEY);
          clearAdminCookie("username");
          router.replace("/admin/login");
        }
      })
      .catch(() => {
        clearAdminCookie(STORAGE_TOKEN_KEY);
        clearAdminCookie("username");
        router.replace("/admin/login");
      });
  }, [isLogin, pathname, router]);

  if (isLogin) return <>{children}</>;

  if (!verified) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
        <p className="text-sm text-muted-foreground">Checking session…</p>
      </div>
    );
  }

  return <>{children}</>;
}