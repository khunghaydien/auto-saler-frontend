"use client";

import { Col, Row, Typography, Card } from "antd";
import { MessageOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { AnimatedDiv } from "./AnimatedDiv";

const { Title, Paragraph } = Typography;

export default function ChannelSection() {
  const channels = [
    { name: "Lazada", icon: "🛒", color: "from-purple-500 to-purple-600" },
    { name: "Zalo", icon: "💬", color: "from-blue-500 to-blue-600" },
    { name: "Website", icon: "🌐", color: "from-green-500 to-green-600" },
    { name: "Instagram", icon: "📷", color: "from-pink-500 to-pink-600" },
    { name: "Facebook", icon: "👥", color: "from-indigo-500 to-indigo-600" },
    { name: "TikTok", icon: "🎵", color: "from-red-500 to-red-600" },
  ];

  return (
  <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="rotate-in" delay={0}>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full mb-4">
                  <MessageOutlined className="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <Title
                  level={2}
                  className="!text-4xl md:!text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400"
                >
                  Chat đa kênh miễn phí
                </Title>
                <Paragraph className="text-lg text-gray-600 dark:text-gray-300">
                  Quản lý mọi tin nhắn từ Facebook, Zalo, TikTok, Instagram, Lazada, Website trong
                  cùng một giao diện duy nhất. Bot và nhân viên phối hợp trong cùng hội thoại,
                  không làm gián đoạn trải nghiệm của khách.
                </Paragraph>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <CheckCircleOutlined className="text-green-500 text-lg" />
                    <span>Luồng xử lý liền mạch</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <CheckCircleOutlined className="text-green-500 text-lg" />
                    <span>Phân công tự động theo kịch bản</span>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          </Col>
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="scale-in" delay={200}>
              <div className="grid grid-cols-3 gap-4">
                {channels.map((channel, index) => (
                  <Card
                    key={channel.name}
                    className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className={`text-4xl mb-2 bg-gradient-to-r ${channel.color} bg-clip-text text-transparent`}
                    >
                      {channel.icon}
                    </div>
                    <div className="font-semibold text-gray-700 dark:text-gray-200">
                      {channel.name}
                    </div>
                  </Card>
                ))}
              </div>
            </AnimatedDiv>
          </Col>
        </Row>
      </div>
    </section>
  );
}

