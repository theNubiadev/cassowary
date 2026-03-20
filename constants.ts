export type UserRole = "DRIVER" | "CARGO_OWNER";

export type BookingStatus =
  | "PENDING"
  | "ACCEPTED"
  | "PAYMENT_PENDING"
  | "PAID"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "CANCELLED"
  | "DISPUTED";

export type TransactionStatus = "INITIATED" | "SUCCESSFUL" | "FAILED" | "REVERSED";

export type TruckType =
  | "FLATBED"
  | "REFRIGERATED"
  | "TANKER"
  | "CONTAINER"
  | "TIPPER"
  | "VAN"
  | "LOWBED"
  | "CURTAINSIDER";

export type CargoType =
  | "GENERAL"
  | "PERISHABLE"
  | "FRAGILE"
  | "HAZARDOUS"
  | "LIVESTOCK"
  | "LIQUID"
  | "MACHINERY"
  | "ELECTRONICS";

// Driver search filters
export interface DriverSearchParams {
  origin?: string;
  destination?: string;
  truckType?: TruckType;
  minCapacity?: number;
  maxRate?: number;
  availableFrom?: string;
  page?: number;
  limit?: number;
}

// Interswitch payment payload
export interface PaymentInitPayload {
  bookingId: string;
  amount: number; // in kobo (multiply naira × 100)
  customerId: string;
  customerEmail: string;
  customerName: string;
  redirectUrl: string;
  description: string;
}

export interface InterswitchVerifyResponse {
  ResponseCode: string;
  ResponseDescription: string;
  Amount: number;
  TransactionReference: string;
  PaymentReference: string;
  MerchantStoreId?: string;
}

export type NigerianState =
  | "Abia" | "Adamawa" | "Akwa Ibom" | "Anambra" | "Bauchi" | "Bayelsa"
  | "Benue" | "Borno" | "Cross River" | "Delta" | "Ebonyi" | "Edo"
  | "Ekiti" | "Enugu" | "FCT" | "Gombe" | "Imo" | "Jigawa" | "Kaduna"
  | "Kano" | "Katsina" | "Kebbi" | "Kogi" | "Kwara" | "Lagos" | "Nasarawa"
  | "Niger" | "Ogun" | "Ondo" | "Osun" | "Oyo" | "Plateau" | "Rivers"
  | "Sokoto" | "Taraba" | "Yobe" | "Zamfara";

export const NIGERIAN_STATES: NigerianState[] = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna",
  "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara",
];

export const TRUCK_TYPES: { value: TruckType; label: string }[] = [
  { value: "FLATBED", label: "Flatbed" },
  { value: "REFRIGERATED", label: "Refrigerated" },
  { value: "TANKER", label: "Tanker" },
  { value: "CONTAINER", label: "Container" },
  { value: "TIPPER", label: "Tipper" },
  { value: "VAN", label: "Van / Closed Body" },
  { value: "LOWBED", label: "Lowbed" },
  { value: "CURTAINSIDER", label: "Curtainsider" },
];

export const CARGO_TYPES: { value: CargoType; label: string }[] = [
  { value: "GENERAL", label: "General Goods" },
  { value: "PERISHABLE", label: "Perishable / Food" },
  { value: "FRAGILE", label: "Fragile Items" },
  { value: "HAZARDOUS", label: "Hazardous Materials" },
  { value: "LIVESTOCK", label: "Livestock" },
  { value: "LIQUID", label: "Liquid / Bulk" },
  { value: "MACHINERY", label: "Machinery / Equipment" },
  { value: "ELECTRONICS", label: "Electronics" },
];