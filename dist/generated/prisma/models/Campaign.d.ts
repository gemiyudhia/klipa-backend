import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CampaignModel = runtime.Types.Result.DefaultSelection<Prisma.$CampaignPayload>;
export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null;
    _avg: CampaignAvgAggregateOutputType | null;
    _sum: CampaignSumAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
export type CampaignAvgAggregateOutputType = {
    rewardPerClip: number | null;
    totalBudget: number | null;
    remainingBudget: number | null;
    platformFeeAmount: number | null;
    totalCharged: number | null;
};
export type CampaignSumAggregateOutputType = {
    rewardPerClip: number | null;
    totalBudget: number | null;
    remainingBudget: number | null;
    platformFeeAmount: number | null;
    totalCharged: number | null;
};
export type CampaignMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    creatorId: string | null;
    rewardPerClip: number | null;
    totalBudget: number | null;
    remainingBudget: number | null;
    platformFeeAmount: number | null;
    totalCharged: number | null;
    vodUrl: string | null;
    status: $Enums.CampaignStatus | null;
    deadline: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CampaignMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    creatorId: string | null;
    rewardPerClip: number | null;
    totalBudget: number | null;
    remainingBudget: number | null;
    platformFeeAmount: number | null;
    totalCharged: number | null;
    vodUrl: string | null;
    status: $Enums.CampaignStatus | null;
    deadline: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CampaignCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    creatorId: number;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount: number;
    totalCharged: number;
    vodUrl: number;
    status: number;
    deadline: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CampaignAvgAggregateInputType = {
    rewardPerClip?: true;
    totalBudget?: true;
    remainingBudget?: true;
    platformFeeAmount?: true;
    totalCharged?: true;
};
export type CampaignSumAggregateInputType = {
    rewardPerClip?: true;
    totalBudget?: true;
    remainingBudget?: true;
    platformFeeAmount?: true;
    totalCharged?: true;
};
export type CampaignMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creatorId?: true;
    rewardPerClip?: true;
    totalBudget?: true;
    remainingBudget?: true;
    platformFeeAmount?: true;
    totalCharged?: true;
    vodUrl?: true;
    status?: true;
    deadline?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CampaignMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creatorId?: true;
    rewardPerClip?: true;
    totalBudget?: true;
    remainingBudget?: true;
    platformFeeAmount?: true;
    totalCharged?: true;
    vodUrl?: true;
    status?: true;
    deadline?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CampaignCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creatorId?: true;
    rewardPerClip?: true;
    totalBudget?: true;
    remainingBudget?: true;
    platformFeeAmount?: true;
    totalCharged?: true;
    vodUrl?: true;
    status?: true;
    deadline?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CampaignAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CampaignCountAggregateInputType;
    _avg?: CampaignAvgAggregateInputType;
    _sum?: CampaignSumAggregateInputType;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaign[P]> : Prisma.GetScalarType<T[P], AggregateCampaign[P]>;
};
export type CampaignGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithAggregationInput | Prisma.CampaignOrderByWithAggregationInput[];
    by: Prisma.CampaignScalarFieldEnum[] | Prisma.CampaignScalarFieldEnum;
    having?: Prisma.CampaignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignCountAggregateInputType | true;
    _avg?: CampaignAvgAggregateInputType;
    _sum?: CampaignSumAggregateInputType;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type CampaignGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    creatorId: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount: number;
    totalCharged: number;
    vodUrl: string | null;
    status: $Enums.CampaignStatus;
    deadline: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: CampaignCountAggregateOutputType | null;
    _avg: CampaignAvgAggregateOutputType | null;
    _sum: CampaignSumAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
