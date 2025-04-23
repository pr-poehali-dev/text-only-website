
import { NavBar } from "@/components/NavBar";
import { TextContent } from "@/components/TextContent";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <TextContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
