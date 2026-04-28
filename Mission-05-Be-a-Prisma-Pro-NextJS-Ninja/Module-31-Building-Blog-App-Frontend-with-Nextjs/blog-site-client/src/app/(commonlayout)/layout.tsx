import { Navbar } from "@/components/Layouts/Navbar";

export default function CommonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}