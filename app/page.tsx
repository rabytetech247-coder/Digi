import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Icon from "@/components/Icon";
import { categories, products as staticProducts } from "@/data/products";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge'; // Required for Cloudflare bindings

export default async function Home() {
  let displayProducts = staticProducts.slice(0, 3);
  
  try {
    const { env } = getRequestContext();
    if (env && env.DB) {
      const { results } = await env.DB.prepare(`
        SELECT p.id, p.title, p.description, p.source_price as price, p.source_rating as rating, p.source_review_count as reviews, p.source_platform as source, p.status as badge, c.name as category, u.name as seller, i.r2_key as image
        FROM products p
        JOIN categories c ON p.category_id = c.id
        JOIN users u ON p.seller_id = u.id
        LEFT JOIN product_images i ON p.id = i.product_id
        WHERE p.status = 'active'
        LIMIT 3
      `).all();
      
      if (results && results.length > 0) {
        displayProducts = results.map((r: any) => ({
          ...r,
          price: "$" + r.price,
          rating: String(r.rating)
        }));
      }
    }
  } catch (e) {
    // Fallback to static products if DB fetch fails (e.g., standard Next.js dev server)
    console.error("D1 Fetch Error:", e);
  }

  return (
    <>
      <Navbar/>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="kicker"><i/> THE DIGITAL PRODUCT DISCOVERY PLATFORM</div>
              <h1>Find digital products that <span>actually help.</span></h1>
              <p className="lead">Discover useful eBooks, AI tools, templates, courses, software and creator resources from independent sellers.</p>
              <form className="search">
                <Icon name="search" size={21}/>
                <input placeholder="Search products, tools, templates..."/>
                <button>Search</button>
              </form>
              <div className="trust">
                <span>✓ Curated listings</span>
                <span>✓ External checkout</span>
                <span>✓ Free to discover</span>
              </div>
            </div>
            <div className="hero-art">
              <div className="orbit a"/>
              <div className="orbit b"/>
              <div className="hero-panel">
                <div className="panel-head">
                  <small>TRENDING TODAY</small>
                  <span>● Live</span>
                </div>
                <div className="feature">
                  <img src="/images/products/ai-content-vault.svg" alt="AI Content Creator Vault"/>
                  <div>
                    <small>AI TOOLS</small>
                    <h3>AI Content Creator Vault</h3>
                    <p>Prompts + workflows + creator systems</p>
                    <div className="mini">
                      <span>★ 4.9</span>
                      <b>$19</b>
                    </div>
                  </div>
                </div>
                <div className="stats">
                  <div><b>10K+</b><small>Products</small></div>
                  <div><b>4.8/5</b><small>Avg. rating</small></div>
                  <div><b>2.4K+</b><small>Creators</small></div>
                </div>
              </div>
              <div className="float one">✦ New tools daily</div>
              <div className="float two">✓ Trusted listings</div>
            </div>
          </div>
        </section>
        
        <section className="section container">
          <div className="heading">
            <div>
              <small className="eyebrow">BROWSE BY CATEGORY</small>
              <h2>Something useful is probably in here.</h2>
              <p>Explore focused categories instead of another graveyard of abandoned SaaS.</p>
            </div>
            <Link href="/categories">All categories →</Link>
          </div>
          <div className="category-grid">
            {categories.map(c => <CategoryCard key={c.name} c={c}/>)}
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="heading">
              <div>
                <small className="eyebrow">FEATURED</small>
                <h2>Worth putting on your shortlist.</h2>
                <p>Hand-picked products with strong ratings and clear value.</p>
              </div>
              <Link href="/featured">View featured →</Link>
            </div>
            <div className="products">
              {displayProducts.map((p: any) => <ProductCard key={p.id} p={p}/>)}
            </div>
          </div>
        </section>

        <section className="creator">
          <div className="container creator-grid">
            <div>
              <small className="eyebrow light">FOR CREATORS & SELLERS</small>
              <h2>Turn your product page into a discovery engine.</h2>
              <p>List once. Get discovery, SEO-ready listing pages and outbound click tracking. Checkout stays on your platform.</p>
              <div className="points">
                <span>✓ Free listing</span>
                <span>✓ Product URL importer</span>
                <span>✓ Seller profile storefront</span>
                <span>✓ Click analytics</span>
              </div>
              <Link href="/submit" className="button">List your product →</Link>
            </div>
            <div className="browser">
              <div className="bar">● ● ● &nbsp; rabyte-tech.com/products/creator-vault</div>
              <div className="browser-body">
                <img src="/images/products/creator-playbook.svg" alt=""/>
                <div><b/><i/><i/><strong/></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}