import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClipModel = runtime.Types.Result.DefaultSelection<Prisma.$ClipPayload>;
export type AggregateClip = {
    _count: ClipCountAggregateOutputType | null;
    _avg: ClipAvgAggregateOutputType | null;
    _sum: ClipSumAggregateOutputType | null;
    _min: ClipMinAggregateOutputType | null;
    _max: ClipMaxAggregateOutputType | null;
};
export type ClipAvgAggregateOutputType = {
    duration: number | null;
};
export type ClipSumAggregateOutputType = {
    duration: number | null;
};
export type ClipMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    videoUrl: string | null;
    thumbnailUrl: string | null;
    duration: number | null;
    status: $Enums.ClipStatus | null;
    feedback: string | null;
    campaignId: string | null;
    clipperId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClipMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    videoUrl: string | null;
    thumbnailUrl: string | null;
    duration: number | null;
    status: $Enums.ClipStatus | null;
    feedback: string | null;
    campaignId: string | null;
    clipperId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClipCountAggregateOutputType = {
    id: number;
    title: number;
    videoUrl: number;
    thumbnailUrl: number;
    duration: number;
    status: number;
    feedback: number;
    campaignId: number;
    clipperId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClipAvgAggregateInputType = {
    duration?: true;
};
export type ClipSumAggregateInputType = {
    duration?: true;
};
export type ClipMinAggregateInputType = {
    id?: true;
    title?: true;
    videoUrl?: true;
    thumbnailUrl?: true;
    duration?: true;
    status?: true;
    feedback?: true;
    campaignId?: true;
    clipperId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClipMaxAggregateInputType = {
    id?: true;
    title?: true;
    videoUrl?: true;
    thumbnailUrl?: true;
    duration?: true;
    status?: true;
    feedback?: true;
    campaignId?: true;
    clipperId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClipCountAggregateInputType = {
    id?: true;
    title?: true;
    videoUrl?: true;
    thumbnailUrl?: true;
    duration?: true;
    status?: true;
    feedback?: true;
    campaignId?: true;
    clipperId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClipWhereInput;
    orderBy?: Prisma.ClipOrderByWithRelationInput | Prisma.ClipOrderByWithRelationInput[];
    cursor?: Prisma.ClipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClipCountAggregateInputType;
    _avg?: ClipAvgAggregateInputType;
    _sum?: ClipSumAggregateInputType;
    _min?: ClipMinAggregateInputType;
    _max?: ClipMaxAggregateInputType;
};
export type GetClipAggregateType<T extends ClipAggregateArgs> = {
    [P in keyof T & keyof AggregateClip]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClip[P]> : Prisma.GetScalarType<T[P], AggregateClip[P]>;
};
export type ClipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClipWhereInput;
    orderBy?: Prisma.ClipOrderByWithAggregationInput | Prisma.ClipOrderByWithAggregationInput[];
    by: Prisma.ClipScalarFieldEnum[] | Prisma.ClipScalarFieldEnum;
    having?: Prisma.ClipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClipCountAggregateInputType | true;
    _avg?: ClipAvgAggregateInputType;
    _sum?: ClipSumAggregateInputType;
    _min?: ClipMinAggregateInputType;
    _max?: ClipMaxAggregateInputType;
};
export type ClipGroupByOutputType = {
    id: string;
    title: string;
    videoUrl: string;
    thumbnailUrl: string | null;
    duration: number | null;
    status: $Enums.ClipStatus;
    feedback: string | null;
    campaignId: string;
    clipperId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ClipCountAggregateOutputType | null;
    _avg: ClipAvgAggregateOutputType | null;
    _sum: ClipSumAggregateOutputType | null;
    _min: ClipMinAggregateOutputType | null;
    _max: ClipMaxAggregateOutputType | null;
};
export type GetClipGroupByPayload<T extends ClipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClipGroupByOutputType[P]>;
}>>;
export type ClipWhereInput = {
    AND?: Prisma.ClipWhereInput | Prisma.ClipWhereInput[];
    OR?: Prisma.ClipWhereInput[];
    NOT?: Prisma.ClipWhereInput | Prisma.ClipWhereInput[];
    id?: Prisma.StringFilter<"Clip"> | string;
    title?: Prisma.StringFilter<"Clip"> | string;
    videoUrl?: Prisma.StringFilter<"Clip"> | string;
    thumbnailUrl?: Prisma.StringNullableFilter<"Clip"> | string | null;
    duration?: Prisma.FloatNullableFilter<"Clip"> | number | null;
    status?: Prisma.EnumClipStatusFilter<"Clip"> | $Enums.ClipStatus;
    feedback?: Prisma.StringNullableFilter<"Clip"> | string | null;
    campaignId?: Prisma.StringFilter<"Clip"> | string;
    clipperId?: Prisma.StringFilter<"Clip"> | string;
    createdAt?: Prisma.DateTimeFilter<"Clip"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Clip"> | Date | string;
    campaign?: Prisma.XOR<Prisma.CampaignScalarRelationFilter, Prisma.CampaignWhereInput>;
    clipper?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    dispute?: Prisma.XOR<Prisma.DisputeNullableScalarRelationFilter, Prisma.DisputeWhereInput> | null;
};
export type ClipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    campaign?: Prisma.CampaignOrderByWithRelationInput;
    clipper?: Prisma.UserOrderByWithRelationInput;
    dispute?: Prisma.DisputeOrderByWithRelationInput;
};
export type ClipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClipWhereInput | Prisma.ClipWhereInput[];
    OR?: Prisma.ClipWhereInput[];
    NOT?: Prisma.ClipWhereInput | Prisma.ClipWhereInput[];
    title?: Prisma.StringFilter<"Clip"> | string;
    videoUrl?: Prisma.StringFilter<"Clip"> | string;
    thumbnailUrl?: Prisma.StringNullableFilter<"Clip"> | string | null;
    duration?: Prisma.FloatNullableFilter<"Clip"> | number | null;
    status?: Prisma.EnumClipStatusFilter<"Clip"> | $Enums.ClipStatus;
    feedback?: Prisma.StringNullableFilter<"Clip"> | string | null;
    campaignId?: Prisma.StringFilter<"Clip"> | string;
    clipperId?: Prisma.StringFilter<"Clip"> | string;
    createdAt?: Prisma.DateTimeFilter<"Clip"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Clip"> | Date | string;
    campaign?: Prisma.XOR<Prisma.CampaignScalarRelationFilter, Prisma.CampaignWhereInput>;
    clipper?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    dispute?: Prisma.XOR<Prisma.DisputeNullableScalarRelationFilter, Prisma.DisputeWhereInput> | null;
}, "id">;
export type ClipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClipCountOrderByAggregateInput;
    _avg?: Prisma.ClipAvgOrderByAggregateInput;
    _max?: Prisma.ClipMaxOrderByAggregateInput;
    _min?: Prisma.ClipMinOrderByAggregateInput;
    _sum?: Prisma.ClipSumOrderByAggregateInput;
};
export type ClipScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClipScalarWhereWithAggregatesInput | Prisma.ClipScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClipScalarWhereWithAggregatesInput | Prisma.ClipScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Clip"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Clip"> | string;
    videoUrl?: Prisma.StringWithAggregatesFilter<"Clip"> | string;
    thumbnailUrl?: Prisma.StringNullableWithAggregatesFilter<"Clip"> | string | null;
    duration?: Prisma.FloatNullableWithAggregatesFilter<"Clip"> | number | null;
    status?: Prisma.EnumClipStatusWithAggregatesFilter<"Clip"> | $Enums.ClipStatus;
    feedback?: Prisma.StringNullableWithAggregatesFilter<"Clip"> | string | null;
    campaignId?: Prisma.StringWithAggregatesFilter<"Clip"> | string;
    clipperId?: Prisma.StringWithAggregatesFilter<"Clip"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Clip"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Clip"> | Date | string;
};
export type ClipCreateInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign: Prisma.CampaignCreateNestedOneWithoutClipsInput;
    clipper: Prisma.UserCreateNestedOneWithoutClipsInput;
    dispute?: Prisma.DisputeCreateNestedOneWithoutClipInput;
};
export type ClipUncheckedCreateInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    campaignId: string;
    clipperId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dispute?: Prisma.DisputeUncheckedCreateNestedOneWithoutClipInput;
};
export type ClipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign?: Prisma.CampaignUpdateOneRequiredWithoutClipsNestedInput;
    clipper?: Prisma.UserUpdateOneRequiredWithoutClipsNestedInput;
    dispute?: Prisma.DisputeUpdateOneWithoutClipNestedInput;
};
export type ClipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dispute?: Prisma.DisputeUncheckedUpdateOneWithoutClipNestedInput;
};
export type ClipCreateManyInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    campaignId: string;
    clipperId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClipListRelationFilter = {
    every?: Prisma.ClipWhereInput;
    some?: Prisma.ClipWhereInput;
    none?: Prisma.ClipWhereInput;
};
export type ClipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClipAvgOrderByAggregateInput = {
    duration?: Prisma.SortOrder;
};
export type ClipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClipSumOrderByAggregateInput = {
    duration?: Prisma.SortOrder;
};
export type ClipScalarRelationFilter = {
    is?: Prisma.ClipWhereInput;
    isNot?: Prisma.ClipWhereInput;
};
export type ClipCreateNestedManyWithoutClipperInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutClipperInput, Prisma.ClipUncheckedCreateWithoutClipperInput> | Prisma.ClipCreateWithoutClipperInput[] | Prisma.ClipUncheckedCreateWithoutClipperInput[];
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutClipperInput | Prisma.ClipCreateOrConnectWithoutClipperInput[];
    createMany?: Prisma.ClipCreateManyClipperInputEnvelope;
    connect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
};
export type ClipUncheckedCreateNestedManyWithoutClipperInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutClipperInput, Prisma.ClipUncheckedCreateWithoutClipperInput> | Prisma.ClipCreateWithoutClipperInput[] | Prisma.ClipUncheckedCreateWithoutClipperInput[];
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutClipperInput | Prisma.ClipCreateOrConnectWithoutClipperInput[];
    createMany?: Prisma.ClipCreateManyClipperInputEnvelope;
    connect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
};
export type ClipUpdateManyWithoutClipperNestedInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutClipperInput, Prisma.ClipUncheckedCreateWithoutClipperInput> | Prisma.ClipCreateWithoutClipperInput[] | Prisma.ClipUncheckedCreateWithoutClipperInput[];
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutClipperInput | Prisma.ClipCreateOrConnectWithoutClipperInput[];
    upsert?: Prisma.ClipUpsertWithWhereUniqueWithoutClipperInput | Prisma.ClipUpsertWithWhereUniqueWithoutClipperInput[];
    createMany?: Prisma.ClipCreateManyClipperInputEnvelope;
    set?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    disconnect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    delete?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    connect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    update?: Prisma.ClipUpdateWithWhereUniqueWithoutClipperInput | Prisma.ClipUpdateWithWhereUniqueWithoutClipperInput[];
    updateMany?: Prisma.ClipUpdateManyWithWhereWithoutClipperInput | Prisma.ClipUpdateManyWithWhereWithoutClipperInput[];
    deleteMany?: Prisma.ClipScalarWhereInput | Prisma.ClipScalarWhereInput[];
};
export type ClipUncheckedUpdateManyWithoutClipperNestedInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutClipperInput, Prisma.ClipUncheckedCreateWithoutClipperInput> | Prisma.ClipCreateWithoutClipperInput[] | Prisma.ClipUncheckedCreateWithoutClipperInput[];
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutClipperInput | Prisma.ClipCreateOrConnectWithoutClipperInput[];
    upsert?: Prisma.ClipUpsertWithWhereUniqueWithoutClipperInput | Prisma.ClipUpsertWithWhereUniqueWithoutClipperInput[];
    createMany?: Prisma.ClipCreateManyClipperInputEnvelope;
    set?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    disconnect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    delete?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    connect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    update?: Prisma.ClipUpdateWithWhereUniqueWithoutClipperInput | Prisma.ClipUpdateWithWhereUniqueWithoutClipperInput[];
    updateMany?: Prisma.ClipUpdateManyWithWhereWithoutClipperInput | Prisma.ClipUpdateManyWithWhereWithoutClipperInput[];
    deleteMany?: Prisma.ClipScalarWhereInput | Prisma.ClipScalarWhereInput[];
};
export type ClipCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutCampaignInput, Prisma.ClipUncheckedCreateWithoutCampaignInput> | Prisma.ClipCreateWithoutCampaignInput[] | Prisma.ClipUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutCampaignInput | Prisma.ClipCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.ClipCreateManyCampaignInputEnvelope;
    connect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
};
export type ClipUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutCampaignInput, Prisma.ClipUncheckedCreateWithoutCampaignInput> | Prisma.ClipCreateWithoutCampaignInput[] | Prisma.ClipUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutCampaignInput | Prisma.ClipCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.ClipCreateManyCampaignInputEnvelope;
    connect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
};
export type ClipUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutCampaignInput, Prisma.ClipUncheckedCreateWithoutCampaignInput> | Prisma.ClipCreateWithoutCampaignInput[] | Prisma.ClipUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutCampaignInput | Prisma.ClipCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.ClipUpsertWithWhereUniqueWithoutCampaignInput | Prisma.ClipUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.ClipCreateManyCampaignInputEnvelope;
    set?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    disconnect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    delete?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    connect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    update?: Prisma.ClipUpdateWithWhereUniqueWithoutCampaignInput | Prisma.ClipUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.ClipUpdateManyWithWhereWithoutCampaignInput | Prisma.ClipUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.ClipScalarWhereInput | Prisma.ClipScalarWhereInput[];
};
export type ClipUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutCampaignInput, Prisma.ClipUncheckedCreateWithoutCampaignInput> | Prisma.ClipCreateWithoutCampaignInput[] | Prisma.ClipUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutCampaignInput | Prisma.ClipCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.ClipUpsertWithWhereUniqueWithoutCampaignInput | Prisma.ClipUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.ClipCreateManyCampaignInputEnvelope;
    set?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    disconnect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    delete?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    connect?: Prisma.ClipWhereUniqueInput | Prisma.ClipWhereUniqueInput[];
    update?: Prisma.ClipUpdateWithWhereUniqueWithoutCampaignInput | Prisma.ClipUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.ClipUpdateManyWithWhereWithoutCampaignInput | Prisma.ClipUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.ClipScalarWhereInput | Prisma.ClipScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumClipStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClipStatus;
};
export type ClipCreateNestedOneWithoutDisputeInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutDisputeInput, Prisma.ClipUncheckedCreateWithoutDisputeInput>;
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutDisputeInput;
    connect?: Prisma.ClipWhereUniqueInput;
};
export type ClipUpdateOneRequiredWithoutDisputeNestedInput = {
    create?: Prisma.XOR<Prisma.ClipCreateWithoutDisputeInput, Prisma.ClipUncheckedCreateWithoutDisputeInput>;
    connectOrCreate?: Prisma.ClipCreateOrConnectWithoutDisputeInput;
    upsert?: Prisma.ClipUpsertWithoutDisputeInput;
    connect?: Prisma.ClipWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClipUpdateToOneWithWhereWithoutDisputeInput, Prisma.ClipUpdateWithoutDisputeInput>, Prisma.ClipUncheckedUpdateWithoutDisputeInput>;
};
export type ClipCreateWithoutClipperInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign: Prisma.CampaignCreateNestedOneWithoutClipsInput;
    dispute?: Prisma.DisputeCreateNestedOneWithoutClipInput;
};
export type ClipUncheckedCreateWithoutClipperInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    campaignId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dispute?: Prisma.DisputeUncheckedCreateNestedOneWithoutClipInput;
};
export type ClipCreateOrConnectWithoutClipperInput = {
    where: Prisma.ClipWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClipCreateWithoutClipperInput, Prisma.ClipUncheckedCreateWithoutClipperInput>;
};
export type ClipCreateManyClipperInputEnvelope = {
    data: Prisma.ClipCreateManyClipperInput | Prisma.ClipCreateManyClipperInput[];
    skipDuplicates?: boolean;
};
export type ClipUpsertWithWhereUniqueWithoutClipperInput = {
    where: Prisma.ClipWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClipUpdateWithoutClipperInput, Prisma.ClipUncheckedUpdateWithoutClipperInput>;
    create: Prisma.XOR<Prisma.ClipCreateWithoutClipperInput, Prisma.ClipUncheckedCreateWithoutClipperInput>;
};
export type ClipUpdateWithWhereUniqueWithoutClipperInput = {
    where: Prisma.ClipWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClipUpdateWithoutClipperInput, Prisma.ClipUncheckedUpdateWithoutClipperInput>;
};
export type ClipUpdateManyWithWhereWithoutClipperInput = {
    where: Prisma.ClipScalarWhereInput;
    data: Prisma.XOR<Prisma.ClipUpdateManyMutationInput, Prisma.ClipUncheckedUpdateManyWithoutClipperInput>;
};
export type ClipScalarWhereInput = {
    AND?: Prisma.ClipScalarWhereInput | Prisma.ClipScalarWhereInput[];
    OR?: Prisma.ClipScalarWhereInput[];
    NOT?: Prisma.ClipScalarWhereInput | Prisma.ClipScalarWhereInput[];
    id?: Prisma.StringFilter<"Clip"> | string;
    title?: Prisma.StringFilter<"Clip"> | string;
    videoUrl?: Prisma.StringFilter<"Clip"> | string;
    thumbnailUrl?: Prisma.StringNullableFilter<"Clip"> | string | null;
    duration?: Prisma.FloatNullableFilter<"Clip"> | number | null;
    status?: Prisma.EnumClipStatusFilter<"Clip"> | $Enums.ClipStatus;
    feedback?: Prisma.StringNullableFilter<"Clip"> | string | null;
    campaignId?: Prisma.StringFilter<"Clip"> | string;
    clipperId?: Prisma.StringFilter<"Clip"> | string;
    createdAt?: Prisma.DateTimeFilter<"Clip"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Clip"> | Date | string;
};
export type ClipCreateWithoutCampaignInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clipper: Prisma.UserCreateNestedOneWithoutClipsInput;
    dispute?: Prisma.DisputeCreateNestedOneWithoutClipInput;
};
export type ClipUncheckedCreateWithoutCampaignInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    clipperId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dispute?: Prisma.DisputeUncheckedCreateNestedOneWithoutClipInput;
};
export type ClipCreateOrConnectWithoutCampaignInput = {
    where: Prisma.ClipWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClipCreateWithoutCampaignInput, Prisma.ClipUncheckedCreateWithoutCampaignInput>;
};
export type ClipCreateManyCampaignInputEnvelope = {
    data: Prisma.ClipCreateManyCampaignInput | Prisma.ClipCreateManyCampaignInput[];
    skipDuplicates?: boolean;
};
export type ClipUpsertWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.ClipWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClipUpdateWithoutCampaignInput, Prisma.ClipUncheckedUpdateWithoutCampaignInput>;
    create: Prisma.XOR<Prisma.ClipCreateWithoutCampaignInput, Prisma.ClipUncheckedCreateWithoutCampaignInput>;
};
export type ClipUpdateWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.ClipWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClipUpdateWithoutCampaignInput, Prisma.ClipUncheckedUpdateWithoutCampaignInput>;
};
export type ClipUpdateManyWithWhereWithoutCampaignInput = {
    where: Prisma.ClipScalarWhereInput;
    data: Prisma.XOR<Prisma.ClipUpdateManyMutationInput, Prisma.ClipUncheckedUpdateManyWithoutCampaignInput>;
};
export type ClipCreateWithoutDisputeInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign: Prisma.CampaignCreateNestedOneWithoutClipsInput;
    clipper: Prisma.UserCreateNestedOneWithoutClipsInput;
};
export type ClipUncheckedCreateWithoutDisputeInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    campaignId: string;
    clipperId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClipCreateOrConnectWithoutDisputeInput = {
    where: Prisma.ClipWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClipCreateWithoutDisputeInput, Prisma.ClipUncheckedCreateWithoutDisputeInput>;
};
export type ClipUpsertWithoutDisputeInput = {
    update: Prisma.XOR<Prisma.ClipUpdateWithoutDisputeInput, Prisma.ClipUncheckedUpdateWithoutDisputeInput>;
    create: Prisma.XOR<Prisma.ClipCreateWithoutDisputeInput, Prisma.ClipUncheckedCreateWithoutDisputeInput>;
    where?: Prisma.ClipWhereInput;
};
export type ClipUpdateToOneWithWhereWithoutDisputeInput = {
    where?: Prisma.ClipWhereInput;
    data: Prisma.XOR<Prisma.ClipUpdateWithoutDisputeInput, Prisma.ClipUncheckedUpdateWithoutDisputeInput>;
};
export type ClipUpdateWithoutDisputeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign?: Prisma.CampaignUpdateOneRequiredWithoutClipsNestedInput;
    clipper?: Prisma.UserUpdateOneRequiredWithoutClipsNestedInput;
};
export type ClipUncheckedUpdateWithoutDisputeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClipCreateManyClipperInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    campaignId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClipUpdateWithoutClipperInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign?: Prisma.CampaignUpdateOneRequiredWithoutClipsNestedInput;
    dispute?: Prisma.DisputeUpdateOneWithoutClipNestedInput;
};
export type ClipUncheckedUpdateWithoutClipperInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dispute?: Prisma.DisputeUncheckedUpdateOneWithoutClipNestedInput;
};
export type ClipUncheckedUpdateManyWithoutClipperInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClipCreateManyCampaignInput = {
    id?: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string | null;
    duration?: number | null;
    status?: $Enums.ClipStatus;
    feedback?: string | null;
    clipperId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClipUpdateWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clipper?: Prisma.UserUpdateOneRequiredWithoutClipsNestedInput;
    dispute?: Prisma.DisputeUpdateOneWithoutClipNestedInput;
};
export type ClipUncheckedUpdateWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dispute?: Prisma.DisputeUncheckedUpdateOneWithoutClipNestedInput;
};
export type ClipUncheckedUpdateManyWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    videoUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumClipStatusFieldUpdateOperationsInput | $Enums.ClipStatus;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    videoUrl?: boolean;
    thumbnailUrl?: boolean;
    duration?: boolean;
    status?: boolean;
    feedback?: boolean;
    campaignId?: boolean;
    clipperId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    dispute?: boolean | Prisma.Clip$disputeArgs<ExtArgs>;
}, ExtArgs["result"]["clip"]>;
export type ClipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    videoUrl?: boolean;
    thumbnailUrl?: boolean;
    duration?: boolean;
    status?: boolean;
    feedback?: boolean;
    campaignId?: boolean;
    clipperId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clip"]>;
