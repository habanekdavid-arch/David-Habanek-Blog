import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopicsBar from "@/components/TopicsBar";
import ArticleGrid from "@/components/ArticleGrid";
import About from "@/components/About";
import CollabSection from "@/components/CollabSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Header />
      <Hero />
      <TopicsBar />
      <ArticleGrid />
      <About />
      <CollabSection />
      <Footer />
    </div>
  );
}
