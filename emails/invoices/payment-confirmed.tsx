import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";
import * as React from "react";
import {
  colors,
  EmailStrip,
  EmailLogoBar,
  EmailHero,
  EmailBox,
  EmailButton,
  EmailSignature,
  EmailTrustBar,
  EmailFooter,
  EmailDivider,
  EmailAlert,
  EmailWarrantyBadge,
  bodyStyles,
  containerStyles,
  emailBodyStyles,
  greetingStyles,
  paragraphStyles,
  ctaContainerStyles,
  EmailTag,
} from "../components";

interface PaymentConfirmedEmailProps {
  customerName?: string;
  invoiceNumber?: string;
  paymentDate?: string;
  paymentMethod?: string;
  transactionId?: string;
  partNames?: string;
  amountPaid?: string;
}

export const PaymentConfirmedEmail = ({
  customerName = "[Customer Name]",
  invoiceNumber = "AUAPW-INV-XXXXX",
  paymentDate = "[Date]",
  paymentMethod = "Visa •••• 4242",
  transactionId = "TXN-XXXXXXX",
  partNames = "[Part Names]",
  amountPaid = "XXX.XX",
}: PaymentConfirmedEmailProps) => {
  const previewText = `Payment Confirmed - ${invoiceNumber}`;

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
            accentColor={colors.green}
            eyebrow="Payment Received"
            title="Payment Confirmed — Thank You!"
            subtitle="Your payment has been processed. Your order is now in fulfillment."
            backgroundColor={colors.dark}
          />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {customerName},</Text>
            <Text style={paragraphStyles}>
              Great news — we&apos;ve received your payment! Your order is now being
              processed for shipment. You&apos;ll receive a tracking number by email
              as soon as your parts leave the warehouse.
            </Text>

            <EmailAlert
              title="Payment Successful"
              description="Your payment has been received and your order is now in processing. Tracking info coming soon."
              backgroundColor="#dcfce7"
              borderColor={colors.green}
              titleColor="#166534"
              descriptionColor="#166534"
            />

            <EmailBox
              label={`Payment Receipt — ${invoiceNumber}`}
              labelColor={colors.gold}
              backgroundColor="#fff8f0"
              borderColor={colors.gold}
              rows={[
                { key: "Invoice #", value: invoiceNumber },
                { key: "Payment Date", value: paymentDate },
                { key: "Payment Method", value: paymentMethod },
                { key: "Transaction ID", value: transactionId },
                { key: "Part(s)", value: partNames },
                {
                  key: "Status",
                  value: <EmailTag variant="green">Paid</EmailTag>,
                },
              ]}
              total={{ label: "Amount Paid", value: `$${amountPaid}`, valueColor: colors.green }}
            />

            <EmailWarrantyBadge
              title="Your Warranty is Now Active"
              description="Coverage begins from delivery date. Keep your invoice for warranty claims."
            />

            <Section style={ctaContainerStyles}>
              <EmailButton
                href="https://auapw.org/quote"
                backgroundColor={colors.gold}
              >
                Order More Parts
              </EmailButton>
              <span style={{ display: "inline-block", width: "10px" }} />
              <EmailButton href="tel:8888185001" backgroundColor={colors.charcoal}>
                Call with Questions
              </EmailButton>
            </Section>

            <EmailDivider />
            <EmailSignature
              name="AUAPW Billing Dept"
              role="Billing & Invoicing"
              email="invoices@auapw.org"
              accentColor={colors.gold}
            />
          </Section>
          <EmailTrustBar />
          <EmailFooter email="invoices@auapw.org" />
        </Container>
      </Body>
    </Html>
  );
};

export default PaymentConfirmedEmail;
