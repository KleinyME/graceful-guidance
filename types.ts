import React from 'react';

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServicePathway {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  services: ServiceItem[];
  color: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location?: string;
}

export interface NavItem {
  label: string;
  href: string;
}