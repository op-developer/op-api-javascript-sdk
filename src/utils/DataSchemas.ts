import { AxiosRequestConfig } from 'axios';

export interface Holding {
    id: number;
    sumOfAllHoldings?: SumOfAllHoldings;
    fundHoldings: Array<FundHolding>;
}

export interface AccountType {
    accountId?: string;
    accountType?: string;
    iban?: string;
    bic?: string;
    accountName?: string;
    balance?: number;
    amountAvailable?: number;
    currency?: string;
    status?: string;
    ownerId?: string;
    ownerName?: string;
}
export interface Transaction {
    valueDate?: string;
    bookingDate?: string;
    amount?: number;
    currency?: string;
    message?: string;
    payerIban?: string;
    receiverIban: string;
    type?: string;
    purpose?: string;
    accountId?: string;
    reference?: string;
    transactionId?: string;
}

export interface Fund {
    isinCode?: string;
    nameOfFund?: string;
    unitPrice?: number;
    timestamp?: string;
    documents?: FundDocument;
}

export interface FundOrderResponse {
    orderIdentifier?: String;
}

export interface FundOrderRequest {
    amount?: number;
    accountNumber?: String;
}

export interface PaymentData {
    amount: number;
    subject?: string;
    currency?: string;
    payerIban: string;
    paymentId?: string;
    valueDate?: string;
    receiverBic?: string;
    receiverIban: string;
    receiverName?: string;
}

export interface PaymentConfirmData {
    amount?: number;
    subject?: string;
    currency?: string;
    payerIban?: string;
    paymentId: string;
    valueDate?: string;
    receiverBic?: string;
    receiverIban?: string;
    receiverName?: string;
}

export interface Options extends AxiosRequestConfig {
    version?: string;
    json?: boolean;
    data?: object;
}

export interface Headers {
    'x-request-id'?: string;
    'x-session-id'?: string;
    'x-authorization'?: string;
    'x-api-key': string;
}

interface SumOfAllHoldings {
    marketValue?: number;
    changeOfValue?: number;
    subscriptionValue?: number;
    changeAsPercentage?: number;
}
interface FundHolding {
    fundName?: string;
    isinCode?: string;
    marketValue?: number;
    changeOfValue?: number;
    holdingItem?: HoldingItem;
    subscriptionValue?: number;
    changeAsPercentage?: number;
}
interface HoldingItem {
    marketValue?: number;
    changeOfValue?: number;
}

interface FundDocument {
    FUND_BROCHURE?: string;
    PRICE_LIST?: string;
    ONLINE_SALES?: string;
    YEAR_REPORT?: string;
    QUART_REPORT?: string;
    WEEK_REPORT?: string;
    MIDYEAR_REPORT?: string;
    RULES?: string;
}
