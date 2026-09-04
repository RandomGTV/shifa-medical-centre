import {
  Activity,
  Ambulance,
  Baby,
  BedDouble,
  Bone,
  Brain,
  ClipboardCheck,
  Dna,
  Droplets,
  Ear,
  Eye,
  FileScan,
  HeartPulse,
  House,
  Pill,
  Smile,
  Sparkles,
  Stethoscope,
  TestTube,
  UserRound,
  Wind,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Activity,
  Ambulance,
  Baby,
  BedDouble,
  Bone,
  Brain,
  ClipboardCheck,
  Dna,
  Droplets,
  Ear,
  Eye,
  FileScan,
  HeartPulse,
  House,
  Pill,
  Smile,
  Sparkles,
  Stethoscope,
  TestTube,
  UserRound,
  Wind,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Stethoscope;
  return <Cmp className={className} strokeWidth={1.6} aria-hidden />;
}
