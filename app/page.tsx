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

// Type for template component
type EmailComponent = React.ComponentType<any>;

const templates: Record<string, Array<{ id: string; name: string; description: string; component: EmailComponent }>> = {
  support: [
    {
      id: "ticket-opened",
      name: "Ticket Opened",
      description: "Confirmation email when a support ticket is created",
      component: TicketOpenedEmail as EmailComponent,
    },
    {
      id: "ticket-resolved",
      name: "Ticket Resolved",
      description: "Notification when a support ticket is resolved",
      component: TicketResolvedEmail as EmailComponent,
    },
    {
      id: "warranty-claim",
      name: "Warranty Claim",
      description: "Acknowledgment of a warranty claim submission",
      component: WarrantyClaimEmail as EmailComponent,
    },
  ],
  invoices: [
    {
      id: "invoice-approval",
      name: "Invoice + Approval",
      description: "Invoice with approve/decline actions and payment options",
      component: InvoiceApprovalEmail as EmailComponent,
    },
    {
      id: "payment-confirmed",
      name: "Payment Confirmed",
      description: "Confirmation when payment is received",
      component: PaymentConfirmedEmail as EmailComponent,
    },
    {
      id: "payment-overdue",
      name: "Payment Overdue",
      description: "Urgent notice for past-due invoices",
      component: PaymentOverdueEmail as EmailComponent,
    },
  ],
  sales: [
    {
      id: "quotation-approval",
      name: "Quotation + Approval",
      description: "Quote with parts table, pricing, and approval actions",
      component: QuotationApprovalEmail as EmailComponent,
    },
    {
      id: "new-lead-dealer",
      name: "New Lead / Dealer",
      description: "Welcome email for new dealers and business customers",
      component: NewLeadDealerEmail as EmailComponent,
    },
    {
      id: "order-confirmed",
      name: "Order Confirmed",
      description: "Order confirmation with shipping details",
      component: OrderConfirmedEmail as EmailComponent,
    },
  ],
};

const categories = [
  { id: "support", label: "Support", email: "support@auapw.org", color: "#C0392B" },
  { id: "invoices", label: "Invoices", email: "invoices@auapw.org", color: "#E67E22" },
  { id: "sales", label: "Sales", email: "sales@auapw.org", color: "#2563a8" },
];

