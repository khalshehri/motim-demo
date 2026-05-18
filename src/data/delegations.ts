export type OrgType = 'motim' | 'hrsd' | 'zatca' | 'commerce' | 'sagia';

export interface Delegation {
  id: number;
  grantingAuthority: string;
  commercialReg: string;
  issueDate: string;
  permissions: string[];
  status: 'active' | 'expired';
  orgType: OrgType;
  orgColor: string;
  orgAbbr: string;
}

export const delegations: Delegation[] = [
  {
    id: 1,
    grantingAuthority: 'متم | اتحاد الغرف',
    commercialReg: '1010123456',
    issueDate: '15-06-2023',
    permissions: ['تجديد إقامة', 'تسجيل عامل جديد'],
    status: 'active',
    orgType: 'motim',
    orgColor: '#007374',
    orgAbbr: 'متم',
  },
  {
    id: 2,
    grantingAuthority: 'متم | اتحاد الغرف',
    commercialReg: '1010123456',
    issueDate: '10-01-2023',
    permissions: ['إدارة الفواتير', 'استلام المدفوعات'],
    status: 'expired',
    orgType: 'hrsd',
    orgColor: '#1a4fa0',
    orgAbbr: 'موارد',
  },
  {
    id: 3,
    grantingAuthority: 'متم | اتحاد الغرف',
    commercialReg: '1010123456',
    issueDate: '01-03-2024',
    permissions: ['نقل خدمات العامل', 'إصدار تصاريح العمل'],
    status: 'active',
    orgType: 'zatca',
    orgColor: '#059669',
    orgAbbr: 'زاتكا',
  },
  {
    id: 4,
    grantingAuthority: 'متم | اتحاد الغرف',
    commercialReg: '1010123456',
    issueDate: '01-05-2024',
    permissions: ['إبرام العقود', 'الموافقة على العروض'],
    status: 'active',
    orgType: 'commerce',
    orgColor: '#7c3aed',
    orgAbbr: 'تجارة',
  },
  {
    id: 5,
    grantingAuthority: 'متم | اتحاد الغرف',
    commercialReg: '1010123456',
    issueDate: '10-01-2023',
    permissions: ['استلام المشاريع', 'الإشراف الميداني', 'التوقيع على المحاضر'],
    status: 'expired',
    orgType: 'sagia',
    orgColor: '#b45309',
    orgAbbr: 'استثمار',
  },
];
