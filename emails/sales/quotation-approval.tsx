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
  EmailStatsBar,
  EmailBox,
  EmailApprovalButtons,
  EmailPayLinkBox,
  EmailPaymentMethods,
  EmailWarrantyBadge,
  EmailSignature,
  EmailTrustBar,
  EmailFooter,
  EmailDivider,
  bodyStyles,
  containerStyles,
  emailBodyStyles,
  greetingStyles,
  paragraphStyles,
  EmailTag,
} from "../components";

interface QuotationApprovalEmailProps {
  customerName?: string;
  quoteNumber?: string;
  quoteDate?: string;
  validUntil?: string;
  preparedBy?: string;
  parts?: Array<{
    name: string;
    sku: string;
    condition: string;
    warranty: string;
    price: string;
  }>;
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  approveToken?: string;
}

export const QuotationApprovalEmail = ({
  customerName = "[Customer Name]",
  quoteNumber = "AUAPW-Q-XXXXX",
  quoteDate = "[Date]",
  validUntil = "[Date — 48 hrs]",
  preparedBy = "[Sales Rep Name]",
  parts = [
    {
      name: "[Part Name 1]",
      sku: "[Year Make Model] - SKU: XXXXXXX",
      condition: "Inspected",
      warranty: "180 Days",
      price: "XXX.XX",
    },
    {
      name: "[Part Name 2]",
      sku: "[Year Make Model] - SKU: XXXXXXX",
      condition: "Tested",
      warranty: "90 Days",
      price: "XXX.XX",
    },
  ],
  subtotal = "XXX.XX",
  shipping = "Free — Same Day Available",
  tax = "XX.XX",
  total = "XXX.XX",
  approveToken = "[TOKEN]",
}: QuotationApprovalEmailProps) => {
  const previewText = `Your Quote is Ready - ${quoteNumber}`;

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
          <EmailStrip backgroundColor={colors.navyLight} />
          <EmailLogoBar
            inboxLabel="Sales"
            pillColor={colors.navyLight}
            inboxEmail="sales@auapw.org"
          />
          <EmailHero
            accentColor={colors.navyLight}
            eyebrow="Quotation Ready"
            title="Your Free Quote is Ready"
            subtitle="Review your parts, pricing, and warranty — then approve to confirm your order."
            backgroundColor={colors.navy}
          />
          <EmailStatsBar />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {customerName},</Text>
            <Text style={paragraphStyles}>
              We&apos;ve sourced the parts you requested from our network of{" "}
              <strong>2,000+ verified yards</strong> across all 50 states. Review
              the quote below, then click <strong>Approve &amp; Order</strong> or{" "}
              <strong>Decline</strong> to make changes. This quote is valid for{" "}
              <strong>48 hours</strong>.
            </Text>

            <EmailBox
              label={`Quote #${quoteNumber}`}
              labelColor={colors.navyLight}
              backgroundColor="#f0f5ff"
              borderColor={colors.navyLight}
              rows={[
                { key: "Quote Date", value: quoteDate },
                { key: "Valid Until", value: validUntil },
                { key: "Customer", value: customerName },
                { key: "Prepared By", value: preparedBy },
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
                      Condition
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
                        <EmailTag variant="green">{part.condition}</EmailTag>
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
              <Row
                style={{
                  padding: "6px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <Column>
                  <Text
                    style={{ margin: 0, fontSize: "12px", color: colors.gray }}
                  >
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
              <Row
                style={{
                  padding: "6px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <Column>
                  <Text
                    style={{ margin: 0, fontSize: "12px", color: colors.gray }}
                  >
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
                  <Text
                    style={{ margin: 0, fontSize: "12px", color: colors.gray }}
                  >
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
                    Quote Total
                  </Text>
                </Column>
                <Column align="right">
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "22px",
                      fontWeight: 800,
                      color: colors.navyLight,
                    }}
                  >
                    ${total}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Tags */}
            <Section style={{ margin: "12px 0" }}>
              <EmailTag variant="green">Free Shipping</EmailTag>
              <EmailTag variant="blue">Warranty Included</EmailTag>
              <EmailTag variant="gold">Same-Day Ship</EmailTag>
              <EmailTag variant="green">Certified Parts</EmailTag>
            </Section>

            <EmailApprovalButtons
              approveHref={`https://auapw.org/approve?id=${approveToken}`}
              rejectHref={`https://auapw.org/reject?id=${approveToken}`}
              approveText="Approve & Order"
              rejectText="Decline Quote"
            />

            <EmailPayLinkBox
              amount={total}
              label="Approve and pay to confirm your order"
              paymentHref={`https://auapw.org/pay?id=${approveToken}`}
            />

            <EmailPaymentMethods />

            <EmailWarrantyBadge
              title="30–180 Day Warranty on Every Part"
              description="All eligible parts ship with written warranty coverage. We stand behind every sale."
            />

            <EmailDivider />
            <EmailSignature
              name={preparedBy}
              role="Parts Sales Specialist"
              email="sales@auapw.org"
              accentColor={colors.navyLight}
            />
          </Section>
          <EmailTrustBar />
          <EmailFooter email="sales@auapw.org" />
        </Container>
      </Body>
    </Html>
  );
};

export default QuotationApprovalEmail;
