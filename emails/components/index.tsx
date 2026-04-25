import {
  Section,
  Row,
  Column,
  Link,
  Text,
  Hr,
  Img,
} from "react-email";
import * as React from "react";

// Color palette
export const colors = {
  red: "#c9513e",
  redDark: "#9d3f2f",
  redLight: "#d96952",
  gold: "#e8720c",
  goldDark: "#ba5a0a",
  navy: "#1a1f2e",
  navyMid: "#242b3d",
  navyLight: "#2e3847",
  charcoal: "#242b3d",
  dark: "#1a1f2e",
  mid: "#2e3847",
  steel: "#3d4556",
  gray: "#8b8b8b",
  silver: "#a8a8a8",
  mist: "#e5e7eb",
  white: "#ffffff",
  green: "#16a34a",
  greenBg: "#dcfce7",
  redBg: "#fae5e2",
};

// Email Header Strip
export function EmailStrip({
  backgroundColor = colors.red,
}: {
  backgroundColor?: string;
}) {
  return (
    <Section
      style={{
        backgroundColor,
        padding: "9px 22px",
      }}
    >
      <Row>
        <Column>
          <Text
            style={{
              margin: 0,
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.8px",
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            All Used Auto Parts Warehouse
          </Text>
        </Column>
        <Column align="right">
          <Text
            style={{
              margin: 0,
              fontSize: "10px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            (888) 818-5001
          </Text>
        </Column>
      </Row>
    </Section>
  );
}

// Logo Bar
export function EmailLogoBar({
  inboxLabel,
  pillColor = colors.red,
  inboxEmail,
}: {
  inboxLabel: string;
  pillColor?: string;
  inboxEmail: string;
}) {
  return (
    <Section
      style={{
        backgroundColor: colors.charcoal,
        padding: "18px 22px",
      }}
    >
      <Row>
        <Column>
          <Row>
            <Column width={44}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: colors.red,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    margin: 0,
                    fontSize: "8px",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "0.3px",
                    lineHeight: "44px",
                  }}
                >
                  AUAPW
                </Text>
              </div>
            </Column>
            <Column style={{ paddingLeft: "12px" }}>
              <Text
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                AUAPW.ORG
              </Text>
              <Text
                style={{
                  margin: "3px 0 0",
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase" as const,
                }}
              >
                Quality Used Auto Parts
              </Text>
            </Column>
          </Row>
        </Column>
        <Column align="right">
          <div
            style={{
              display: "inline-block",
              backgroundColor: pillColor,
              color: "#fff",
              fontSize: "9px",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "20px",
              letterSpacing: "0.6px",
              textTransform: "uppercase" as const,
            }}
          >
            {inboxEmail}
          </div>
        </Column>
      </Row>
    </Section>
  );
}

// Hero Section
export function EmailHero({
  accentColor,
  eyebrow,
  title,
  subtitle,
  backgroundColor = colors.dark,
}: {
  accentColor: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  backgroundColor?: string;
}) {
  return (
    <Section
      style={{
        backgroundColor,
        padding: "32px 28px",
        textAlign: "center" as const,
      }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase" as const,
          padding: "5px 14px",
          borderRadius: "2px",
          marginBottom: "14px",
          color: "#fff",
          backgroundColor: accentColor,
        }}
      >
        {eyebrow}
      </div>
      <Text
        style={{
          margin: "0 0 8px",
          fontSize: "30px",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.15,
          letterSpacing: "0.3px",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          margin: "0 auto",
          fontSize: "13px",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.65,
          maxWidth: "460px",
        }}
      >
        {subtitle}
      </Text>
    </Section>
  );
}

// Stats Bar
export function EmailStatsBar() {
  const stats = [
    { num: "2,000+", label: "Verified Yards" },
    { num: "50", label: "States" },
    { num: "24hr", label: "Response" },
    { num: "180-Day", label: "Warranty" },
  ];

  return (
    <Section style={{ backgroundColor: colors.charcoal }}>
      <Row>
        {stats.map((stat, index) => (
          <Column
            key={index}
            style={{
              textAlign: "center" as const,
              padding: "13px 6px",
              borderRight:
                index < stats.length - 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "none",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: 800,
                color: colors.red,
                letterSpacing: "0.3px",
              }}
            >
              {stat.num}
            </Text>
            <Text
              style={{
                margin: "2px 0 0",
                fontSize: "9px",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase" as const,
                letterSpacing: "0.8px",
              }}
            >
              {stat.label}
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
}

// Box Component
export function EmailBox({
  label,
  labelColor,
  backgroundColor,
  borderColor,
  rows,
  total,
  totalColor,
}: {
  label: string;
  labelColor: string;
  backgroundColor: string;
  borderColor: string;
  rows: Array<{ key: string; value: string | React.ReactNode; valueColor?: string }>;
  total?: { label: string; value: string; valueColor?: string };
  totalColor?: string;
}) {
  return (
    <Section
      style={{
        backgroundColor,
        borderLeft: `4px solid ${borderColor}`,
        borderRadius: "0 6px 6px 0",
        padding: "16px 18px",
        margin: "16px 0",
      }}
    >
      <Text
        style={{
          margin: "0 0 10px",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase" as const,
          color: labelColor,
        }}
      >
        {label}
      </Text>
      {rows.map((row, index) => (
        <Row
          key={index}
          style={{
            padding: "6px 0",
            borderBottom:
              index < rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
          }}
        >
          <Column>
            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                color: colors.gray,
              }}
            >
              {row.key}
            </Text>
          </Column>
          <Column align="right">
            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                fontWeight: 600,
                color: row.valueColor || colors.charcoal,
                textAlign: "right" as const,
              }}
            >
              {row.value}
            </Text>
          </Column>
        </Row>
      ))}
      {total && (
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
              {total.label}
            </Text>
          </Column>
          <Column align="right">
            <Text
              style={{
                margin: 0,
                fontSize: "22px",
                fontWeight: 800,
                color: total.valueColor || totalColor || colors.charcoal,
              }}
            >
              {total.value}
            </Text>
          </Column>
        </Row>
      )}
    </Section>
  );
}

// Feature Grid Item
export function EmailFeature({
  title,
  description,
  borderColor = colors.red,
}: {
  title: string;
  description: string;
  borderColor?: string;
}) {
  return (
    <Section
      style={{
        backgroundColor: "#f9fafb",
        borderLeft: `3px solid ${borderColor}`,
        padding: "12px 13px",
        borderRadius: "0 4px 4px 0",
      }}
    >
      <Text
        style={{
          margin: "0 0 3px",
          fontSize: "11px",
          fontWeight: 700,
          color: colors.charcoal,
          textTransform: "uppercase" as const,
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          margin: 0,
          fontSize: "11px",
          color: colors.gray,
          lineHeight: 1.5,
        }}
      >
        {description}
      </Text>
    </Section>
  );
}

// Step Component
export function EmailStep({
  number,
  title,
  description,
  accentColor = colors.red,
}: {
  number: number;
  title: string;
  description: string;
  accentColor?: string;
}) {
  return (
    <Row style={{ marginBottom: "14px" }}>
      <Column width={28}>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: accentColor,
            textAlign: "center" as const,
            lineHeight: "28px",
          }}
        >
          <Text
            style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 800,
              color: "#fff",
              lineHeight: "28px",
            }}
          >
            {number}
          </Text>
        </div>
      </Column>
      <Column style={{ paddingLeft: "13px" }}>
        <Text
          style={{
            margin: "0 0 2px",
            fontSize: "12px",
            fontWeight: 700,
            color: colors.charcoal,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            margin: 0,
            fontSize: "12px",
            color: colors.gray,
            lineHeight: 1.5,
          }}
        >
          {description}
        </Text>
      </Column>
    </Row>
  );
}

