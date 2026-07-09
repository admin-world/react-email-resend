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
