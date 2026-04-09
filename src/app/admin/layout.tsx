import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel | Keripik Tempe Tono",
  description: "Kelola data produk Keripik Tempe Tono",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Note: The main layout already has a Navbar. In a real app we might want a separate clear layout,
          but to match the design we will just make sure this content stands out.
      */}
      <div className="pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
      </div>
    </div>
  );
}