export type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampaignGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]>;
}>>;
export type CampaignWhereInput = {
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    id?: Prisma.StringFilter<"Campaign"> | string;
    title?: Prisma.StringFilter<"Campaign"> | string;
    description?: Prisma.StringFilter<"Campaign"> | string;
    creatorId?: Prisma.StringFilter<"Campaign"> | string;
    rewardPerClip?: Prisma.FloatFilter<"Campaign"> | number;
    totalBudget?: Prisma.FloatFilter<"Campaign"> | number;
    remainingBudget?: Prisma.FloatFilter<"Campaign"> | number;
    platformFeeAmount?: Prisma.FloatFilter<"Campaign"> | number;
    totalCharged?: Prisma.FloatFilter<"Campaign"> | number;
    vodUrl?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    status?: Prisma.EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    clips?: Prisma.ClipListRelationFilter;
};
export type CampaignOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    rewardPerClip?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    platformFeeAmount?: Prisma.SortOrder;
    totalCharged?: Prisma.SortOrder;
    vodUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    creator?: Prisma.UserOrderByWithRelationInput;
    clips?: Prisma.ClipOrderByRelationAggregateInput;
};
export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    title?: Prisma.StringFilter<"Campaign"> | string;
    description?: Prisma.StringFilter<"Campaign"> | string;
    creatorId?: Prisma.StringFilter<"Campaign"> | string;
    rewardPerClip?: Prisma.FloatFilter<"Campaign"> | number;
    totalBudget?: Prisma.FloatFilter<"Campaign"> | number;
    remainingBudget?: Prisma.FloatFilter<"Campaign"> | number;
    platformFeeAmount?: Prisma.FloatFilter<"Campaign"> | number;
    totalCharged?: Prisma.FloatFilter<"Campaign"> | number;
    vodUrl?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    status?: Prisma.EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    clips?: Prisma.ClipListRelationFilter;
}, "id">;
export type CampaignOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    rewardPerClip?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    platformFeeAmount?: Prisma.SortOrder;
    totalCharged?: Prisma.SortOrder;
    vodUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CampaignCountOrderByAggregateInput;
    _avg?: Prisma.CampaignAvgOrderByAggregateInput;
    _max?: Prisma.CampaignMaxOrderByAggregateInput;
    _min?: Prisma.CampaignMinOrderByAggregateInput;
    _sum?: Prisma.CampaignSumOrderByAggregateInput;
};
export type CampaignScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampaignScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    creatorId?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    rewardPerClip?: Prisma.FloatWithAggregatesFilter<"Campaign"> | number;
    totalBudget?: Prisma.FloatWithAggregatesFilter<"Campaign"> | number;
    remainingBudget?: Prisma.FloatWithAggregatesFilter<"Campaign"> | number;
    platformFeeAmount?: Prisma.FloatWithAggregatesFilter<"Campaign"> | number;
    totalCharged?: Prisma.FloatWithAggregatesFilter<"Campaign"> | number;
    vodUrl?: Prisma.StringNullableWithAggregatesFilter<"Campaign"> | string | null;
    status?: Prisma.EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
};
export type CampaignCreateInput = {
    id?: string;
    title: string;
    description: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount?: number;
    totalCharged?: number;
    vodUrl?: string | null;
    status?: $Enums.CampaignStatus;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCampaignsInput;
    clips?: Prisma.ClipCreateNestedManyWithoutCampaignInput;
};
export type CampaignUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    creatorId: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount?: number;
    totalCharged?: number;
    vodUrl?: string | null;
    status?: $Enums.CampaignStatus;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clips?: Prisma.ClipUncheckedCreateNestedManyWithoutCampaignInput;
};
export type CampaignUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCampaignsNestedInput;
    clips?: Prisma.ClipUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clips?: Prisma.ClipUncheckedUpdateManyWithoutCampaignNestedInput;
};
export type CampaignCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    creatorId: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount?: number;
    totalCharged?: number;
    vodUrl?: string | null;
    status?: $Enums.CampaignStatus;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CampaignUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignListRelationFilter = {
    every?: Prisma.CampaignWhereInput;
    some?: Prisma.CampaignWhereInput;
    none?: Prisma.CampaignWhereInput;
};
export type CampaignOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CampaignCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    rewardPerClip?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    platformFeeAmount?: Prisma.SortOrder;
    totalCharged?: Prisma.SortOrder;
    vodUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CampaignAvgOrderByAggregateInput = {
    rewardPerClip?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    platformFeeAmount?: Prisma.SortOrder;
    totalCharged?: Prisma.SortOrder;
};
export type CampaignMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    rewardPerClip?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    platformFeeAmount?: Prisma.SortOrder;
    totalCharged?: Prisma.SortOrder;
    vodUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CampaignMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    rewardPerClip?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    platformFeeAmount?: Prisma.SortOrder;
    totalCharged?: Prisma.SortOrder;
    vodUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CampaignSumOrderByAggregateInput = {
    rewardPerClip?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    platformFeeAmount?: Prisma.SortOrder;
    totalCharged?: Prisma.SortOrder;
};
export type CampaignScalarRelationFilter = {
    is?: Prisma.CampaignWhereInput;
    isNot?: Prisma.CampaignWhereInput;
};
export type CampaignCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutCreatorInput, Prisma.CampaignUncheckedCreateWithoutCreatorInput> | Prisma.CampaignCreateWithoutCreatorInput[] | Prisma.CampaignUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutCreatorInput | Prisma.CampaignCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.CampaignCreateManyCreatorInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutCreatorInput, Prisma.CampaignUncheckedCreateWithoutCreatorInput> | Prisma.CampaignCreateWithoutCreatorInput[] | Prisma.CampaignUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutCreatorInput | Prisma.CampaignCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.CampaignCreateManyCreatorInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutCreatorInput, Prisma.CampaignUncheckedCreateWithoutCreatorInput> | Prisma.CampaignCreateWithoutCreatorInput[] | Prisma.CampaignUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutCreatorInput | Prisma.CampaignCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutCreatorInput | Prisma.CampaignUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.CampaignCreateManyCreatorInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutCreatorInput | Prisma.CampaignUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutCreatorInput | Prisma.CampaignUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutCreatorInput, Prisma.CampaignUncheckedCreateWithoutCreatorInput> | Prisma.CampaignCreateWithoutCreatorInput[] | Prisma.CampaignUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutCreatorInput | Prisma.CampaignCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutCreatorInput | Prisma.CampaignUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.CampaignCreateManyCreatorInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutCreatorInput | Prisma.CampaignUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutCreatorInput | Prisma.CampaignUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus;
};
export type CampaignCreateNestedOneWithoutClipsInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutClipsInput, Prisma.CampaignUncheckedCreateWithoutClipsInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutClipsInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateOneRequiredWithoutClipsNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutClipsInput, Prisma.CampaignUncheckedCreateWithoutClipsInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutClipsInput;
    upsert?: Prisma.CampaignUpsertWithoutClipsInput;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutClipsInput, Prisma.CampaignUpdateWithoutClipsInput>, Prisma.CampaignUncheckedUpdateWithoutClipsInput>;
};
export type CampaignCreateWithoutCreatorInput = {
    id?: string;
    title: string;
    description: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount?: number;
    totalCharged?: number;
    vodUrl?: string | null;
    status?: $Enums.CampaignStatus;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clips?: Prisma.ClipCreateNestedManyWithoutCampaignInput;
};
export type CampaignUncheckedCreateWithoutCreatorInput = {
    id?: string;
    title: string;
    description: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount?: number;
    totalCharged?: number;
    vodUrl?: string | null;
    status?: $Enums.CampaignStatus;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clips?: Prisma.ClipUncheckedCreateNestedManyWithoutCampaignInput;
};
export type CampaignCreateOrConnectWithoutCreatorInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutCreatorInput, Prisma.CampaignUncheckedCreateWithoutCreatorInput>;
};
export type CampaignCreateManyCreatorInputEnvelope = {
    data: Prisma.CampaignCreateManyCreatorInput | Prisma.CampaignCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type CampaignUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.CampaignWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutCreatorInput, Prisma.CampaignUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutCreatorInput, Prisma.CampaignUncheckedCreateWithoutCreatorInput>;
};
export type CampaignUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.CampaignWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutCreatorInput, Prisma.CampaignUncheckedUpdateWithoutCreatorInput>;
};
export type CampaignUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.CampaignScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyWithoutCreatorInput>;
};
export type CampaignScalarWhereInput = {
    AND?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
    OR?: Prisma.CampaignScalarWhereInput[];
    NOT?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
    id?: Prisma.StringFilter<"Campaign"> | string;
    title?: Prisma.StringFilter<"Campaign"> | string;
    description?: Prisma.StringFilter<"Campaign"> | string;
    creatorId?: Prisma.StringFilter<"Campaign"> | string;
    rewardPerClip?: Prisma.FloatFilter<"Campaign"> | number;
    totalBudget?: Prisma.FloatFilter<"Campaign"> | number;
    remainingBudget?: Prisma.FloatFilter<"Campaign"> | number;
    platformFeeAmount?: Prisma.FloatFilter<"Campaign"> | number;
    totalCharged?: Prisma.FloatFilter<"Campaign"> | number;
    vodUrl?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    status?: Prisma.EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
};
export type CampaignCreateWithoutClipsInput = {
    id?: string;
    title: string;
    description: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount?: number;
    totalCharged?: number;
    vodUrl?: string | null;
    status?: $Enums.CampaignStatus;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCampaignsInput;
};
export type CampaignUncheckedCreateWithoutClipsInput = {
    id?: string;
    title: string;
    description: string;
    creatorId: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount?: number;
    totalCharged?: number;
    vodUrl?: string | null;
    status?: $Enums.CampaignStatus;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CampaignCreateOrConnectWithoutClipsInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutClipsInput, Prisma.CampaignUncheckedCreateWithoutClipsInput>;
};
export type CampaignUpsertWithoutClipsInput = {
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutClipsInput, Prisma.CampaignUncheckedUpdateWithoutClipsInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutClipsInput, Prisma.CampaignUncheckedCreateWithoutClipsInput>;
    where?: Prisma.CampaignWhereInput;
};
export type CampaignUpdateToOneWithWhereWithoutClipsInput = {
    where?: Prisma.CampaignWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutClipsInput, Prisma.CampaignUncheckedUpdateWithoutClipsInput>;
};
export type CampaignUpdateWithoutClipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCampaignsNestedInput;
};
export type CampaignUncheckedUpdateWithoutClipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignCreateManyCreatorInput = {
    id?: string;
    title: string;
    description: string;
    rewardPerClip: number;
    totalBudget: number;
    remainingBudget: number;
    platformFeeAmount?: number;
    totalCharged?: number;
    vodUrl?: string | null;
    status?: $Enums.CampaignStatus;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CampaignUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clips?: Prisma.ClipUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clips?: Prisma.ClipUncheckedUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardPerClip?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformFeeAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCharged?: Prisma.FloatFieldUpdateOperationsInput | number;
    vodUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignCountOutputType = {
    clips: number;
};
export type CampaignCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clips?: boolean | CampaignCountOutputTypeCountClipsArgs;
};
export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignCountOutputTypeSelect<ExtArgs> | null;
};
export type CampaignCountOutputTypeCountClipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClipWhereInput;
};
export type CampaignSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creatorId?: boolean;
    rewardPerClip?: boolean;
    totalBudget?: boolean;
    remainingBudget?: boolean;
    platformFeeAmount?: boolean;
    totalCharged?: boolean;
    vodUrl?: boolean;
    status?: boolean;
    deadline?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    clips?: boolean | Prisma.Campaign$clipsArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creatorId?: boolean;
    rewardPerClip?: boolean;
    totalBudget?: boolean;
    remainingBudget?: boolean;
    platformFeeAmount?: boolean;
    totalCharged?: boolean;
    vodUrl?: boolean;
    status?: boolean;
    deadline?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creatorId?: boolean;
    rewardPerClip?: boolean;
    totalBudget?: boolean;
    remainingBudget?: boolean;
    platformFeeAmount?: boolean;
    totalCharged?: boolean;
    vodUrl?: boolean;
    status?: boolean;
    deadline?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creatorId?: boolean;
    rewardPerClip?: boolean;
    totalBudget?: boolean;
    remainingBudget?: boolean;
    platformFeeAmount?: boolean;
    totalCharged?: boolean;
    vodUrl?: boolean;
    status?: boolean;
    deadline?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CampaignOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "creatorId" | "rewardPerClip" | "totalBudget" | "remainingBudget" | "platformFeeAmount" | "totalCharged" | "vodUrl" | "status" | "deadline" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>;