export default function Page() {
  const [selectedTemplate, setSelectedTemplate] = React.useState<string | null>(null);
  const [htmlContent, setHtmlContent] = React.useState<string>("");

  const activeTemplate = React.useMemo(() => {
    if (!selectedTemplate) return null;
    for (const category of Object.values(templates)) {
      const found = category.find((t) => t.id === selectedTemplate);
      if (found) return found;
    }
    return null;
  }, [selectedTemplate]);

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

  return (
    <div className="min-h-screen bg-[#0e1014] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-[#111318] border-r border-white/5 flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div className="p-5 border-b border-white/5">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 bg-[#C0392B] rounded-md flex items-center justify-center text-[8px] font-extrabold tracking-wide">
              AUAPW
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-wider">AUAPW.ORG</div>
              <div className="text-[9px] text-white/35 uppercase tracking-wider">
                Email Templates
              </div>
            </div>
          </div>
          <div className="text-[10px] text-white/30 pl-12">
            All Used Auto Parts Warehouse
          </div>
        </div>

        <div className="p-3">
          <div className="text-[9px] font-bold tracking-widest uppercase text-white/25 px-2 mb-2">
            Navigation
          </div>
          <button
            onClick={() => setSelectedTemplate(null)}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-left ${
              !selectedTemplate
                ? "bg-[#C0392B]/15 text-white"
                : "text-white/55 hover:bg-white/5 hover:text-white"
            }`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                !selectedTemplate ? "bg-[#C0392B]" : "bg-white/20"
              }`}
            />
            <div>
              <div className="text-xs font-semibold">Template Index</div>
              <div className="text-[10px] text-white/30">All 9 templates</div>
            </div>
          </button>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="p-3">
            <div
              className="text-[9px] font-bold tracking-widest uppercase px-2 mb-2"
              style={{ color: `${category.color}99` }}
            >
              {category.email}
            </div>
            {templates[category.id as keyof typeof templates].map((template) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-left mb-0.5 ${
                  selectedTemplate === template.id
                    ? "bg-white/5 text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <div className="text-xs font-semibold">{template.name}</div>
              </button>
            ))}
          </div>
        ))}

        <div className="mt-auto p-4 border-t border-white/5">
          <div className="text-[10px] text-white/20 text-center leading-relaxed">
            Built with React Email
            <br />
            v0.dev - 2025
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-[#111318] border-b border-white/5 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="text-base font-bold">
              {activeTemplate ? activeTemplate.name : "Email Template System"}
            </h1>
            <p className="text-[11px] text-white/35">
              {activeTemplate
                ? activeTemplate.description
                : "9 templates across 3 inboxes — select to preview & download"}
            </p>
          </div>
          {activeTemplate && (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(htmlContent);
                }}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wide border border-white/15 text-white/60 rounded-md hover:border-white/30 hover:text-white transition-colors"
              >
                Copy HTML
              </button>
              <button
                onClick={() => {
                  const blob = new Blob([htmlContent], { type: "text/html" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `auapw-${activeTemplate.id}.html`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wide bg-[#C0392B] text-white rounded-md hover:bg-[#96281B] transition-colors"
              >
                Download
              </button>
            </div>
          )}
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#0e1014]">
          {!selectedTemplate ? (
            /* Template Index */
            <div>
              <div className="text-center py-8 mb-7">
                <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-[#C0392B] mb-2">
                  AUAPW Email Templates
                </div>
                <h2 className="text-3xl font-black tracking-tight mb-2">
                  Professional Email Templates
                </h2>
                <p className="text-sm text-white/40 max-w-md mx-auto">
                  9 ready-to-use templates for support, invoicing, and sales
                  communications
                </p>
              </div>

              {/* Stats Bar */}
              <div className="flex gap-px bg-white/5 rounded-xl overflow-hidden mb-7">
                {[
                  { num: "9", label: "Templates" },
                  { num: "3", label: "Inboxes" },
                  { num: "100%", label: "Responsive" },
                  { num: "React", label: "Email" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex-1 p-4 text-center bg-[#111318]"
                  >
                    <div className="text-xl font-extrabold text-[#C0392B] tracking-wide">
                      {stat.num}
                    </div>
                    <div className="text-[9px] text-white/30 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Template Categories */}
              {categories.map((category) => (
                <div key={category.id} className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{category.label} Templates</div>
                      <div className="text-[11px] text-white/30">{category.email}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {templates[category.id as keyof typeof templates].map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className="bg-[#111318] border border-white/5 rounded-xl p-4 text-left hover:border-white/15 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 transition-all group relative overflow-hidden"
                      >
                        <div
                          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                          style={{ backgroundColor: category.color }}
                        />
                        <div className="text-sm font-bold mb-1">{template.name}</div>
                        <div className="text-[11px] text-white/35 leading-relaxed mb-3">
                          {template.description}
                        </div>
                        <div className="flex items-center justify-between">
                          <span
                            className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded"
                            style={{
                              backgroundColor: `${category.color}20`,
                              color: category.color,
                            }}
                          >
                            {category.label}
                          </span>
                          <span className="text-sm text-white/20 group-hover:text-white/60 transition-colors">
                            &rarr;
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Template Preview */
            <div className="bg-[#e8e8e8] rounded-lg p-6 flex justify-center min-h-full">
              <div className="w-full max-w-[640px]">
                <iframe
                  srcDoc={htmlContent}
                  className="w-full min-h-[800px] bg-white rounded-lg shadow-lg"
                  title={activeTemplate?.name}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
