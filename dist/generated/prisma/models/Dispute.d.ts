import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DisputeModel = runtime.Types.Result.DefaultSelection<Prisma.$DisputePayload>;
export type AggregateDispute = {
    _count: DisputeCountAggregateOutputType | null;
    _min: DisputeMinAggregateOutputType | null;
    _max: DisputeMaxAggregateOutputType | null;
};
export type DisputeMinAggregateOutputType = {
    id: string | null;
    clipId: string | null;
    clipperId: string | null;
    reason: string | null;
    status: $Enums.DisputeStatus | null;
    resolutionNote: string | null;
    resolvedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DisputeMaxAggregateOutputType = {
    id: string | null;
    clipId: string | null;
    clipperId: string | null;
    reason: string | null;
    status: $Enums.DisputeStatus | null;
    resolutionNote: string | null;
    resolvedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DisputeCountAggregateOutputType = {
    id: number;
    clipId: number;
    clipperId: number;
    reason: number;
    status: number;
    resolutionNote: number;
    resolvedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DisputeMinAggregateInputType = {
    id?: true;
    clipId?: true;
    clipperId?: true;
    reason?: true;
    status?: true;
    resolutionNote?: true;
    resolvedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DisputeMaxAggregateInputType = {
    id?: true;
    clipId?: true;
    clipperId?: true;
    reason?: true;
    status?: true;
    resolutionNote?: true;
    resolvedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DisputeCountAggregateInputType = {
    id?: true;
    clipId?: true;
    clipperId?: true;
    reason?: true;
    status?: true;
    resolutionNote?: true;
    resolvedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DisputeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisputeWhereInput;
    orderBy?: Prisma.DisputeOrderByWithRelationInput | Prisma.DisputeOrderByWithRelationInput[];
    cursor?: Prisma.DisputeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DisputeCountAggregateInputType;
    _min?: DisputeMinAggregateInputType;
    _max?: DisputeMaxAggregateInputType;
};
export type GetDisputeAggregateType<T extends DisputeAggregateArgs> = {
    [P in keyof T & keyof AggregateDispute]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDispute[P]> : Prisma.GetScalarType<T[P], AggregateDispute[P]>;
};
export type DisputeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisputeWhereInput;
    orderBy?: Prisma.DisputeOrderByWithAggregationInput | Prisma.DisputeOrderByWithAggregationInput[];
    by: Prisma.DisputeScalarFieldEnum[] | Prisma.DisputeScalarFieldEnum;
    having?: Prisma.DisputeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DisputeCountAggregateInputType | true;
    _min?: DisputeMinAggregateInputType;
    _max?: DisputeMaxAggregateInputType;
};
export type DisputeGroupByOutputType = {
    id: string;
    clipId: string;
    clipperId: string;
    reason: string;
    status: $Enums.DisputeStatus;
    resolutionNote: string | null;
    resolvedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DisputeCountAggregateOutputType | null;
    _min: DisputeMinAggregateOutputType | null;
    _max: DisputeMaxAggregateOutputType | null;
};
export type GetDisputeGroupByPayload<T extends DisputeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DisputeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DisputeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DisputeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DisputeGroupByOutputType[P]>;
}>>;
export type DisputeWhereInput = {
    AND?: Prisma.DisputeWhereInput | Prisma.DisputeWhereInput[];
    OR?: Prisma.DisputeWhereInput[];
    NOT?: Prisma.DisputeWhereInput | Prisma.DisputeWhereInput[];
    id?: Prisma.StringFilter<"Dispute"> | string;
    clipId?: Prisma.StringFilter<"Dispute"> | string;
    clipperId?: Prisma.StringFilter<"Dispute"> | string;
    reason?: Prisma.StringFilter<"Dispute"> | string;
    status?: Prisma.EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus;
    resolutionNote?: Prisma.StringNullableFilter<"Dispute"> | string | null;
    resolvedById?: Prisma.StringNullableFilter<"Dispute"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Dispute"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Dispute"> | Date | string;
    clip?: Prisma.XOR<Prisma.ClipScalarRelationFilter, Prisma.ClipWhereInput>;
    clipper?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    resolvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type DisputeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clipId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clip?: Prisma.ClipOrderByWithRelationInput;
    clipper?: Prisma.UserOrderByWithRelationInput;
    resolvedBy?: Prisma.UserOrderByWithRelationInput;
};
export type DisputeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    clipId?: string;
    AND?: Prisma.DisputeWhereInput | Prisma.DisputeWhereInput[];
    OR?: Prisma.DisputeWhereInput[];
    NOT?: Prisma.DisputeWhereInput | Prisma.DisputeWhereInput[];
    clipperId?: Prisma.StringFilter<"Dispute"> | string;
    reason?: Prisma.StringFilter<"Dispute"> | string;
    status?: Prisma.EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus;
    resolutionNote?: Prisma.StringNullableFilter<"Dispute"> | string | null;
    resolvedById?: Prisma.StringNullableFilter<"Dispute"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Dispute"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Dispute"> | Date | string;
    clip?: Prisma.XOR<Prisma.ClipScalarRelationFilter, Prisma.ClipWhereInput>;
    clipper?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    resolvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "clipId">;
export type DisputeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clipId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DisputeCountOrderByAggregateInput;
    _max?: Prisma.DisputeMaxOrderByAggregateInput;
    _min?: Prisma.DisputeMinOrderByAggregateInput;
};
export type DisputeScalarWhereWithAggregatesInput = {
    AND?: Prisma.DisputeScalarWhereWithAggregatesInput | Prisma.DisputeScalarWhereWithAggregatesInput[];
    OR?: Prisma.DisputeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DisputeScalarWhereWithAggregatesInput | Prisma.DisputeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Dispute"> | string;
    clipId?: Prisma.StringWithAggregatesFilter<"Dispute"> | string;
    clipperId?: Prisma.StringWithAggregatesFilter<"Dispute"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"Dispute"> | string;
    status?: Prisma.EnumDisputeStatusWithAggregatesFilter<"Dispute"> | $Enums.DisputeStatus;
    resolutionNote?: Prisma.StringNullableWithAggregatesFilter<"Dispute"> | string | null;
    resolvedById?: Prisma.StringNullableWithAggregatesFilter<"Dispute"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Dispute"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Dispute"> | Date | string;
};
export type DisputeCreateInput = {
    id?: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clip: Prisma.ClipCreateNestedOneWithoutDisputeInput;
    clipper: Prisma.UserCreateNestedOneWithoutDisputesRaisedInput;
    resolvedBy?: Prisma.UserCreateNestedOneWithoutDisputesResolvedInput;
};
export type DisputeUncheckedCreateInput = {
    id?: string;
    clipId: string;
    clipperId: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisputeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clip?: Prisma.ClipUpdateOneRequiredWithoutDisputeNestedInput;
    clipper?: Prisma.UserUpdateOneRequiredWithoutDisputesRaisedNestedInput;
    resolvedBy?: Prisma.UserUpdateOneWithoutDisputesResolvedNestedInput;
};
export type DisputeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clipId?: Prisma.StringFieldUpdateOperationsInput | string;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisputeCreateManyInput = {
    id?: string;
    clipId: string;
    clipperId: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisputeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisputeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clipId?: Prisma.StringFieldUpdateOperationsInput | string;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisputeListRelationFilter = {
    every?: Prisma.DisputeWhereInput;
    some?: Prisma.DisputeWhereInput;
    none?: Prisma.DisputeWhereInput;
};
export type DisputeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DisputeNullableScalarRelationFilter = {
    is?: Prisma.DisputeWhereInput | null;
    isNot?: Prisma.DisputeWhereInput | null;
};
export type DisputeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clipId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DisputeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clipId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DisputeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clipId?: Prisma.SortOrder;
    clipperId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DisputeCreateNestedManyWithoutClipperInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutClipperInput, Prisma.DisputeUncheckedCreateWithoutClipperInput> | Prisma.DisputeCreateWithoutClipperInput[] | Prisma.DisputeUncheckedCreateWithoutClipperInput[];
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutClipperInput | Prisma.DisputeCreateOrConnectWithoutClipperInput[];
    createMany?: Prisma.DisputeCreateManyClipperInputEnvelope;
    connect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
};
export type DisputeCreateNestedManyWithoutResolvedByInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutResolvedByInput, Prisma.DisputeUncheckedCreateWithoutResolvedByInput> | Prisma.DisputeCreateWithoutResolvedByInput[] | Prisma.DisputeUncheckedCreateWithoutResolvedByInput[];
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutResolvedByInput | Prisma.DisputeCreateOrConnectWithoutResolvedByInput[];
    createMany?: Prisma.DisputeCreateManyResolvedByInputEnvelope;
    connect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
};
export type DisputeUncheckedCreateNestedManyWithoutClipperInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutClipperInput, Prisma.DisputeUncheckedCreateWithoutClipperInput> | Prisma.DisputeCreateWithoutClipperInput[] | Prisma.DisputeUncheckedCreateWithoutClipperInput[];
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutClipperInput | Prisma.DisputeCreateOrConnectWithoutClipperInput[];
    createMany?: Prisma.DisputeCreateManyClipperInputEnvelope;
    connect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
};
export type DisputeUncheckedCreateNestedManyWithoutResolvedByInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutResolvedByInput, Prisma.DisputeUncheckedCreateWithoutResolvedByInput> | Prisma.DisputeCreateWithoutResolvedByInput[] | Prisma.DisputeUncheckedCreateWithoutResolvedByInput[];
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutResolvedByInput | Prisma.DisputeCreateOrConnectWithoutResolvedByInput[];
    createMany?: Prisma.DisputeCreateManyResolvedByInputEnvelope;
    connect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
};
export type DisputeUpdateManyWithoutClipperNestedInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutClipperInput, Prisma.DisputeUncheckedCreateWithoutClipperInput> | Prisma.DisputeCreateWithoutClipperInput[] | Prisma.DisputeUncheckedCreateWithoutClipperInput[];
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutClipperInput | Prisma.DisputeCreateOrConnectWithoutClipperInput[];
    upsert?: Prisma.DisputeUpsertWithWhereUniqueWithoutClipperInput | Prisma.DisputeUpsertWithWhereUniqueWithoutClipperInput[];
    createMany?: Prisma.DisputeCreateManyClipperInputEnvelope;
    set?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    disconnect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    delete?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    connect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    update?: Prisma.DisputeUpdateWithWhereUniqueWithoutClipperInput | Prisma.DisputeUpdateWithWhereUniqueWithoutClipperInput[];
    updateMany?: Prisma.DisputeUpdateManyWithWhereWithoutClipperInput | Prisma.DisputeUpdateManyWithWhereWithoutClipperInput[];
    deleteMany?: Prisma.DisputeScalarWhereInput | Prisma.DisputeScalarWhereInput[];
};
export type DisputeUpdateManyWithoutResolvedByNestedInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutResolvedByInput, Prisma.DisputeUncheckedCreateWithoutResolvedByInput> | Prisma.DisputeCreateWithoutResolvedByInput[] | Prisma.DisputeUncheckedCreateWithoutResolvedByInput[];
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutResolvedByInput | Prisma.DisputeCreateOrConnectWithoutResolvedByInput[];
    upsert?: Prisma.DisputeUpsertWithWhereUniqueWithoutResolvedByInput | Prisma.DisputeUpsertWithWhereUniqueWithoutResolvedByInput[];
    createMany?: Prisma.DisputeCreateManyResolvedByInputEnvelope;
    set?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    disconnect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    delete?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    connect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    update?: Prisma.DisputeUpdateWithWhereUniqueWithoutResolvedByInput | Prisma.DisputeUpdateWithWhereUniqueWithoutResolvedByInput[];
    updateMany?: Prisma.DisputeUpdateManyWithWhereWithoutResolvedByInput | Prisma.DisputeUpdateManyWithWhereWithoutResolvedByInput[];
    deleteMany?: Prisma.DisputeScalarWhereInput | Prisma.DisputeScalarWhereInput[];
};
export type DisputeUncheckedUpdateManyWithoutClipperNestedInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutClipperInput, Prisma.DisputeUncheckedCreateWithoutClipperInput> | Prisma.DisputeCreateWithoutClipperInput[] | Prisma.DisputeUncheckedCreateWithoutClipperInput[];
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutClipperInput | Prisma.DisputeCreateOrConnectWithoutClipperInput[];
    upsert?: Prisma.DisputeUpsertWithWhereUniqueWithoutClipperInput | Prisma.DisputeUpsertWithWhereUniqueWithoutClipperInput[];
    createMany?: Prisma.DisputeCreateManyClipperInputEnvelope;
    set?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    disconnect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    delete?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    connect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    update?: Prisma.DisputeUpdateWithWhereUniqueWithoutClipperInput | Prisma.DisputeUpdateWithWhereUniqueWithoutClipperInput[];
    updateMany?: Prisma.DisputeUpdateManyWithWhereWithoutClipperInput | Prisma.DisputeUpdateManyWithWhereWithoutClipperInput[];
    deleteMany?: Prisma.DisputeScalarWhereInput | Prisma.DisputeScalarWhereInput[];
};
export type DisputeUncheckedUpdateManyWithoutResolvedByNestedInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutResolvedByInput, Prisma.DisputeUncheckedCreateWithoutResolvedByInput> | Prisma.DisputeCreateWithoutResolvedByInput[] | Prisma.DisputeUncheckedCreateWithoutResolvedByInput[];
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutResolvedByInput | Prisma.DisputeCreateOrConnectWithoutResolvedByInput[];
    upsert?: Prisma.DisputeUpsertWithWhereUniqueWithoutResolvedByInput | Prisma.DisputeUpsertWithWhereUniqueWithoutResolvedByInput[];
    createMany?: Prisma.DisputeCreateManyResolvedByInputEnvelope;
    set?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    disconnect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    delete?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    connect?: Prisma.DisputeWhereUniqueInput | Prisma.DisputeWhereUniqueInput[];
    update?: Prisma.DisputeUpdateWithWhereUniqueWithoutResolvedByInput | Prisma.DisputeUpdateWithWhereUniqueWithoutResolvedByInput[];
    updateMany?: Prisma.DisputeUpdateManyWithWhereWithoutResolvedByInput | Prisma.DisputeUpdateManyWithWhereWithoutResolvedByInput[];
    deleteMany?: Prisma.DisputeScalarWhereInput | Prisma.DisputeScalarWhereInput[];
};
export type DisputeCreateNestedOneWithoutClipInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutClipInput, Prisma.DisputeUncheckedCreateWithoutClipInput>;
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutClipInput;
    connect?: Prisma.DisputeWhereUniqueInput;
};
export type DisputeUncheckedCreateNestedOneWithoutClipInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutClipInput, Prisma.DisputeUncheckedCreateWithoutClipInput>;
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutClipInput;
    connect?: Prisma.DisputeWhereUniqueInput;
};
export type DisputeUpdateOneWithoutClipNestedInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutClipInput, Prisma.DisputeUncheckedCreateWithoutClipInput>;
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutClipInput;
    upsert?: Prisma.DisputeUpsertWithoutClipInput;
    disconnect?: Prisma.DisputeWhereInput | boolean;
    delete?: Prisma.DisputeWhereInput | boolean;
    connect?: Prisma.DisputeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DisputeUpdateToOneWithWhereWithoutClipInput, Prisma.DisputeUpdateWithoutClipInput>, Prisma.DisputeUncheckedUpdateWithoutClipInput>;
};
export type DisputeUncheckedUpdateOneWithoutClipNestedInput = {
    create?: Prisma.XOR<Prisma.DisputeCreateWithoutClipInput, Prisma.DisputeUncheckedCreateWithoutClipInput>;
    connectOrCreate?: Prisma.DisputeCreateOrConnectWithoutClipInput;
    upsert?: Prisma.DisputeUpsertWithoutClipInput;
    disconnect?: Prisma.DisputeWhereInput | boolean;
    delete?: Prisma.DisputeWhereInput | boolean;
    connect?: Prisma.DisputeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DisputeUpdateToOneWithWhereWithoutClipInput, Prisma.DisputeUpdateWithoutClipInput>, Prisma.DisputeUncheckedUpdateWithoutClipInput>;
};
export type EnumDisputeStatusFieldUpdateOperationsInput = {
    set?: $Enums.DisputeStatus;
};
export type DisputeCreateWithoutClipperInput = {
    id?: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clip: Prisma.ClipCreateNestedOneWithoutDisputeInput;
    resolvedBy?: Prisma.UserCreateNestedOneWithoutDisputesResolvedInput;
};
export type DisputeUncheckedCreateWithoutClipperInput = {
    id?: string;
    clipId: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisputeCreateOrConnectWithoutClipperInput = {
    where: Prisma.DisputeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisputeCreateWithoutClipperInput, Prisma.DisputeUncheckedCreateWithoutClipperInput>;
};
export type DisputeCreateManyClipperInputEnvelope = {
    data: Prisma.DisputeCreateManyClipperInput | Prisma.DisputeCreateManyClipperInput[];
    skipDuplicates?: boolean;
};
export type DisputeCreateWithoutResolvedByInput = {
    id?: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clip: Prisma.ClipCreateNestedOneWithoutDisputeInput;
    clipper: Prisma.UserCreateNestedOneWithoutDisputesRaisedInput;
};
export type DisputeUncheckedCreateWithoutResolvedByInput = {
    id?: string;
    clipId: string;
    clipperId: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisputeCreateOrConnectWithoutResolvedByInput = {
    where: Prisma.DisputeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisputeCreateWithoutResolvedByInput, Prisma.DisputeUncheckedCreateWithoutResolvedByInput>;
};
export type DisputeCreateManyResolvedByInputEnvelope = {
    data: Prisma.DisputeCreateManyResolvedByInput | Prisma.DisputeCreateManyResolvedByInput[];
    skipDuplicates?: boolean;
};
export type DisputeUpsertWithWhereUniqueWithoutClipperInput = {
    where: Prisma.DisputeWhereUniqueInput;
    update: Prisma.XOR<Prisma.DisputeUpdateWithoutClipperInput, Prisma.DisputeUncheckedUpdateWithoutClipperInput>;
    create: Prisma.XOR<Prisma.DisputeCreateWithoutClipperInput, Prisma.DisputeUncheckedCreateWithoutClipperInput>;
};
export type DisputeUpdateWithWhereUniqueWithoutClipperInput = {
    where: Prisma.DisputeWhereUniqueInput;
    data: Prisma.XOR<Prisma.DisputeUpdateWithoutClipperInput, Prisma.DisputeUncheckedUpdateWithoutClipperInput>;
};
export type DisputeUpdateManyWithWhereWithoutClipperInput = {
    where: Prisma.DisputeScalarWhereInput;
    data: Prisma.XOR<Prisma.DisputeUpdateManyMutationInput, Prisma.DisputeUncheckedUpdateManyWithoutClipperInput>;
};
export type DisputeScalarWhereInput = {
    AND?: Prisma.DisputeScalarWhereInput | Prisma.DisputeScalarWhereInput[];
    OR?: Prisma.DisputeScalarWhereInput[];
    NOT?: Prisma.DisputeScalarWhereInput | Prisma.DisputeScalarWhereInput[];
    id?: Prisma.StringFilter<"Dispute"> | string;
    clipId?: Prisma.StringFilter<"Dispute"> | string;
    clipperId?: Prisma.StringFilter<"Dispute"> | string;
    reason?: Prisma.StringFilter<"Dispute"> | string;
    status?: Prisma.EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus;
    resolutionNote?: Prisma.StringNullableFilter<"Dispute"> | string | null;
    resolvedById?: Prisma.StringNullableFilter<"Dispute"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Dispute"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Dispute"> | Date | string;
};
export type DisputeUpsertWithWhereUniqueWithoutResolvedByInput = {
    where: Prisma.DisputeWhereUniqueInput;
    update: Prisma.XOR<Prisma.DisputeUpdateWithoutResolvedByInput, Prisma.DisputeUncheckedUpdateWithoutResolvedByInput>;
    create: Prisma.XOR<Prisma.DisputeCreateWithoutResolvedByInput, Prisma.DisputeUncheckedCreateWithoutResolvedByInput>;
};
export type DisputeUpdateWithWhereUniqueWithoutResolvedByInput = {
    where: Prisma.DisputeWhereUniqueInput;
    data: Prisma.XOR<Prisma.DisputeUpdateWithoutResolvedByInput, Prisma.DisputeUncheckedUpdateWithoutResolvedByInput>;
};
export type DisputeUpdateManyWithWhereWithoutResolvedByInput = {
    where: Prisma.DisputeScalarWhereInput;
    data: Prisma.XOR<Prisma.DisputeUpdateManyMutationInput, Prisma.DisputeUncheckedUpdateManyWithoutResolvedByInput>;
};
export type DisputeCreateWithoutClipInput = {
    id?: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clipper: Prisma.UserCreateNestedOneWithoutDisputesRaisedInput;
    resolvedBy?: Prisma.UserCreateNestedOneWithoutDisputesResolvedInput;
};
export type DisputeUncheckedCreateWithoutClipInput = {
    id?: string;
    clipperId: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisputeCreateOrConnectWithoutClipInput = {
    where: Prisma.DisputeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisputeCreateWithoutClipInput, Prisma.DisputeUncheckedCreateWithoutClipInput>;
};
export type DisputeUpsertWithoutClipInput = {
    update: Prisma.XOR<Prisma.DisputeUpdateWithoutClipInput, Prisma.DisputeUncheckedUpdateWithoutClipInput>;
    create: Prisma.XOR<Prisma.DisputeCreateWithoutClipInput, Prisma.DisputeUncheckedCreateWithoutClipInput>;
    where?: Prisma.DisputeWhereInput;
};
export type DisputeUpdateToOneWithWhereWithoutClipInput = {
    where?: Prisma.DisputeWhereInput;
    data: Prisma.XOR<Prisma.DisputeUpdateWithoutClipInput, Prisma.DisputeUncheckedUpdateWithoutClipInput>;
};
export type DisputeUpdateWithoutClipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clipper?: Prisma.UserUpdateOneRequiredWithoutDisputesRaisedNestedInput;
    resolvedBy?: Prisma.UserUpdateOneWithoutDisputesResolvedNestedInput;
};
export type DisputeUncheckedUpdateWithoutClipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisputeCreateManyClipperInput = {
    id?: string;
    clipId: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisputeCreateManyResolvedByInput = {
    id?: string;
    clipId: string;
    clipperId: string;
    reason: string;
    status?: $Enums.DisputeStatus;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisputeUpdateWithoutClipperInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clip?: Prisma.ClipUpdateOneRequiredWithoutDisputeNestedInput;
    resolvedBy?: Prisma.UserUpdateOneWithoutDisputesResolvedNestedInput;
};
export type DisputeUncheckedUpdateWithoutClipperInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clipId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisputeUncheckedUpdateManyWithoutClipperInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clipId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisputeUpdateWithoutResolvedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clip?: Prisma.ClipUpdateOneRequiredWithoutDisputeNestedInput;
    clipper?: Prisma.UserUpdateOneRequiredWithoutDisputesRaisedNestedInput;
};
export type DisputeUncheckedUpdateWithoutResolvedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clipId?: Prisma.StringFieldUpdateOperationsInput | string;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisputeUncheckedUpdateManyWithoutResolvedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clipId?: Prisma.StringFieldUpdateOperationsInput | string;
    clipperId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisputeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clipId?: boolean;
    clipperId?: boolean;
    reason?: boolean;
    status?: boolean;
    resolutionNote?: boolean;
    resolvedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clip?: boolean | Prisma.ClipDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Dispute$resolvedByArgs<ExtArgs>;
}, ExtArgs["result"]["dispute"]>;
export type DisputeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clipId?: boolean;
    clipperId?: boolean;
    reason?: boolean;
    status?: boolean;
    resolutionNote?: boolean;
    resolvedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clip?: boolean | Prisma.ClipDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Dispute$resolvedByArgs<ExtArgs>;
}, ExtArgs["result"]["dispute"]>;
export type DisputeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clipId?: boolean;
    clipperId?: boolean;
    reason?: boolean;
    status?: boolean;
    resolutionNote?: boolean;
    resolvedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clip?: boolean | Prisma.ClipDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Dispute$resolvedByArgs<ExtArgs>;
}, ExtArgs["result"]["dispute"]>;
export type DisputeSelectScalar = {
    id?: boolean;
    clipId?: boolean;
    clipperId?: boolean;
    reason?: boolean;
    status?: boolean;
    resolutionNote?: boolean;
    resolvedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DisputeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clipId" | "clipperId" | "reason" | "status" | "resolutionNote" | "resolvedById" | "createdAt" | "updatedAt", ExtArgs["result"]["dispute"]>;
export type DisputeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clip?: boolean | Prisma.ClipDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Dispute$resolvedByArgs<ExtArgs>;
};
export type DisputeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clip?: boolean | Prisma.ClipDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Dispute$resolvedByArgs<ExtArgs>;
};
export type DisputeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clip?: boolean | Prisma.ClipDefaultArgs<ExtArgs>;
    clipper?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Dispute$resolvedByArgs<ExtArgs>;
};
export type $DisputePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Dispute";
    objects: {
        clip: Prisma.$ClipPayload<ExtArgs>;
        clipper: Prisma.$UserPayload<ExtArgs>;
        resolvedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clipId: string;
        clipperId: string;
        reason: string;
        status: $Enums.DisputeStatus;
        resolutionNote: string | null;
        resolvedById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["dispute"]>;
    composites: {};
};
export type DisputeGetPayload<S extends boolean | null | undefined | DisputeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DisputePayload, S>;
export type DisputeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DisputeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DisputeCountAggregateInputType | true;
};
export interface DisputeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Dispute'];
        meta: {
            name: 'Dispute';
        };
    };
    findUnique<T extends DisputeFindUniqueArgs>(args: Prisma.SelectSubset<T, DisputeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DisputeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DisputeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DisputeFindFirstArgs>(args?: Prisma.SelectSubset<T, DisputeFindFirstArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DisputeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DisputeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DisputeFindManyArgs>(args?: Prisma.SelectSubset<T, DisputeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DisputeCreateArgs>(args: Prisma.SelectSubset<T, DisputeCreateArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DisputeCreateManyArgs>(args?: Prisma.SelectSubset<T, DisputeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DisputeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DisputeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DisputeDeleteArgs>(args: Prisma.SelectSubset<T, DisputeDeleteArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DisputeUpdateArgs>(args: Prisma.SelectSubset<T, DisputeUpdateArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DisputeDeleteManyArgs>(args?: Prisma.SelectSubset<T, DisputeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DisputeUpdateManyArgs>(args: Prisma.SelectSubset<T, DisputeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DisputeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DisputeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DisputeUpsertArgs>(args: Prisma.SelectSubset<T, DisputeUpsertArgs<ExtArgs>>): Prisma.Prisma__DisputeClient<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DisputeCountArgs>(args?: Prisma.Subset<T, DisputeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DisputeCountAggregateOutputType> : number>;
    aggregate<T extends DisputeAggregateArgs>(args: Prisma.Subset<T, DisputeAggregateArgs>): Prisma.PrismaPromise<GetDisputeAggregateType<T>>;
    groupBy<T extends DisputeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DisputeGroupByArgs['orderBy'];
    } : {
        orderBy?: DisputeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DisputeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DisputeFieldRefs;
}
export interface Prisma__DisputeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clip<T extends Prisma.ClipDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClipDefaultArgs<ExtArgs>>): Prisma.Prisma__ClipClient<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    clipper<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    resolvedBy<T extends Prisma.Dispute$resolvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Dispute$resolvedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DisputeFieldRefs {
    readonly id: Prisma.FieldRef<"Dispute", 'String'>;
    readonly clipId: Prisma.FieldRef<"Dispute", 'String'>;
    readonly clipperId: Prisma.FieldRef<"Dispute", 'String'>;
    readonly reason: Prisma.FieldRef<"Dispute", 'String'>;
    readonly status: Prisma.FieldRef<"Dispute", 'DisputeStatus'>;
    readonly resolutionNote: Prisma.FieldRef<"Dispute", 'String'>;
    readonly resolvedById: Prisma.FieldRef<"Dispute", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Dispute", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Dispute", 'DateTime'>;
}
export type DisputeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where: Prisma.DisputeWhereUniqueInput;
};
export type DisputeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where: Prisma.DisputeWhereUniqueInput;
};
export type DisputeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where?: Prisma.DisputeWhereInput;
    orderBy?: Prisma.DisputeOrderByWithRelationInput | Prisma.DisputeOrderByWithRelationInput[];
    cursor?: Prisma.DisputeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisputeScalarFieldEnum | Prisma.DisputeScalarFieldEnum[];
};
export type DisputeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where?: Prisma.DisputeWhereInput;
    orderBy?: Prisma.DisputeOrderByWithRelationInput | Prisma.DisputeOrderByWithRelationInput[];
    cursor?: Prisma.DisputeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisputeScalarFieldEnum | Prisma.DisputeScalarFieldEnum[];
};
export type DisputeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where?: Prisma.DisputeWhereInput;
    orderBy?: Prisma.DisputeOrderByWithRelationInput | Prisma.DisputeOrderByWithRelationInput[];
    cursor?: Prisma.DisputeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisputeScalarFieldEnum | Prisma.DisputeScalarFieldEnum[];
};
export type DisputeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisputeCreateInput, Prisma.DisputeUncheckedCreateInput>;
};
export type DisputeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DisputeCreateManyInput | Prisma.DisputeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DisputeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    data: Prisma.DisputeCreateManyInput | Prisma.DisputeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DisputeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DisputeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisputeUpdateInput, Prisma.DisputeUncheckedUpdateInput>;
    where: Prisma.DisputeWhereUniqueInput;
};
export type DisputeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DisputeUpdateManyMutationInput, Prisma.DisputeUncheckedUpdateManyInput>;
    where?: Prisma.DisputeWhereInput;
    limit?: number;
};
export type DisputeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisputeUpdateManyMutationInput, Prisma.DisputeUncheckedUpdateManyInput>;
    where?: Prisma.DisputeWhereInput;
    limit?: number;
    include?: Prisma.DisputeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DisputeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where: Prisma.DisputeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisputeCreateInput, Prisma.DisputeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DisputeUpdateInput, Prisma.DisputeUncheckedUpdateInput>;
};
export type DisputeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where: Prisma.DisputeWhereUniqueInput;
};
export type DisputeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisputeWhereInput;
    limit?: number;
};
export type Dispute$resolvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type DisputeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    include?: Prisma.DisputeInclude<ExtArgs> | null;
};
