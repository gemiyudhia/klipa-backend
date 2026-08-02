import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WithdrawalRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$WithdrawalRequestPayload>;
export type AggregateWithdrawalRequest = {
    _count: WithdrawalRequestCountAggregateOutputType | null;
    _avg: WithdrawalRequestAvgAggregateOutputType | null;
    _sum: WithdrawalRequestSumAggregateOutputType | null;
    _min: WithdrawalRequestMinAggregateOutputType | null;
    _max: WithdrawalRequestMaxAggregateOutputType | null;
};
export type WithdrawalRequestAvgAggregateOutputType = {
    amount: number | null;
    taxAmount: number | null;
    netAmount: number | null;
};
export type WithdrawalRequestSumAggregateOutputType = {
    amount: number | null;
    taxAmount: number | null;
    netAmount: number | null;
};
export type WithdrawalRequestMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    amount: number | null;
    taxAmount: number | null;
    netAmount: number | null;
    status: $Enums.WithdrawalStatus | null;
    rejectionReason: string | null;
    processedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WithdrawalRequestMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    amount: number | null;
    taxAmount: number | null;
    netAmount: number | null;
    status: $Enums.WithdrawalStatus | null;
    rejectionReason: string | null;
    processedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WithdrawalRequestCountAggregateOutputType = {
    id: number;
    userId: number;
    amount: number;
    taxAmount: number;
    netAmount: number;
    status: number;
    rejectionReason: number;
    processedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WithdrawalRequestAvgAggregateInputType = {
    amount?: true;
    taxAmount?: true;
    netAmount?: true;
};
export type WithdrawalRequestSumAggregateInputType = {
    amount?: true;
    taxAmount?: true;
    netAmount?: true;
};
export type WithdrawalRequestMinAggregateInputType = {
    id?: true;
    userId?: true;
    amount?: true;
    taxAmount?: true;
    netAmount?: true;
    status?: true;
    rejectionReason?: true;
    processedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WithdrawalRequestMaxAggregateInputType = {
    id?: true;
    userId?: true;
    amount?: true;
    taxAmount?: true;
    netAmount?: true;
    status?: true;
    rejectionReason?: true;
    processedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WithdrawalRequestCountAggregateInputType = {
    id?: true;
    userId?: true;
    amount?: true;
    taxAmount?: true;
    netAmount?: true;
    status?: true;
    rejectionReason?: true;
    processedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WithdrawalRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WithdrawalRequestWhereInput;
    orderBy?: Prisma.WithdrawalRequestOrderByWithRelationInput | Prisma.WithdrawalRequestOrderByWithRelationInput[];
    cursor?: Prisma.WithdrawalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WithdrawalRequestCountAggregateInputType;
    _avg?: WithdrawalRequestAvgAggregateInputType;
    _sum?: WithdrawalRequestSumAggregateInputType;
    _min?: WithdrawalRequestMinAggregateInputType;
    _max?: WithdrawalRequestMaxAggregateInputType;
};
export type GetWithdrawalRequestAggregateType<T extends WithdrawalRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateWithdrawalRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWithdrawalRequest[P]> : Prisma.GetScalarType<T[P], AggregateWithdrawalRequest[P]>;
};
export type WithdrawalRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WithdrawalRequestWhereInput;
    orderBy?: Prisma.WithdrawalRequestOrderByWithAggregationInput | Prisma.WithdrawalRequestOrderByWithAggregationInput[];
    by: Prisma.WithdrawalRequestScalarFieldEnum[] | Prisma.WithdrawalRequestScalarFieldEnum;
    having?: Prisma.WithdrawalRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WithdrawalRequestCountAggregateInputType | true;
    _avg?: WithdrawalRequestAvgAggregateInputType;
    _sum?: WithdrawalRequestSumAggregateInputType;
    _min?: WithdrawalRequestMinAggregateInputType;
    _max?: WithdrawalRequestMaxAggregateInputType;
};
export type WithdrawalRequestGroupByOutputType = {
    id: string;
    userId: string;
    amount: number;
    taxAmount: number | null;
    netAmount: number | null;
    status: $Enums.WithdrawalStatus;
    rejectionReason: string | null;
    processedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WithdrawalRequestCountAggregateOutputType | null;
    _avg: WithdrawalRequestAvgAggregateOutputType | null;
    _sum: WithdrawalRequestSumAggregateOutputType | null;
    _min: WithdrawalRequestMinAggregateOutputType | null;
    _max: WithdrawalRequestMaxAggregateOutputType | null;
};
export type GetWithdrawalRequestGroupByPayload<T extends WithdrawalRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WithdrawalRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WithdrawalRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WithdrawalRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WithdrawalRequestGroupByOutputType[P]>;
}>>;
export type WithdrawalRequestWhereInput = {
    AND?: Prisma.WithdrawalRequestWhereInput | Prisma.WithdrawalRequestWhereInput[];
    OR?: Prisma.WithdrawalRequestWhereInput[];
    NOT?: Prisma.WithdrawalRequestWhereInput | Prisma.WithdrawalRequestWhereInput[];
    id?: Prisma.StringFilter<"WithdrawalRequest"> | string;
    userId?: Prisma.StringFilter<"WithdrawalRequest"> | string;
    amount?: Prisma.FloatFilter<"WithdrawalRequest"> | number;
    taxAmount?: Prisma.FloatNullableFilter<"WithdrawalRequest"> | number | null;
    netAmount?: Prisma.FloatNullableFilter<"WithdrawalRequest"> | number | null;
    status?: Prisma.EnumWithdrawalStatusFilter<"WithdrawalRequest"> | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.StringNullableFilter<"WithdrawalRequest"> | string | null;
    processedById?: Prisma.StringNullableFilter<"WithdrawalRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WithdrawalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WithdrawalRequest"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    processedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type WithdrawalRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    netAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    processedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    processedBy?: Prisma.UserOrderByWithRelationInput;
};
export type WithdrawalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WithdrawalRequestWhereInput | Prisma.WithdrawalRequestWhereInput[];
    OR?: Prisma.WithdrawalRequestWhereInput[];
    NOT?: Prisma.WithdrawalRequestWhereInput | Prisma.WithdrawalRequestWhereInput[];
    userId?: Prisma.StringFilter<"WithdrawalRequest"> | string;
    amount?: Prisma.FloatFilter<"WithdrawalRequest"> | number;
    taxAmount?: Prisma.FloatNullableFilter<"WithdrawalRequest"> | number | null;
    netAmount?: Prisma.FloatNullableFilter<"WithdrawalRequest"> | number | null;
    status?: Prisma.EnumWithdrawalStatusFilter<"WithdrawalRequest"> | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.StringNullableFilter<"WithdrawalRequest"> | string | null;
    processedById?: Prisma.StringNullableFilter<"WithdrawalRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WithdrawalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WithdrawalRequest"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    processedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type WithdrawalRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    netAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    processedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WithdrawalRequestCountOrderByAggregateInput;
    _avg?: Prisma.WithdrawalRequestAvgOrderByAggregateInput;
    _max?: Prisma.WithdrawalRequestMaxOrderByAggregateInput;
    _min?: Prisma.WithdrawalRequestMinOrderByAggregateInput;
    _sum?: Prisma.WithdrawalRequestSumOrderByAggregateInput;
};
export type WithdrawalRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.WithdrawalRequestScalarWhereWithAggregatesInput | Prisma.WithdrawalRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.WithdrawalRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WithdrawalRequestScalarWhereWithAggregatesInput | Prisma.WithdrawalRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WithdrawalRequest"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"WithdrawalRequest"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"WithdrawalRequest"> | number;
    taxAmount?: Prisma.FloatNullableWithAggregatesFilter<"WithdrawalRequest"> | number | null;
    netAmount?: Prisma.FloatNullableWithAggregatesFilter<"WithdrawalRequest"> | number | null;
    status?: Prisma.EnumWithdrawalStatusWithAggregatesFilter<"WithdrawalRequest"> | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"WithdrawalRequest"> | string | null;
    processedById?: Prisma.StringNullableWithAggregatesFilter<"WithdrawalRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WithdrawalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WithdrawalRequest"> | Date | string;
};
export type WithdrawalRequestCreateInput = {
    id?: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWithdrawalsInput;
    processedBy?: Prisma.UserCreateNestedOneWithoutWithdrawalsProcessedInput;
};
export type WithdrawalRequestUncheckedCreateInput = {
    id?: string;
    userId: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    processedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WithdrawalRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWithdrawalsNestedInput;
    processedBy?: Prisma.UserUpdateOneWithoutWithdrawalsProcessedNestedInput;
};
export type WithdrawalRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WithdrawalRequestCreateManyInput = {
    id?: string;
    userId: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    processedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WithdrawalRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WithdrawalRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WithdrawalRequestListRelationFilter = {
    every?: Prisma.WithdrawalRequestWhereInput;
    some?: Prisma.WithdrawalRequestWhereInput;
    none?: Prisma.WithdrawalRequestWhereInput;
};
export type WithdrawalRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WithdrawalRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WithdrawalRequestAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
};
export type WithdrawalRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WithdrawalRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WithdrawalRequestSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
};
export type WithdrawalRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutUserInput, Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput> | Prisma.WithdrawalRequestCreateWithoutUserInput[] | Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WithdrawalRequestCreateOrConnectWithoutUserInput | Prisma.WithdrawalRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WithdrawalRequestCreateManyUserInputEnvelope;
    connect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
};
export type WithdrawalRequestCreateNestedManyWithoutProcessedByInput = {
    create?: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutProcessedByInput, Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput> | Prisma.WithdrawalRequestCreateWithoutProcessedByInput[] | Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.WithdrawalRequestCreateOrConnectWithoutProcessedByInput | Prisma.WithdrawalRequestCreateOrConnectWithoutProcessedByInput[];
    createMany?: Prisma.WithdrawalRequestCreateManyProcessedByInputEnvelope;
    connect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
};
export type WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutUserInput, Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput> | Prisma.WithdrawalRequestCreateWithoutUserInput[] | Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WithdrawalRequestCreateOrConnectWithoutUserInput | Prisma.WithdrawalRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WithdrawalRequestCreateManyUserInputEnvelope;
    connect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
};
export type WithdrawalRequestUncheckedCreateNestedManyWithoutProcessedByInput = {
    create?: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutProcessedByInput, Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput> | Prisma.WithdrawalRequestCreateWithoutProcessedByInput[] | Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.WithdrawalRequestCreateOrConnectWithoutProcessedByInput | Prisma.WithdrawalRequestCreateOrConnectWithoutProcessedByInput[];
    createMany?: Prisma.WithdrawalRequestCreateManyProcessedByInputEnvelope;
    connect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
};
export type WithdrawalRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutUserInput, Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput> | Prisma.WithdrawalRequestCreateWithoutUserInput[] | Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WithdrawalRequestCreateOrConnectWithoutUserInput | Prisma.WithdrawalRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WithdrawalRequestCreateManyUserInputEnvelope;
    set?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    disconnect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    delete?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    connect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    update?: Prisma.WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WithdrawalRequestUpdateManyWithWhereWithoutUserInput | Prisma.WithdrawalRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WithdrawalRequestScalarWhereInput | Prisma.WithdrawalRequestScalarWhereInput[];
};
export type WithdrawalRequestUpdateManyWithoutProcessedByNestedInput = {
    create?: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutProcessedByInput, Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput> | Prisma.WithdrawalRequestCreateWithoutProcessedByInput[] | Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.WithdrawalRequestCreateOrConnectWithoutProcessedByInput | Prisma.WithdrawalRequestCreateOrConnectWithoutProcessedByInput[];
    upsert?: Prisma.WithdrawalRequestUpsertWithWhereUniqueWithoutProcessedByInput | Prisma.WithdrawalRequestUpsertWithWhereUniqueWithoutProcessedByInput[];
    createMany?: Prisma.WithdrawalRequestCreateManyProcessedByInputEnvelope;
    set?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    disconnect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    delete?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    connect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    update?: Prisma.WithdrawalRequestUpdateWithWhereUniqueWithoutProcessedByInput | Prisma.WithdrawalRequestUpdateWithWhereUniqueWithoutProcessedByInput[];
    updateMany?: Prisma.WithdrawalRequestUpdateManyWithWhereWithoutProcessedByInput | Prisma.WithdrawalRequestUpdateManyWithWhereWithoutProcessedByInput[];
    deleteMany?: Prisma.WithdrawalRequestScalarWhereInput | Prisma.WithdrawalRequestScalarWhereInput[];
};
export type WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutUserInput, Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput> | Prisma.WithdrawalRequestCreateWithoutUserInput[] | Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WithdrawalRequestCreateOrConnectWithoutUserInput | Prisma.WithdrawalRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WithdrawalRequestCreateManyUserInputEnvelope;
    set?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    disconnect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    delete?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    connect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    update?: Prisma.WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WithdrawalRequestUpdateManyWithWhereWithoutUserInput | Prisma.WithdrawalRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WithdrawalRequestScalarWhereInput | Prisma.WithdrawalRequestScalarWhereInput[];
};
export type WithdrawalRequestUncheckedUpdateManyWithoutProcessedByNestedInput = {
    create?: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutProcessedByInput, Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput> | Prisma.WithdrawalRequestCreateWithoutProcessedByInput[] | Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.WithdrawalRequestCreateOrConnectWithoutProcessedByInput | Prisma.WithdrawalRequestCreateOrConnectWithoutProcessedByInput[];
    upsert?: Prisma.WithdrawalRequestUpsertWithWhereUniqueWithoutProcessedByInput | Prisma.WithdrawalRequestUpsertWithWhereUniqueWithoutProcessedByInput[];
    createMany?: Prisma.WithdrawalRequestCreateManyProcessedByInputEnvelope;
    set?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    disconnect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    delete?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    connect?: Prisma.WithdrawalRequestWhereUniqueInput | Prisma.WithdrawalRequestWhereUniqueInput[];
    update?: Prisma.WithdrawalRequestUpdateWithWhereUniqueWithoutProcessedByInput | Prisma.WithdrawalRequestUpdateWithWhereUniqueWithoutProcessedByInput[];
    updateMany?: Prisma.WithdrawalRequestUpdateManyWithWhereWithoutProcessedByInput | Prisma.WithdrawalRequestUpdateManyWithWhereWithoutProcessedByInput[];
    deleteMany?: Prisma.WithdrawalRequestScalarWhereInput | Prisma.WithdrawalRequestScalarWhereInput[];
};
export type EnumWithdrawalStatusFieldUpdateOperationsInput = {
    set?: $Enums.WithdrawalStatus;
};
export type WithdrawalRequestCreateWithoutUserInput = {
    id?: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processedBy?: Prisma.UserCreateNestedOneWithoutWithdrawalsProcessedInput;
};
export type WithdrawalRequestUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    processedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WithdrawalRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.WithdrawalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutUserInput, Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput>;
};
export type WithdrawalRequestCreateManyUserInputEnvelope = {
    data: Prisma.WithdrawalRequestCreateManyUserInput | Prisma.WithdrawalRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WithdrawalRequestCreateWithoutProcessedByInput = {
    id?: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWithdrawalsInput;
};
export type WithdrawalRequestUncheckedCreateWithoutProcessedByInput = {
    id?: string;
    userId: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WithdrawalRequestCreateOrConnectWithoutProcessedByInput = {
    where: Prisma.WithdrawalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutProcessedByInput, Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput>;
};
export type WithdrawalRequestCreateManyProcessedByInputEnvelope = {
    data: Prisma.WithdrawalRequestCreateManyProcessedByInput | Prisma.WithdrawalRequestCreateManyProcessedByInput[];
    skipDuplicates?: boolean;
};
export type WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WithdrawalRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.WithdrawalRequestUpdateWithoutUserInput, Prisma.WithdrawalRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutUserInput, Prisma.WithdrawalRequestUncheckedCreateWithoutUserInput>;
};
export type WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WithdrawalRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.WithdrawalRequestUpdateWithoutUserInput, Prisma.WithdrawalRequestUncheckedUpdateWithoutUserInput>;
};
export type WithdrawalRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WithdrawalRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.WithdrawalRequestUpdateManyMutationInput, Prisma.WithdrawalRequestUncheckedUpdateManyWithoutUserInput>;
};
export type WithdrawalRequestScalarWhereInput = {
    AND?: Prisma.WithdrawalRequestScalarWhereInput | Prisma.WithdrawalRequestScalarWhereInput[];
    OR?: Prisma.WithdrawalRequestScalarWhereInput[];
    NOT?: Prisma.WithdrawalRequestScalarWhereInput | Prisma.WithdrawalRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"WithdrawalRequest"> | string;
    userId?: Prisma.StringFilter<"WithdrawalRequest"> | string;
    amount?: Prisma.FloatFilter<"WithdrawalRequest"> | number;
    taxAmount?: Prisma.FloatNullableFilter<"WithdrawalRequest"> | number | null;
    netAmount?: Prisma.FloatNullableFilter<"WithdrawalRequest"> | number | null;
    status?: Prisma.EnumWithdrawalStatusFilter<"WithdrawalRequest"> | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.StringNullableFilter<"WithdrawalRequest"> | string | null;
    processedById?: Prisma.StringNullableFilter<"WithdrawalRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WithdrawalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WithdrawalRequest"> | Date | string;
};
export type WithdrawalRequestUpsertWithWhereUniqueWithoutProcessedByInput = {
    where: Prisma.WithdrawalRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.WithdrawalRequestUpdateWithoutProcessedByInput, Prisma.WithdrawalRequestUncheckedUpdateWithoutProcessedByInput>;
    create: Prisma.XOR<Prisma.WithdrawalRequestCreateWithoutProcessedByInput, Prisma.WithdrawalRequestUncheckedCreateWithoutProcessedByInput>;
};
export type WithdrawalRequestUpdateWithWhereUniqueWithoutProcessedByInput = {
    where: Prisma.WithdrawalRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.WithdrawalRequestUpdateWithoutProcessedByInput, Prisma.WithdrawalRequestUncheckedUpdateWithoutProcessedByInput>;
};
export type WithdrawalRequestUpdateManyWithWhereWithoutProcessedByInput = {
    where: Prisma.WithdrawalRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.WithdrawalRequestUpdateManyMutationInput, Prisma.WithdrawalRequestUncheckedUpdateManyWithoutProcessedByInput>;
};
export type WithdrawalRequestCreateManyUserInput = {
    id?: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    processedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WithdrawalRequestCreateManyProcessedByInput = {
    id?: string;
    userId: string;
    amount: number;
    taxAmount?: number | null;
    netAmount?: number | null;
    status?: $Enums.WithdrawalStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WithdrawalRequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processedBy?: Prisma.UserUpdateOneWithoutWithdrawalsProcessedNestedInput;
};
export type WithdrawalRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WithdrawalRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WithdrawalRequestUpdateWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWithdrawalsNestedInput;
};
export type WithdrawalRequestUncheckedUpdateWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WithdrawalRequestUncheckedUpdateManyWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    netAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WithdrawalRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    amount?: boolean;
    taxAmount?: boolean;
    netAmount?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    processedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    processedBy?: boolean | Prisma.WithdrawalRequest$processedByArgs<ExtArgs>;
}, ExtArgs["result"]["withdrawalRequest"]>;
export type WithdrawalRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    amount?: boolean;
    taxAmount?: boolean;
    netAmount?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    processedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    processedBy?: boolean | Prisma.WithdrawalRequest$processedByArgs<ExtArgs>;
}, ExtArgs["result"]["withdrawalRequest"]>;
export type WithdrawalRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    amount?: boolean;
    taxAmount?: boolean;
    netAmount?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    processedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    processedBy?: boolean | Prisma.WithdrawalRequest$processedByArgs<ExtArgs>;
}, ExtArgs["result"]["withdrawalRequest"]>;
export type WithdrawalRequestSelectScalar = {
    id?: boolean;
    userId?: boolean;
    amount?: boolean;
    taxAmount?: boolean;
    netAmount?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    processedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WithdrawalRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "amount" | "taxAmount" | "netAmount" | "status" | "rejectionReason" | "processedById" | "createdAt" | "updatedAt", ExtArgs["result"]["withdrawalRequest"]>;
export type WithdrawalRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    processedBy?: boolean | Prisma.WithdrawalRequest$processedByArgs<ExtArgs>;
};
export type WithdrawalRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    processedBy?: boolean | Prisma.WithdrawalRequest$processedByArgs<ExtArgs>;
};
export type WithdrawalRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    processedBy?: boolean | Prisma.WithdrawalRequest$processedByArgs<ExtArgs>;
};
export type $WithdrawalRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WithdrawalRequest";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        processedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        amount: number;
        taxAmount: number | null;
        netAmount: number | null;
        status: $Enums.WithdrawalStatus;
        rejectionReason: string | null;
        processedById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["withdrawalRequest"]>;
    composites: {};
};
export type WithdrawalRequestGetPayload<S extends boolean | null | undefined | WithdrawalRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload, S>;
export type WithdrawalRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WithdrawalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WithdrawalRequestCountAggregateInputType | true;
};
export interface WithdrawalRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WithdrawalRequest'];
        meta: {
            name: 'WithdrawalRequest';
        };
    };
    findUnique<T extends WithdrawalRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, WithdrawalRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WithdrawalRequestClient<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WithdrawalRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WithdrawalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WithdrawalRequestClient<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WithdrawalRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, WithdrawalRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__WithdrawalRequestClient<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WithdrawalRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WithdrawalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WithdrawalRequestClient<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WithdrawalRequestFindManyArgs>(args?: Prisma.SelectSubset<T, WithdrawalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WithdrawalRequestCreateArgs>(args: Prisma.SelectSubset<T, WithdrawalRequestCreateArgs<ExtArgs>>): Prisma.Prisma__WithdrawalRequestClient<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WithdrawalRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, WithdrawalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WithdrawalRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WithdrawalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WithdrawalRequestDeleteArgs>(args: Prisma.SelectSubset<T, WithdrawalRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__WithdrawalRequestClient<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WithdrawalRequestUpdateArgs>(args: Prisma.SelectSubset<T, WithdrawalRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__WithdrawalRequestClient<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WithdrawalRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, WithdrawalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WithdrawalRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, WithdrawalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WithdrawalRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WithdrawalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WithdrawalRequestUpsertArgs>(args: Prisma.SelectSubset<T, WithdrawalRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__WithdrawalRequestClient<runtime.Types.Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WithdrawalRequestCountArgs>(args?: Prisma.Subset<T, WithdrawalRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WithdrawalRequestCountAggregateOutputType> : number>;
    aggregate<T extends WithdrawalRequestAggregateArgs>(args: Prisma.Subset<T, WithdrawalRequestAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalRequestAggregateType<T>>;
    groupBy<T extends WithdrawalRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WithdrawalRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: WithdrawalRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WithdrawalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WithdrawalRequestFieldRefs;
}
export interface Prisma__WithdrawalRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    processedBy<T extends Prisma.WithdrawalRequest$processedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WithdrawalRequest$processedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WithdrawalRequestFieldRefs {
    readonly id: Prisma.FieldRef<"WithdrawalRequest", 'String'>;
    readonly userId: Prisma.FieldRef<"WithdrawalRequest", 'String'>;
    readonly amount: Prisma.FieldRef<"WithdrawalRequest", 'Float'>;
    readonly taxAmount: Prisma.FieldRef<"WithdrawalRequest", 'Float'>;
    readonly netAmount: Prisma.FieldRef<"WithdrawalRequest", 'Float'>;
    readonly status: Prisma.FieldRef<"WithdrawalRequest", 'WithdrawalStatus'>;
    readonly rejectionReason: Prisma.FieldRef<"WithdrawalRequest", 'String'>;
    readonly processedById: Prisma.FieldRef<"WithdrawalRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WithdrawalRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WithdrawalRequest", 'DateTime'>;
}
export type WithdrawalRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    where: Prisma.WithdrawalRequestWhereUniqueInput;
};
export type WithdrawalRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    where: Prisma.WithdrawalRequestWhereUniqueInput;
};
export type WithdrawalRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    where?: Prisma.WithdrawalRequestWhereInput;
    orderBy?: Prisma.WithdrawalRequestOrderByWithRelationInput | Prisma.WithdrawalRequestOrderByWithRelationInput[];
    cursor?: Prisma.WithdrawalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WithdrawalRequestScalarFieldEnum | Prisma.WithdrawalRequestScalarFieldEnum[];
};
export type WithdrawalRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    where?: Prisma.WithdrawalRequestWhereInput;
    orderBy?: Prisma.WithdrawalRequestOrderByWithRelationInput | Prisma.WithdrawalRequestOrderByWithRelationInput[];
    cursor?: Prisma.WithdrawalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WithdrawalRequestScalarFieldEnum | Prisma.WithdrawalRequestScalarFieldEnum[];
};
export type WithdrawalRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    where?: Prisma.WithdrawalRequestWhereInput;
    orderBy?: Prisma.WithdrawalRequestOrderByWithRelationInput | Prisma.WithdrawalRequestOrderByWithRelationInput[];
    cursor?: Prisma.WithdrawalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WithdrawalRequestScalarFieldEnum | Prisma.WithdrawalRequestScalarFieldEnum[];
};
export type WithdrawalRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WithdrawalRequestCreateInput, Prisma.WithdrawalRequestUncheckedCreateInput>;
};
export type WithdrawalRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WithdrawalRequestCreateManyInput | Prisma.WithdrawalRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WithdrawalRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    data: Prisma.WithdrawalRequestCreateManyInput | Prisma.WithdrawalRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WithdrawalRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WithdrawalRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WithdrawalRequestUpdateInput, Prisma.WithdrawalRequestUncheckedUpdateInput>;
    where: Prisma.WithdrawalRequestWhereUniqueInput;
};
export type WithdrawalRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WithdrawalRequestUpdateManyMutationInput, Prisma.WithdrawalRequestUncheckedUpdateManyInput>;
    where?: Prisma.WithdrawalRequestWhereInput;
    limit?: number;
};
export type WithdrawalRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WithdrawalRequestUpdateManyMutationInput, Prisma.WithdrawalRequestUncheckedUpdateManyInput>;
    where?: Prisma.WithdrawalRequestWhereInput;
    limit?: number;
    include?: Prisma.WithdrawalRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WithdrawalRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    where: Prisma.WithdrawalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WithdrawalRequestCreateInput, Prisma.WithdrawalRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WithdrawalRequestUpdateInput, Prisma.WithdrawalRequestUncheckedUpdateInput>;
};
export type WithdrawalRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
    where: Prisma.WithdrawalRequestWhereUniqueInput;
};
export type WithdrawalRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WithdrawalRequestWhereInput;
    limit?: number;
};
export type WithdrawalRequest$processedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type WithdrawalRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WithdrawalRequestSelect<ExtArgs> | null;
    omit?: Prisma.WithdrawalRequestOmit<ExtArgs> | null;
    include?: Prisma.WithdrawalRequestInclude<ExtArgs> | null;
};