export type CampaignInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    clips?: boolean | Prisma.Campaign$clipsArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CampaignIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CampaignPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Campaign";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        clips: Prisma.$ClipPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        creatorId: string;
        rewardPerClip: number;
        totalBudget: number;
        remainingBudget: number;
        platformFeeAmount: number;
        totalCharged: number;
        vodUrl: string | null;
        status: $Enums.CampaignStatus;
        deadline: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["campaign"]>;
    composites: {};
};
export type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampaignPayload, S>;
export type CampaignCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampaignCountAggregateInputType | true;
};
export interface CampaignDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Campaign'];
        meta: {
            name: 'Campaign';
        };
    };
    findUnique<T extends CampaignFindUniqueArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CampaignFindFirstArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CampaignFindManyArgs>(args?: Prisma.SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CampaignCreateArgs>(args: Prisma.SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CampaignCreateManyArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CampaignDeleteArgs>(args: Prisma.SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CampaignUpdateArgs>(args: Prisma.SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CampaignDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CampaignUpdateManyArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CampaignUpsertArgs>(args: Prisma.SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CampaignCountArgs>(args?: Prisma.Subset<T, CampaignCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampaignCountAggregateOutputType> : number>;
    aggregate<T extends CampaignAggregateArgs>(args: Prisma.Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>;
    groupBy<T extends CampaignGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampaignGroupByArgs['orderBy'];
    } : {
        orderBy?: CampaignGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CampaignFieldRefs;
}
export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    clips<T extends Prisma.Campaign$clipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$clipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CampaignFieldRefs {
    readonly id: Prisma.FieldRef<"Campaign", 'String'>;
    readonly title: Prisma.FieldRef<"Campaign", 'String'>;
    readonly description: Prisma.FieldRef<"Campaign", 'String'>;
    readonly creatorId: Prisma.FieldRef<"Campaign", 'String'>;
    readonly rewardPerClip: Prisma.FieldRef<"Campaign", 'Float'>;
    readonly totalBudget: Prisma.FieldRef<"Campaign", 'Float'>;
    readonly remainingBudget: Prisma.FieldRef<"Campaign", 'Float'>;
    readonly platformFeeAmount: Prisma.FieldRef<"Campaign", 'Float'>;
    readonly totalCharged: Prisma.FieldRef<"Campaign", 'Float'>;
    readonly vodUrl: Prisma.FieldRef<"Campaign", 'String'>;
    readonly status: Prisma.FieldRef<"Campaign", 'CampaignStatus'>;
    readonly deadline: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Campaign", 'DateTime'>;
}
export type CampaignFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
};
export type CampaignCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CampaignCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CampaignIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CampaignUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type CampaignUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    where?: Prisma.CampaignWhereInput;
    limit?: number;
    include?: Prisma.CampaignIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CampaignUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
};
export type CampaignDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type Campaign$clipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CampaignDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
};
