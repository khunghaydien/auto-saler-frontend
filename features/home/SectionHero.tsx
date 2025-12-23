"use client";

import { Button } from "antd";
import { AnimatedDiv } from "./AnimatedDiv";
import Image from "next/image";

export default function SectionHero() {
    return (
        <section className="snap-start snap-always min-h-screen flex items-center justify-center">
            <div className="flex">
                <div className="order-2 md:order-1">
                    <AnimatedDiv animationType="fade-in-left" delay={100}>
                        <h1>
                            AutoSaler - Bán hàng tự động 24/7
                        </h1>
                        <h6>
                            Bộ giải pháp AI bán hàng thế hệ mới, giúp doanh nghiệp tăng doanh số bán hàng, tăng tỷ lệ chốt đơn, tăng tỷ lệ chuyển đổi.
                        </h6>
                        <div className="flex items-center gap-4">
                            <Button type="primary" size="large" className="transition-all duration-300 animate-bounce">
                                Xem demo
                            </Button>
                            <Button type="primary" size="large" className="transition-all duration-300 animate-bounce">
                                Dùng thử miễn phí
                            </Button>
                        </div>
                    </AnimatedDiv>
                </div>
                <div className="order-1 md:order-2">
                    <AnimatedDiv animationType="fade-in-right" delay={100}>
                        <Image src="/images/hero.png" alt="Hero" width={500} height={500} />
                    </AnimatedDiv>
                </div>
            </div>
        </section>
    );
}