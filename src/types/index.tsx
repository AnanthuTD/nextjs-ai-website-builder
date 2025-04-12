import { Chat } from "@/app/generated/prisma";

export interface IChatFlat extends Chat {
	isStreaming?: boolean;
}
