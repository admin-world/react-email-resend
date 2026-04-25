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
  EmailFeature,
  EmailStep,
  EmailButton,
  EmailSignature,
  EmailTrustBar,
  EmailFooter,
  EmailDivider,
  bodyStyles,
  containerStyles,
  emailBodyStyles,
  greetingStyles,
  paragraphStyles,
  ctaContainerStyles,
} from "../components";

interface NewLeadDealerEmailProps {
  contactName?: string;
  salesRepName?: string;
}

export const NewLeadDealerEmail = ({
  contactName = "[Contact Name]",
  salesRepName = "[Sales Rep Name]",
}: NewLeadDealerEmailProps) => {
  const previewText = "Welcome to AUAPW — Dealer Pricing & Same-Day Shipping";

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
            eyebrow="Welcome to AUAPW"
            title="Welcome — Let's Get You the Right Parts"
            subtitle="Dealer pricing, same-day shipping, and expert support for shops & fleet operators."
            backgroundColor={colors.navy}
          />
          <EmailStatsBar />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {contactName},</Text>
            <Text style={paragraphStyles}>
              Thanks for reaching out to AUAPW.ORG. Whether you run a
              professional shop, manage a fleet, or are a high-volume dealer, we
              have the pricing structure, inventory depth, and support to keep
              your operation moving without interruption.
            </Text>

            {/* Features Grid */}
            <Row style={{ marginTop: "16px" }}>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="Dealer Pricing"
                  description="Volume discounts and net terms available for qualified professional accounts."
                  borderColor={colors.navyLight}
                />
              </Column>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="2,000+ Yards"
                  description="Nationwide sourcing means near-instant availability for rare and common parts alike."
                  borderColor={colors.navyLight}
                />
              </Column>
            </Row>
            <Row>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="Same-Day Shipping"
                  description="Parts ordered before cutoff ship the same day — minimize your shop downtime."
                  borderColor={colors.navyLight}
                />
              </Column>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="Dedicated Sales Rep"
                  description="Account customers receive a dedicated contact for fast quotes and priority support."
                  borderColor={colors.navyLight}
                />
              </Column>
            </Row>
            <Row>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="OEM Quality"
                  description="Certified inspections on all parts. Save 40–70% vs. new without sacrificing quality."
                  borderColor={colors.navyLight}
                />
              </Column>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="Nationwide Coverage"
                  description="We ship to all 50 states. Local pickup options available in many markets."
                  borderColor={colors.navyLight}
                />
              </Column>
            </Row>

            {/* Steps */}
            <Section style={{ margin: "20px 0" }}>
              <EmailStep
                number={1}
                title="Send Us Your Parts List"
                description="Email your list to sales@auapw.org or call — we'll quote the entire batch at dealer pricing."
                accentColor={colors.navyLight}
              />
              <EmailStep
                number={2}
                title="Review Pricing & Terms"
                description="We'll send a full quote with dealer pricing, warranty coverage, and shipping timelines."
                accentColor={colors.navyLight}
              />
              <EmailStep
                number={3}
                title="Set Up Your Account"
                description="Net terms available for qualified accounts. Get set up fast with no red tape."
                accentColor={colors.navyLight}
              />
            </Section>

            <Section style={ctaContainerStyles}>
              <EmailButton
                href="mailto:sales@auapw.org"
                backgroundColor={colors.navyLight}
              >
                Send Parts List
              </EmailButton>
              <span style={{ display: "inline-block", width: "10px" }} />
              <EmailButton href="tel:8888185001" backgroundColor={colors.charcoal}>
                Call Sales Team
              </EmailButton>
              <span style={{ display: "inline-block", width: "10px" }} />
              <EmailButton
                href="https://auapw.org/quote"
                outline
                outlineColor={colors.navyLight}
              >
                Get Online Quote
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

export default NewLeadDealerEmail;
