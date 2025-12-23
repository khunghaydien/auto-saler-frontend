"use client";

import { Col, Row, Typography, Card } from "antd";
import { RobotOutlined } from "@ant-design/icons";
import { AnimatedDiv } from "./AnimatedDiv";

const { Title, Paragraph } = Typography;

export default function AIChatbotSection() {
  return (
  <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="slide-in-bottom" delay={0}>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 shadow-lg">
                  Tăng 50% tỷ lệ chốt đơn
                </div>
                <Title
                  level={2}
                  className="!text-4xl md:!text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400"
                >
                  AI Chatbot thông minh
                </Title>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <Title level={4} className="text-purple-600 dark:text-purple-400">
                      Hiểu ngữ cảnh hội thoại
                    </Title>
                    <Paragraph className="text-gray-600 dark:text-gray-300">
                      AI ghi nhớ toàn bộ lịch sử trò chuyện, nắm đúng nhu cầu của khách để tư vấn
                      mạch lạc.
                    </Paragraph>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <Title level={4} className="text-purple-600 dark:text-purple-400">
                      Tư vấn và phản hồi tức thì
                    </Title>
                    <Paragraph className="text-gray-600 dark:text-gray-300">
                      Mô phỏng tốc độ đánh máy tự nhiên của nhân viên, phản hồi 24/7 chỉ trong tích
                      tắc.
                    </Paragraph>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <Title level={4} className="text-purple-600 dark:text-purple-400">
                      Thu thập dữ liệu
                    </Title>
                    <Paragraph className="text-gray-600 dark:text-gray-300">
                      Tự động thu thập và đồng bộ thông tin khách hàng vào hệ thống CRM.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          </Col>
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="flip-in" delay={300}>
                <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 shadow-2xl border-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                        <RobotOutlined className="text-white" />
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg p-3">
                        <Paragraph className="!mb-0 text-gray-700 dark:text-gray-200">
                          Dạ chào anh/chị. Hiện tối nay nhà hàng vẫn còn bàn trống ạ.
                        </Paragraph>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 text-right">
                        <Paragraph className="!mb-0 text-gray-700 dark:text-gray-200">
                          Mình muốn đặt bàn cho 4 người vào tối nay
                        </Paragraph>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center">
                        👤
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                        <RobotOutlined className="text-white" />
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg p-3">
                        <Paragraph className="!mb-0 text-gray-700 dark:text-gray-200">
                          Với 4 khách, em gợi ý không gian yên tĩnh. Anh/chị muốn đặt vào khung
                          giờ nào ạ?
                        </Paragraph>
                      </div>
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

