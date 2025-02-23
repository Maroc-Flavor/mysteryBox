export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
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