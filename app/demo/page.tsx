import { WovenLightHero } from "@/component/ui/woven-light-hero";


export default function DemoPage() {
  return (
    <div className="relative">
      <WovenLightHero />
      <div className="absolute bottom-8 left-0 right-0 z-20 text-center">
        <p className="text-white/60 text-sm">
          Interactive Demo - Move your mouse to interact with the particles
        </p>
      </div>
    </div>
  );
}