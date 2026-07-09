import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopicsBar from "@/components/TopicsBar";
import ArticleGrid from "@/components/ArticleGrid";
import About from "@/components/About";
import CollabSection from "@/components/CollabSection";
import Footer from "@/components/Footer";
import { listFeaturedArticles } from "@/lib/db/articles";
import { CategoryFilterProvider } from "@/lib/CategoryFilterContext";

export const dynamic = "force-dynamic";

export default async function Home() {
  const articles = await listFeaturedArticles();

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Header />
      <Hero />
      <CategoryFilterProvider>
        <TopicsBar />
        <ArticleGrid articles={articles} />
      </CategoryFilterProvider>
      <About />
      <CollabSection />
      <Footer />
    </div>
  );
}