// CTA Button
export function EmailButton({
  href,
  backgroundColor,
  children,
  outline = false,
  outlineColor,
}: {
  href: string;
  backgroundColor?: string;
  children: React.ReactNode;
  outline?: boolean;
  outlineColor?: string;
}) {
  if (outline) {
    return (
      <Link
        href={href}
        style={{
          display: "inline-block",
          fontSize: "13px",
          fontWeight: 800,
          letterSpacing: "0.8px",
          textTransform: "uppercase" as const,
          padding: "11px 26px",
          borderRadius: "4px",
          textDecoration: "none",
          backgroundColor: "transparent",
          color: outlineColor || colors.red,
          border: `2px solid ${outlineColor || colors.red}`,
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        fontSize: "13px",
        fontWeight: 800,
        letterSpacing: "0.8px",
        textTransform: "uppercase" as const,
        padding: "13px 28px",
        borderRadius: "4px",
        textDecoration: "none",
        backgroundColor: backgroundColor || colors.red,
        color: "#fff",
      }}
    >
      {children}
    </Link>
  );
}

// Approval Buttons
export function EmailApprovalButtons({
  approveHref,
  rejectHref,
  approveText = "Approve & Pay",
  rejectText = "Decline",
}: {
  approveHref: string;
  rejectHref: string;
  approveText?: string;
  rejectText?: string;
}) {
  return (
    <Section style={{ margin: "18px 0" }}>
      <Row>
        <Column style={{ paddingRight: "5px" }}>
          <Link
            href={approveHref}
            style={{
              display: "block",
              textAlign: "center" as const,
              padding: "14px",
              borderRadius: "5px",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.5px",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              backgroundColor: colors.green,
              color: "#fff",
            }}
          >
            {approveText}
          </Link>
        </Column>
        <Column style={{ paddingLeft: "5px" }}>
          <Link
            href={rejectHref}
            style={{
              display: "block",
              textAlign: "center" as const,
              padding: "14px",
              borderRadius: "5px",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.5px",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              backgroundColor: "#dc2626",
              color: "#fff",
            }}
          >
            {rejectText}
          </Link>
        </Column>
      </Row>
    </Section>
  );
}

// Alert Box
export function EmailAlert({
  title,
  description,
  backgroundColor,
  borderColor,
  titleColor,
  descriptionColor,
}: {
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  descriptionColor: string;
}) {
  return (
    <Section
      style={{
        backgroundColor,
        borderLeft: `4px solid ${borderColor}`,
        borderRadius: "0 5px 5px 0",
        padding: "12px 15px",
        margin: "14px 0",
      }}
    >
      <Text
        style={{
          margin: "0 0 4px",
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase" as const,
          letterSpacing: "0.8px",
          color: titleColor,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          margin: 0,
          fontSize: "12px",
          lineHeight: 1.55,
          color: descriptionColor,
        }}
      >
        {description}
      </Text>
    </Section>
  );
}

// Tag Component
export function EmailTag({
  children,
  variant = "green",
}: {
  children: React.ReactNode;
  variant?: "green" | "red" | "blue" | "gold";
}) {
  const variants = {
    green: { background: "#dcfce7", color: "#166534" },
    red: { background: "#fee2e2", color: "#991b1b" },
    blue: { background: "#dbeafe", color: "#1e40af" },
    gold: { background: "#fef3c7", color: "#92400e" },
  };

  const style = variants[variant];

  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "10px",
        fontWeight: 700,
        padding: "3px 9px",
        borderRadius: "3px",
        letterSpacing: "0.4px",
        backgroundColor: style.background,
        color: style.color,
        marginRight: "6px",
      }}
    >
      {children}
    </span>
  );
}

