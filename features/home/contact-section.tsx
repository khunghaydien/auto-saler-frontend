"use client";

import { Col, Row, Typography, Card, Space } from "antd";
import { CustomerServiceOutlined, MessageOutlined } from "@ant-design/icons";
import { AnimatedDiv } from "./AnimatedDiv";

const { Title, Paragraph } = Typography;

export default function ContactSection() {
  return (
  <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="scale-in" delay={0}>
              <div className="space-y-6">
                <Title level={2} className="!text-4xl md:!text-5xl font-bold text-white">
                  Kết nối cùng đội ngũ AutoSaler
                </Title>
                <Paragraph className="text-xl text-orange-100">
                  Nhận tư vấn từ chuyên gia AI để tối ưu tương tác và tăng trưởng doanh nghiệp
                </Paragraph>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <CustomerServiceOutlined className="text-2xl" />
                    <div>
                      <div className="font-semibold">Hotline</div>
                      <div>0389647778</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <MessageOutlined className="text-2xl" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div>cskh@autosaler.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          </Col>
          <Col xs={24} md={12}>
            <AnimatedDiv animationType="fade-in-left" delay={200}>
                <Card className="shadow-2xl border-0 bg-white dark:bg-gray-800">
                  <Space orientation="vertical" size="large" className="w-full">
                    <Title level={4} className="text-gray-700 dark:text-gray-200">
                      Nhận tư vấn miễn phí
                    </Title>
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                          Họ và tên *
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập họ và tên của bạn"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                          Số điện thoại *
                        </label>
                        <input
                          type="tel"
                          placeholder="Nhập số điện thoại của bạn"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                          Lĩnh vực kinh doanh *
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập lĩnh vực kinh doanh của bạn"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Nhận tư vấn
                      </button>
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

