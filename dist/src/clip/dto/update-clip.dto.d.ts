import { CreateClipDto } from './create-clip.dto';
declare const UpdateClipDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateClipDto, "campaignId">>>;
export declare class UpdateClipDto extends UpdateClipDto_base {
}
export {};