// Payment Link Box
export function EmailPayLinkBox({
  amount,
  label,
  paymentHref,
}: {
  amount: string;
  label: string;
  paymentHref: string;
}) {
  return (
    <Section
      style={{
        background: `linear-gradient(135deg, ${colors.charcoal} 0%, ${colors.dark} 100%)`,
        border: `1px solid rgba(192,57,43,0.3)`,
        borderRadius: "8px",
        padding: "18px 20px",
        margin: "16px 0",
        textAlign: "center" as const,
      }}
    >
      <Text
        style={{
          margin: "0 0 8px",
          fontSize: "12px",
          fontWeight: 700,
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase" as const,
          letterSpacing: "1px",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          margin: "0 0 4px",
          fontSize: "36px",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1,
        }}
      >
        ${amount}
      </Text>
      <Text
        style={{
          margin: "0 0 14px",
          fontSize: "11px",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        Secure payment - SSL encrypted - No hidden fees
      </Text>
      <Link
        href={paymentHref}
        style={{
          display: "inline-block",
          backgroundColor: colors.red,
          color: "#fff",
          fontSize: "14px",
          fontWeight: 800,
          padding: "14px 36px",
          borderRadius: "5px",
          textDecoration: "none",
          letterSpacing: "0.5px",
          textTransform: "uppercase" as const,
        }}
      >
        Pay Now - ${amount}
      </Link>
    </Section>
  );
}

// Payment Methods Grid
export function EmailPaymentMethods() {
  const methods = [
    { icon: "VISA", name: "Visa", sub: "Credit & Debit", bgColor: "#1a1a6e" },
    { icon: "MC", name: "Mastercard", sub: "Credit & Debit", bgColor: "#eb001b" },
    { icon: "AMEX", name: "American Express", sub: "Credit Card", bgColor: "#007ac1" },
    { icon: "PP", name: "PayPal", sub: "Online Payment", bgColor: "#003087" },
    { icon: "ACH", name: "Bank Transfer", sub: "ACH / Wire", bgColor: "#1DB954" },
    { icon: "CHK", name: "Business Check", sub: "For net accounts", bgColor: "#4a4a4a" },
  ];

  return (
    <Section style={{ margin: "14px 0" }}>
      <Text
        style={{
          margin: "0 0 8px",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "1.2px",
          textTransform: "uppercase" as const,
          color: colors.silver,
        }}
      >
        Accepted Payment Methods
      </Text>
      <Row>
        {methods.slice(0, 3).map((method, index) => (
          <Column key={index} style={{ padding: "4px" }}>
            <Section
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "5px",
                padding: "10px 12px",
              }}
            >
              <Row>
                <Column width={28}>
                  <div
                    style={{
                      width: "28px",
                      height: "20px",
                      borderRadius: "3px",
                      backgroundColor: method.bgColor,
                      textAlign: "center" as const,
                      lineHeight: "20px",
                    }}
                  >
                    <Text
                      style={{
                        margin: 0,
                        fontSize: "8px",
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: "20px",
                      }}
                    >
                      {method.icon}
                    </Text>
                  </div>
                </Column>
                <Column style={{ paddingLeft: "8px" }}>
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: colors.charcoal,
                    }}
                  >
                    {method.name}
                  </Text>
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "10px",
                      color: colors.silver,
                    }}
                  >
                    {method.sub}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Column>
        ))}
      </Row>
      <Row>
        {methods.slice(3, 6).map((method, index) => (
          <Column key={index} style={{ padding: "4px" }}>
            <Section
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "5px",
                padding: "10px 12px",
              }}
            >
              <Row>
                <Column width={28}>
                  <div
                    style={{
                      width: "28px",
                      height: "20px",
                      borderRadius: "3px",
                      backgroundColor: method.bgColor,
                      textAlign: "center" as const,
                      lineHeight: "20px",
                    }}
                  >
                    <Text
                      style={{
                        margin: 0,
                        fontSize: "8px",
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: "20px",
                      }}
                    >
                      {method.icon}
                    </Text>
                  </div>
                </Column>
                <Column style={{ paddingLeft: "8px" }}>
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: colors.charcoal,
                    }}
                  >
                    {method.name}
                  </Text>
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "10px",
                      color: colors.silver,
                    }}
                  >
                    {method.sub}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Column>
        ))}
      </Row>
    </Section>
  );
}

