"use client";

import { Col, Row, Typography, Card } from "antd";
import { AnimatedDiv } from "./AnimatedDiv";

const { Title, Paragraph } = Typography;

export default function ResultsSection() {
  return (
  <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="slide-in-top" delay={0}>
              <div className="space-y-6">
                <Title
                  level={2}
                  className="!text-4xl md:!text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent dark:from-orange-400 dark:to-amber-400"
                >
                  Kết quả khi sử dụng
                </Title>
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 bg-clip-text text-transparent dark:from-orange-400 dark:via-orange-500 dark:to-amber-500">
                  Tăng 50% tỷ lệ chốt đơn
                </div>
                <Paragraph className="text-lg text-gray-600 dark:text-gray-300">
                  Với AI Chatbot tự động, doanh nghiệp có thể tăng hiệu quả bán hàng đáng kể, chốt
                  đơn nhanh chóng và chăm sóc khách hàng 24/7.
                </Paragraph>
              </div>
            </AnimatedDiv>
          </Col>
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="fade-in-right" delay={200}>
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-orange-900/20">
                  <div className="space-y-4">
                    <Title level={4} className="text-gray-700 dark:text-gray-200">
                      Biểu đồ tăng trưởng
                    </Title>
                    <div className="h-64 flex items-end justify-between gap-2">
                      <div className="flex-1 bg-gradient-to-t from-orange-400 via-orange-500 to-orange-600 rounded-t-lg h-1/3 shadow-lg transition-all duration-500 hover:h-2/3"></div>
                      <div className="flex-1 bg-gradient-to-t from-orange-400 via-orange-500 to-orange-600 rounded-t-lg h-2/3 shadow-lg transition-all duration-500 hover:h-full"></div>
                      <div className="flex-1 bg-gradient-to-t from-orange-400 via-orange-500 to-orange-600 rounded-t-lg h-full shadow-lg transition-all duration-500"></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>0</span>
                      <span>50K</span>
                      <span>100K</span>
                      <span>150K</span>
                    </div>
                  </div>
                </Card>
            </AnimatedDiv>
          </Col>
        </Row>
      </div>
    </section>
  );
}

