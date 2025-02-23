export interface LayoutProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  transparent?: boolean;
}

export interface FooterProps {
  simplified?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
}

export type LayoutVariant = 'default' | 'shop' | 'static'; 