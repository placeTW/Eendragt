import IMessageInfo from '../Interfaces/IMessageInfo';
import SettingsConstants from '../Constants/SettingsConstants';
import CommandUtils from '../Utils/CommandUtils';
import { ChatInputCommandInteraction } from 'discord.js';
import OnboardingHandler from './OnboardingHandler';
import ArtHandler from './ArtHandler';
import VariableHandler from './VariableHandler';
import NominationHandler from './NominationHandler';
import TemplateHandler from './TemplateHandler';

export default class CommandHandler {

    public static OnCommand(messageInfo: IMessageInfo, content: string) {
        let commandInfo;

        if (messageInfo.interaction != null) {
            commandInfo = CommandUtils.ParseInteractionToCommand(messageInfo.interaction as ChatInputCommandInteraction);
        } else {
            commandInfo = CommandUtils.ParseContentToCommand(content, SettingsConstants.DEFAULT_PREFIX);
        }

        messageInfo.commandInfo = commandInfo;

        if (OnboardingHandler.OnCommand(messageInfo)) {
            return;
        }

        if (ArtHandler.OnCommand(messageInfo)) {
            return;
        }

        if (VariableHandler.OnCommand(messageInfo)) {
            return;
        }

        if (NominationHandler.OnCommand(messageInfo)) {
            return;
        }

        if (TemplateHandler.OnCommand(messageInfo)) {
            return;
        }
    }
}
