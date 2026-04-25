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
  bodyStyles,
  containerStyles,
  emailBodyStyles,
  greetingStyles,
  paragraphStyles,
  ctaContainerStyles,
  EmailTag,
} from "../components";

interface TicketResolvedEmailProps {
  customerName?: string;
  ticketNumber?: string;
  issue?: string;
  resolution?: string;
  resolvedBy?: string;
  closedDate?: string;
}

export const TicketResolvedEmail = ({
  customerName = "[Customer Name]",
  ticketNumber = "AUAPW-TKT-XXXXX",
  issue = "[Brief Description]",
  resolution = "[Action Taken]",
  resolvedBy = "[Specialist Name]",
  closedDate = "[Date]",
}: TicketResolvedEmailProps) => {
  const previewText = `Support Ticket Resolved - ${ticketNumber}`;

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
            eyebrow="Ticket Resolved"
            title="Your Issue Has Been Resolved"
            subtitle="We addressed your request. Full summary below — reply within 7 days to reopen."
            backgroundColor={colors.dark}
          />
          <Section style={emailBodyStyles}>
            <Text style={greetingStyles}>Hi {customerName},</Text>
            <Text style={paragraphStyles}>
              Great news — your support ticket has been resolved. Here&apos;s a
              complete summary of the issue and the action taken. If you&apos;re not
              fully satisfied or the problem returns, simply reply to this email
              and we&apos;ll reopen your ticket immediately.
            </Text>

            <EmailAlert
              title="Ticket Closed Successfully"
              description="Your issue has been resolved. You have 7 days to reopen this ticket if needed."
              backgroundColor="#dcfce7"
              borderColor={colors.green}
              titleColor="#166534"
              descriptionColor="#166534"
            />

            <EmailBox
              label="Resolution Summary"
              labelColor={colors.red}
              backgroundColor="#f9fafb"
              borderColor={colors.red}
              rows={[
                { key: "Ticket #", value: ticketNumber },
                { key: "Issue", value: issue },
                { key: "Resolution", value: resolution },
                { key: "Resolved By", value: resolvedBy },
                { key: "Closed On", value: closedDate },
                {
                  key: "Status",
                  value: <EmailTag variant="green">Resolved</EmailTag>,
                },
              ]}
            />

            <Text style={paragraphStyles}>
              Need more parts or have a new question? Our team is always here.
              Get a free quote for your next repair below.
            </Text>

            <Section style={ctaContainerStyles}>
              <EmailButton
                href="mailto:support@auapw.org"
                backgroundColor={colors.red}
              >
                Reopen Ticket
              </EmailButton>
              <span style={{ display: "inline-block", width: "10px" }} />
              <EmailButton
                href="https://auapw.org/quote"
                backgroundColor={colors.charcoal}
              >
                Get a New Quote
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

export default TicketResolvedEmail;
