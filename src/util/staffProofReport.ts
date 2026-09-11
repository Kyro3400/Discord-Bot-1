import ExtendedClient from "../classes/ExtendedClient";
import { Attachment, AttachmentBuilder, TextChannel } from "discord.js";

export type PunishmentType = "Ban" | "Mute" | "Kick";

interface StaffProofReportOptions {
    userId: string;
    punishment: PunishmentType;
    length?: string | null;
    proof?: Attachment | null;
}

function envId(key: string): string | undefined {
    const value = process.env[key];
    if(!value) return undefined;
    return value.replace(/^["']|["']$/g, "").trim() || undefined;
}

export async function sendStaffProofReport(client: ExtendedClient, options: StaffProofReportOptions): Promise<void> {
    // Support both the corrected key and the original typo in .env
    const channelId = envId("staff_server_proof");
    if(!channelId) return;

    try {
        const channel = await client.channels.fetch(channelId);
        if(!channel || !channel.isTextBased() || channel.isDMBased()) return;

        const timestamp = Math.floor(Date.now() / 1000);
        const length = options.length?.trim() || "N/A";
        const hasProof = Boolean(options.proof);

        const content = [
            `User ID: ${options.userId}`,
            `Time: <t:${timestamp}:F>`,
            `Punishment: ${options.punishment}`,
            `Length: ${length}`,
            `Proof: ${hasProof ? "Attached" : "N/A"}`
        ].join("\n");

        const files = hasProof
            ? [new AttachmentBuilder(options.proof.url ?? options.proof.proxyURL, { name: options.proof.name })]
            : [];

        await (channel as TextChannel).send({ content, files });
    } catch(err) {
        client.logError(err);
    }
}
