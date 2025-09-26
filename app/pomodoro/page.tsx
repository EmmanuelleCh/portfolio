// app/pomodoro/page.tsx
import Pomodoro from "@/components/Pomodoro";

export const metadata = {
  title: "Pomodoro App",
  description: "Application Pomodoro simple en React + Next + Tailwind",
};

export default function PomodoroPage() {
  return <Pomodoro />;
}
