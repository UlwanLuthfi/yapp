import React from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Laptop, MoonStars, Sun } from '@phosphor-icons/react/dist/ssr';

export default function ThemeToggleMobile() {
  const toggleItems = [
    {
      value: 'system',
      label: 'System',
      icon: <Laptop className="h-5 w-5" />,
    },
    {
      value: 'light',
      label: 'Light',
      icon: <Sun className="h-5 w-5" />,
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: <MoonStars className="h-5 w-5" />,
    },
  ];

  return (
    <ToggleGroup type="single">
      {toggleItems.map((item) => (
        <ToggleGroupItem
          key={item.value}
          value={item.value}
          aria-label={`Toggle ${item.value}`}
        >
          <span className="sr-only">{item.label}</span>
          {item.icon}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
