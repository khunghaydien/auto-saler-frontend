"use client";

import { Col, Row, Typography } from "antd";
import { LockOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { AnimatedDiv } from "./AnimatedDiv";

const { Title, Paragraph } = Typography;

export default function SecuritySection() {
  return (
  <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="rotate-in" delay={0}>
              <div className="space-y-6">
                <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 shadow-lg">
                  <LockOutlined className="text-white text-2xl" />
                </div>
                <Title
                  level={2}
                  className="!text-4xl md:!text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400"
                >
                  Bảo mật & dữ liệu
                </Title>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <CheckCircleOutlined className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <Title level={4} className="text-blue-600 dark:text-blue-400">
                        Mã hoá đầu cuối toàn bộ dữ liệu khách hàng
                      </Title>
                      <Paragraph className="text-gray-600 dark:text-gray-300">
                        Tất cả thông tin được mã hóa end-to-end, đảm bảo an toàn tuyệt đối.
                      </Paragraph>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <CheckCircleOutlined className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <Title level={4} className="text-blue-600 dark:text-blue-400">
                        Dữ liệu không chia sẻ
                      </Title>
                      <Paragraph className="text-gray-600 dark:text-gray-300">
                        Dữ liệu không phụ thuộc nền tảng ngoài, hoàn toàn độc lập và bảo mật.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          </Col>
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="zoom-in" delay={300}>
              <div className="text-center">
                <div className="text-8xl mb-4 animate-bounce">🔒</div>
                <div className="text-4xl font-mono text-gray-400 dark:text-gray-500">
                  ........
                </div>
              </div>
            </AnimatedDiv>
          </Col>
        </Row>
      </div>
    </section>
  );
}

