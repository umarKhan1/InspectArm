export type InspectionStatus = 'Scheduled' | 'In Progress' | 'Completed' | 'Draft';

export interface Inspection {
  id: string;
  clientName: string;
  address: string;
  propertyCode: string;
  scheduleDate: string;
  scheduleTime: string;
  inspectorName: string;
  inspectorSubtext: string;
  serviceType: string;
  paymentAmount: number;
  paymentStatus: string;
  status: InspectionStatus;
}

export const mockStats = {
  total: 128,
  thisWeek: 18,
  completed: 94,
  openDrafts: 7,
};

export const mockInspections: Inspection[] = [
  {
    id: 'INSP-1048',
    clientName: 'Madison Clark',
    address: '1840 Cedar Ridge Drive, Austin, TX...',
    propertyCode: 'INSP-1048',
    scheduleDate: 'May 8, 2026',
    scheduleTime: '2:00 PM',
    inspectorName: 'Avery Stone',
    inspectorSubtext: 'Closest inspector, 18 min ro...',
    serviceType: 'Residential Home Inspe...',
    paymentAmount: 525,
    paymentStatus: 'Deposit Paid',
    status: 'Scheduled',
  },
  {
    id: 'INSP-1047',
    clientName: 'Ethan Bennett',
    address: '912 Harbor View Lane, Tampa, FL 3...',
    propertyCode: 'INSP-1047',
    scheduleDate: 'May 8, 2026',
    scheduleTime: '10:30 AM',
    inspectorName: 'Maya Johnson',
    inspectorSubtext: 'Balanced workload across e...',
    serviceType: 'Commercial Inspection',
    paymentAmount: 1250,
    paymentStatus: 'Invoice Sent',
    status: 'In Progress',
  },
  {
    id: 'INSP-1046',
    clientName: 'Sarah Jenkins',
    address: '4455 Westheimer Rd, Houston, TX...',
    propertyCode: 'INSP-1046',
    scheduleDate: 'May 7, 2026',
    scheduleTime: '9:00 AM',
    inspectorName: 'David Lee',
    inspectorSubtext: 'Available for full day...',
    serviceType: 'Residential Home Inspe...',
    paymentAmount: 450,
    paymentStatus: 'Paid in Full',
    status: 'Completed',
  },
];
