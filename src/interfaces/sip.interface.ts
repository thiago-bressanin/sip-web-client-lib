export interface ISipService {
    init: (config?: SipOptions) => boolean;
}
// SIP_LABEL=5035
// SIP_USER=100035
// SIP_PASSWORD=GrjzHLgH3iNXL2ME
// SIP_REALM=siphomologa.55pbx.com
// SIP_WSS=wss://sip1.55pbx.com:8089/ws

export type SipOptions = {
    label?: string;
    realm: string;
    user: string;
    password: string;
    wsuri: string;   
}