import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "react-email";
import * as React from "react";
import {
  colors,
  EmailStrip,
  EmailLogoBar,
  EmailHero,
  EmailBox,
  EmailApprovalButtons,
  EmailPayLinkBox,
  EmailPaymentMethods,
  EmailSignature,
  EmailFooter,
  EmailDivider,
  bodyStyles,
  containerStyles,
  emailBodyStyles,
  greetingStyles,
  paragraphStyles,
  EmailTag,
} from "../components";

interface InvoiceApprovalEmailProps {
  customerName?: string;
  invoiceNumber?: string;
  invoiceDate?: string;
  dueDate?: string;
  billingAddress?: string;
  parts?: Array<{ name: string; sku: string; warranty: string; price: string }>;
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  approveToken?: string;
}

export const InvoiceApprovalEmail = ({
  customerName = "[Customer Name / Company]",
  invoiceNumber = "AUAPW-INV-XXXXX",
  invoiceDate = "[Date]",
  dueDate = "[Due Date]",
  billingAddress = "[Billing Address]",
  parts = [
    {
      name: "[Part Name 1]",
      sku: "[Year Make Model] - SKU: XXXXXXX",
      warranty: "180 Days",
      price: "XXX.XX",
    },
    {
      name: "[Part Name 2]",
      sku: "[Year Make Model] - SKU: XXXXXXX",
      warranty: "90 Days",
      price: "XXX.XX",
    },
  ],
  subtotal = "XXX.XX",
  shipping = "Free",
  tax = "XX.XX",
  total = "XXX.XX",
  approveToken = "[TOKEN]",
}: InvoiceApprovalEmailProps) => {
  const previewText = `Invoice Ready for Review - ${invoiceNumber}`;

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={bodyStyles}>
        <Container style={containerStyles}>
          <EmailStrip backgroundColor={colors.gold} />
          <EmailLogoBar
            inboxLabel="Invoices"
            pillColor={colors.gold}
            inboxEmail="invoices@auapw.org"
          />
          <EmailHero
            accentColor={colors.gold}
            eyebrow="Invoice Ready"
            title="Your Invoice is Ready for Review"
            subtitle="Review line items, approve to pay, or decline. All payment methods accepted."
            backgroundColor="#1a1000"
          />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {customerName},</Text>
            <Text style={paragraphStyles}>
              Please find your invoice for the parts order below. Review all
              line items and use the <strong>Approve &amp; Pay</strong> button to
              confirm, or <strong>Decline</strong> if you need to discuss
              changes. Payment is due within 7 days of invoice date.
            </Text>

            <EmailBox
              label={`Invoice #${invoiceNumber}`}
              labelColor={colors.gold}
              backgroundColor="#fff8f0"
              borderColor={colors.gold}
              rows={[
                { key: "Invoice Date", value: invoiceDate },
                { key: "Due Date", value: dueDate },
                { key: "Bill To", value: billingAddress },
                {
                  key: "Status",
                  value: <EmailTag variant="gold">Awaiting Approval</EmailTag>,
                },
              ]}
            />

            {/* Parts Table */}
            <Section style={{ margin: "14px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        color: colors.silver,
                        padding: "6px 10px",
                        textAlign: "left",
                        borderBottom: "2px solid #f0f0f0",
                      }}
                    >
                      Part
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        color: colors.silver,
                        padding: "6px 10px",
                        textAlign: "left",
                        borderBottom: "2px solid #f0f0f0",
                      }}
                    >
                      Warranty
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        color: colors.silver,
                        padding: "6px 10px",
                        textAlign: "right",
                        borderBottom: "2px solid #f0f0f0",
                      }}
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {parts.map((part, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          fontSize: "12px",
                          color: "#374151",
                          padding: "10px",
                          borderBottom: "1px solid #f5f5f5",
                          verticalAlign: "middle",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 600,
                            color: colors.charcoal,
                          }}
                        >
                          {part.name}
                        </div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: colors.silver,
                            marginTop: "2px",
                          }}
                        >
                          {part.sku}
                        </div>
                      </td>
                      <td
                        style={{
                          fontSize: "11px",
                          color: "#374151",
                          padding: "10px",
                          borderBottom: "1px solid #f5f5f5",
                          verticalAlign: "middle",
                        }}
                      >
                        {part.warranty}
                      </td>
                      <td
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: colors.charcoal,
                          padding: "10px",
                          borderBottom: "1px solid #f5f5f5",
                          textAlign: "right",
                          verticalAlign: "middle",
                        }}
                      >
                        ${part.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            {/* Totals */}
            <Section
              style={{
                backgroundColor: "#f9fafb",
                borderRadius: "5px",
                padding: "12px 16px",
                margin: "10px 0",
              }}
            >
              <Row style={{ padding: "6px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <Column>
                  <Text style={{ margin: 0, fontSize: "12px", color: colors.gray }}>
                    Parts Subtotal
                  </Text>
                </Column>
                <Column align="right">
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.charcoal,
                    }}
                  >
                    ${subtotal}
                  </Text>
                </Column>
              </Row>
              <Row style={{ padding: "6px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <Column>
                  <Text style={{ margin: 0, fontSize: "12px", color: colors.gray }}>
                    Shipping
                  </Text>
                </Column>
                <Column align="right">
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.green,
                    }}
                  >
                    {shipping}
                  </Text>
                </Column>
              </Row>
              <Row style={{ padding: "6px 0" }}>
                <Column>
                  <Text style={{ margin: 0, fontSize: "12px", color: colors.gray }}>
                    Tax
                  </Text>
                </Column>
                <Column align="right">
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.charcoal,
                    }}
                  >
                    ${tax}
                  </Text>
                </Column>
              </Row>
              <Row
                style={{
                  borderTop: "2px solid rgba(0,0,0,0.08)",
                  paddingTop: "12px",
                  marginTop: "8px",
                }}
              >
                <Column>
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: 700,
                      color: colors.charcoal,
                    }}
                  >
                    Invoice Total
                  </Text>
                </Column>
                <Column align="right">
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "22px",
                      fontWeight: 800,
                      color: colors.gold,
                    }}
                  >
                    ${total}
                  </Text>
                </Column>
              </Row>
            </Section>

            <EmailApprovalButtons
              approveHref={`https://auapw.org/approve?id=${approveToken}`}
              rejectHref={`https://auapw.org/reject?id=${approveToken}`}
              approveText="Approve & Pay"
              rejectText="Decline"
            />

            <EmailPayLinkBox
              amount={total}
              label="Approve and pay to confirm your order"
              paymentHref={`https://auapw.org/pay?id=${approveToken}`}
            />

            <EmailPaymentMethods />

            <EmailDivider />
            <EmailSignature
              name="AUAPW Billing Dept"
              role="Billing & Invoicing"
              email="invoices@auapw.org"
              accentColor={colors.gold}
            />
          </Section>
          <EmailFooter email="invoices@auapw.org" />
        </Container>
      </Body>
    </Html>
  );
};

export default InvoiceApprovalEmail;
