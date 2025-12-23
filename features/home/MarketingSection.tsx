"use client";

import { Col, Row, Typography, Card, Space, Tag, Statistic } from "antd";
import { AnimatedDiv } from "./AnimatedDiv";

const { Title, Paragraph } = Typography;

export default function MarketingSection() {
  return (
  <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="fade-in-up" delay={0}>
              <div className="space-y-6">
                <Title
                  level={2}
                  className="!text-4xl md:!text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400"
                >
                  Marketing hiệu quả
                </Title>
                <Paragraph className="text-lg text-gray-600 dark:text-gray-300">
                  Tự động phân loại và remarketing giúp tiếp cận đúng khách hàng, đúng thời điểm và
                  tăng tỷ lệ chốt đơn.
                </Paragraph>
              </div>
            </AnimatedDiv>
          </Col>
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="scale-in" delay={200}>
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
                  <Space orientation="vertical" size="large" className="w-full">
                    <Statistic
                      title="Tổng người nhận"
                      value={454}
                      styles={{ content: { color: "#3b82f6" } }}
                    />
                    <div>
                      <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-200">
                        <span>Tin nhắn đã xem</span>
                        <span className="font-semibold">312</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-200">
                        <span>Tin đã click</span>
                        <span className="font-semibold">100</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: "22%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <Title level={5} className="text-gray-700 dark:text-gray-200">
                        Chiến dịch:
                      </Title>
                      <Space wrap>
                        <Tag color="purple" className="px-3 py-1 rounded-full shadow-sm">
                          Email Remarketing
                        </Tag>
                        <Tag color="blue" className="px-3 py-1 rounded-full shadow-sm">
                          FMM New
                        </Tag>
                        <Tag color="orange" className="px-3 py-1 rounded-full shadow-sm">
                          Tái kích hoạt khách CRM
                        </Tag>
                      </Space>
                    </div>
                  </Space>
                </Card>
            </AnimatedDiv>
          </Col>
        </Row>
      </div>
    </section>
  );
}

