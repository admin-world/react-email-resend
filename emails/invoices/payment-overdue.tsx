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
  EmailPayLinkBox,
  EmailPaymentMethods,
  EmailSignature,
  EmailFooter,
  EmailDivider,
  EmailAlert,
  bodyStyles,
  containerStyles,
  emailBodyStyles,
  greetingStyles,
  paragraphStyles,
  ctaContainerStyles,
} from "../components";

interface PaymentOverdueEmailProps {
  customerName?: string;
  invoiceNumber?: string;
  originalDueDate?: string;
  daysPastDue?: string;
  invoiceAmount?: string;
  lateFee?: string;
  balanceDue?: string;
  paymentToken?: string;
}

export const PaymentOverdueEmail = ({
  customerName = "[Customer Name]",
  invoiceNumber = "AUAPW-INV-XXXXX",
  originalDueDate = "[Date]",
  daysPastDue = "X",
  invoiceAmount = "XXX.XX",
  lateFee = "XX.XX",
  balanceDue = "XXX.XX",
  paymentToken = "[PAYMENT_TOKEN]",
}: PaymentOverdueEmailProps) => {
  const previewText = `Payment Overdue - ${invoiceNumber} - ${daysPastDue} Days Past Due`;

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
          <EmailStrip backgroundColor={colors.red} />
          <EmailLogoBar
            inboxLabel="Invoices"
            pillColor={colors.gold}
            inboxEmail="invoices@auapw.org"
          />
          <EmailHero
            accentColor={colors.red}
            eyebrow="Payment Overdue"
            title="Urgent: Payment Required"
            subtitle="Your invoice is past due. Pay now to avoid service interruption and additional fees."
            backgroundColor="#2a0a0a"
          />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {customerName},</Text>
            <Text style={paragraphStyles}>
              Our records indicate that your payment for the invoice below is
              now <strong>{daysPastDue} days past due</strong>. Please remit
              payment immediately to avoid additional late fees and potential
              service interruption for future orders.
            </Text>

            <EmailAlert
              title={`Payment Overdue — ${daysPastDue} Days Past Due`}
              description={`Original due: ${originalDueDate}. Pending orders may be held until your balance is cleared. Pay immediately to avoid service interruption.`}
              backgroundColor="#fee2e2"
              borderColor={colors.red}
              titleColor="#991b1b"
              descriptionColor="#7f1d1d"
            />

            <EmailBox
              label={`Invoice #${invoiceNumber}`}
              labelColor={colors.gold}
              backgroundColor="#fff8f0"
              borderColor={colors.gold}
              rows={[
                { key: "Original Due Date", value: originalDueDate },
                {
                  key: "Days Past Due",
                  value: `${daysPastDue} Days`,
                  valueColor: colors.red,
                },
                { key: "Invoice Amount", value: `$${invoiceAmount}` },
                {
                  key: "Late Fee",
                  value: `$${lateFee}`,
                  valueColor: colors.red,
                },
              ]}
              total={{
                label: "Balance Due",
                value: `$${balanceDue}`,
                valueColor: colors.red,
              }}
            />

            <EmailPayLinkBox
              amount={balanceDue}
              label="Pay your outstanding balance now"
              paymentHref={`https://auapw.org/pay?id=${paymentToken}`}
            />

            <EmailPaymentMethods />

            <Section style={ctaContainerStyles}>
              <EmailButton
                href={`https://auapw.org/pay?id=${paymentToken}`}
                backgroundColor={colors.red}
              >
                Pay Now
              </EmailButton>
              <span style={{ display: "inline-block", width: "10px" }} />
              <EmailButton
                href="mailto:invoices@auapw.org"
                backgroundColor={colors.charcoal}
              >
                Contact Billing
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
          <EmailFooter email="invoices@auapw.org" />
        </Container>
      </Body>
    </Html>
  );
};

export default PaymentOverdueEmail;
