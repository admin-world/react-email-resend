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
  EmailFeature,
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
  EmailTag,
} from "../components";

interface TicketOpenedEmailProps {
  customerName?: string;
  ticketNumber?: string;
  subject?: string;
  category?: string;
  submittedDate?: string;
}

export const TicketOpenedEmail = ({
  customerName = "[Customer Name]",
  ticketNumber = "AUAPW-TKT-XXXXX",
  subject = "[Subject Line]",
  category = "Fitment / Warranty / Order / Other",
  submittedDate = "[Date & Time]",
}: TicketOpenedEmailProps) => {
  const previewText = `Support Ticket Opened - ${ticketNumber}`;

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
            eyebrow="Support Ticket"
            title="We Got Your Message"
            subtitle="Your support request is open — a specialist will respond within 24 hours."
            backgroundColor={colors.dark}
          />
          <EmailStatsBar />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {customerName},</Text>
            <Text style={paragraphStyles}>
              Thank you for contacting AUAPW.ORG. We&apos;ve logged your request and
              assigned it a unique ticket number below. Our team will review and
              respond within <strong>24 hours</strong> — often much faster. You can
              reply directly to this email to add any additional information.
            </Text>

            <EmailBox
              label="Ticket Details"
              labelColor={colors.red}
              backgroundColor="#fff8f8"
              borderColor={colors.red}
              rows={[
                { key: "Ticket #", value: ticketNumber },
                { key: "Subject", value: subject },
                { key: "Category", value: category },
                { key: "Priority", value: "Standard — 24hr Response" },
                { key: "Submitted", value: submittedDate },
                {
                  key: "Status",
                  value: <EmailTag variant="gold">Open</EmailTag>,
                },
              ]}
            />

            <Row style={{ marginTop: "16px" }}>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="Reply Here"
                  description="Add details or photos by replying to this email — updates go directly to your ticket."
                />
              </Column>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="Call Us"
                  description="Urgent issue? Call (888) 818-5001 and give your ticket number for instant pickup."
                />
              </Column>
            </Row>
            <Row>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="Fitment Help"
                  description="Have your VIN ready — it lets us verify compatibility in seconds."
                />
              </Column>
              <Column style={{ padding: "5px", width: "50%" }}>
                <EmailFeature
                  title="Track Status"
                  description="Reply to this thread any time to check in. We'll keep you updated every step."
                />
              </Column>
            </Row>

            <Section style={ctaContainerStyles}>
              <EmailButton href="tel:8888185001" backgroundColor={colors.red}>
                Call (888) 818-5001
              </EmailButton>
              <span style={{ display: "inline-block", width: "10px" }} />
              <EmailButton
                href="mailto:support@auapw.org"
                backgroundColor={colors.charcoal}
              >
                Reply to Ticket
              </EmailButton>
            </Section>

            <EmailDivider />
            <EmailSignature
              name="AUAPW Support Team"
              role="Customer Support"
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

export default TicketOpenedEmail;
