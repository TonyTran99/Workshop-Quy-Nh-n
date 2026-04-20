import React from 'react';
import Head from 'next/head';

export default function Home() {
  const zaloLink = "https://zalo.me/g/vb1adixzhd7gmo4lkhhj";

  return (
    <>
      <Head>
        <title>Workshop Uy Tín: Ứng Dụng AI Vào Giao Dịch Tài Chính</title>
        <meta name="description" content="Workshop offline tại Quy Nhơn - Tăng tốc lợi nhuận với hệ thống giao dịch tự động AI. Đăng ký ngay!" />
      </Head>

      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-subtitle">⚡ Workshop Offline Đặc Quyền Tại Quy Nhơn</div>
            <h1 className="hero-title">
              <span className="text-gradient">Ứng Dụng AI Vào Giao Dịch</span><br />
              Quản Trị Rủi Ro - Tăng Tốc Lợi Nhuận
            </h1>
            <p className="hero-description">
              Dành riêng cho những ai từng mất tiền vì giao dịch theo cảm xúc, mệt mỏi vì canh nến và đang tìm kiếm một &quot;người dẫn đường&quot; thực chiến để làm lại từ đầu một cách bài bản.
            </p>
            
            <div className="hero-info-cards">
              <div className="info-card">
                <span>📍</span>
                <h4>Địa điểm</h4>
                <p>On Coffee, 14 Trần Thị Kỷ</p>
              </div>
              <div className="info-card">
                <span>⏱️</span>
                <h4>Thời gian</h4>
                <p>08:30 - Ngày 25/04/2026</p>
              </div>
              <div className="info-card" style={{ borderColor: 'var(--accent-gold)' }}>
                <span>☕</span>
                <h4>Chi phí</h4>
                <p className="text-gold">Miễn phí (Share tiền nước 100k)</p>
              </div>
            </div>

            <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              GIỮ CHỖ CHO TÔI NGAY
            </a>
            <div style={{ marginTop: '15px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              *Số lượng giới hạn tối đa 20 người
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI TREND */}
      <section className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Sự Bùng Nổ Của AI & <br/><span className="text-cyan">Giải Pháp Tài Chính Kỷ Nguyên Mới</span></h2>
          <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            Hệ thống đã được đóng gói hoàn chỉnh. Bạn không cần biết code, không cần giỏi kỹ thuật. Chỉ cần một chiếc Laptop hoặc Điện thoại, chúng tôi sẽ cài đặt và vận hành cùng bạn ngay tại bàn. Dễ như 1 cú click!
          </p>
          <div className="features-grid">
            <div className="feature-box">
              <div className="icon">📈</div>
              <h3>Không Cần Canh Nến</h3>
              <p>Thị trường tài chính đang ứng dụng AI mạnh mẽ. Bạn không còn phải thức đêm mệt mỏi để canh biểu đồ hằng ngày. AI đóng vai trò như một trợ lý cần mẫn 24/7.</p>
            </div>
            <div className="feature-box">
              <div className="icon">🎯</div>
              <h3>Điểm Vào Lệnh Chuẩn Xác</h3>
              <p>Khuyến nghị mua bán, ra vào lệnh bằng dữ liệu phân tích cực kì chuẩn xác, thay vì phụ thuộc vào cảm tính hay &quot;phím hàng&quot; từ các hội nhóm hỗn tạp.</p>
            </div>
            <div className="feature-box">
              <div className="icon">🛡️</div>
              <h3>Kỷ Luật & Loại Bỏ Cảm Xúc</h3>
              <p>Giao dịch bằng cảm xúc là nguyên nhân đốt sạch tài khoản. AI được lập trình với tính kỷ luật thép, chốt lời / cắt lỗ tự động, giúp bảo vệ vốn tuyệt đối.</p>
            </div>
            <div className="feature-box">
              <div className="icon">💸</div>
              <h3>Lợi Nhuận Đều Đặn</h3>
              <p>Hệ thống tự động nhắm tới lợi nhuận bền vững 15% mỗi tháng - một con số cực kỳ lý tưởng để tạo ra dòng thu nhập thụ động mà không cần quá nhiều kinh nghiệm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKSHOP CONTENT */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Nội Dung Bạn Sẽ Nhận Được Tại <br/><span className="text-gold">Workshop</span></h2>
          <ul className="content-list">
            <li className="content-item">
              <div className="number">1</div>
              <div>
                <h4 className="text-gold">Tổng Quan Thị Trường & Tư Duy</h4>
                <p style={{ color: 'var(--text-muted)' }}>Bức tranh toàn cảnh tài chính, bí kíp săn Coin tiềm năng và cách thiết lập tư duy giao dịch an toàn (Quản trị rủi ro).</p>
              </div>
            </li>
            <li className="content-item">
              <div className="number">2</div>
              <div>
                <h4 className="text-gold">Chia Sẻ Về Công Nghệ AI</h4>
                <p style={{ color: 'var(--text-muted)' }}>Cách sử dụng AI và ứng dụng trí tuệ nhân tạo vào lĩnh vực tài chính để tìm kiếm lợi thế tuyệt đối và tối đa hóa lợi nhuận.</p>
              </div>
            </li>
            <li className="content-item">
              <div className="number">3</div>
              <div>
                <h4 className="text-gold">Thực Chiến Hệ Thống Tự Động</h4>
                <p style={{ color: 'var(--text-muted)' }}>Giao dịch ngay với hệ thống AI tự động và kiếm lời ngay tại chỗ. Được thiết kế đơn giản để kể cả người mới tinh 100% cũng có thể làm được ngay lần đầu.</p>
              </div>
            </li>
            <li className="content-item">
              <div className="number">4</div>
              <div>
                <h4 className="text-gold">Bí Mật Dòng Tiền Thụ Động</h4>
                <p style={{ color: 'var(--text-muted)' }}>Chia sẻ ngách nhận lợi nhuận cố định ~15%/tháng thông qua hình thức giấy phép hệ thống giao dịch tự động.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: SPEAKER */}
      <section className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Gặp Gỡ Chuyên Gia</h2>
          <div className="expert-profile">
            <div className="expert-img">
              <img src="/images/vo-phuc-nguyen.jpg" alt="Chuyên gia Võ Phúc Nguyên" />
            </div>
            <div className="expert-info">
              <h3>Võ Phúc Nguyên</h3>
              <div className="role">Chuyên Gia Trading & Crypto (5+ Năm Kinh Nghiệm)</div>
              <p style={{ color: 'var(--text-muted)' }}>Hơn 5 năm thực chiến trong thị trường tài chính khắc nghiệt, anh là người trực tiếp đào tạo tư duy quản trị rủi ro. Sự kiện lần này không nhằm mục đích bán khóa học. Mục tiêu của anh là tìm kiếm 15-20 anh em trẻ nghiêm túc, tạo thành một đội nhóm giao dịch tại Quy Nhơn để trực tiếp coaching 1:1 và chuyển giao hệ thống kiếm tiền tự động.</p>
              <blockquote className="expert-quote">
                &quot;Thị trường tài chính là một cuộc chơi tổng bằng không (Zero-sum game). Nếu bạn không có công cụ, bạn chính là tiền của người khác.&quot;
              </blockquote>
            </div>
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <img src="/images/huong-dan-giao-dich.jpeg" alt="Không khí Workshop Offline Finance & AI" style={{ width: '100%', maxWidth: '900px', borderRadius: '20px', border: '2px solid var(--accent-gold)', boxShadow: '0 10px 30px rgba(251, 191, 36, 0.15)', margin: '0 auto' }} />
          </div>
        </div>
      </section>

      {/* SECTION 5: DEMO / PROOF */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Kết Quả Hệ Thống <span className="text-cyan">RIFT AI TRADE</span></h2>
          <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Hàng trăm nhà giao dịch đã bắt đầu sinh lời tự động ngay sau khi áp dụng hệ thống.</p>
          <div className="gallery-grid">
            <div className="gallery-item"><img src="/images/giao-dich-1.jpg" alt="Kết quả giao dịch 1" /></div>
            <div className="gallery-item"><img src="/images/giao-dich-2.jpg" alt="Kết quả giao dịch 2" /></div>
            <div className="gallery-item"><img src="/images/giao-dich-3.jpg" alt="Kết quả giao dịch 3" /></div>
            <div className="gallery-item"><img src="/images/giao-dich-5.jpg" alt="Kết quả giao dịch 5" /></div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA / FOOTER */}
      <section className="cta-footer">
        <div className="container">
          <h2>Cơ Hội Chỉ Dành Cho <span className="text-gold">20 Người Nhanh Nhất</span></h2>
          <p>Tham gia buổi workshop Offline đặc biệt này để được chúng tôi cầm tay chỉ việc. Số lượng chỗ ngồi vô cùng có hạn để đảm bảo chất lượng hướng dẫn tốt nhất.</p>
          
          <div className="countdown">
            {/* Lên lịch đếm ngược tĩnh mô phỏng */}
            <div className="time-box">
              <span className="num" id="day">04</span>
              <span className="text">Ngày</span>
            </div>
            <div className="time-box">
              <span className="num" id="hour">12</span>
              <span className="text">Giờ</span>
            </div>
            <div className="time-box">
              <span className="num" id="minute">30</span>
              <span className="text">Phút</span>
            </div>
          </div>

          <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            VÀO NHÓM ZALO ĐĂNG KÝ NGAY
          </a>
          <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>*Lưu ý: Bạn chỉ cần share 100.000 VNĐ tiền nước uống tại quán.</p>
        </div>
      </section>
    </>
  );
}
