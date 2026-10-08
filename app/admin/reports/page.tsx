import PageShell from "@/components/PageShell";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import Icon from "@/components/Icon";

export default async function Reports() {
  const user = await getCurrentUser();
  if (!user || user.role !== 'admin') return redirect("/login");

  return (
    <PageShell>
      <section className="dashboard">
        <div className="container dashboard-grid">
          <aside className="side admin">
            <b>Admin Console</b>
            <a href="/admin">Overview</a>
            <a href="/admin/submissions">Submissions</a>
            <a href="/admin/products">Products</a>
            <a href="/admin/users">Users</a>
            <a href="/admin/categories">Categories</a>
            <a href="/admin/reviews">Reviews</a>
            <a href="/admin/featured">Featured</a>
            <a href="/admin/advertising">Advertising</a>
            <a href="/admin/blog">Blog</a>
            <a href="/admin/reports" style={{color: "var(--blue)", fontWeight: 700}}>Reports</a>
            <a href="/admin/emails">Emails</a>
            <a href="/admin/analytics">Analytics</a>
            <a href="/admin/settings">Settings</a>
          </aside>
          
          <section className="dash-main">
            <small className="eyebrow">ADMIN</small>
            <h1>Data Exports & Reports</h1>
            
            <div className="table-card" style={{ marginTop: 25 }}>
              <h2>Export Marketplace Data</h2>
              <p>Download complete snapshots of the marketplace for external analysis or backup.</p>
              
              <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
                <a href="/api/admin/export?type=users" className="button" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Icon name="download" size={16} /> Export Users (CSV)
                </a>
                
                <a href="/api/admin/export?type=products" className="button" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f0f0f0", color: "#333" }}>
                  <Icon name="download" size={16} /> Export Products (CSV)
                </a>
              </div>
            </div>
            
            <div className="table-card" style={{ marginTop: 25 }}>
              <h2>Financial & Monetization Reports</h2>
              <p>Advertising revenue and featured product metrics.</p>
              
              <div className="fake-row" style={{ alignItems: "center" }}>
                <div>
                  <b>Featured Listings</b>
                  <small style={{display:"block", color:"#666"}}>Currently active sponsored products</small>
                </div>
                <span>4 Active</span>
                <button className="mini-button">View</button>
              </div>
              
              <div className="fake-row" style={{ alignItems: "center" }}>
                <div>
                  <b>Platform Analytics</b>
                  <small style={{display:"block", color:"#666"}}>Aggregated page views and outbound traffic</small>
                </div>
                <span>Syncs daily</span>
                <button className="mini-button">View</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  );
}