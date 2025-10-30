import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Tailwind,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="bg-white mx-auto my-16 p-8 max-w-2xl rounded-lg shadow-lg">
            <Heading className="text-3xl font-bold text-gray-900 mb-8">
              New Contact Form Submission
            </Heading>

            <Section className="mb-6">
              <Text className="text-sm font-semibold text-gray-600 mb-2">
                From:
              </Text>
              <Text className="text-base text-gray-900 font-medium">
                {name}
              </Text>
            </Section>

            <Section className="mb-6">
              <Text className="text-sm font-semibold text-gray-600 mb-2">
                Email:
              </Text>
              <Text className="text-base text-gray-900">
                {email}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-6" />

            <Section className="mb-6">
              <Text className="text-sm font-semibold text-gray-600 mb-2">
                Message:
              </Text>
              <Text className="text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
                {message}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-6" />

            <Text className="text-xs text-gray-400 mt-8">
              This email was sent from your portfolio contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
