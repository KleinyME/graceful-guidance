import React from 'react';
import { ServicePathway, Testimonial, NavItem } from './types';
import { Sparkles, Sun, Heart, Infinity, Star, Music, Wind } from 'lucide-react';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pathways', href: '#services' },
  { label: 'Approach', href: '#methodology' },
  { label: 'Love Notes', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICE_PATHWAYS: ServicePathway[] = [
  {
    id: 'soul-exploration',
    title: 'Soul Exploration',
    subtitle: 'Discovering your higher self',
    description: 'Journey deep within to uncover the wisdom of your soul and past experiences.',
    color: 'bg-indigo-50',
    icon: <Star className="w-8 h-8 text-angelic-gold" />,
    services: [
      { name: 'Quantum Healing (QHHT)', description: 'Connect with your Subconscious for deep healing and answers.' },
      { name: 'Past-Life Regression', description: 'Explore past incarnations to understand current life patterns.' },
    ]
  },
  {
    id: 'energy-restoration',
    title: 'Energy Restoration',
    subtitle: 'Clearing blocks & restoring balance',
    description: 'Gentle, powerful modalities to realign your energetic body and restore harmony.',
    color: 'bg-rose-50',
    icon: <Sun className="w-8 h-8 text-angelic-gold" />,
    services: [
      { name: 'Reiki Healing', description: 'Universal life energy to reduce stress and promote healing.' },
      { name: 'Animal Reiki', description: 'Compassionate energy healing for your beloved pets.' },
      { name: 'Hypno-Reiki', description: 'A synergistic blend of hypnosis and energy work.' },
      { name: 'Sound Healing', description: 'Vibrational therapy to soothe the nervous system.' },
    ]
  },
  {
    id: 'mind-transformation',
    title: 'Mind & Habit Transformation',
    subtitle: 'Rewiring for freedom',
    description: 'Practical, spiritual tools to shift limiting beliefs and create positive change.',
    color: 'bg-teal-50',
    icon: <Wind className="w-8 h-8 text-angelic-gold" />,
    services: [
      { name: 'Clinical Hypnotherapy', description: 'Therapeutic hypnosis for anxiety, fears, and confidence.' },
      { name: 'Smoking Cessation', description: 'Break free from addiction with subconscious reprogramming.' },
      { name: 'NLP & EFT', description: 'Neuro-Linguistic Programming and Tapping for emotional release.' },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "I felt a weight lift off my shoulders that I didn't even know I was carrying. Lisa's presence is pure light.",
    author: "Sarah J.",
    location: "Wausau, WI"
  },
  {
    id: 2,
    quote: "The QHHT session was life-changing. connecting with my higher self gave me clarity I've been seeking for years.",
    author: "Michael R.",
    location: "Stevens Point, WI"
  },
  {
    id: 3,
    quote: "Lisa created such a safe, non-judgmental space. I finally feel like I'm coming home to myself.",
    author: "Emily K.",
    location: "Birnamwood, WI"
  }
];

export const CONTACT_INFO = {
  email: 'gracefulguidancelisa@gmail.com',
  location: 'Wausau / Birnamwood, WI',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com'
};