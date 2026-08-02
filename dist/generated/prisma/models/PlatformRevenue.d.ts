import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlatformRevenueModel = runtime.Types.Result.DefaultSelection<Prisma.$PlatformRevenuePayload>;
export type AggregatePlatformRevenue = {
    _count: PlatformRevenueCountAggregateOutputType | null;
    _avg: PlatformRevenueAvgAggregateOutputType | null;
    _sum: PlatformRevenueSumAggregateOutputType | null;
    _min: PlatformRevenueMinAggregateOutputType | null;
    _max: PlatformRevenueMaxAggregateOutputType | null;
};
export type PlatformRevenueAvgAggregateOutputType = {
    amount: number | null;
};
export type PlatformRevenueSumAggregateOutputType = {
    amount: number | null;
};
export type PlatformRevenueMinAggregateOutputType = {
    id: string | null;
    source: $Enums.RevenueSource | null;
    amount: number | null;
    referenceId: string | null;
    createdAt: Date | null;
};
export type PlatformRevenueMaxAggregateOutputType = {
    id: string | null;
    source: $Enums.RevenueSource | null;
    amount: number | null;
    referenceId: string | null;
    createdAt: Date | null;
};
export type PlatformRevenueCountAggregateOutputType = {
    id: number;
    source: number;
    amount: number;
    referenceId: number;
    createdAt: number;
    _all: number;
};
export type PlatformRevenueAvgAggregateInputType = {
    amount?: true;
};
export type PlatformRevenueSumAggregateInputType = {
    amount?: true;
};
export type PlatformRevenueMinAggregateInputType = {
    id?: true;
    source?: true;
    amount?: true;
    referenceId?: true;
    createdAt?: true;
};
export type PlatformRevenueMaxAggregateInputType = {
    id?: true;
    source?: true;
    amount?: true;
    referenceId?: true;
    createdAt?: true;
};
export type PlatformRevenueCountAggregateInputType = {
    id?: true;
    source?: true;
    amount?: true;
    referenceId?: true;
    createdAt?: true;
    _all?: true;
};
export type PlatformRevenueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlatformRevenueWhereInput;
    orderBy?: Prisma.PlatformRevenueOrderByWithRelationInput | Prisma.PlatformRevenueOrderByWithRelationInput[];
    cursor?: Prisma.PlatformRevenueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlatformRevenueCountAggregateInputType;
    _avg?: PlatformRevenueAvgAggregateInputType;
    _sum?: PlatformRevenueSumAggregateInputType;
    _min?: PlatformRevenueMinAggregateInputType;
    _max?: PlatformRevenueMaxAggregateInputType;
};
export type GetPlatformRevenueAggregateType<T extends PlatformRevenueAggregateArgs> = {
    [P in keyof T & keyof AggregatePlatformRevenue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlatformRevenue[P]> : Prisma.GetScalarType<T[P], AggregatePlatformRevenue[P]>;
};
export type PlatformRevenueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlatformRevenueWhereInput;
    orderBy?: Prisma.PlatformRevenueOrderByWithAggregationInput | Prisma.PlatformRevenueOrderByWithAggregationInput[];
    by: Prisma.PlatformRevenueScalarFieldEnum[] | Prisma.PlatformRevenueScalarFieldEnum;
    having?: Prisma.PlatformRevenueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlatformRevenueCountAggregateInputType | true;
    _avg?: PlatformRevenueAvgAggregateInputType;
    _sum?: PlatformRevenueSumAggregateInputType;
    _min?: PlatformRevenueMinAggregateInputType;
    _max?: PlatformRevenueMaxAggregateInputType;
};
export type PlatformRevenueGroupByOutputType = {
    id: string;
    source: $Enums.RevenueSource;
    amount: number;
    referenceId: string;
    createdAt: Date;
    _count: PlatformRevenueCountAggregateOutputType | null;
    _avg: PlatformRevenueAvgAggregateOutputType | null;
    _sum: PlatformRevenueSumAggregateOutputType | null;
    _min: PlatformRevenueMinAggregateOutputType | null;
    _max: PlatformRevenueMaxAggregateOutputType | null;
};
export type GetPlatformRevenueGroupByPayload<T extends PlatformRevenueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlatformRevenueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlatformRevenueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlatformRevenueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlatformRevenueGroupByOutputType[P]>;
}>>;
export type PlatformRevenueWhereInput = {
    AND?: Prisma.PlatformRevenueWhereInput | Prisma.PlatformRevenueWhereInput[];
    OR?: Prisma.PlatformRevenueWhereInput[];
    NOT?: Prisma.PlatformRevenueWhereInput | Prisma.PlatformRevenueWhereInput[];
    id?: Prisma.StringFilter<"PlatformRevenue"> | string;
    source?: Prisma.EnumRevenueSourceFilter<"PlatformRevenue"> | $Enums.RevenueSource;
    amount?: Prisma.FloatFilter<"PlatformRevenue"> | number;
    referenceId?: Prisma.StringFilter<"PlatformRevenue"> | string;
    createdAt?: Prisma.DateTimeFilter<"PlatformRevenue"> | Date | string;
};
export type PlatformRevenueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlatformRevenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlatformRevenueWhereInput | Prisma.PlatformRevenueWhereInput[];
    OR?: Prisma.PlatformRevenueWhereInput[];
    NOT?: Prisma.PlatformRevenueWhereInput | Prisma.PlatformRevenueWhereInput[];
    source?: Prisma.EnumRevenueSourceFilter<"PlatformRevenue"> | $Enums.RevenueSource;
    amount?: Prisma.FloatFilter<"PlatformRevenue"> | number;
    referenceId?: Prisma.StringFilter<"PlatformRevenue"> | string;
    createdAt?: Prisma.DateTimeFilter<"PlatformRevenue"> | Date | string;
}, "id">;
export type PlatformRevenueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PlatformRevenueCountOrderByAggregateInput;
    _avg?: Prisma.PlatformRevenueAvgOrderByAggregateInput;
    _max?: Prisma.PlatformRevenueMaxOrderByAggregateInput;
    _min?: Prisma.PlatformRevenueMinOrderByAggregateInput;
    _sum?: Prisma.PlatformRevenueSumOrderByAggregateInput;
};
export type PlatformRevenueScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlatformRevenueScalarWhereWithAggregatesInput | Prisma.PlatformRevenueScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlatformRevenueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlatformRevenueScalarWhereWithAggregatesInput | Prisma.PlatformRevenueScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlatformRevenue"> | string;
    source?: Prisma.EnumRevenueSourceWithAggregatesFilter<"PlatformRevenue"> | $Enums.RevenueSource;
    amount?: Prisma.FloatWithAggregatesFilter<"PlatformRevenue"> | number;
    referenceId?: Prisma.StringWithAggregatesFilter<"PlatformRevenue"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PlatformRevenue"> | Date | string;
};
export type PlatformRevenueCreateInput = {
    id?: string;
    source: $Enums.RevenueSource;
    amount: number;
    referenceId: string;
    createdAt?: Date | string;
};
export type PlatformRevenueUncheckedCreateInput = {
    id?: string;
    source: $Enums.RevenueSource;
    amount: number;
    referenceId: string;
    createdAt?: Date | string;
};
export type PlatformRevenueUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumRevenueSourceFieldUpdateOperationsInput | $Enums.RevenueSource;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlatformRevenueUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumRevenueSourceFieldUpdateOperationsInput | $Enums.RevenueSource;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlatformRevenueCreateManyInput = {
    id?: string;
    source: $Enums.RevenueSource;
    amount: number;
    referenceId: string;
    createdAt?: Date | string;
};
export type PlatformRevenueUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumRevenueSourceFieldUpdateOperationsInput | $Enums.RevenueSource;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlatformRevenueUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumRevenueSourceFieldUpdateOperationsInput | $Enums.RevenueSource;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlatformRevenueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlatformRevenueAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PlatformRevenueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlatformRevenueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlatformRevenueSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type EnumRevenueSourceFieldUpdateOperationsInput = {
    set?: $Enums.RevenueSource;
};
export type PlatformRevenueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    amount?: boolean;
    referenceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["platformRevenue"]>;
