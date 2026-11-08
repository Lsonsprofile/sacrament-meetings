import NavLinks from "@/components/NavLinks";

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="border-b border-gray-300 pb-4 mb-6">
        <NavLinks />
      </div>
      {children}
    </section>
  );
}