export default function Tagline({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray text-center max-w-[500px] w-full mx-auto">
      {children}
    </p>
  );
}
