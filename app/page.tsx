"use client";

import * as React from "react";
import { render } from "@react-email/render";

// Support Templates
import { TicketOpenedEmail } from "@/emails/support/ticket-opened";
import { TicketResolvedEmail } from "@/emails/support/ticket-resolved";
import { WarrantyClaimEmail } from "@/emails/support/warranty-claim";

// Invoice Templates
import { InvoiceApprovalEmail } from "@/emails/invoices/invoice-approval";
import { PaymentConfirmedEmail } from "@/emails/invoices/payment-confirmed";
import { PaymentOverdueEmail } from "@/emails/invoices/payment-overdue";

// Sales Templates
import { QuotationApprovalEmail } from "@/emails/sales/quotation-approval";
import { NewLeadDealerEmail } from "@/emails/sales/new-lead-dealer";
import { OrderConfirmedEmail } from "@/emails/sales/order-confirmed";

type EmailComponent = React.ComponentType<Record<string, unknown>>;

type TemplateEntry = {
  id: string;
  name: string;
  category: string;
  description: string;
  component: EmailComponent;
};

const TEMPLATES: TemplateEntry[] = [
  { id: "ticket-opened", name: "Ticket Opened", category: "Support", description: "Confirmation when a new support ticket is created", component: TicketOpenedEmail as EmailComponent },
  { id: "ticket-resolved", name: "Ticket Resolved", category: "Support", description: "Notification when a support ticket is resolved", component: TicketResolvedEmail as EmailComponent },
  { id: "warranty-claim", name: "Warranty Claim", category: "Support", description: "Acknowledgment of a warranty claim submission", component: WarrantyClaimEmail as EmailComponent },
  { id: "invoice-approval", name: "Invoice + Approval", category: "Invoices", description: "Invoice with approve/decline actions and payment options", component: InvoiceApprovalEmail as EmailComponent },
  { id: "payment-confirmed", name: "Payment Confirmed", category: "Invoices", description: "Confirmation when a payment is received", component: PaymentConfirmedEmail as EmailComponent },
  { id: "payment-overdue", name: "Payment Overdue", category: "Invoices", description: "Urgent notice for past-due invoices", component: PaymentOverdueEmail as EmailComponent },
  { id: "quotation-approval", name: "Quotation + Approval", category: "Sales", description: "Quote with parts table, pricing, and approval actions", component: QuotationApprovalEmail as EmailComponent },
  { id: "new-lead-dealer", name: "New Lead / Dealer", category: "Sales", description: "Welcome email for new dealers and business customers", component: NewLeadDealerEmail as EmailComponent },
  { id: "order-confirmed", name: "Order Confirmed", category: "Sales", description: "Order confirmation with shipping details", component: OrderConfirmedEmail as EmailComponent },
];

