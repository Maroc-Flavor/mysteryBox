export type LayoutVariant = 'default' | 'shop' | 'static';
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
export type MessageStatus = FormStatus;

export interface PageMeta {
  title: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
  variant?: LayoutVariant;
  className?: string;
}

export interface HeaderProps {
  transparent?: boolean;
}

export interface FooterProps {
  simplified?: boolean;
} 