export type PlatformRevenueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    amount?: boolean;
    referenceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["platformRevenue"]>;
export type PlatformRevenueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    amount?: boolean;
    referenceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["platformRevenue"]>;
export type PlatformRevenueSelectScalar = {
    id?: boolean;
    source?: boolean;
    amount?: boolean;
    referenceId?: boolean;
    createdAt?: boolean;
};
export type PlatformRevenueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "source" | "amount" | "referenceId" | "createdAt", ExtArgs["result"]["platformRevenue"]>;
export type $PlatformRevenuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlatformRevenue";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        source: $Enums.RevenueSource;
        amount: number;
        referenceId: string;
        createdAt: Date;
    }, ExtArgs["result"]["platformRevenue"]>;
    composites: {};
};
export type PlatformRevenueGetPayload<S extends boolean | null | undefined | PlatformRevenueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload, S>;
export type PlatformRevenueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlatformRevenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlatformRevenueCountAggregateInputType | true;
};
export interface PlatformRevenueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlatformRevenue'];
        meta: {
            name: 'PlatformRevenue';
        };
    };
    findUnique<T extends PlatformRevenueFindUniqueArgs>(args: Prisma.SelectSubset<T, PlatformRevenueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlatformRevenueClient<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlatformRevenueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlatformRevenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlatformRevenueClient<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlatformRevenueFindFirstArgs>(args?: Prisma.SelectSubset<T, PlatformRevenueFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlatformRevenueClient<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlatformRevenueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlatformRevenueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlatformRevenueClient<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlatformRevenueFindManyArgs>(args?: Prisma.SelectSubset<T, PlatformRevenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlatformRevenueCreateArgs>(args: Prisma.SelectSubset<T, PlatformRevenueCreateArgs<ExtArgs>>): Prisma.Prisma__PlatformRevenueClient<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlatformRevenueCreateManyArgs>(args?: Prisma.SelectSubset<T, PlatformRevenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlatformRevenueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlatformRevenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlatformRevenueDeleteArgs>(args: Prisma.SelectSubset<T, PlatformRevenueDeleteArgs<ExtArgs>>): Prisma.Prisma__PlatformRevenueClient<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlatformRevenueUpdateArgs>(args: Prisma.SelectSubset<T, PlatformRevenueUpdateArgs<ExtArgs>>): Prisma.Prisma__PlatformRevenueClient<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlatformRevenueDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlatformRevenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlatformRevenueUpdateManyArgs>(args: Prisma.SelectSubset<T, PlatformRevenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlatformRevenueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlatformRevenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlatformRevenueUpsertArgs>(args: Prisma.SelectSubset<T, PlatformRevenueUpsertArgs<ExtArgs>>): Prisma.Prisma__PlatformRevenueClient<runtime.Types.Result.GetResult<Prisma.$PlatformRevenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlatformRevenueCountArgs>(args?: Prisma.Subset<T, PlatformRevenueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlatformRevenueCountAggregateOutputType> : number>;
    aggregate<T extends PlatformRevenueAggregateArgs>(args: Prisma.Subset<T, PlatformRevenueAggregateArgs>): Prisma.PrismaPromise<GetPlatformRevenueAggregateType<T>>;
    groupBy<T extends PlatformRevenueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlatformRevenueGroupByArgs['orderBy'];
    } : {
        orderBy?: PlatformRevenueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlatformRevenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformRevenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlatformRevenueFieldRefs;
}
export interface Prisma__PlatformRevenueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlatformRevenueFieldRefs {
    readonly id: Prisma.FieldRef<"PlatformRevenue", 'String'>;
    readonly source: Prisma.FieldRef<"PlatformRevenue", 'RevenueSource'>;
    readonly amount: Prisma.FieldRef<"PlatformRevenue", 'Float'>;
    readonly referenceId: Prisma.FieldRef<"PlatformRevenue", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PlatformRevenue", 'DateTime'>;
}
export type PlatformRevenueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    where: Prisma.PlatformRevenueWhereUniqueInput;
};
export type PlatformRevenueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    where: Prisma.PlatformRevenueWhereUniqueInput;
};
export type PlatformRevenueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    where?: Prisma.PlatformRevenueWhereInput;
    orderBy?: Prisma.PlatformRevenueOrderByWithRelationInput | Prisma.PlatformRevenueOrderByWithRelationInput[];
    cursor?: Prisma.PlatformRevenueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlatformRevenueScalarFieldEnum | Prisma.PlatformRevenueScalarFieldEnum[];
};
export type PlatformRevenueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    where?: Prisma.PlatformRevenueWhereInput;
    orderBy?: Prisma.PlatformRevenueOrderByWithRelationInput | Prisma.PlatformRevenueOrderByWithRelationInput[];
    cursor?: Prisma.PlatformRevenueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlatformRevenueScalarFieldEnum | Prisma.PlatformRevenueScalarFieldEnum[];
};
export type PlatformRevenueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    where?: Prisma.PlatformRevenueWhereInput;
    orderBy?: Prisma.PlatformRevenueOrderByWithRelationInput | Prisma.PlatformRevenueOrderByWithRelationInput[];
    cursor?: Prisma.PlatformRevenueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlatformRevenueScalarFieldEnum | Prisma.PlatformRevenueScalarFieldEnum[];
};
export type PlatformRevenueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlatformRevenueCreateInput, Prisma.PlatformRevenueUncheckedCreateInput>;
};
export type PlatformRevenueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlatformRevenueCreateManyInput | Prisma.PlatformRevenueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlatformRevenueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    data: Prisma.PlatformRevenueCreateManyInput | Prisma.PlatformRevenueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlatformRevenueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlatformRevenueUpdateInput, Prisma.PlatformRevenueUncheckedUpdateInput>;
    where: Prisma.PlatformRevenueWhereUniqueInput;
};
export type PlatformRevenueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlatformRevenueUpdateManyMutationInput, Prisma.PlatformRevenueUncheckedUpdateManyInput>;
    where?: Prisma.PlatformRevenueWhereInput;
    limit?: number;
};
export type PlatformRevenueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlatformRevenueUpdateManyMutationInput, Prisma.PlatformRevenueUncheckedUpdateManyInput>;
    where?: Prisma.PlatformRevenueWhereInput;
    limit?: number;
};
export type PlatformRevenueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    where: Prisma.PlatformRevenueWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlatformRevenueCreateInput, Prisma.PlatformRevenueUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlatformRevenueUpdateInput, Prisma.PlatformRevenueUncheckedUpdateInput>;
};
export type PlatformRevenueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
    where: Prisma.PlatformRevenueWhereUniqueInput;
};
export type PlatformRevenueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlatformRevenueWhereInput;
    limit?: number;
};
export type PlatformRevenueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformRevenueSelect<ExtArgs> | null;
    omit?: Prisma.PlatformRevenueOmit<ExtArgs> | null;
};
