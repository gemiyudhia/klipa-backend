"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClipDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_clip_dto_1 = require("./create-clip.dto");
class UpdateClipDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_clip_dto_1.CreateClipDto, ['campaignId'])) {
}
exports.UpdateClipDto = UpdateClipDto;
//# sourceMappingURL=update-clip.dto.js.map