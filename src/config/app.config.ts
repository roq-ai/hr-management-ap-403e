interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read personal user data',
    'Read organization data',
    'Read employee data',
    'Read leave request data',
  ],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage employees', 'Manage job positions'],
  getQuoteUrl: 'https://app.roq.ai/proposal/014725a2-f5a5-4fac-9225-024bec5f5216',
};
