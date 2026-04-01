"use client";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Settings,
  Users,
  CheckSquare,
  LogOut,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Blog", href: "/admin/blogs", icon: FileText },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Services", href: "/admin/services", icon: Settings },
    { name: "Admins", href: "/admin/admins", icon: Users },
    { name: "Messages", href: "/admin/messages", icon: CheckSquare },
  ];
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-y-0 left-0 w-64 border-r border-border bg-card">
        <div className="flex h-full flex-col">
          <Link href="/" className="flex items-center border-b border-border px-6 py-4">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold gradient-text">DeverCrowd</span>
          </Link>

          <nav className="flex-1 space-y-2 px-4 py-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-border px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium">DC</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-foreground">Admin</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" type="button" aria-label="Sign out">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-64 min-h-screen">{children}</div>
    </div>
  );
};

export default DashboardLayout;