export type ClipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    videoUrl?: boolean;
    thumbnailUrl?: boolean;
    duration?: boolean;
    status?: boolean;
    feedback?: boolean;
    campaignId?: boolean;
    clipperId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clip"]>;
export type ClipSelectScalar = {
    id?: boolean;
    title?: boolean;
    videoUrl?: boolean;
    thumbnailUrl?: boolean;
    duration?: boolean;
    status?: boolean;
    feedback?: boolean;
    campaignId?: boolean;
    clipperId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "videoUrl" | "thumbnailUrl" | "duration" | "status" | "feedback" | "campaignId" | "clipperId" | "createdAt" | "updatedAt", ExtArgs["result"]["clip"]>;
export type ClipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    dispute?: boolean | Prisma.Clip$disputeArgs<ExtArgs>;
};
export type ClipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ClipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ClipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Clip";
    objects: {
        campaign: Prisma.$CampaignPayload<ExtArgs>;
        clipper: Prisma.$UserPayload<ExtArgs>;
        dispute: Prisma.$DisputePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: $Enums.ClipStatus;
        feedback: string | null;
        campaignId: string;
        clipperId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["clip"]>;
    composites: {};
};
export type ClipGetPayload<S extends boolean | null | undefined | ClipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClipPayload, S>;
export type ClipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClipCountAggregateInputType | true;
};
export interface ClipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Clip'];
        meta: {
            name: 'Clip';
        };
    };
    findUnique<T extends ClipFindUniqueArgs>(args: Prisma.SelectSubset<T, ClipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClipFindFirstArgs>(args?: Prisma.SelectSubset<T, ClipFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClipFindManyArgs>(args?: Prisma.SelectSubset<T, ClipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClipCreateArgs>(args: Prisma.SelectSubset<T, ClipCreateArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClipCreateManyArgs>(args?: Prisma.SelectSubset<T, ClipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClipDeleteArgs>(args: Prisma.SelectSubset<T, ClipDeleteArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClipUpdateArgs>(args: Prisma.SelectSubset<T, ClipUpdateArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClipDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClipUpdateManyArgs>(args: Prisma.SelectSubset<T, ClipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClipUpsertArgs>(args: Prisma.SelectSubset<T, ClipUpsertArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClipCountArgs>(args?: Prisma.Subset<T, ClipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClipCountAggregateOutputType> : number>;
    aggregate<T extends ClipAggregateArgs>(args: Prisma.Subset<T, ClipAggregateArgs>): Prisma.PrismaPromise<GetClipAggregateType<T>>;
    groupBy<T extends ClipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClipGroupByArgs['orderBy'];
    } : {
        orderBy?: ClipGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClipFieldRefs;
}
export interface Prisma__ClipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campaign<T extends Prisma.CampaignDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CampaignDefaultArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    clipper<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    dispute<T extends Prisma.Clip$disputeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clip$disputeArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClipFieldRefs {
    readonly id: Prisma.FieldRef<"Clip", 'String'>;
    readonly title: Prisma.FieldRef<"Clip", 'String'>;
    readonly videoUrl: Prisma.FieldRef<"Clip", 'String'>;
    readonly thumbnailUrl: Prisma.FieldRef<"Clip", 'String'>;
    readonly duration: Prisma.FieldRef<"Clip", 'Float'>;
    readonly status: Prisma.FieldRef<"Clip", 'ClipStatus'>;
    readonly feedback: Prisma.FieldRef<"Clip", 'String'>;
    readonly campaignId: Prisma.FieldRef<"Clip", 'String'>;
    readonly clipperId: Prisma.FieldRef<"Clip", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Clip", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Clip", 'DateTime'>;
}
export type ClipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    where: Prisma.ClipWhereUniqueInput;
};
export type ClipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    where: Prisma.ClipWhereUniqueInput;
};
export type ClipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    where?: Prisma.ClipWhereInput;
    orderBy?: Prisma.ClipOrderByWithRelationInput | Prisma.ClipOrderByWithRelationInput[];
    cursor?: Prisma.ClipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClipScalarFieldEnum | Prisma.ClipScalarFieldEnum[];
};
export type ClipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    where?: Prisma.ClipWhereInput;
    orderBy?: Prisma.ClipOrderByWithRelationInput | Prisma.ClipOrderByWithRelationInput[];
    cursor?: Prisma.ClipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClipScalarFieldEnum | Prisma.ClipScalarFieldEnum[];
};
export type ClipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    where?: Prisma.ClipWhereInput;
    orderBy?: Prisma.ClipOrderByWithRelationInput | Prisma.ClipOrderByWithRelationInput[];
    cursor?: Prisma.ClipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClipScalarFieldEnum | Prisma.ClipScalarFieldEnum[];
};
export type ClipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClipCreateInput, Prisma.ClipUncheckedCreateInput>;
};
export type ClipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClipCreateManyInput | Prisma.ClipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    data: Prisma.ClipCreateManyInput | Prisma.ClipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClipUpdateInput, Prisma.ClipUncheckedUpdateInput>;
    where: Prisma.ClipWhereUniqueInput;
};
export type ClipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClipUpdateManyMutationInput, Prisma.ClipUncheckedUpdateManyInput>;
    where?: Prisma.ClipWhereInput;
    limit?: number;
};
export type ClipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClipUpdateManyMutationInput, Prisma.ClipUncheckedUpdateManyInput>;
    where?: Prisma.ClipWhereInput;
    limit?: number;
    include?: Prisma.ClipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    where: Prisma.ClipWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClipCreateInput, Prisma.ClipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClipUpdateInput, Prisma.ClipUncheckedUpdateInput>;
};
export type ClipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
    where: Prisma.ClipWhereUniqueInput;
};
export type ClipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClipWhereInput;
    limit?: number;
};
export type Clip$disputeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where?: Prisma.DisputeWhereInput;
};
export type ClipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClipSelect<ExtArgs> | null;
    omit?: Prisma.ClipOmit<ExtArgs> | null;
    include?: Prisma.ClipInclude<ExtArgs> | null;
};
