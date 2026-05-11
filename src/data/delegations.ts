export interface Delegation {
  id: number;
  establishment: string;
  commercialReg: string;
  startDate: string;
  endDate: string;
  permissions: string[];
  status: 'active' | 'expired';
}

export const delegations: Delegation[] = [
  {
    id: 1,
    establishment: 'شركة الأعمال المتقدمة',
    commercialReg: '1010123456',
    startDate: '2024-01-01',
    endDate: '2025-01-01',
    permissions: ['تجديد إقامة', 'تسجيل عامل جديد'],
    status: 'active',
  },
  {
    id: 2,
    establishment: 'مؤسسة النور التجارية',
    commercialReg: '4030789123',
    startDate: '2023-06-15',
    endDate: '2024-06-15',
    permissions: ['إدارة الفواتير', 'استلام المدفوعات'],
    status: 'expired',
  },
  {
    id: 3,
    establishment: 'شركة الخليج للاستشارات',
    commercialReg: '2050456789',
    startDate: '2024-03-01',
    endDate: '2025-03-01',
    permissions: ['نقل خدمات العامل', 'إصدار تصاريح العمل'],
    status: 'active',
  },
  {
    id: 4,
    establishment: 'مجموعة الرياض التجارية',
    commercialReg: '1030654321',
    startDate: '2024-05-01',
    endDate: '2025-05-01',
    permissions: ['إبرام العقود', 'الموافقة على العروض'],
    status: 'active',
  },
  {
    id: 5,
    establishment: 'شركة البناء والتطوير',
    commercialReg: '3010987654',
    startDate: '2023-01-10',
    endDate: '2024-01-10',
    permissions: ['استلام المشاريع', 'الإشراف الميداني', 'التوقيع على المحاضر'],
    status: 'expired',
  },
];