// Warranty Badge
export function EmailWarrantyBadge({
  title = "AUAPW Warranty Protection",
  description = "Every eligible part is backed by a 30-180 day warranty. We stand behind every sale.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section
      style={{
        backgroundColor: "#f0fdf4",
        border: "1px solid #bbf7d0",
        borderRadius: "6px",
        padding: "12px 15px",
        margin: "12px 0",
      }}
    >
      <Row>
        <Column width={36}>
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: colors.green,
              borderRadius: "50%",
              textAlign: "center" as const,
              lineHeight: "36px",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "36px",
              }}
            >
              &#x1F6E1;
            </Text>
          </div>
        </Column>
        <Column style={{ paddingLeft: "12px" }}>
          <Text
            style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 700,
              color: colors.charcoal,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              margin: 0,
              fontSize: "11px",
              color: "#4b5563",
            }}
          >
            {description}
          </Text>
        </Column>
      </Row>
    </Section>
  );
}

// Signature Block
export function EmailSignature({
  name,
  role,
  email,
  accentColor = colors.red,
}: {
  name: string;
  role: string;
  email: string;
  accentColor?: string;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <Section
      style={{
        backgroundColor: "#f5f5f5",
        borderTop: `3px solid ${accentColor}`,
        padding: "14px 20px",
      }}
    >
      <Row>
        <Column width={40}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: accentColor,
              textAlign: "center" as const,
              lineHeight: "40px",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                fontWeight: 800,
                color: "#fff",
                lineHeight: "40px",
              }}
            >
              {initials}
            </Text>
          </div>
        </Column>
        <Column style={{ paddingLeft: "14px" }}>
          <Text
            style={{
              margin: 0,
              fontSize: "13px",
              fontWeight: 700,
              color: colors.charcoal,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              margin: "1px 0 0",
              fontSize: "11px",
              color: colors.gray,
            }}
          >
            {role} - AUAPW.ORG
          </Text>
          <Text
            style={{
              margin: "2px 0 0",
              fontSize: "11px",
              color: colors.gray,
            }}
          >
            <Link
              href={`mailto:${email}`}
              style={{
                color: accentColor,
                textDecoration: "none",
              }}
            >
              {email}
            </Link>{" "}
            - (888) 818-5001
          </Text>
        </Column>
      </Row>
    </Section>
  );
}

