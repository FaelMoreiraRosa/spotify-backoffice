'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationProps {
  type?: 'desktop' | 'hamburger';
  navigation: NavigationItem[];
}

// Melhoria: Permite valores falsy (undefined, null, false) sem erro de tipagem
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav({ navigation, type = "desktop" }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={classNames(
              // Estilos base (comuns a ambos)
              "rounded-md px-3 py-2 font-medium transition-colors",
              
              // Estilos de estado (Ativo vs Inativo)
              isActive
                ? "bg-gray-950/50 text-white"
                : "text-gray-300 hover:bg-white/5 hover:text-white",
                
              // Estilos condicionais baseados no layout
              type === "desktop" 
                ? "text-sm" 
                : "block text-base"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}