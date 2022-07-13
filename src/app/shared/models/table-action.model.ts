export interface TableAction {
    icon: string;
    color: string;
    tooltip: string;
    disable?: (action: any, data: any) => boolean;
  }
  
