import { DataChannel } from './data.channel';
import { SDPParticipant } from './sdp.participant';
export declare class SDPOfferer extends SDPParticipant {
    private readonly dataChannel;
    constructor(dataChannelLabel?: string, config?: RTCConfiguration);
    getDataChannel(): Promise<DataChannel>;
    createOffer(): Promise<RTCSessionDescription>;
    setAnswer(remoteDescription: RTCSessionDescription): Promise<void>;
}