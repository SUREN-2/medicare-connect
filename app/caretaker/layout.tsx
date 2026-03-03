// app/dashboard/layout.tsx
export default function CaretakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen  ">
      <section className="flex-1 p-0 ">{children}</section>
    </div>
  );
}
