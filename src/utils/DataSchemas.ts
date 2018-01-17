export interface Holding {
    id: number;
    sumOfAllHoldings?: SumOfAllHoldings;
    fundHoldings: Array<FundHolding>;
}

export interface AccountType {
    accountId?: String;
    accountType?: String;
    iban?: String;
    bic?: String;
    accountName?: String;
    balance?: number;
    amountAvailable?: number;
    currency?: String;
    status?: String;
    ownerId?: String;
    ownerName?: String;
}
export interface Transaction {
    valueDate?: String;
    bookingDate?: String;
    amount?: number;
    currency?: String;
    message?: String;
    payerIban?: String;
    receiverIban: String;
    type?: String;
    purpose?: String;
    accountId?: String;
    reference?: String;
    transactionId?: String;
}

export interface Fund {
    isinCode?: String;
    nameOfFund?: String;
    unitPrice?: number;
    timestamp?: String;
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
    subject?: String;
    currency?: String;
    payerIban: String;
    paymentId?: String;
    valueDate?: String;
    receiverBic?: String;
    receiverIban: String;
    receiverName?: String;
}

export interface PaymentConfirmData {
    amount?: number;
    subject?: String;
    currency?: String;
    payerIban?: String;
    paymentId: String;
    valueDate?: String;
    receiverBic?: String;
    receiverIban?: String;
    receiverName?: String;
}

export interface Options {
    headers: Headers;
    baseUrl: String;
    uri?: String;
    json?: boolean;
    timeout?: number;
}

export interface Headers {
    'x-request-id': String;
    'x-session-id': String;
    'x-authorization': String;
    'x-api-key': String;
}

interface SumOfAllHoldings {
    marketValue?: number;
    changeOfValue?: number;
    subscriptionValue?: number;
    changeAsPercentage?: number;
}
interface FundHolding {
    fundName?: String;
    isinCode?: String;
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
    FUND_BROCHURE?: String;
    PRICE_LIST?: String;
    ONLINE_SALES?: String;
    YEAR_REPORT?: String;
    QUART_REPORT?: String;
    WEEK_REPORT?: String;
    MIDYEAR_REPORT?: String;
    RULES?: String;
}
