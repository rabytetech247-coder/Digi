import PageShell from "@/components/PageShell";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { redirect } from "next/navigation";
import type { Product, User } from "@/lib/db-types";
import { moderateProductAction } from "@/app/actions/admin-actions";

export default async function Submissions() {
  const user = await getCurrentUser();
  if (!user || user.role !== 'admin') {
    return redirect("/login");
  }

  const db = getDb();
  
  // Get pending submissions and their sellers
  const pendingProducts = (await db.prepare(`
    SELECT p.*, u.username as seller_username, u.trust_score as seller_trust 
    FROM products p 
    JOIN users u ON p.seller_id = u.id 
    WHERE p.status = 'pending'
  `).all()).results || [];

  return (
    <PageShell>
      <section className="dashboard">
        <div className="container dashboard-grid">
          <aside className="side admin">
            <b>Admin Console</b>
            <a href="/admin">Overview</a>
            <a href="/admin/submissions" style={{color: "var(--blue)", fontWeight: 700}}>Submissions</a>
            <a href="/admin/products">Products</a>
            <a href="/admin/users">Users</a>
            <a href="/admin/categories">Categories</a>
            <a href="/admin/reviews">Reviews</a>
            <a href="/admin/featured">Featured</a>
            <a href="/admin/advertising">Advertising</a>
            <a href="/admin/blog">Blog</a>
            <a href="/admin/reports">Reports</a>
            <a href="/admin/emails">Emails</a>
            <a href="/admin/analytics">Analytics</a>
            <a href="/admin/settings">Settings</a>
          </aside>
          <section className="dash-main">
            <small className="eyebrow">ADMIN</small>
            <h1>Submissions</h1>
            
            <div className="table-card">
              <h2>Pending Moderation Queue</h2>
              <p>Review and approve newly submitted products.</p>
              
              {pendingProducts.length === 0 ? (
                <p style={{ marginTop: 20 }}>No pending submissions in the queue.</p>
              ) : (
                pendingProducts.map((p: any) => (
                  <div key={p.id} className="fake-row" style={{ alignItems: "center" }}>
                    <div>
                      <b>{p.title}</b>
                      <small style={{display:"block", color: "#666"}}>by @{p.seller_username} (Trust: {p.seller_trust})</small>
                    </div>
                    <span>{p.source_platform}</span>
                    <a href={p.source_url} target="_blank" rel="noreferrer" style={{fontSize: 12, textDecoration:"underline"}}>View Source</a>
                    
                    <div style={{ display: "flex", gap: 8 }}>
                      <form action={moderateProductAction}>
                        <input type="hidden" name="productId" value={p.id} />
                        <input type="hidden" name="action" value="approve" />
                        <button type="submit" className="mini-button" style={{ background: "#e8f5e9", color: "#2e7d32", border: "1px solid #c8e6c9" }}>Approve</button>
                      </form>
                      <form action={moderateProductAction}>
                        <input type="hidden" name="productId" value={p.id} />
                        <input type="hidden" name="action" value="reject" />
                        <button type="submit" className="mini-button" style={{ background: "#ffebee", color: "#c62828", border: "1px solid #ffcdd2" }}>Reject</button>
                      </form>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  );
}