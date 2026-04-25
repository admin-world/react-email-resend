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

interface OrderConfirmedEmailProps {
  customerName?: string;
  orderNumber?: string;
  partNames?: string;
  vehicleFitment?: string;
  warrantyPeriod?: string;
  shipToAddress?: string;
  carrier?: string;
  estimatedDelivery?: string;
  orderTotal?: string;
  salesRepName?: string;
}

export const OrderConfirmedEmail = ({
  customerName = "[Customer Name]",
  orderNumber = "AUAPW-XXXXX",
  partNames = "[Part Name(s)]",
  vehicleFitment = "[Year Make Model]",
  warrantyPeriod = "30 / 90 / 180",
  shipToAddress = "[Full Shipping Address]",
  carrier = "UPS / FedEx / FreightCarrier",
  estimatedDelivery = "[Date Range]",
  orderTotal = "XXX.XX",
  salesRepName = "[Sales Rep Name]",
}: OrderConfirmedEmailProps) => {
  const previewText = `Order Confirmed - ${orderNumber}`;

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
            eyebrow="Order Confirmed"
            title="Order Confirmed — Shipping Soon"
            subtitle="Your parts are confirmed and being prepared. Tracking comes next."
            backgroundColor={colors.navy}
          />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {customerName},</Text>
            <Text style={paragraphStyles}>
              Your order is confirmed and in processing. We&apos;re preparing your
              parts for shipment — you&apos;ll receive a tracking number by email as
              soon as they leave the yard, typically the same or next business
              day.
            </Text>

            <EmailAlert
              title="Tracking Number Coming Soon"
              description="You'll receive a separate email with your carrier tracking link. Questions? Reply here or call (888) 818-5001."
              backgroundColor="#dbeafe"
              borderColor={colors.navyLight}
              titleColor="#1e40af"
              descriptionColor="#1e3a8a"
            />

            <EmailBox
              label={`Order Confirmation — ${orderNumber}`}
              labelColor={colors.navyLight}
              backgroundColor="#f0f5ff"
              borderColor={colors.navyLight}
              rows={[
                { key: "Part(s)", value: partNames },
                { key: "Vehicle Fitment", value: vehicleFitment },
                { key: "Condition", value: "Inspected & Certified" },
                {
                  key: "Warranty Active",
                  value: `${warrantyPeriod} Days from Delivery`,
                },
                { key: "Ship To", value: shipToAddress },
                { key: "Carrier", value: carrier },
                { key: "Est. Delivery", value: estimatedDelivery },
              ]}
              total={{
                label: "Order Total",
                value: `$${orderTotal}`,
                valueColor: colors.navyLight,
              }}
            />

            {/* Tags */}
            <Section style={{ margin: "12px 0" }}>
              <EmailTag variant="green">Paid</EmailTag>
              <EmailTag variant="blue">Processing</EmailTag>
              <EmailTag variant="gold">Shipping Soon</EmailTag>
              <EmailTag variant="green">Warranty Active</EmailTag>
            </Section>

            <EmailWarrantyBadge
              title="Your Warranty is Now Active"
              description="Coverage begins from delivery date. Keep your order number for warranty claims."
            />

            <Section style={ctaContainerStyles}>
              <EmailButton href="tel:8888185001" backgroundColor={colors.navyLight}>
                Call with Questions
              </EmailButton>
              <span style={{ display: "inline-block", width: "10px" }} />
              <EmailButton
                href="https://auapw.org/quote"
                backgroundColor={colors.charcoal}
              >
                Order More Parts
              </EmailButton>
            </Section>

            <EmailDivider />
            <EmailSignature
              name={salesRepName}
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

export default OrderConfirmedEmail;