// Trust Bar
export function EmailTrustBar() {
  const items = [
    { icon: "&#x1F6E1;", title: "Certified", sub: "Quality Inspected" },
    { icon: "&#x1F69A;", title: "Same Day", sub: "Ships Fast" },
    { icon: "&#x1F4DE;", title: "24/7 Support", sub: "(888) 818-5001" },
    { icon: "&#x2705;", title: "Warranty", sub: "30-180 Days" },
  ];

  return (
    <Section style={{ backgroundColor: "#f9fafb", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
      <Row>
        {items.map((item, index) => (
          <Column
            key={index}
            style={{
              textAlign: "center" as const,
              padding: "12px 6px",
              borderRight: index < items.length - 1 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <Text
              style={{
                margin: "0 0 3px",
                fontSize: "16px",
              }}
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
            <Text
              style={{
                margin: 0,
                fontSize: "10px",
                fontWeight: 700,
                color: "#374151",
                textTransform: "uppercase" as const,
                letterSpacing: "0.5px",
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                margin: "1px 0 0",
                fontSize: "9px",
                color: colors.silver,
              }}
            >
              {item.sub}
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
}

// Social Bar
export function EmailSocialBar() {
  return (
    <Section
      style={{
        backgroundColor: colors.charcoal,
        padding: "16px 22px",
      }}
    >
      <Row>
        <Column>
          <Text
            style={{
              margin: 0,
              fontSize: "10px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.8px",
              textTransform: "uppercase" as const,
            }}
          >
            Follow Us
          </Text>
        </Column>
        <Column align="center">
          <Row>
            <Column style={{ padding: "0 4px" }}>
              <Link
                href="https://facebook.com"
                style={{
                  display: "inline-block",
                  width: "32px",
                  height: "32px",
                  borderRadius: "5px",
                  backgroundColor: "#1877f2",
                  textAlign: "center" as const,
                  lineHeight: "32px",
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                f
              </Link>
            </Column>
            <Column style={{ padding: "0 4px" }}>
              <Link
                href="https://twitter.com"
                style={{
                  display: "inline-block",
                  width: "32px",
                  height: "32px",
                  borderRadius: "5px",
                  backgroundColor: "#1da1f2",
                  textAlign: "center" as const,
                  lineHeight: "32px",
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                X
              </Link>
            </Column>
            <Column style={{ padding: "0 4px" }}>
              <Link
                href="https://instagram.com"
                style={{
                  display: "inline-block",
                  width: "32px",
                  height: "32px",
                  borderRadius: "5px",
                  backgroundColor: "#e4405f",
                  textAlign: "center" as const,
                  lineHeight: "32px",
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                IG
              </Link>
            </Column>
            <Column style={{ padding: "0 4px" }}>
              <Link
                href="https://youtube.com"
                style={{
                  display: "inline-block",
                  width: "32px",
                  height: "32px",
                  borderRadius: "5px",
                  backgroundColor: "#ff0000",
                  textAlign: "center" as const,
                  lineHeight: "32px",
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                YT
              </Link>
            </Column>
            <Column style={{ padding: "0 4px" }}>
              <Link
                href="https://linkedin.com"
                style={{
                  display: "inline-block",
                  width: "32px",
                  height: "32px",
                  borderRadius: "5px",
                  backgroundColor: "#0077b5",
                  textAlign: "center" as const,
                  lineHeight: "32px",
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                in
              </Link>
            </Column>
          </Row>
        </Column>
        <Column align="right">
          <Text
            style={{
              margin: 0,
              fontSize: "10px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            auapw.org
          </Text>
        </Column>
      </Row>
    </Section>
  );
}

// Footer
export function EmailFooter({ email }: { email: string }) {
  return (
    <>
      <EmailSocialBar />
      <Section
        style={{
          backgroundColor: "#0d0f13",
          padding: "20px 22px",
          textAlign: "center" as const,
        }}
      >
        <Row style={{ marginBottom: "12px" }}>
          <Column>
            <Link
              href="https://auapw.org"
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                letterSpacing: "0.3px",
                marginRight: "16px",
              }}
            >
              Home
            </Link>
            <Link
              href="https://auapw.org/parts"
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                letterSpacing: "0.3px",
                marginRight: "16px",
              }}
            >
              Used Parts
            </Link>
            <Link
              href="https://auapw.org/used-engines"
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                letterSpacing: "0.3px",
                marginRight: "16px",
              }}
            >
              Engines
            </Link>
            <Link
              href="https://auapw.org/used-transmissions"
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                letterSpacing: "0.3px",
                marginRight: "16px",
              }}
            >
              Transmissions
            </Link>
            <Link
              href="https://auapw.org/quote"
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
            >
              Get Quote
            </Link>
          </Column>
        </Row>
        <Text
          style={{
            margin: 0,
            fontSize: "10px",
            color: "rgba(255,255,255,0.18)",
            lineHeight: 1.6,
          }}
        >
          &copy; 2025 AUAPW.ORG - All Used Auto Parts Warehouse
          <br />
          {email} - (888) 818-5001 -{" "}
          <Link
            href="https://auapw.org"
            style={{
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
            }}
          >
            auapw.org
          </Link>
          <br />
          <Link
            href="#"
            style={{
              color: "rgba(255,255,255,0.2)",
              textDecoration: "none",
              fontSize: "9px",
            }}
          >
            Unsubscribe
          </Link>{" "}
          -{" "}
          <Link
            href="#"
            style={{
              color: "rgba(255,255,255,0.2)",
              textDecoration: "none",
              fontSize: "9px",
            }}
          >
            Privacy Policy
          </Link>
        </Text>
      </Section>
    </>
  );
}

// Body wrapper styles
export const bodyStyles = {
  backgroundColor: "#e8e8e8",
  fontFamily: "'Barlow', Arial, sans-serif",
  padding: "24px",
};

// Container styles
export const containerStyles = {
  maxWidth: "640px",
  margin: "0 auto",
  backgroundColor: "#fff",
  borderRadius: "6px",
  overflow: "hidden",
  boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
};

// Email body section styles
export const emailBodyStyles = {
  padding: "28px 28px 20px",
  backgroundColor: "#fff",
};

// Greeting text style
export const greetingStyles = {
  margin: "0 0 12px",
  fontSize: "15px",
  fontWeight: 600,
  color: colors.charcoal,
};

// Paragraph styles
export const paragraphStyles = {
  margin: "0 0 13px",
  fontSize: "13px",
  color: "#4b5563",
  lineHeight: 1.7,
};

// Divider
export function EmailDivider() {
  return <Hr style={{ height: "1px", backgroundColor: "#f0f0f0", border: "none", margin: "20px 0" }} />;
}

// CTA container
export const ctaContainerStyles = {
  textAlign: "center" as const,
  margin: "22px 0",
};
