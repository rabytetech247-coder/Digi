import PageShell from "@/components/PageShell";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageShell>
      <section className="dashboard">
        <div className="container dashboard-grid">
          <aside className="side admin">
            <b>Admin Console</b>
            <a href="/admin/panel">Overview</a>
            <a href="/admin/submissions">Submissions</a>
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
          {children}
        </div>
      </section>
    </PageShell>
  );
}
