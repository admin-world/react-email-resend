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

interface WarrantyClaimEmailProps {
  customerName?: string;
  claimNumber?: string;
  partName?: string;
  orderNumber?: string;
  purchaseDate?: string;
  warrantyPeriod?: string;
  claimReason?: string;
}

export const WarrantyClaimEmail = ({
  customerName = "[Customer Name]",
  claimNumber = "AUAPW-WC-XXXXX",
  partName = "[Part Name]",
  orderNumber = "AUAPW-XXXXX",
  purchaseDate = "[Date]",
  warrantyPeriod = "30 / 90 / 180",
  claimReason = "[Described Issue]",
}: WarrantyClaimEmailProps) => {
  const previewText = `Warranty Claim Received - ${claimNumber}`;

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
          <EmailStrip />
          <EmailLogoBar
            inboxLabel="Support"
            pillColor={colors.red}
            inboxEmail="support@auapw.org"
          />
          <EmailHero
            accentColor={colors.red}
            eyebrow="Warranty Claim"
            title="Claim Received & Under Review"
            subtitle="Our warranty team will contact you within 1–2 business days with next steps."
            backgroundColor={colors.dark}
          />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {customerName},</Text>
            <Text style={paragraphStyles}>
              We&apos;ve received your warranty claim for the part listed below. Our
              team will review the details and follow up within{" "}
              <strong>1–2 business days</strong>. Please keep the part on hand
              until we provide return instructions — do not ship it back without
              authorization.
            </Text>

            <EmailAlert
              title="Important — Do Not Return the Part Yet"
              description="Hold the part until our team confirms the process. Unauthorized returns may delay your claim. A prepaid return label will be sent if required."
              backgroundColor="#fef3c7"
              borderColor={colors.gold}
              titleColor="#92400e"
              descriptionColor="#78350f"
            />

            <EmailBox
              label={`Warranty Claim — ${claimNumber}`}
              labelColor={colors.red}
              backgroundColor="#fff8f8"
              borderColor={colors.red}
              rows={[
                { key: "Part", value: partName },
                { key: "Order #", value: orderNumber },
                { key: "Purchase Date", value: purchaseDate },
                { key: "Warranty Period", value: `${warrantyPeriod} Days` },
                { key: "Claim Reason", value: claimReason },
                {
                  key: "Status",
                  value: <EmailTag variant="gold">Under Review</EmailTag>,
                },
              ]}
            />

            <EmailWarrantyBadge
              title="AUAPW Warranty Protection"
              description="Every eligible part is backed by a 30–180 day warranty. We stand behind every sale."
            />

            <Section style={ctaContainerStyles}>
              <EmailButton href="tel:8888185001" backgroundColor={colors.red}>
                Call for Faster Resolution
              </EmailButton>
              <span style={{ display: "inline-block", width: "10px" }} />
              <EmailButton
                href="mailto:support@auapw.org"
                backgroundColor={colors.charcoal}
              >
                Email Warranty Team
              </EmailButton>
            </Section>

            <EmailDivider />
            <EmailSignature
              name="AUAPW Warranty Team"
              role="Warranty & Returns"
              email="support@auapw.org"
              accentColor={colors.red}
            />
          </Section>
          <EmailTrustBar />
          <EmailFooter email="support@auapw.org" />
        </Container>
      </Body>
    </Html>
  );
};

export default WarrantyClaimEmail;
