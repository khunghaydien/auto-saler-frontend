"use client";

import { Col, Row, Typography, Collapse } from "antd";
import { AnimatedDiv } from "./AnimatedDiv";

const { Title, Paragraph } = Typography;

export default function FAQSection() {
  const faqs = [
    {
      question: "AutoSaler có thể tích hợp với những nền tảng nào?",
      answer:
        "Tích hợp các nền tảng tư vấn như Facebook, Zalo OA, TikTok Business, Instagram, Lazada và Website, giúp doanh nghiệp tập trung dữ liệu về một nơi và tăng đến 50% tỷ lệ chốt đơn ngay từ bước tư vấn ban đầu.",
    },
    {
      question: "Thời gian triển khai một chatbot hoàn chỉnh cho doanh nghiệp của tôi là bao lâu?",
      answer:
        "Chỉ mất vài phút để tự thiết lập với giao diện thân thiện, rõ ràng, sử dụng ngay mà không cần đào tạo phức tạp.",
    },
    {
      question:
        "Chi phí sử dụng AutoSaler được tính như thế nào? Có gói dịch vụ nào phù hợp với doanh nghiệp nhỏ không?",
      answer:
        "AutoSaler cung cấp nhiều gói dịch vụ phù hợp với quy mô doanh nghiệp, từ gói cơ bản cho doanh nghiệp nhỏ đến gói enterprise cho doanh nghiệp lớn.",
    },
    {
      question:
        "Làm thế nào AutoSaler xử lý các tình huống phức tạp hoặc khi khách hàng sử dụng ngôn ngữ không rõ ràng?",
      answer:
        "AI của AutoSaler được huấn luyện để hiểu ngữ cảnh và có thể chuyển tiếp cho nhân viên khi gặp tình huống phức tạp, đảm bảo trải nghiệm khách hàng luôn tốt nhất.",
    },
  ];

  return (
  <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <AnimatedDiv animationType="fade-in-up" delay={0}>
          <div className="text-center mb-12">
            <Title
              level={2}
              className="!text-4xl md:!text-5xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-gray-200 dark:to-gray-100"
            >
              Câu hỏi thường gặp
            </Title>
            <Paragraph className="text-lg text-gray-600 dark:text-gray-300">
              Giải đáp nhanh các thắc mắc phổ biến để bạn sử dụng AutoSaler hiệu quả hơn
            </Paragraph>
          </div>
        </AnimatedDiv>
        <Row justify="center">
          <Col xs={24} md={18}>
            <Collapse
              items={faqs.map((faq, index) => ({
                key: index,
                label: faq.question,
                children: (
                  <Paragraph className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </Paragraph>
                ),
              }))}
              className="bg-white dark:bg-gray-900 shadow-lg border-0"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}

