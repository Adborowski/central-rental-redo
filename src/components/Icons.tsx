interface IconProps {
  className?: string;
}

const base = {
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.8,
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MapPinIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export function SofaIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
      <path d="M3 13a2 2 0 0 1 4 0v1h10v-1a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3Z" />
      <path d="M6 19v1.5M18 19v1.5" />
    </svg>
  );
}

export function ChatIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8.6 19.1 5 21v-3.4a8.4 8.4 0 1 1 3.6 1.5Z" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" strokeWidth={2.4} />
    </svg>
  );
}

export function TagIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 12.6V5.5a2 2 0 0 1 2-2h7.1a2 2 0 0 1 1.4.6l6.5 6.5a2 2 0 0 1 0 2.8l-7.1 7.1a2 2 0 0 1-2.8 0l-6.5-6.5a2 2 0 0 1-.6-1.4Z" />
      <circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.65 1.13 6.58L12 17.57l-5.9 3.1 1.13-6.58L2.45 9.44l6.6-.96L12 2.5z" />
    </svg>
  );
}

export function AreaIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 4h16v16H4z" />
      <path d="M4 9h5M9 4v5M20 15h-5M15 20v-5" />
    </svg>
  );
}

export function GuestsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <circle cx="9.5" cy="6.5" r="3" />
      <path d="M21 19v-1a4 4 0 0 0-3-3.87M15.5 3.63a3 3 0 0 1 0 5.74" />
    </svg>
  );
}

export function BedIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 18h18M5 10V6a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 6v4" />
      <path d="M7 10V8.8c0-.44.36-.8.8-.8h2.9c.44 0 .8.36.8.8V10M12.5 10V8.8c0-.44.36-.8.8-.8h2.9c.44 0 .8.36.8.8V10" />
    </svg>
  );
}

export function FloorIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20h4v-4h4v-4h4V8h4" />
      <path d="M4 20V4h16" opacity={0.35} />
    </svg>
  );
}

export function PhoneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 16.5v2.6a1.9 1.9 0 0 1-2.07 1.9 18.8 18.8 0 0 1-8.2-2.92 18.6 18.6 0 0 1-5.71-5.7A18.8 18.8 0 0 1 2.1 4.07 1.9 1.9 0 0 1 4 2h2.6a1.9 1.9 0 0 1 1.9 1.63c.12.91.34 1.8.66 2.66a1.9 1.9 0 0 1-.43 2L7.6 9.4a15.2 15.2 0 0 0 5.7 5.7l1.11-1.11a1.9 1.9 0 0 1 2-.43c.85.32 1.75.54 2.66.66A1.9 1.9 0 0 1 21 16.5Z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 7.3 5.4a2 2 0 0 0 2.4 0L20.5 7" />
    </svg>
  );
}

export function UserIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 20.5v-1a5.5 5.5 0 0 1 5.5-5.5h3a5.5 5.5 0 0 1 5.5 5.5v1" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M4.5 12h15m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-8-1V4m0 11-4-4m4 4 4-4" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function CloseIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M15 19l-7-7 7-7" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}