export default function Page() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [htmlContent, setHtmlContent] = React.useState("");

  const activeTemplate = React.useMemo(() => {
    if (!selectedId) return null;
    return TEMPLATES.find((t) => t.id === selectedId) ?? null;
  }, [selectedId]);

  React.useEffect(() => {
    async function renderEmail() {
      if (activeTemplate) {
        const Component = activeTemplate.component;
        const html = await render(<Component />);
        setHtmlContent(html);
      }
    }
    renderEmail();
  }, [activeTemplate]);

  const groupedByCategory = React.useMemo(() => {
    return TEMPLATES.reduce(
      (acc, template) => {
        if (!acc[template.category]) {
          acc[template.category] = [];
        }
        acc[template.category].push(template);
        return acc;
      },
      {} as Record<string, TemplateEntry[]>
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a1f2e" }}>
      {/* Header Bar - Red banner */}
      <div style={{ backgroundColor: "#c9513e" }} className="px-6 py-3 text-white flex items-center justify-between">
        <h1 className="text-base font-black tracking-widest uppercase">All Used Auto Parts Warehouse</h1>
        <a href="tel:+18888185001" className="text-sm font-bold">(888) 818-5001</a>
      </div>

      {/* Logo & Branding Bar */}
      <div style={{ backgroundColor: "#242b3d" }} className="px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Circle logo */}
          <div
            style={{ backgroundColor: "#c9513e" }}
            className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span className="text-white font-black text-sm tracking-widest">AUAPW</span>
          </div>
          {/* Branding text */}
          <div>
            <h2 className="text-white text-2xl font-black tracking-widest">AUAPW.ORG</h2>
            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Quality Used Auto Parts</p>
          </div>
        </div>

        {/* Support button */}
        <button
          style={{ backgroundColor: "#c9513e" }}
          className="px-6 py-3 text-white text-xs font-black uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Support@auapw.org
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {!selectedId ? (
          <>
            {/* Hero Section */}
            <div style={{ backgroundColor: "#1a1f2e" }} className="px-6 py-16 text-center flex-1 flex flex-col items-center justify-center">
              {/* Badge */}
              <div
                style={{ backgroundColor: "#c9513e" }}
                className="inline-block px-4 py-2 text-white text-xs font-black uppercase tracking-widest mb-6"
              >
                Email Templates
              </div>

              {/* Hero heading */}
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight max-w-4xl">
                We Got Your Message
              </h1>

              {/* Hero description */}
              <p className="text-gray-400 text-lg max-w-2xl mb-12">
                Professional email templates for support, invoicing, and sales communications. 9 templates ready to use with React Email.
              </p>

              {/* Stats bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
                <div className="text-center">
                  <div style={{ color: "#c9513e" }} className="text-4xl font-black mb-2">
                    9
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Templates</div>
                </div>
                <div className="text-center">
                  <div style={{ color: "#c9513e" }} className="text-4xl font-black mb-2">
                    3
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Categories</div>
                </div>
                <div className="text-center">
                  <div style={{ color: "#c9513e" }} className="text-4xl font-black mb-2">
                    100%
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Responsive</div>
                </div>
                <div className="text-center">
                  <div style={{ color: "#c9513e" }} className="text-4xl font-black mb-2">
                    React
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Email</div>
                </div>
              </div>
            </div>

            {/* Templates Grid */}
            <div style={{ backgroundColor: "#242b3d" }} className="px-6 py-12">
              {Object.entries(groupedByCategory).map(([category, templates]) => (
                <div key={category} className="mb-12">
                  <h3 className="text-xl font-black text-white uppercase tracking-widest mb-6">{category} Emails</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedId(template.id)}
                        className="text-left p-5 rounded transition-all hover:translate-y-[-2px] hover:shadow-lg"
                        style={{
                          backgroundColor: "#1a1f2e",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        }}
                      >
                        <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">{template.name}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed mb-4">{template.description}</p>
                        <div
                          style={{ backgroundColor: "#c9513e" }}
                          className="inline-block px-3 py-1 text-white text-[10px] font-bold uppercase tracking-wider rounded"
                        >
                          Preview
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Preview Mode */
          <div style={{ backgroundColor: "#1a1f2e" }} className="flex-1 flex flex-col px-6 py-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSelectedId(null)}
                className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wide"
              >
                ← Back to Templates
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => navigator.clipboard.writeText(htmlContent)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-colors rounded"
                >
                  Copy HTML
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([htmlContent], { type: "text/html" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `auapw-${activeTemplate?.id ?? "template"}.html`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  style={{ backgroundColor: "#c9513e" }}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-white rounded hover:opacity-90 transition-opacity"
                >
                  Download
                </button>
              </div>
            </div>

            <div
              className="flex-1 rounded overflow-hidden flex justify-center"
              style={{ backgroundColor: "#e8e8e8", border: "1px solid #ccc" }}
            >
              <div className="w-full max-w-2xl flex items-center justify-center">
                <iframe
                  srcDoc={htmlContent}
                  title={activeTemplate?.name ?? "Email preview"}
                  className="w-full"
                  style={{ minHeight: "600px", border: "none", maxHeight: "90vh" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#242b3d", borderTop: "1px solid rgba(255,255,255,0.1)" }} className="px-6 py-6 text-center">
        <p className="text-gray-500 text-xs uppercase tracking-widest">
          AUAPW Email Templates • Built with React Email
        </p>
      </div>
    </div>
  );
}

  const totalPages = Math.ceil(visibleTemplates.length / 9);

  /* Toggle helpers */
  const toggleInbox = (key: string) =>
    setFilters((f) => ({ ...f, inboxes: { ...f.inboxes, [key]: !f.inboxes[key] } }));
  const toggleCat = (key: string) =>
    setFilters((f) => ({ ...f, categories: { ...f.categories, [key]: !f.categories[key] } }));

  /* Hero title */
  const heroTitle = activeCategory
    ? `${activeCategory.label.toUpperCase()}: RELIABLE, RESPONSIVE, AND READY TO SEND.`
    : "AUAPW: PROFESSIONAL EMAIL TEMPLATES FOR EVERY WORKFLOW.";

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f0f2f5] font-sans flex flex-col">

      {/* ── TOP NAV (matches screenshot) ─────────────────────────── */}
      <header className="bg-[#13161c] border-b border-white/8 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-14">
          {/* Logo */}
          <div
            className="flex items-center h-full px-5 -ml-6 text-xl font-black tracking-widest uppercase"
            style={{
              background: "linear-gradient(135deg,#1e2128 0%,#2a2e38 100%)",
              borderRight: "1px solid rgba(255,255,255,0.12)",
              clipPath: "polygon(0 0,100% 0,92% 100%,0 100%)",
              paddingRight: "2.5rem",
            }}
          >
            AUAPW.ORG
          </div>

          {/* Nav items */}
          <nav className="flex items-center gap-8" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`text-[12px] font-bold tracking-widest uppercase pb-0.5 transition-colors ${
                  activeNav === item
                    ? "text-[#e8720c] border-b-2 border-[#e8720c]"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Cart */}
          <button className="text-white/60 hover:text-white transition-colors" aria-label="Cart">
            <CartIcon />
          </button>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-72 flex items-end justify-center overflow-hidden">
        <Image
          src="/auapw-hero.jpg"
          alt="AUAPW hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0d0f12]/70" />

        {/* Overlapping hero content */}
        <div className="relative z-10 text-center pb-8 px-6">
          <h1
            className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white text-balance"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.9)" }}
          >
            {heroTitle}
          </h1>
        </div>
      </section>

      {/* ── BODY (sidebar + grid) ─────────────────────────────────── */}
      <div className="flex flex-1">

        {/* ── FILTER SIDEBAR ──────────────────────────────────────── */}
        <aside
          className="w-60 flex-shrink-0 sticky top-14 self-start overflow-y-auto"
          style={{
            background: "#13161c",
            borderRight: "1px solid rgba(255,255,255,0.07)",
            maxHeight: "calc(100vh - 3.5rem)",
          }}
          aria-label="Filters"
        >
          <FilterSection title="Inbox">
            <Checkbox checked={filters.inboxes.support}  onChange={() => toggleInbox("support")}  label="Support"  />
            <Checkbox checked={filters.inboxes.invoices} onChange={() => toggleInbox("invoices")} label="Invoices" />
            <Checkbox checked={filters.inboxes.sales}    onChange={() => toggleInbox("sales")}    label="Sales"    />
          </FilterSection>

          <FilterSection title="Category">
            <Checkbox checked={filters.categories.support}  onChange={() => toggleCat("support")}  label="Support"  />
            <Checkbox checked={filters.categories.invoices} onChange={() => toggleCat("invoices")} label="Invoices" />
            <Checkbox checked={filters.categories.sales}    onChange={() => toggleCat("sales")}    label="Sales"    />
          </FilterSection>

          <FilterSection title="Price Range">
            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
              {["Support", "Invoices", "Sales"].map((l) => (
                <Checkbox key={l} checked={false} onChange={() => {}} label={l} />
              ))}
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full mt-1"
              aria-label="Price range"
            />
          </FilterSection>
        </aside>

        {/* ── MAIN CONTENT ────────────────────────────────────────── */}
        <main className="flex-1 flex flex-col min-h-0 p-5">

          {/* Sort bar */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-[11px] text-white/35 uppercase tracking-wider">
              {visibleTemplates.length} templates
            </span>
            <div className="flex items-center gap-3">
              <label className="text-[11px] uppercase tracking-widest text-white/40 font-bold">Sort by:</label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-[#13161c] border border-white/12 text-[11px] text-white/70 px-3 py-2 pr-7 uppercase tracking-wider rounded-sm outline-none hover:border-white/25 transition-colors cursor-pointer"
                >
                  <option>RELEVANCE, PRICE, NAME</option>
                  <option>NAME A–Z</option>
                  <option>CATEGORY</option>
                </select>
                <Chevron open={false} />
              </div>

              {/* Pagination */}
              <div className="flex items-center gap-1 ml-4 text-[11px] text-white/35">
                <span>Page {page} - {totalPages}</span>
                <button className="w-7 h-7 flex items-center justify-center border border-white/12 text-white/35 hover:border-white/30 hover:text-white transition-colors rounded-sm" aria-label="Previous page">&#8249;</button>
                <button className="w-7 h-7 flex items-center justify-center border border-[#e8720c] text-[#e8720c] rounded-sm text-xs font-bold" aria-current="page">1</button>
                <button className="w-7 h-7 flex items-center justify-center border border-white/12 text-white/35 hover:border-white/30 hover:text-white transition-colors rounded-sm" aria-label="Next page">&#8250;</button>
              </div>
            </div>
          </div>

          {/* Template grid */}
          {!selectedId ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onClick={() => setSelectedId(template.id)}
                />
              ))}
            </div>
          ) : (
            /* ── PREVIEW PANEL ──────────────────────────────────── */
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2"
                >
                  &#8592; Back to Templates
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(htmlContent)}
                    className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
                  >
                    Copy HTML
                  </button>
                  <button
                    onClick={() => {
                      const blob = new Blob([htmlContent], { type: "text/html" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `auapw-${activeTemplate?.id ?? "template"}.html`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: activeTemplate?.accent ?? "#e8720c" }}
                  >
                    Download
                  </button>
                </div>
              </div>

              <div
                className="rounded overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.10)", background: "#e8e8e8" }}
              >
                <iframe
                  srcDoc={htmlContent}
                  title={activeTemplate?.name ?? "Email preview"}
                  className="w-full"
                  style={{ minHeight: "820px", border: "none" }}
                />
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer
        className="border-t border-white/8 px-6 py-4 flex items-center justify-between"
        style={{ background: "#13161c" }}
      >
        <div>
          <div className="text-sm font-black uppercase tracking-widest text-white">AUAPW.ORG</div>
          <div className="text-[10px] text-white/30">auapw.org &nbsp;|&nbsp; contact info</div>
        </div>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white/35">
          <button className="hover:text-white transition-colors">Terms</button>
          <span className="text-white/15">|</span>
          <button className="hover:text-white transition-colors">Privacy Policy</button>
        </div>
      </footer>
    </div>
  );
}
