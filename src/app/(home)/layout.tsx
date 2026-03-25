import { Navbar } from "@/modules/home/ui/components/navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Premium Awesome Background */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-background">
                {/* Minimalist Linear Grid that fades out beautifully towards the bottom/edges */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                
                {/* Subtle Ambient Glow behind the top header text to match your text gradient */}
                <div className="absolute left-1/2 top-[-10%] -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/15" />
            </div>

            <div className="flex flex-1 flex-col px-4 pb-4">
                {children}  
            </div>
        </main>
    );
};

export default Layout;