export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: 'Mail' | 'Send' | 'Monitor' | 'Terminal' | 'Server' | 'HardDrive';
  ctaText: string;
  badge?: string;
  features: string[];
}

export interface InfraFeature {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Activity' | 'ShieldCheck' | 'Sliders' | 'Headphones';
}

export const COMPANY_INFO = {
  name: 'TN Flash',
  tagline: 'Chuyển đổi số – Hạ tầng Cloud – Email doanh nghiệp – Lưu trữ dữ liệu',
  hotline: '1900 6868',
  email: 'support@tn-falsh.vn',
  website: 'www.tn-falsh.vn',
  websiteUrl: 'http://www.tn-falsh.vn/',
  chatbotUrl: 'https://cdn.botpress.cloud/webchat/v3.7/shareable.html?configUrl=https://files.bpcontent.cloud/2026/10/08/12/20261008123325-971ONG74.json',
};

export const NAV_LINKS = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Hạ tầng Cloud', href: '#infrastructure' },
  { label: 'Giải pháp', href: '#why-us' },
  { label: 'Về TN Flash', href: '#about' },
  { label: 'Liên hệ', href: '#contact' },
];

export const HERO_STRIP_ITEMS = [
  'Cloud Infrastructure',
  'Business Email',
  'Windows Server',
  'Linux Server',
  'Data Storage',
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'email-domain',
    title: 'Email tên miền',
    category: 'Giao tiếp doanh nghiệp',
    description: 'Email chuyên nghiệp theo tên miền doanh nghiệp, hỗ trợ xây dựng hình ảnh thương hiệu và giao tiếp hiệu quả.',
    iconName: 'Mail',
    ctaText: 'Khám phá',
    badge: 'Enterprise Mail',
    features: ['Anti-Spam & Anti-Virus 99.9%', 'Đồng bộ đa thiết bị Mobile/PC', 'Dung lượng hộp thư lớn']
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    category: 'Tiếp thị & Truyền thông',
    description: 'Giải pháp hỗ trợ doanh nghiệp triển khai hoạt động email marketing chuyên nghiệp.',
    iconName: 'Send',
    ctaText: 'Khám phá',
    badge: 'High Deliverability',
    features: ['Tốc độ gửi mail cao', 'Thống kê mở & click theo thời gian thực', 'API tích hợp hệ thống']
  },
  {
    id: 'cloud-windows',
    title: 'Cloud Server Windows',
    category: 'Hạ tầng ảo hóa',
    description: 'Máy chủ Cloud Windows linh hoạt cho các ứng dụng và hệ thống doanh nghiệp.',
    iconName: 'Monitor',
    ctaText: 'Khám phá',
    badge: 'Windows Server 2022',
    features: ['Bản quyền chính hãng', 'Tối ưu ERP / MISA / SQL Server', 'Khởi tạo nhanh chóng']
  },
  {
    id: 'cloud-linux',
    title: 'Cloud Server Linux',
    category: 'Hạ tầng ảo hóa',
    description: 'Cloud Server Linux tối ưu cho website, ứng dụng, hệ thống backend và workload kỹ thuật.',
    iconName: 'Terminal',
    ctaText: 'Khám phá',
    badge: 'Ubuntu / CentOS / Rocky',
    features: ['Hiệu năng cao SSD/NVMe', 'Toàn quyền Root Control', 'Uptime vượt trội']
  },
  {
    id: 'idc-infrastructure',
    title: 'IDC & Server Infrastructure',
    category: 'Data Center Solutions',
    description: 'Giải pháp hạ tầng máy chủ và Data Center phục vụ nhu cầu vận hành doanh nghiệp.',
    iconName: 'Server',
    ctaText: 'Khám phá',
    badge: 'Tier 3 standard IDC',
    features: ['Đặt chỗ máy chủ Colocation', 'Băng thông trong nước & quốc tế', 'Giám sát 24/7/365']
  },
  {
    id: 'data-storage',
    title: 'Lưu trữ dữ liệu',
    category: 'Enterprise Storage',
    description: 'Giải pháp lưu trữ dữ liệu an toàn, linh hoạt và dễ mở rộng.',
    iconName: 'HardDrive',
    ctaText: 'Khám phá',
    badge: 'Cloud Object Storage',
    features: ['Mã hóa AES-256 bits', 'Sao lưu tự động định kỳ', 'Mở rộng không giới hạn']
  }
];

export const INFRA_FEATURES: InfraFeature[] = [
  {
    number: '01',
    title: 'Linux Cloud',
    description: 'Hệ điều hành tối ưu, khả năng tùy biến cao và tài nguyên chuyên dụng cho các ứng dụng enterprise, microservices và hệ thống backend.',
    tag: 'High Performance'
  },
  {
    number: '02',
    title: 'Windows Cloud',
    description: 'Tương thích hoàn hảo với các phần mềm quản trị doanh nghiệp như ERP, CRM, kế toán MISA, SQL Server và hệ sinh thái Microsoft.',
    tag: 'Enterprise Ready'
  },
  {
    number: '03',
    title: 'Network Infrastructure',
    description: 'Hạ tầng mạng chuẩn công nghiệp, kết nối trực tiếp đến các hạ tầng trung tâm dữ liệu với băng thông cao và trễ thấp.',
    tag: 'High Bandwidth'
  },
  {
    number: '04',
    title: 'Data Storage',
    description: 'Hệ thống lưu trữ phân tán thế hệ mới với khả năng an toàn dữ liệu, chống thất thoát và khôi phục nhanh chóng.',
    tag: 'Ultra Reliable'
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'stability',
    title: 'Ổn định',
    description: 'Hạ tầng được thiết kế hướng đến khả năng vận hành liên tục, giảm thiểu rủi ro gián đoạn dịch vụ.',
    iconName: 'Activity'
  },
  {
    id: 'security',
    title: 'Bảo mật',
    description: 'Ưu tiên bảo vệ hệ thống và dữ liệu doanh nghiệp với các lớp tường lửa và giám sát chủ động.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'flexibility',
    title: 'Linh hoạt',
    description: 'Dễ dàng mở rộng tài nguyên theo nhu cầu tăng trưởng mà không ảnh hưởng đến dịch vụ hiện có.',
    iconName: 'Sliders'
  },
  {
    id: 'support',
    title: 'Hỗ trợ',
    description: 'Đồng hành cùng doanh nghiệp trong toàn bộ quá trình tư vấn, triển khai và vận hành kỹ thuật.',
    iconName: 'Headphones'
  }
];
