
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model MtoQuery
 * 
 */
export type MtoQuery = $Result.DefaultSelection<Prisma.$MtoQueryPayload>
/**
 * Model VendorEstimation
 * 
 */
export type VendorEstimation = $Result.DefaultSelection<Prisma.$VendorEstimationPayload>
/**
 * Model Estimation
 * 
 */
export type Estimation = $Result.DefaultSelection<Prisma.$EstimationPayload>
/**
 * Model PromisedPricing
 * 
 */
export type PromisedPricing = $Result.DefaultSelection<Prisma.$PromisedPricingPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model MtoOrder
 * 
 */
export type MtoOrder = $Result.DefaultSelection<Prisma.$MtoOrderPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>
/**
 * Model QcRecord
 * 
 */
export type QcRecord = $Result.DefaultSelection<Prisma.$QcRecordPayload>
/**
 * Model GlobalPricing
 * 
 */
export type GlobalPricing = $Result.DefaultSelection<Prisma.$GlobalPricingPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mtoQuery`: Exposes CRUD operations for the **MtoQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MtoQueries
    * const mtoQueries = await prisma.mtoQuery.findMany()
    * ```
    */
  get mtoQuery(): Prisma.MtoQueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendorEstimation`: Exposes CRUD operations for the **VendorEstimation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorEstimations
    * const vendorEstimations = await prisma.vendorEstimation.findMany()
    * ```
    */
  get vendorEstimation(): Prisma.VendorEstimationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estimation`: Exposes CRUD operations for the **Estimation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estimations
    * const estimations = await prisma.estimation.findMany()
    * ```
    */
  get estimation(): Prisma.EstimationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promisedPricing`: Exposes CRUD operations for the **PromisedPricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromisedPricings
    * const promisedPricings = await prisma.promisedPricing.findMany()
    * ```
    */
  get promisedPricing(): Prisma.PromisedPricingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mtoOrder`: Exposes CRUD operations for the **MtoOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MtoOrders
    * const mtoOrders = await prisma.mtoOrder.findMany()
    * ```
    */
  get mtoOrder(): Prisma.MtoOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qcRecord`: Exposes CRUD operations for the **QcRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QcRecords
    * const qcRecords = await prisma.qcRecord.findMany()
    * ```
    */
  get qcRecord(): Prisma.QcRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalPricing`: Exposes CRUD operations for the **GlobalPricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalPricings
    * const globalPricings = await prisma.globalPricing.findMany()
    * ```
    */
  get globalPricing(): Prisma.GlobalPricingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customer: 'Customer',
    MtoQuery: 'MtoQuery',
    VendorEstimation: 'VendorEstimation',
    Estimation: 'Estimation',
    PromisedPricing: 'PromisedPricing',
    Payment: 'Payment',
    MtoOrder: 'MtoOrder',
    PurchaseOrder: 'PurchaseOrder',
    QcRecord: 'QcRecord',
    GlobalPricing: 'GlobalPricing',
    Invoice: 'Invoice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customer" | "mtoQuery" | "vendorEstimation" | "estimation" | "promisedPricing" | "payment" | "mtoOrder" | "purchaseOrder" | "qcRecord" | "globalPricing" | "invoice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      MtoQuery: {
        payload: Prisma.$MtoQueryPayload<ExtArgs>
        fields: Prisma.MtoQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MtoQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MtoQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>
          }
          findFirst: {
            args: Prisma.MtoQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MtoQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>
          }
          findMany: {
            args: Prisma.MtoQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>[]
          }
          create: {
            args: Prisma.MtoQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>
          }
          createMany: {
            args: Prisma.MtoQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MtoQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>[]
          }
          delete: {
            args: Prisma.MtoQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>
          }
          update: {
            args: Prisma.MtoQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>
          }
          deleteMany: {
            args: Prisma.MtoQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MtoQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MtoQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>[]
          }
          upsert: {
            args: Prisma.MtoQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoQueryPayload>
          }
          aggregate: {
            args: Prisma.MtoQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMtoQuery>
          }
          groupBy: {
            args: Prisma.MtoQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MtoQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MtoQueryCountArgs<ExtArgs>
            result: $Utils.Optional<MtoQueryCountAggregateOutputType> | number
          }
        }
      }
      VendorEstimation: {
        payload: Prisma.$VendorEstimationPayload<ExtArgs>
        fields: Prisma.VendorEstimationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorEstimationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorEstimationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>
          }
          findFirst: {
            args: Prisma.VendorEstimationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorEstimationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>
          }
          findMany: {
            args: Prisma.VendorEstimationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>[]
          }
          create: {
            args: Prisma.VendorEstimationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>
          }
          createMany: {
            args: Prisma.VendorEstimationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorEstimationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>[]
          }
          delete: {
            args: Prisma.VendorEstimationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>
          }
          update: {
            args: Prisma.VendorEstimationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>
          }
          deleteMany: {
            args: Prisma.VendorEstimationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorEstimationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorEstimationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>[]
          }
          upsert: {
            args: Prisma.VendorEstimationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorEstimationPayload>
          }
          aggregate: {
            args: Prisma.VendorEstimationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorEstimation>
          }
          groupBy: {
            args: Prisma.VendorEstimationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorEstimationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorEstimationCountArgs<ExtArgs>
            result: $Utils.Optional<VendorEstimationCountAggregateOutputType> | number
          }
        }
      }
      Estimation: {
        payload: Prisma.$EstimationPayload<ExtArgs>
        fields: Prisma.EstimationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstimationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstimationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>
          }
          findFirst: {
            args: Prisma.EstimationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstimationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>
          }
          findMany: {
            args: Prisma.EstimationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>[]
          }
          create: {
            args: Prisma.EstimationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>
          }
          createMany: {
            args: Prisma.EstimationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstimationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>[]
          }
          delete: {
            args: Prisma.EstimationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>
          }
          update: {
            args: Prisma.EstimationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>
          }
          deleteMany: {
            args: Prisma.EstimationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstimationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstimationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>[]
          }
          upsert: {
            args: Prisma.EstimationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimationPayload>
          }
          aggregate: {
            args: Prisma.EstimationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstimation>
          }
          groupBy: {
            args: Prisma.EstimationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstimationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstimationCountArgs<ExtArgs>
            result: $Utils.Optional<EstimationCountAggregateOutputType> | number
          }
        }
      }
      PromisedPricing: {
        payload: Prisma.$PromisedPricingPayload<ExtArgs>
        fields: Prisma.PromisedPricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromisedPricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromisedPricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>
          }
          findFirst: {
            args: Prisma.PromisedPricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromisedPricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>
          }
          findMany: {
            args: Prisma.PromisedPricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>[]
          }
          create: {
            args: Prisma.PromisedPricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>
          }
          createMany: {
            args: Prisma.PromisedPricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromisedPricingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>[]
          }
          delete: {
            args: Prisma.PromisedPricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>
          }
          update: {
            args: Prisma.PromisedPricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>
          }
          deleteMany: {
            args: Prisma.PromisedPricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromisedPricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromisedPricingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>[]
          }
          upsert: {
            args: Prisma.PromisedPricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromisedPricingPayload>
          }
          aggregate: {
            args: Prisma.PromisedPricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromisedPricing>
          }
          groupBy: {
            args: Prisma.PromisedPricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromisedPricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromisedPricingCountArgs<ExtArgs>
            result: $Utils.Optional<PromisedPricingCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      MtoOrder: {
        payload: Prisma.$MtoOrderPayload<ExtArgs>
        fields: Prisma.MtoOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MtoOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MtoOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>
          }
          findFirst: {
            args: Prisma.MtoOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MtoOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>
          }
          findMany: {
            args: Prisma.MtoOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>[]
          }
          create: {
            args: Prisma.MtoOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>
          }
          createMany: {
            args: Prisma.MtoOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MtoOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>[]
          }
          delete: {
            args: Prisma.MtoOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>
          }
          update: {
            args: Prisma.MtoOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>
          }
          deleteMany: {
            args: Prisma.MtoOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MtoOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MtoOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>[]
          }
          upsert: {
            args: Prisma.MtoOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MtoOrderPayload>
          }
          aggregate: {
            args: Prisma.MtoOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMtoOrder>
          }
          groupBy: {
            args: Prisma.MtoOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<MtoOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.MtoOrderCountArgs<ExtArgs>
            result: $Utils.Optional<MtoOrderCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      QcRecord: {
        payload: Prisma.$QcRecordPayload<ExtArgs>
        fields: Prisma.QcRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QcRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QcRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>
          }
          findFirst: {
            args: Prisma.QcRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QcRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>
          }
          findMany: {
            args: Prisma.QcRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>[]
          }
          create: {
            args: Prisma.QcRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>
          }
          createMany: {
            args: Prisma.QcRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QcRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>[]
          }
          delete: {
            args: Prisma.QcRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>
          }
          update: {
            args: Prisma.QcRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>
          }
          deleteMany: {
            args: Prisma.QcRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QcRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QcRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>[]
          }
          upsert: {
            args: Prisma.QcRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcRecordPayload>
          }
          aggregate: {
            args: Prisma.QcRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQcRecord>
          }
          groupBy: {
            args: Prisma.QcRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<QcRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.QcRecordCountArgs<ExtArgs>
            result: $Utils.Optional<QcRecordCountAggregateOutputType> | number
          }
        }
      }
      GlobalPricing: {
        payload: Prisma.$GlobalPricingPayload<ExtArgs>
        fields: Prisma.GlobalPricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalPricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalPricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>
          }
          findFirst: {
            args: Prisma.GlobalPricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalPricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>
          }
          findMany: {
            args: Prisma.GlobalPricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>[]
          }
          create: {
            args: Prisma.GlobalPricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>
          }
          createMany: {
            args: Prisma.GlobalPricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalPricingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>[]
          }
          delete: {
            args: Prisma.GlobalPricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>
          }
          update: {
            args: Prisma.GlobalPricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>
          }
          deleteMany: {
            args: Prisma.GlobalPricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalPricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalPricingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>[]
          }
          upsert: {
            args: Prisma.GlobalPricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricingPayload>
          }
          aggregate: {
            args: Prisma.GlobalPricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalPricing>
          }
          groupBy: {
            args: Prisma.GlobalPricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalPricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalPricingCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalPricingCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customer?: CustomerOmit
    mtoQuery?: MtoQueryOmit
    vendorEstimation?: VendorEstimationOmit
    estimation?: EstimationOmit
    promisedPricing?: PromisedPricingOmit
    payment?: PaymentOmit
    mtoOrder?: MtoOrderOmit
    purchaseOrder?: PurchaseOrderOmit
    qcRecord?: QcRecordOmit
    globalPricing?: GlobalPricingOmit
    invoice?: InvoiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    mtos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtos?: boolean | UserCountOutputTypeCountMtosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MtoQueryWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    mtos: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtos?: boolean | CustomerCountOutputTypeCountMtosArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountMtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MtoQueryWhereInput
  }


  /**
   * Count Type MtoQueryCountOutputType
   */

  export type MtoQueryCountOutputType = {
    vendorEstimations: number
    estimations: number
    payment: number
  }

  export type MtoQueryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorEstimations?: boolean | MtoQueryCountOutputTypeCountVendorEstimationsArgs
    estimations?: boolean | MtoQueryCountOutputTypeCountEstimationsArgs
    payment?: boolean | MtoQueryCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * MtoQueryCountOutputType without action
   */
  export type MtoQueryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQueryCountOutputType
     */
    select?: MtoQueryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MtoQueryCountOutputType without action
   */
  export type MtoQueryCountOutputTypeCountVendorEstimationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorEstimationWhereInput
  }

  /**
   * MtoQueryCountOutputType without action
   */
  export type MtoQueryCountOutputTypeCountEstimationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimationWhereInput
  }

  /**
   * MtoQueryCountOutputType without action
   */
  export type MtoQueryCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    email: string | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    email: string | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    role: number
    email: number
    phone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    role: string
    email: string
    phone: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
    mtos?: boolean | User$mtosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "email" | "phone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtos?: boolean | User$mtosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mtos: Prisma.$MtoQueryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      role: string
      email: string
      phone: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtos<T extends User$mtosArgs<ExtArgs> = {}>(args?: Subset<T, User$mtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mtos
   */
  export type User$mtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    where?: MtoQueryWhereInput
    orderBy?: MtoQueryOrderByWithRelationInput | MtoQueryOrderByWithRelationInput[]
    cursor?: MtoQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MtoQueryScalarFieldEnum | MtoQueryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    phone: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    mtos?: boolean | Customer$mtosArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtos?: boolean | Customer$mtosArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      mtos: Prisma.$MtoQueryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtos<T extends Customer$mtosArgs<ExtArgs> = {}>(args?: Subset<T, Customer$mtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.mtos
   */
  export type Customer$mtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    where?: MtoQueryWhereInput
    orderBy?: MtoQueryOrderByWithRelationInput | MtoQueryOrderByWithRelationInput[]
    cursor?: MtoQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MtoQueryScalarFieldEnum | MtoQueryScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model MtoQuery
   */

  export type AggregateMtoQuery = {
    _count: MtoQueryCountAggregateOutputType | null
    _avg: MtoQueryAvgAggregateOutputType | null
    _sum: MtoQuerySumAggregateOutputType | null
    _min: MtoQueryMinAggregateOutputType | null
    _max: MtoQueryMaxAggregateOutputType | null
  }

  export type MtoQueryAvgAggregateOutputType = {
    queryNo: number | null
    customerId: number | null
    staffId: number | null
  }

  export type MtoQuerySumAggregateOutputType = {
    queryNo: number | null
    customerId: number | null
    staffId: number | null
  }

  export type MtoQueryMinAggregateOutputType = {
    id: string | null
    queryNo: number | null
    customerId: number | null
    staffId: number | null
    leadType: string | null
    mtoType: string | null
    category: string | null
    metalType: string | null
    isStudded: boolean | null
    diamondCaratage: string | null
    weightRange: string | null
    goldKaratage: string | null
    metalColor: string | null
    goldWeight: string | null
    size: string | null
    notes: string | null
    status: string | null
    referenceImages: string | null
    catalogueSku: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MtoQueryMaxAggregateOutputType = {
    id: string | null
    queryNo: number | null
    customerId: number | null
    staffId: number | null
    leadType: string | null
    mtoType: string | null
    category: string | null
    metalType: string | null
    isStudded: boolean | null
    diamondCaratage: string | null
    weightRange: string | null
    goldKaratage: string | null
    metalColor: string | null
    goldWeight: string | null
    size: string | null
    notes: string | null
    status: string | null
    referenceImages: string | null
    catalogueSku: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MtoQueryCountAggregateOutputType = {
    id: number
    queryNo: number
    customerId: number
    staffId: number
    leadType: number
    mtoType: number
    category: number
    metalType: number
    isStudded: number
    diamondCaratage: number
    weightRange: number
    goldKaratage: number
    metalColor: number
    goldWeight: number
    size: number
    notes: number
    status: number
    referenceImages: number
    catalogueSku: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MtoQueryAvgAggregateInputType = {
    queryNo?: true
    customerId?: true
    staffId?: true
  }

  export type MtoQuerySumAggregateInputType = {
    queryNo?: true
    customerId?: true
    staffId?: true
  }

  export type MtoQueryMinAggregateInputType = {
    id?: true
    queryNo?: true
    customerId?: true
    staffId?: true
    leadType?: true
    mtoType?: true
    category?: true
    metalType?: true
    isStudded?: true
    diamondCaratage?: true
    weightRange?: true
    goldKaratage?: true
    metalColor?: true
    goldWeight?: true
    size?: true
    notes?: true
    status?: true
    referenceImages?: true
    catalogueSku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MtoQueryMaxAggregateInputType = {
    id?: true
    queryNo?: true
    customerId?: true
    staffId?: true
    leadType?: true
    mtoType?: true
    category?: true
    metalType?: true
    isStudded?: true
    diamondCaratage?: true
    weightRange?: true
    goldKaratage?: true
    metalColor?: true
    goldWeight?: true
    size?: true
    notes?: true
    status?: true
    referenceImages?: true
    catalogueSku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MtoQueryCountAggregateInputType = {
    id?: true
    queryNo?: true
    customerId?: true
    staffId?: true
    leadType?: true
    mtoType?: true
    category?: true
    metalType?: true
    isStudded?: true
    diamondCaratage?: true
    weightRange?: true
    goldKaratage?: true
    metalColor?: true
    goldWeight?: true
    size?: true
    notes?: true
    status?: true
    referenceImages?: true
    catalogueSku?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MtoQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MtoQuery to aggregate.
     */
    where?: MtoQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MtoQueries to fetch.
     */
    orderBy?: MtoQueryOrderByWithRelationInput | MtoQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MtoQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MtoQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MtoQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MtoQueries
    **/
    _count?: true | MtoQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MtoQueryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MtoQuerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MtoQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MtoQueryMaxAggregateInputType
  }

  export type GetMtoQueryAggregateType<T extends MtoQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateMtoQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMtoQuery[P]>
      : GetScalarType<T[P], AggregateMtoQuery[P]>
  }




  export type MtoQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MtoQueryWhereInput
    orderBy?: MtoQueryOrderByWithAggregationInput | MtoQueryOrderByWithAggregationInput[]
    by: MtoQueryScalarFieldEnum[] | MtoQueryScalarFieldEnum
    having?: MtoQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MtoQueryCountAggregateInputType | true
    _avg?: MtoQueryAvgAggregateInputType
    _sum?: MtoQuerySumAggregateInputType
    _min?: MtoQueryMinAggregateInputType
    _max?: MtoQueryMaxAggregateInputType
  }

  export type MtoQueryGroupByOutputType = {
    id: string
    queryNo: number
    customerId: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage: string | null
    weightRange: string
    goldKaratage: string | null
    metalColor: string | null
    goldWeight: string | null
    size: string | null
    notes: string | null
    status: string
    referenceImages: string | null
    catalogueSku: string | null
    createdAt: Date
    updatedAt: Date
    _count: MtoQueryCountAggregateOutputType | null
    _avg: MtoQueryAvgAggregateOutputType | null
    _sum: MtoQuerySumAggregateOutputType | null
    _min: MtoQueryMinAggregateOutputType | null
    _max: MtoQueryMaxAggregateOutputType | null
  }

  type GetMtoQueryGroupByPayload<T extends MtoQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MtoQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MtoQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MtoQueryGroupByOutputType[P]>
            : GetScalarType<T[P], MtoQueryGroupByOutputType[P]>
        }
      >
    >


  export type MtoQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryNo?: boolean
    customerId?: boolean
    staffId?: boolean
    leadType?: boolean
    mtoType?: boolean
    category?: boolean
    metalType?: boolean
    isStudded?: boolean
    diamondCaratage?: boolean
    weightRange?: boolean
    goldKaratage?: boolean
    metalColor?: boolean
    goldWeight?: boolean
    size?: boolean
    notes?: boolean
    status?: boolean
    referenceImages?: boolean
    catalogueSku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
    vendorEstimations?: boolean | MtoQuery$vendorEstimationsArgs<ExtArgs>
    estimations?: boolean | MtoQuery$estimationsArgs<ExtArgs>
    pricing?: boolean | MtoQuery$pricingArgs<ExtArgs>
    order?: boolean | MtoQuery$orderArgs<ExtArgs>
    payment?: boolean | MtoQuery$paymentArgs<ExtArgs>
    _count?: boolean | MtoQueryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mtoQuery"]>

  export type MtoQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryNo?: boolean
    customerId?: boolean
    staffId?: boolean
    leadType?: boolean
    mtoType?: boolean
    category?: boolean
    metalType?: boolean
    isStudded?: boolean
    diamondCaratage?: boolean
    weightRange?: boolean
    goldKaratage?: boolean
    metalColor?: boolean
    goldWeight?: boolean
    size?: boolean
    notes?: boolean
    status?: boolean
    referenceImages?: boolean
    catalogueSku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mtoQuery"]>

  export type MtoQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryNo?: boolean
    customerId?: boolean
    staffId?: boolean
    leadType?: boolean
    mtoType?: boolean
    category?: boolean
    metalType?: boolean
    isStudded?: boolean
    diamondCaratage?: boolean
    weightRange?: boolean
    goldKaratage?: boolean
    metalColor?: boolean
    goldWeight?: boolean
    size?: boolean
    notes?: boolean
    status?: boolean
    referenceImages?: boolean
    catalogueSku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mtoQuery"]>

  export type MtoQuerySelectScalar = {
    id?: boolean
    queryNo?: boolean
    customerId?: boolean
    staffId?: boolean
    leadType?: boolean
    mtoType?: boolean
    category?: boolean
    metalType?: boolean
    isStudded?: boolean
    diamondCaratage?: boolean
    weightRange?: boolean
    goldKaratage?: boolean
    metalColor?: boolean
    goldWeight?: boolean
    size?: boolean
    notes?: boolean
    status?: boolean
    referenceImages?: boolean
    catalogueSku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MtoQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queryNo" | "customerId" | "staffId" | "leadType" | "mtoType" | "category" | "metalType" | "isStudded" | "diamondCaratage" | "weightRange" | "goldKaratage" | "metalColor" | "goldWeight" | "size" | "notes" | "status" | "referenceImages" | "catalogueSku" | "createdAt" | "updatedAt", ExtArgs["result"]["mtoQuery"]>
  export type MtoQueryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
    vendorEstimations?: boolean | MtoQuery$vendorEstimationsArgs<ExtArgs>
    estimations?: boolean | MtoQuery$estimationsArgs<ExtArgs>
    pricing?: boolean | MtoQuery$pricingArgs<ExtArgs>
    order?: boolean | MtoQuery$orderArgs<ExtArgs>
    payment?: boolean | MtoQuery$paymentArgs<ExtArgs>
    _count?: boolean | MtoQueryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MtoQueryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MtoQueryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MtoQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MtoQuery"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      staff: Prisma.$UserPayload<ExtArgs>
      vendorEstimations: Prisma.$VendorEstimationPayload<ExtArgs>[]
      estimations: Prisma.$EstimationPayload<ExtArgs>[]
      pricing: Prisma.$PromisedPricingPayload<ExtArgs> | null
      order: Prisma.$MtoOrderPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      queryNo: number
      customerId: number
      staffId: number
      leadType: string
      mtoType: string
      category: string
      metalType: string
      isStudded: boolean
      diamondCaratage: string | null
      weightRange: string
      goldKaratage: string | null
      metalColor: string | null
      goldWeight: string | null
      size: string | null
      notes: string | null
      status: string
      referenceImages: string | null
      catalogueSku: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mtoQuery"]>
    composites: {}
  }

  type MtoQueryGetPayload<S extends boolean | null | undefined | MtoQueryDefaultArgs> = $Result.GetResult<Prisma.$MtoQueryPayload, S>

  type MtoQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MtoQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MtoQueryCountAggregateInputType | true
    }

  export interface MtoQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MtoQuery'], meta: { name: 'MtoQuery' } }
    /**
     * Find zero or one MtoQuery that matches the filter.
     * @param {MtoQueryFindUniqueArgs} args - Arguments to find a MtoQuery
     * @example
     * // Get one MtoQuery
     * const mtoQuery = await prisma.mtoQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MtoQueryFindUniqueArgs>(args: SelectSubset<T, MtoQueryFindUniqueArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MtoQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MtoQueryFindUniqueOrThrowArgs} args - Arguments to find a MtoQuery
     * @example
     * // Get one MtoQuery
     * const mtoQuery = await prisma.mtoQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MtoQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, MtoQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MtoQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoQueryFindFirstArgs} args - Arguments to find a MtoQuery
     * @example
     * // Get one MtoQuery
     * const mtoQuery = await prisma.mtoQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MtoQueryFindFirstArgs>(args?: SelectSubset<T, MtoQueryFindFirstArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MtoQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoQueryFindFirstOrThrowArgs} args - Arguments to find a MtoQuery
     * @example
     * // Get one MtoQuery
     * const mtoQuery = await prisma.mtoQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MtoQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, MtoQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MtoQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MtoQueries
     * const mtoQueries = await prisma.mtoQuery.findMany()
     * 
     * // Get first 10 MtoQueries
     * const mtoQueries = await prisma.mtoQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mtoQueryWithIdOnly = await prisma.mtoQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MtoQueryFindManyArgs>(args?: SelectSubset<T, MtoQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MtoQuery.
     * @param {MtoQueryCreateArgs} args - Arguments to create a MtoQuery.
     * @example
     * // Create one MtoQuery
     * const MtoQuery = await prisma.mtoQuery.create({
     *   data: {
     *     // ... data to create a MtoQuery
     *   }
     * })
     * 
     */
    create<T extends MtoQueryCreateArgs>(args: SelectSubset<T, MtoQueryCreateArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MtoQueries.
     * @param {MtoQueryCreateManyArgs} args - Arguments to create many MtoQueries.
     * @example
     * // Create many MtoQueries
     * const mtoQuery = await prisma.mtoQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MtoQueryCreateManyArgs>(args?: SelectSubset<T, MtoQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MtoQueries and returns the data saved in the database.
     * @param {MtoQueryCreateManyAndReturnArgs} args - Arguments to create many MtoQueries.
     * @example
     * // Create many MtoQueries
     * const mtoQuery = await prisma.mtoQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MtoQueries and only return the `id`
     * const mtoQueryWithIdOnly = await prisma.mtoQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MtoQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, MtoQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MtoQuery.
     * @param {MtoQueryDeleteArgs} args - Arguments to delete one MtoQuery.
     * @example
     * // Delete one MtoQuery
     * const MtoQuery = await prisma.mtoQuery.delete({
     *   where: {
     *     // ... filter to delete one MtoQuery
     *   }
     * })
     * 
     */
    delete<T extends MtoQueryDeleteArgs>(args: SelectSubset<T, MtoQueryDeleteArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MtoQuery.
     * @param {MtoQueryUpdateArgs} args - Arguments to update one MtoQuery.
     * @example
     * // Update one MtoQuery
     * const mtoQuery = await prisma.mtoQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MtoQueryUpdateArgs>(args: SelectSubset<T, MtoQueryUpdateArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MtoQueries.
     * @param {MtoQueryDeleteManyArgs} args - Arguments to filter MtoQueries to delete.
     * @example
     * // Delete a few MtoQueries
     * const { count } = await prisma.mtoQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MtoQueryDeleteManyArgs>(args?: SelectSubset<T, MtoQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MtoQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MtoQueries
     * const mtoQuery = await prisma.mtoQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MtoQueryUpdateManyArgs>(args: SelectSubset<T, MtoQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MtoQueries and returns the data updated in the database.
     * @param {MtoQueryUpdateManyAndReturnArgs} args - Arguments to update many MtoQueries.
     * @example
     * // Update many MtoQueries
     * const mtoQuery = await prisma.mtoQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MtoQueries and only return the `id`
     * const mtoQueryWithIdOnly = await prisma.mtoQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MtoQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, MtoQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MtoQuery.
     * @param {MtoQueryUpsertArgs} args - Arguments to update or create a MtoQuery.
     * @example
     * // Update or create a MtoQuery
     * const mtoQuery = await prisma.mtoQuery.upsert({
     *   create: {
     *     // ... data to create a MtoQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MtoQuery we want to update
     *   }
     * })
     */
    upsert<T extends MtoQueryUpsertArgs>(args: SelectSubset<T, MtoQueryUpsertArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MtoQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoQueryCountArgs} args - Arguments to filter MtoQueries to count.
     * @example
     * // Count the number of MtoQueries
     * const count = await prisma.mtoQuery.count({
     *   where: {
     *     // ... the filter for the MtoQueries we want to count
     *   }
     * })
    **/
    count<T extends MtoQueryCountArgs>(
      args?: Subset<T, MtoQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MtoQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MtoQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MtoQueryAggregateArgs>(args: Subset<T, MtoQueryAggregateArgs>): Prisma.PrismaPromise<GetMtoQueryAggregateType<T>>

    /**
     * Group by MtoQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoQueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MtoQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MtoQueryGroupByArgs['orderBy'] }
        : { orderBy?: MtoQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MtoQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMtoQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MtoQuery model
   */
  readonly fields: MtoQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MtoQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MtoQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendorEstimations<T extends MtoQuery$vendorEstimationsArgs<ExtArgs> = {}>(args?: Subset<T, MtoQuery$vendorEstimationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estimations<T extends MtoQuery$estimationsArgs<ExtArgs> = {}>(args?: Subset<T, MtoQuery$estimationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pricing<T extends MtoQuery$pricingArgs<ExtArgs> = {}>(args?: Subset<T, MtoQuery$pricingArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends MtoQuery$orderArgs<ExtArgs> = {}>(args?: Subset<T, MtoQuery$orderArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends MtoQuery$paymentArgs<ExtArgs> = {}>(args?: Subset<T, MtoQuery$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MtoQuery model
   */
  interface MtoQueryFieldRefs {
    readonly id: FieldRef<"MtoQuery", 'String'>
    readonly queryNo: FieldRef<"MtoQuery", 'Int'>
    readonly customerId: FieldRef<"MtoQuery", 'Int'>
    readonly staffId: FieldRef<"MtoQuery", 'Int'>
    readonly leadType: FieldRef<"MtoQuery", 'String'>
    readonly mtoType: FieldRef<"MtoQuery", 'String'>
    readonly category: FieldRef<"MtoQuery", 'String'>
    readonly metalType: FieldRef<"MtoQuery", 'String'>
    readonly isStudded: FieldRef<"MtoQuery", 'Boolean'>
    readonly diamondCaratage: FieldRef<"MtoQuery", 'String'>
    readonly weightRange: FieldRef<"MtoQuery", 'String'>
    readonly goldKaratage: FieldRef<"MtoQuery", 'String'>
    readonly metalColor: FieldRef<"MtoQuery", 'String'>
    readonly goldWeight: FieldRef<"MtoQuery", 'String'>
    readonly size: FieldRef<"MtoQuery", 'String'>
    readonly notes: FieldRef<"MtoQuery", 'String'>
    readonly status: FieldRef<"MtoQuery", 'String'>
    readonly referenceImages: FieldRef<"MtoQuery", 'String'>
    readonly catalogueSku: FieldRef<"MtoQuery", 'String'>
    readonly createdAt: FieldRef<"MtoQuery", 'DateTime'>
    readonly updatedAt: FieldRef<"MtoQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MtoQuery findUnique
   */
  export type MtoQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * Filter, which MtoQuery to fetch.
     */
    where: MtoQueryWhereUniqueInput
  }

  /**
   * MtoQuery findUniqueOrThrow
   */
  export type MtoQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * Filter, which MtoQuery to fetch.
     */
    where: MtoQueryWhereUniqueInput
  }

  /**
   * MtoQuery findFirst
   */
  export type MtoQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * Filter, which MtoQuery to fetch.
     */
    where?: MtoQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MtoQueries to fetch.
     */
    orderBy?: MtoQueryOrderByWithRelationInput | MtoQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MtoQueries.
     */
    cursor?: MtoQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MtoQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MtoQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MtoQueries.
     */
    distinct?: MtoQueryScalarFieldEnum | MtoQueryScalarFieldEnum[]
  }

  /**
   * MtoQuery findFirstOrThrow
   */
  export type MtoQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * Filter, which MtoQuery to fetch.
     */
    where?: MtoQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MtoQueries to fetch.
     */
    orderBy?: MtoQueryOrderByWithRelationInput | MtoQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MtoQueries.
     */
    cursor?: MtoQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MtoQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MtoQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MtoQueries.
     */
    distinct?: MtoQueryScalarFieldEnum | MtoQueryScalarFieldEnum[]
  }

  /**
   * MtoQuery findMany
   */
  export type MtoQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * Filter, which MtoQueries to fetch.
     */
    where?: MtoQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MtoQueries to fetch.
     */
    orderBy?: MtoQueryOrderByWithRelationInput | MtoQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MtoQueries.
     */
    cursor?: MtoQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MtoQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MtoQueries.
     */
    skip?: number
    distinct?: MtoQueryScalarFieldEnum | MtoQueryScalarFieldEnum[]
  }

  /**
   * MtoQuery create
   */
  export type MtoQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * The data needed to create a MtoQuery.
     */
    data: XOR<MtoQueryCreateInput, MtoQueryUncheckedCreateInput>
  }

  /**
   * MtoQuery createMany
   */
  export type MtoQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MtoQueries.
     */
    data: MtoQueryCreateManyInput | MtoQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MtoQuery createManyAndReturn
   */
  export type MtoQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * The data used to create many MtoQueries.
     */
    data: MtoQueryCreateManyInput | MtoQueryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MtoQuery update
   */
  export type MtoQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * The data needed to update a MtoQuery.
     */
    data: XOR<MtoQueryUpdateInput, MtoQueryUncheckedUpdateInput>
    /**
     * Choose, which MtoQuery to update.
     */
    where: MtoQueryWhereUniqueInput
  }

  /**
   * MtoQuery updateMany
   */
  export type MtoQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MtoQueries.
     */
    data: XOR<MtoQueryUpdateManyMutationInput, MtoQueryUncheckedUpdateManyInput>
    /**
     * Filter which MtoQueries to update
     */
    where?: MtoQueryWhereInput
    /**
     * Limit how many MtoQueries to update.
     */
    limit?: number
  }

  /**
   * MtoQuery updateManyAndReturn
   */
  export type MtoQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * The data used to update MtoQueries.
     */
    data: XOR<MtoQueryUpdateManyMutationInput, MtoQueryUncheckedUpdateManyInput>
    /**
     * Filter which MtoQueries to update
     */
    where?: MtoQueryWhereInput
    /**
     * Limit how many MtoQueries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MtoQuery upsert
   */
  export type MtoQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * The filter to search for the MtoQuery to update in case it exists.
     */
    where: MtoQueryWhereUniqueInput
    /**
     * In case the MtoQuery found by the `where` argument doesn't exist, create a new MtoQuery with this data.
     */
    create: XOR<MtoQueryCreateInput, MtoQueryUncheckedCreateInput>
    /**
     * In case the MtoQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MtoQueryUpdateInput, MtoQueryUncheckedUpdateInput>
  }

  /**
   * MtoQuery delete
   */
  export type MtoQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
    /**
     * Filter which MtoQuery to delete.
     */
    where: MtoQueryWhereUniqueInput
  }

  /**
   * MtoQuery deleteMany
   */
  export type MtoQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MtoQueries to delete
     */
    where?: MtoQueryWhereInput
    /**
     * Limit how many MtoQueries to delete.
     */
    limit?: number
  }

  /**
   * MtoQuery.vendorEstimations
   */
  export type MtoQuery$vendorEstimationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    where?: VendorEstimationWhereInput
    orderBy?: VendorEstimationOrderByWithRelationInput | VendorEstimationOrderByWithRelationInput[]
    cursor?: VendorEstimationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorEstimationScalarFieldEnum | VendorEstimationScalarFieldEnum[]
  }

  /**
   * MtoQuery.estimations
   */
  export type MtoQuery$estimationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    where?: EstimationWhereInput
    orderBy?: EstimationOrderByWithRelationInput | EstimationOrderByWithRelationInput[]
    cursor?: EstimationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstimationScalarFieldEnum | EstimationScalarFieldEnum[]
  }

  /**
   * MtoQuery.pricing
   */
  export type MtoQuery$pricingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    where?: PromisedPricingWhereInput
  }

  /**
   * MtoQuery.order
   */
  export type MtoQuery$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    where?: MtoOrderWhereInput
  }

  /**
   * MtoQuery.payment
   */
  export type MtoQuery$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * MtoQuery without action
   */
  export type MtoQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoQuery
     */
    select?: MtoQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoQuery
     */
    omit?: MtoQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoQueryInclude<ExtArgs> | null
  }


  /**
   * Model VendorEstimation
   */

  export type AggregateVendorEstimation = {
    _count: VendorEstimationCountAggregateOutputType | null
    _avg: VendorEstimationAvgAggregateOutputType | null
    _sum: VendorEstimationSumAggregateOutputType | null
    _min: VendorEstimationMinAggregateOutputType | null
    _max: VendorEstimationMaxAggregateOutputType | null
  }

  export type VendorEstimationAvgAggregateOutputType = {
    id: number | null
  }

  export type VendorEstimationSumAggregateOutputType = {
    id: number | null
  }

  export type VendorEstimationMinAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    vendorName: string | null
    goldWeight: string | null
    diamondWeight: string | null
    remarks: string | null
    images: string | null
    isAccepted: boolean | null
    createdAt: Date | null
  }

  export type VendorEstimationMaxAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    vendorName: string | null
    goldWeight: string | null
    diamondWeight: string | null
    remarks: string | null
    images: string | null
    isAccepted: boolean | null
    createdAt: Date | null
  }

  export type VendorEstimationCountAggregateOutputType = {
    id: number
    mtoQueryId: number
    vendorName: number
    goldWeight: number
    diamondWeight: number
    remarks: number
    images: number
    isAccepted: number
    createdAt: number
    _all: number
  }


  export type VendorEstimationAvgAggregateInputType = {
    id?: true
  }

  export type VendorEstimationSumAggregateInputType = {
    id?: true
  }

  export type VendorEstimationMinAggregateInputType = {
    id?: true
    mtoQueryId?: true
    vendorName?: true
    goldWeight?: true
    diamondWeight?: true
    remarks?: true
    images?: true
    isAccepted?: true
    createdAt?: true
  }

  export type VendorEstimationMaxAggregateInputType = {
    id?: true
    mtoQueryId?: true
    vendorName?: true
    goldWeight?: true
    diamondWeight?: true
    remarks?: true
    images?: true
    isAccepted?: true
    createdAt?: true
  }

  export type VendorEstimationCountAggregateInputType = {
    id?: true
    mtoQueryId?: true
    vendorName?: true
    goldWeight?: true
    diamondWeight?: true
    remarks?: true
    images?: true
    isAccepted?: true
    createdAt?: true
    _all?: true
  }

  export type VendorEstimationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorEstimation to aggregate.
     */
    where?: VendorEstimationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorEstimations to fetch.
     */
    orderBy?: VendorEstimationOrderByWithRelationInput | VendorEstimationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorEstimationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorEstimations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorEstimations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorEstimations
    **/
    _count?: true | VendorEstimationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorEstimationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorEstimationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorEstimationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorEstimationMaxAggregateInputType
  }

  export type GetVendorEstimationAggregateType<T extends VendorEstimationAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorEstimation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorEstimation[P]>
      : GetScalarType<T[P], AggregateVendorEstimation[P]>
  }




  export type VendorEstimationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorEstimationWhereInput
    orderBy?: VendorEstimationOrderByWithAggregationInput | VendorEstimationOrderByWithAggregationInput[]
    by: VendorEstimationScalarFieldEnum[] | VendorEstimationScalarFieldEnum
    having?: VendorEstimationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorEstimationCountAggregateInputType | true
    _avg?: VendorEstimationAvgAggregateInputType
    _sum?: VendorEstimationSumAggregateInputType
    _min?: VendorEstimationMinAggregateInputType
    _max?: VendorEstimationMaxAggregateInputType
  }

  export type VendorEstimationGroupByOutputType = {
    id: number
    mtoQueryId: string
    vendorName: string
    goldWeight: string | null
    diamondWeight: string | null
    remarks: string | null
    images: string | null
    isAccepted: boolean
    createdAt: Date
    _count: VendorEstimationCountAggregateOutputType | null
    _avg: VendorEstimationAvgAggregateOutputType | null
    _sum: VendorEstimationSumAggregateOutputType | null
    _min: VendorEstimationMinAggregateOutputType | null
    _max: VendorEstimationMaxAggregateOutputType | null
  }

  type GetVendorEstimationGroupByPayload<T extends VendorEstimationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorEstimationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorEstimationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorEstimationGroupByOutputType[P]>
            : GetScalarType<T[P], VendorEstimationGroupByOutputType[P]>
        }
      >
    >


  export type VendorEstimationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    vendorName?: boolean
    goldWeight?: boolean
    diamondWeight?: boolean
    remarks?: boolean
    images?: boolean
    isAccepted?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorEstimation"]>

  export type VendorEstimationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    vendorName?: boolean
    goldWeight?: boolean
    diamondWeight?: boolean
    remarks?: boolean
    images?: boolean
    isAccepted?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorEstimation"]>

  export type VendorEstimationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    vendorName?: boolean
    goldWeight?: boolean
    diamondWeight?: boolean
    remarks?: boolean
    images?: boolean
    isAccepted?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorEstimation"]>

  export type VendorEstimationSelectScalar = {
    id?: boolean
    mtoQueryId?: boolean
    vendorName?: boolean
    goldWeight?: boolean
    diamondWeight?: boolean
    remarks?: boolean
    images?: boolean
    isAccepted?: boolean
    createdAt?: boolean
  }

  export type VendorEstimationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mtoQueryId" | "vendorName" | "goldWeight" | "diamondWeight" | "remarks" | "images" | "isAccepted" | "createdAt", ExtArgs["result"]["vendorEstimation"]>
  export type VendorEstimationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type VendorEstimationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type VendorEstimationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }

  export type $VendorEstimationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorEstimation"
    objects: {
      mtoQuery: Prisma.$MtoQueryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mtoQueryId: string
      vendorName: string
      goldWeight: string | null
      diamondWeight: string | null
      remarks: string | null
      images: string | null
      isAccepted: boolean
      createdAt: Date
    }, ExtArgs["result"]["vendorEstimation"]>
    composites: {}
  }

  type VendorEstimationGetPayload<S extends boolean | null | undefined | VendorEstimationDefaultArgs> = $Result.GetResult<Prisma.$VendorEstimationPayload, S>

  type VendorEstimationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorEstimationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorEstimationCountAggregateInputType | true
    }

  export interface VendorEstimationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorEstimation'], meta: { name: 'VendorEstimation' } }
    /**
     * Find zero or one VendorEstimation that matches the filter.
     * @param {VendorEstimationFindUniqueArgs} args - Arguments to find a VendorEstimation
     * @example
     * // Get one VendorEstimation
     * const vendorEstimation = await prisma.vendorEstimation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorEstimationFindUniqueArgs>(args: SelectSubset<T, VendorEstimationFindUniqueArgs<ExtArgs>>): Prisma__VendorEstimationClient<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendorEstimation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorEstimationFindUniqueOrThrowArgs} args - Arguments to find a VendorEstimation
     * @example
     * // Get one VendorEstimation
     * const vendorEstimation = await prisma.vendorEstimation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorEstimationFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorEstimationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorEstimationClient<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorEstimation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorEstimationFindFirstArgs} args - Arguments to find a VendorEstimation
     * @example
     * // Get one VendorEstimation
     * const vendorEstimation = await prisma.vendorEstimation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorEstimationFindFirstArgs>(args?: SelectSubset<T, VendorEstimationFindFirstArgs<ExtArgs>>): Prisma__VendorEstimationClient<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorEstimation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorEstimationFindFirstOrThrowArgs} args - Arguments to find a VendorEstimation
     * @example
     * // Get one VendorEstimation
     * const vendorEstimation = await prisma.vendorEstimation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorEstimationFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorEstimationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorEstimationClient<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendorEstimations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorEstimationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorEstimations
     * const vendorEstimations = await prisma.vendorEstimation.findMany()
     * 
     * // Get first 10 VendorEstimations
     * const vendorEstimations = await prisma.vendorEstimation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorEstimationWithIdOnly = await prisma.vendorEstimation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorEstimationFindManyArgs>(args?: SelectSubset<T, VendorEstimationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendorEstimation.
     * @param {VendorEstimationCreateArgs} args - Arguments to create a VendorEstimation.
     * @example
     * // Create one VendorEstimation
     * const VendorEstimation = await prisma.vendorEstimation.create({
     *   data: {
     *     // ... data to create a VendorEstimation
     *   }
     * })
     * 
     */
    create<T extends VendorEstimationCreateArgs>(args: SelectSubset<T, VendorEstimationCreateArgs<ExtArgs>>): Prisma__VendorEstimationClient<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendorEstimations.
     * @param {VendorEstimationCreateManyArgs} args - Arguments to create many VendorEstimations.
     * @example
     * // Create many VendorEstimations
     * const vendorEstimation = await prisma.vendorEstimation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorEstimationCreateManyArgs>(args?: SelectSubset<T, VendorEstimationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendorEstimations and returns the data saved in the database.
     * @param {VendorEstimationCreateManyAndReturnArgs} args - Arguments to create many VendorEstimations.
     * @example
     * // Create many VendorEstimations
     * const vendorEstimation = await prisma.vendorEstimation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendorEstimations and only return the `id`
     * const vendorEstimationWithIdOnly = await prisma.vendorEstimation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorEstimationCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorEstimationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VendorEstimation.
     * @param {VendorEstimationDeleteArgs} args - Arguments to delete one VendorEstimation.
     * @example
     * // Delete one VendorEstimation
     * const VendorEstimation = await prisma.vendorEstimation.delete({
     *   where: {
     *     // ... filter to delete one VendorEstimation
     *   }
     * })
     * 
     */
    delete<T extends VendorEstimationDeleteArgs>(args: SelectSubset<T, VendorEstimationDeleteArgs<ExtArgs>>): Prisma__VendorEstimationClient<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendorEstimation.
     * @param {VendorEstimationUpdateArgs} args - Arguments to update one VendorEstimation.
     * @example
     * // Update one VendorEstimation
     * const vendorEstimation = await prisma.vendorEstimation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorEstimationUpdateArgs>(args: SelectSubset<T, VendorEstimationUpdateArgs<ExtArgs>>): Prisma__VendorEstimationClient<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendorEstimations.
     * @param {VendorEstimationDeleteManyArgs} args - Arguments to filter VendorEstimations to delete.
     * @example
     * // Delete a few VendorEstimations
     * const { count } = await prisma.vendorEstimation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorEstimationDeleteManyArgs>(args?: SelectSubset<T, VendorEstimationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorEstimations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorEstimationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorEstimations
     * const vendorEstimation = await prisma.vendorEstimation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorEstimationUpdateManyArgs>(args: SelectSubset<T, VendorEstimationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorEstimations and returns the data updated in the database.
     * @param {VendorEstimationUpdateManyAndReturnArgs} args - Arguments to update many VendorEstimations.
     * @example
     * // Update many VendorEstimations
     * const vendorEstimation = await prisma.vendorEstimation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VendorEstimations and only return the `id`
     * const vendorEstimationWithIdOnly = await prisma.vendorEstimation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorEstimationUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorEstimationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VendorEstimation.
     * @param {VendorEstimationUpsertArgs} args - Arguments to update or create a VendorEstimation.
     * @example
     * // Update or create a VendorEstimation
     * const vendorEstimation = await prisma.vendorEstimation.upsert({
     *   create: {
     *     // ... data to create a VendorEstimation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorEstimation we want to update
     *   }
     * })
     */
    upsert<T extends VendorEstimationUpsertArgs>(args: SelectSubset<T, VendorEstimationUpsertArgs<ExtArgs>>): Prisma__VendorEstimationClient<$Result.GetResult<Prisma.$VendorEstimationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendorEstimations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorEstimationCountArgs} args - Arguments to filter VendorEstimations to count.
     * @example
     * // Count the number of VendorEstimations
     * const count = await prisma.vendorEstimation.count({
     *   where: {
     *     // ... the filter for the VendorEstimations we want to count
     *   }
     * })
    **/
    count<T extends VendorEstimationCountArgs>(
      args?: Subset<T, VendorEstimationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorEstimationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorEstimation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorEstimationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorEstimationAggregateArgs>(args: Subset<T, VendorEstimationAggregateArgs>): Prisma.PrismaPromise<GetVendorEstimationAggregateType<T>>

    /**
     * Group by VendorEstimation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorEstimationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorEstimationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorEstimationGroupByArgs['orderBy'] }
        : { orderBy?: VendorEstimationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorEstimationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorEstimationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorEstimation model
   */
  readonly fields: VendorEstimationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorEstimation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorEstimationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtoQuery<T extends MtoQueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MtoQueryDefaultArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendorEstimation model
   */
  interface VendorEstimationFieldRefs {
    readonly id: FieldRef<"VendorEstimation", 'Int'>
    readonly mtoQueryId: FieldRef<"VendorEstimation", 'String'>
    readonly vendorName: FieldRef<"VendorEstimation", 'String'>
    readonly goldWeight: FieldRef<"VendorEstimation", 'String'>
    readonly diamondWeight: FieldRef<"VendorEstimation", 'String'>
    readonly remarks: FieldRef<"VendorEstimation", 'String'>
    readonly images: FieldRef<"VendorEstimation", 'String'>
    readonly isAccepted: FieldRef<"VendorEstimation", 'Boolean'>
    readonly createdAt: FieldRef<"VendorEstimation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VendorEstimation findUnique
   */
  export type VendorEstimationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * Filter, which VendorEstimation to fetch.
     */
    where: VendorEstimationWhereUniqueInput
  }

  /**
   * VendorEstimation findUniqueOrThrow
   */
  export type VendorEstimationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * Filter, which VendorEstimation to fetch.
     */
    where: VendorEstimationWhereUniqueInput
  }

  /**
   * VendorEstimation findFirst
   */
  export type VendorEstimationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * Filter, which VendorEstimation to fetch.
     */
    where?: VendorEstimationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorEstimations to fetch.
     */
    orderBy?: VendorEstimationOrderByWithRelationInput | VendorEstimationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorEstimations.
     */
    cursor?: VendorEstimationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorEstimations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorEstimations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorEstimations.
     */
    distinct?: VendorEstimationScalarFieldEnum | VendorEstimationScalarFieldEnum[]
  }

  /**
   * VendorEstimation findFirstOrThrow
   */
  export type VendorEstimationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * Filter, which VendorEstimation to fetch.
     */
    where?: VendorEstimationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorEstimations to fetch.
     */
    orderBy?: VendorEstimationOrderByWithRelationInput | VendorEstimationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorEstimations.
     */
    cursor?: VendorEstimationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorEstimations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorEstimations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorEstimations.
     */
    distinct?: VendorEstimationScalarFieldEnum | VendorEstimationScalarFieldEnum[]
  }

  /**
   * VendorEstimation findMany
   */
  export type VendorEstimationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * Filter, which VendorEstimations to fetch.
     */
    where?: VendorEstimationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorEstimations to fetch.
     */
    orderBy?: VendorEstimationOrderByWithRelationInput | VendorEstimationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorEstimations.
     */
    cursor?: VendorEstimationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorEstimations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorEstimations.
     */
    skip?: number
    distinct?: VendorEstimationScalarFieldEnum | VendorEstimationScalarFieldEnum[]
  }

  /**
   * VendorEstimation create
   */
  export type VendorEstimationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorEstimation.
     */
    data: XOR<VendorEstimationCreateInput, VendorEstimationUncheckedCreateInput>
  }

  /**
   * VendorEstimation createMany
   */
  export type VendorEstimationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorEstimations.
     */
    data: VendorEstimationCreateManyInput | VendorEstimationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendorEstimation createManyAndReturn
   */
  export type VendorEstimationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * The data used to create many VendorEstimations.
     */
    data: VendorEstimationCreateManyInput | VendorEstimationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorEstimation update
   */
  export type VendorEstimationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorEstimation.
     */
    data: XOR<VendorEstimationUpdateInput, VendorEstimationUncheckedUpdateInput>
    /**
     * Choose, which VendorEstimation to update.
     */
    where: VendorEstimationWhereUniqueInput
  }

  /**
   * VendorEstimation updateMany
   */
  export type VendorEstimationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorEstimations.
     */
    data: XOR<VendorEstimationUpdateManyMutationInput, VendorEstimationUncheckedUpdateManyInput>
    /**
     * Filter which VendorEstimations to update
     */
    where?: VendorEstimationWhereInput
    /**
     * Limit how many VendorEstimations to update.
     */
    limit?: number
  }

  /**
   * VendorEstimation updateManyAndReturn
   */
  export type VendorEstimationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * The data used to update VendorEstimations.
     */
    data: XOR<VendorEstimationUpdateManyMutationInput, VendorEstimationUncheckedUpdateManyInput>
    /**
     * Filter which VendorEstimations to update
     */
    where?: VendorEstimationWhereInput
    /**
     * Limit how many VendorEstimations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorEstimation upsert
   */
  export type VendorEstimationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorEstimation to update in case it exists.
     */
    where: VendorEstimationWhereUniqueInput
    /**
     * In case the VendorEstimation found by the `where` argument doesn't exist, create a new VendorEstimation with this data.
     */
    create: XOR<VendorEstimationCreateInput, VendorEstimationUncheckedCreateInput>
    /**
     * In case the VendorEstimation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorEstimationUpdateInput, VendorEstimationUncheckedUpdateInput>
  }

  /**
   * VendorEstimation delete
   */
  export type VendorEstimationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
    /**
     * Filter which VendorEstimation to delete.
     */
    where: VendorEstimationWhereUniqueInput
  }

  /**
   * VendorEstimation deleteMany
   */
  export type VendorEstimationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorEstimations to delete
     */
    where?: VendorEstimationWhereInput
    /**
     * Limit how many VendorEstimations to delete.
     */
    limit?: number
  }

  /**
   * VendorEstimation without action
   */
  export type VendorEstimationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorEstimation
     */
    select?: VendorEstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorEstimation
     */
    omit?: VendorEstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorEstimationInclude<ExtArgs> | null
  }


  /**
   * Model Estimation
   */

  export type AggregateEstimation = {
    _count: EstimationCountAggregateOutputType | null
    _avg: EstimationAvgAggregateOutputType | null
    _sum: EstimationSumAggregateOutputType | null
    _min: EstimationMinAggregateOutputType | null
    _max: EstimationMaxAggregateOutputType | null
  }

  export type EstimationAvgAggregateOutputType = {
    id: number | null
    version: number | null
    goldRate: number | null
    diamondWeight: number | null
    diamondRate: number | null
    makingPercent: number | null
    discountPercent: number | null
    otherStones: number | null
    gstAmount: number | null
    discountAmount: number | null
    totalAmount: number | null
    finalEstimatedPrice: number | null
  }

  export type EstimationSumAggregateOutputType = {
    id: number | null
    version: number | null
    goldRate: number | null
    diamondWeight: number | null
    diamondRate: number | null
    makingPercent: number | null
    discountPercent: number | null
    otherStones: number | null
    gstAmount: number | null
    discountAmount: number | null
    totalAmount: number | null
    finalEstimatedPrice: number | null
  }

  export type EstimationMinAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    version: number | null
    goldWeight: string | null
    goldRate: number | null
    diamondWeight: number | null
    diamondRate: number | null
    makingPercent: number | null
    discountPercent: number | null
    otherStones: number | null
    gstAmount: number | null
    discountAmount: number | null
    totalAmount: number | null
    finalEstimatedPrice: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type EstimationMaxAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    version: number | null
    goldWeight: string | null
    goldRate: number | null
    diamondWeight: number | null
    diamondRate: number | null
    makingPercent: number | null
    discountPercent: number | null
    otherStones: number | null
    gstAmount: number | null
    discountAmount: number | null
    totalAmount: number | null
    finalEstimatedPrice: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type EstimationCountAggregateOutputType = {
    id: number
    mtoQueryId: number
    version: number
    goldWeight: number
    goldRate: number
    diamondWeight: number
    diamondRate: number
    makingPercent: number
    discountPercent: number
    otherStones: number
    gstAmount: number
    discountAmount: number
    totalAmount: number
    finalEstimatedPrice: number
    notes: number
    createdAt: number
    _all: number
  }


  export type EstimationAvgAggregateInputType = {
    id?: true
    version?: true
    goldRate?: true
    diamondWeight?: true
    diamondRate?: true
    makingPercent?: true
    discountPercent?: true
    otherStones?: true
    gstAmount?: true
    discountAmount?: true
    totalAmount?: true
    finalEstimatedPrice?: true
  }

  export type EstimationSumAggregateInputType = {
    id?: true
    version?: true
    goldRate?: true
    diamondWeight?: true
    diamondRate?: true
    makingPercent?: true
    discountPercent?: true
    otherStones?: true
    gstAmount?: true
    discountAmount?: true
    totalAmount?: true
    finalEstimatedPrice?: true
  }

  export type EstimationMinAggregateInputType = {
    id?: true
    mtoQueryId?: true
    version?: true
    goldWeight?: true
    goldRate?: true
    diamondWeight?: true
    diamondRate?: true
    makingPercent?: true
    discountPercent?: true
    otherStones?: true
    gstAmount?: true
    discountAmount?: true
    totalAmount?: true
    finalEstimatedPrice?: true
    notes?: true
    createdAt?: true
  }

  export type EstimationMaxAggregateInputType = {
    id?: true
    mtoQueryId?: true
    version?: true
    goldWeight?: true
    goldRate?: true
    diamondWeight?: true
    diamondRate?: true
    makingPercent?: true
    discountPercent?: true
    otherStones?: true
    gstAmount?: true
    discountAmount?: true
    totalAmount?: true
    finalEstimatedPrice?: true
    notes?: true
    createdAt?: true
  }

  export type EstimationCountAggregateInputType = {
    id?: true
    mtoQueryId?: true
    version?: true
    goldWeight?: true
    goldRate?: true
    diamondWeight?: true
    diamondRate?: true
    makingPercent?: true
    discountPercent?: true
    otherStones?: true
    gstAmount?: true
    discountAmount?: true
    totalAmount?: true
    finalEstimatedPrice?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type EstimationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estimation to aggregate.
     */
    where?: EstimationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimations to fetch.
     */
    orderBy?: EstimationOrderByWithRelationInput | EstimationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstimationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estimations
    **/
    _count?: true | EstimationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstimationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstimationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstimationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstimationMaxAggregateInputType
  }

  export type GetEstimationAggregateType<T extends EstimationAggregateArgs> = {
        [P in keyof T & keyof AggregateEstimation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstimation[P]>
      : GetScalarType<T[P], AggregateEstimation[P]>
  }




  export type EstimationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimationWhereInput
    orderBy?: EstimationOrderByWithAggregationInput | EstimationOrderByWithAggregationInput[]
    by: EstimationScalarFieldEnum[] | EstimationScalarFieldEnum
    having?: EstimationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstimationCountAggregateInputType | true
    _avg?: EstimationAvgAggregateInputType
    _sum?: EstimationSumAggregateInputType
    _min?: EstimationMinAggregateInputType
    _max?: EstimationMaxAggregateInputType
  }

  export type EstimationGroupByOutputType = {
    id: number
    mtoQueryId: string
    version: number
    goldWeight: string
    goldRate: number
    diamondWeight: number | null
    diamondRate: number | null
    makingPercent: number
    discountPercent: number
    otherStones: number | null
    gstAmount: number
    discountAmount: number
    totalAmount: number
    finalEstimatedPrice: number
    notes: string | null
    createdAt: Date
    _count: EstimationCountAggregateOutputType | null
    _avg: EstimationAvgAggregateOutputType | null
    _sum: EstimationSumAggregateOutputType | null
    _min: EstimationMinAggregateOutputType | null
    _max: EstimationMaxAggregateOutputType | null
  }

  type GetEstimationGroupByPayload<T extends EstimationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstimationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstimationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstimationGroupByOutputType[P]>
            : GetScalarType<T[P], EstimationGroupByOutputType[P]>
        }
      >
    >


  export type EstimationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    version?: boolean
    goldWeight?: boolean
    goldRate?: boolean
    diamondWeight?: boolean
    diamondRate?: boolean
    makingPercent?: boolean
    discountPercent?: boolean
    otherStones?: boolean
    gstAmount?: boolean
    discountAmount?: boolean
    totalAmount?: boolean
    finalEstimatedPrice?: boolean
    notes?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estimation"]>

  export type EstimationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    version?: boolean
    goldWeight?: boolean
    goldRate?: boolean
    diamondWeight?: boolean
    diamondRate?: boolean
    makingPercent?: boolean
    discountPercent?: boolean
    otherStones?: boolean
    gstAmount?: boolean
    discountAmount?: boolean
    totalAmount?: boolean
    finalEstimatedPrice?: boolean
    notes?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estimation"]>

  export type EstimationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    version?: boolean
    goldWeight?: boolean
    goldRate?: boolean
    diamondWeight?: boolean
    diamondRate?: boolean
    makingPercent?: boolean
    discountPercent?: boolean
    otherStones?: boolean
    gstAmount?: boolean
    discountAmount?: boolean
    totalAmount?: boolean
    finalEstimatedPrice?: boolean
    notes?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estimation"]>

  export type EstimationSelectScalar = {
    id?: boolean
    mtoQueryId?: boolean
    version?: boolean
    goldWeight?: boolean
    goldRate?: boolean
    diamondWeight?: boolean
    diamondRate?: boolean
    makingPercent?: boolean
    discountPercent?: boolean
    otherStones?: boolean
    gstAmount?: boolean
    discountAmount?: boolean
    totalAmount?: boolean
    finalEstimatedPrice?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type EstimationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mtoQueryId" | "version" | "goldWeight" | "goldRate" | "diamondWeight" | "diamondRate" | "makingPercent" | "discountPercent" | "otherStones" | "gstAmount" | "discountAmount" | "totalAmount" | "finalEstimatedPrice" | "notes" | "createdAt", ExtArgs["result"]["estimation"]>
  export type EstimationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type EstimationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type EstimationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }

  export type $EstimationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estimation"
    objects: {
      mtoQuery: Prisma.$MtoQueryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mtoQueryId: string
      version: number
      goldWeight: string
      goldRate: number
      diamondWeight: number | null
      diamondRate: number | null
      makingPercent: number
      discountPercent: number
      otherStones: number | null
      gstAmount: number
      discountAmount: number
      totalAmount: number
      finalEstimatedPrice: number
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["estimation"]>
    composites: {}
  }

  type EstimationGetPayload<S extends boolean | null | undefined | EstimationDefaultArgs> = $Result.GetResult<Prisma.$EstimationPayload, S>

  type EstimationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstimationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstimationCountAggregateInputType | true
    }

  export interface EstimationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estimation'], meta: { name: 'Estimation' } }
    /**
     * Find zero or one Estimation that matches the filter.
     * @param {EstimationFindUniqueArgs} args - Arguments to find a Estimation
     * @example
     * // Get one Estimation
     * const estimation = await prisma.estimation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstimationFindUniqueArgs>(args: SelectSubset<T, EstimationFindUniqueArgs<ExtArgs>>): Prisma__EstimationClient<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estimation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstimationFindUniqueOrThrowArgs} args - Arguments to find a Estimation
     * @example
     * // Get one Estimation
     * const estimation = await prisma.estimation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstimationFindUniqueOrThrowArgs>(args: SelectSubset<T, EstimationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstimationClient<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estimation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimationFindFirstArgs} args - Arguments to find a Estimation
     * @example
     * // Get one Estimation
     * const estimation = await prisma.estimation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstimationFindFirstArgs>(args?: SelectSubset<T, EstimationFindFirstArgs<ExtArgs>>): Prisma__EstimationClient<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estimation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimationFindFirstOrThrowArgs} args - Arguments to find a Estimation
     * @example
     * // Get one Estimation
     * const estimation = await prisma.estimation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstimationFindFirstOrThrowArgs>(args?: SelectSubset<T, EstimationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstimationClient<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estimations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estimations
     * const estimations = await prisma.estimation.findMany()
     * 
     * // Get first 10 Estimations
     * const estimations = await prisma.estimation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estimationWithIdOnly = await prisma.estimation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstimationFindManyArgs>(args?: SelectSubset<T, EstimationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estimation.
     * @param {EstimationCreateArgs} args - Arguments to create a Estimation.
     * @example
     * // Create one Estimation
     * const Estimation = await prisma.estimation.create({
     *   data: {
     *     // ... data to create a Estimation
     *   }
     * })
     * 
     */
    create<T extends EstimationCreateArgs>(args: SelectSubset<T, EstimationCreateArgs<ExtArgs>>): Prisma__EstimationClient<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estimations.
     * @param {EstimationCreateManyArgs} args - Arguments to create many Estimations.
     * @example
     * // Create many Estimations
     * const estimation = await prisma.estimation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstimationCreateManyArgs>(args?: SelectSubset<T, EstimationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estimations and returns the data saved in the database.
     * @param {EstimationCreateManyAndReturnArgs} args - Arguments to create many Estimations.
     * @example
     * // Create many Estimations
     * const estimation = await prisma.estimation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estimations and only return the `id`
     * const estimationWithIdOnly = await prisma.estimation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstimationCreateManyAndReturnArgs>(args?: SelectSubset<T, EstimationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estimation.
     * @param {EstimationDeleteArgs} args - Arguments to delete one Estimation.
     * @example
     * // Delete one Estimation
     * const Estimation = await prisma.estimation.delete({
     *   where: {
     *     // ... filter to delete one Estimation
     *   }
     * })
     * 
     */
    delete<T extends EstimationDeleteArgs>(args: SelectSubset<T, EstimationDeleteArgs<ExtArgs>>): Prisma__EstimationClient<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estimation.
     * @param {EstimationUpdateArgs} args - Arguments to update one Estimation.
     * @example
     * // Update one Estimation
     * const estimation = await prisma.estimation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstimationUpdateArgs>(args: SelectSubset<T, EstimationUpdateArgs<ExtArgs>>): Prisma__EstimationClient<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estimations.
     * @param {EstimationDeleteManyArgs} args - Arguments to filter Estimations to delete.
     * @example
     * // Delete a few Estimations
     * const { count } = await prisma.estimation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstimationDeleteManyArgs>(args?: SelectSubset<T, EstimationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estimations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estimations
     * const estimation = await prisma.estimation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstimationUpdateManyArgs>(args: SelectSubset<T, EstimationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estimations and returns the data updated in the database.
     * @param {EstimationUpdateManyAndReturnArgs} args - Arguments to update many Estimations.
     * @example
     * // Update many Estimations
     * const estimation = await prisma.estimation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estimations and only return the `id`
     * const estimationWithIdOnly = await prisma.estimation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstimationUpdateManyAndReturnArgs>(args: SelectSubset<T, EstimationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estimation.
     * @param {EstimationUpsertArgs} args - Arguments to update or create a Estimation.
     * @example
     * // Update or create a Estimation
     * const estimation = await prisma.estimation.upsert({
     *   create: {
     *     // ... data to create a Estimation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estimation we want to update
     *   }
     * })
     */
    upsert<T extends EstimationUpsertArgs>(args: SelectSubset<T, EstimationUpsertArgs<ExtArgs>>): Prisma__EstimationClient<$Result.GetResult<Prisma.$EstimationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estimations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimationCountArgs} args - Arguments to filter Estimations to count.
     * @example
     * // Count the number of Estimations
     * const count = await prisma.estimation.count({
     *   where: {
     *     // ... the filter for the Estimations we want to count
     *   }
     * })
    **/
    count<T extends EstimationCountArgs>(
      args?: Subset<T, EstimationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstimationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estimation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstimationAggregateArgs>(args: Subset<T, EstimationAggregateArgs>): Prisma.PrismaPromise<GetEstimationAggregateType<T>>

    /**
     * Group by Estimation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstimationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstimationGroupByArgs['orderBy'] }
        : { orderBy?: EstimationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstimationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstimationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estimation model
   */
  readonly fields: EstimationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estimation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstimationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtoQuery<T extends MtoQueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MtoQueryDefaultArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estimation model
   */
  interface EstimationFieldRefs {
    readonly id: FieldRef<"Estimation", 'Int'>
    readonly mtoQueryId: FieldRef<"Estimation", 'String'>
    readonly version: FieldRef<"Estimation", 'Int'>
    readonly goldWeight: FieldRef<"Estimation", 'String'>
    readonly goldRate: FieldRef<"Estimation", 'Float'>
    readonly diamondWeight: FieldRef<"Estimation", 'Float'>
    readonly diamondRate: FieldRef<"Estimation", 'Float'>
    readonly makingPercent: FieldRef<"Estimation", 'Float'>
    readonly discountPercent: FieldRef<"Estimation", 'Float'>
    readonly otherStones: FieldRef<"Estimation", 'Float'>
    readonly gstAmount: FieldRef<"Estimation", 'Float'>
    readonly discountAmount: FieldRef<"Estimation", 'Float'>
    readonly totalAmount: FieldRef<"Estimation", 'Float'>
    readonly finalEstimatedPrice: FieldRef<"Estimation", 'Float'>
    readonly notes: FieldRef<"Estimation", 'String'>
    readonly createdAt: FieldRef<"Estimation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estimation findUnique
   */
  export type EstimationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * Filter, which Estimation to fetch.
     */
    where: EstimationWhereUniqueInput
  }

  /**
   * Estimation findUniqueOrThrow
   */
  export type EstimationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * Filter, which Estimation to fetch.
     */
    where: EstimationWhereUniqueInput
  }

  /**
   * Estimation findFirst
   */
  export type EstimationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * Filter, which Estimation to fetch.
     */
    where?: EstimationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimations to fetch.
     */
    orderBy?: EstimationOrderByWithRelationInput | EstimationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estimations.
     */
    cursor?: EstimationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estimations.
     */
    distinct?: EstimationScalarFieldEnum | EstimationScalarFieldEnum[]
  }

  /**
   * Estimation findFirstOrThrow
   */
  export type EstimationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * Filter, which Estimation to fetch.
     */
    where?: EstimationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimations to fetch.
     */
    orderBy?: EstimationOrderByWithRelationInput | EstimationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estimations.
     */
    cursor?: EstimationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estimations.
     */
    distinct?: EstimationScalarFieldEnum | EstimationScalarFieldEnum[]
  }

  /**
   * Estimation findMany
   */
  export type EstimationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * Filter, which Estimations to fetch.
     */
    where?: EstimationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimations to fetch.
     */
    orderBy?: EstimationOrderByWithRelationInput | EstimationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estimations.
     */
    cursor?: EstimationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimations.
     */
    skip?: number
    distinct?: EstimationScalarFieldEnum | EstimationScalarFieldEnum[]
  }

  /**
   * Estimation create
   */
  export type EstimationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * The data needed to create a Estimation.
     */
    data: XOR<EstimationCreateInput, EstimationUncheckedCreateInput>
  }

  /**
   * Estimation createMany
   */
  export type EstimationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estimations.
     */
    data: EstimationCreateManyInput | EstimationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estimation createManyAndReturn
   */
  export type EstimationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * The data used to create many Estimations.
     */
    data: EstimationCreateManyInput | EstimationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estimation update
   */
  export type EstimationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * The data needed to update a Estimation.
     */
    data: XOR<EstimationUpdateInput, EstimationUncheckedUpdateInput>
    /**
     * Choose, which Estimation to update.
     */
    where: EstimationWhereUniqueInput
  }

  /**
   * Estimation updateMany
   */
  export type EstimationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estimations.
     */
    data: XOR<EstimationUpdateManyMutationInput, EstimationUncheckedUpdateManyInput>
    /**
     * Filter which Estimations to update
     */
    where?: EstimationWhereInput
    /**
     * Limit how many Estimations to update.
     */
    limit?: number
  }

  /**
   * Estimation updateManyAndReturn
   */
  export type EstimationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * The data used to update Estimations.
     */
    data: XOR<EstimationUpdateManyMutationInput, EstimationUncheckedUpdateManyInput>
    /**
     * Filter which Estimations to update
     */
    where?: EstimationWhereInput
    /**
     * Limit how many Estimations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estimation upsert
   */
  export type EstimationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * The filter to search for the Estimation to update in case it exists.
     */
    where: EstimationWhereUniqueInput
    /**
     * In case the Estimation found by the `where` argument doesn't exist, create a new Estimation with this data.
     */
    create: XOR<EstimationCreateInput, EstimationUncheckedCreateInput>
    /**
     * In case the Estimation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstimationUpdateInput, EstimationUncheckedUpdateInput>
  }

  /**
   * Estimation delete
   */
  export type EstimationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
    /**
     * Filter which Estimation to delete.
     */
    where: EstimationWhereUniqueInput
  }

  /**
   * Estimation deleteMany
   */
  export type EstimationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estimations to delete
     */
    where?: EstimationWhereInput
    /**
     * Limit how many Estimations to delete.
     */
    limit?: number
  }

  /**
   * Estimation without action
   */
  export type EstimationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimation
     */
    select?: EstimationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimation
     */
    omit?: EstimationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimationInclude<ExtArgs> | null
  }


  /**
   * Model PromisedPricing
   */

  export type AggregatePromisedPricing = {
    _count: PromisedPricingCountAggregateOutputType | null
    _avg: PromisedPricingAvgAggregateOutputType | null
    _sum: PromisedPricingSumAggregateOutputType | null
    _min: PromisedPricingMinAggregateOutputType | null
    _max: PromisedPricingMaxAggregateOutputType | null
  }

  export type PromisedPricingAvgAggregateOutputType = {
    id: number | null
    finalPrice: number | null
    goldRate: number | null
  }

  export type PromisedPricingSumAggregateOutputType = {
    id: number | null
    finalPrice: number | null
    goldRate: number | null
  }

  export type PromisedPricingMinAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    goldWeight: string | null
    stoneDetails: string | null
    finalPrice: number | null
    goldRate: number | null
    lockedAt: Date | null
  }

  export type PromisedPricingMaxAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    goldWeight: string | null
    stoneDetails: string | null
    finalPrice: number | null
    goldRate: number | null
    lockedAt: Date | null
  }

  export type PromisedPricingCountAggregateOutputType = {
    id: number
    mtoQueryId: number
    goldWeight: number
    stoneDetails: number
    finalPrice: number
    goldRate: number
    lockedAt: number
    _all: number
  }


  export type PromisedPricingAvgAggregateInputType = {
    id?: true
    finalPrice?: true
    goldRate?: true
  }

  export type PromisedPricingSumAggregateInputType = {
    id?: true
    finalPrice?: true
    goldRate?: true
  }

  export type PromisedPricingMinAggregateInputType = {
    id?: true
    mtoQueryId?: true
    goldWeight?: true
    stoneDetails?: true
    finalPrice?: true
    goldRate?: true
    lockedAt?: true
  }

  export type PromisedPricingMaxAggregateInputType = {
    id?: true
    mtoQueryId?: true
    goldWeight?: true
    stoneDetails?: true
    finalPrice?: true
    goldRate?: true
    lockedAt?: true
  }

  export type PromisedPricingCountAggregateInputType = {
    id?: true
    mtoQueryId?: true
    goldWeight?: true
    stoneDetails?: true
    finalPrice?: true
    goldRate?: true
    lockedAt?: true
    _all?: true
  }

  export type PromisedPricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromisedPricing to aggregate.
     */
    where?: PromisedPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromisedPricings to fetch.
     */
    orderBy?: PromisedPricingOrderByWithRelationInput | PromisedPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromisedPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromisedPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromisedPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromisedPricings
    **/
    _count?: true | PromisedPricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromisedPricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromisedPricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromisedPricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromisedPricingMaxAggregateInputType
  }

  export type GetPromisedPricingAggregateType<T extends PromisedPricingAggregateArgs> = {
        [P in keyof T & keyof AggregatePromisedPricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromisedPricing[P]>
      : GetScalarType<T[P], AggregatePromisedPricing[P]>
  }




  export type PromisedPricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromisedPricingWhereInput
    orderBy?: PromisedPricingOrderByWithAggregationInput | PromisedPricingOrderByWithAggregationInput[]
    by: PromisedPricingScalarFieldEnum[] | PromisedPricingScalarFieldEnum
    having?: PromisedPricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromisedPricingCountAggregateInputType | true
    _avg?: PromisedPricingAvgAggregateInputType
    _sum?: PromisedPricingSumAggregateInputType
    _min?: PromisedPricingMinAggregateInputType
    _max?: PromisedPricingMaxAggregateInputType
  }

  export type PromisedPricingGroupByOutputType = {
    id: number
    mtoQueryId: string
    goldWeight: string
    stoneDetails: string
    finalPrice: number
    goldRate: number
    lockedAt: Date
    _count: PromisedPricingCountAggregateOutputType | null
    _avg: PromisedPricingAvgAggregateOutputType | null
    _sum: PromisedPricingSumAggregateOutputType | null
    _min: PromisedPricingMinAggregateOutputType | null
    _max: PromisedPricingMaxAggregateOutputType | null
  }

  type GetPromisedPricingGroupByPayload<T extends PromisedPricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromisedPricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromisedPricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromisedPricingGroupByOutputType[P]>
            : GetScalarType<T[P], PromisedPricingGroupByOutputType[P]>
        }
      >
    >


  export type PromisedPricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    goldWeight?: boolean
    stoneDetails?: boolean
    finalPrice?: boolean
    goldRate?: boolean
    lockedAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promisedPricing"]>

  export type PromisedPricingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    goldWeight?: boolean
    stoneDetails?: boolean
    finalPrice?: boolean
    goldRate?: boolean
    lockedAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promisedPricing"]>

  export type PromisedPricingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    goldWeight?: boolean
    stoneDetails?: boolean
    finalPrice?: boolean
    goldRate?: boolean
    lockedAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promisedPricing"]>

  export type PromisedPricingSelectScalar = {
    id?: boolean
    mtoQueryId?: boolean
    goldWeight?: boolean
    stoneDetails?: boolean
    finalPrice?: boolean
    goldRate?: boolean
    lockedAt?: boolean
  }

  export type PromisedPricingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mtoQueryId" | "goldWeight" | "stoneDetails" | "finalPrice" | "goldRate" | "lockedAt", ExtArgs["result"]["promisedPricing"]>
  export type PromisedPricingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type PromisedPricingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type PromisedPricingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }

  export type $PromisedPricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromisedPricing"
    objects: {
      mtoQuery: Prisma.$MtoQueryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mtoQueryId: string
      goldWeight: string
      stoneDetails: string
      finalPrice: number
      goldRate: number
      lockedAt: Date
    }, ExtArgs["result"]["promisedPricing"]>
    composites: {}
  }

  type PromisedPricingGetPayload<S extends boolean | null | undefined | PromisedPricingDefaultArgs> = $Result.GetResult<Prisma.$PromisedPricingPayload, S>

  type PromisedPricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromisedPricingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromisedPricingCountAggregateInputType | true
    }

  export interface PromisedPricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromisedPricing'], meta: { name: 'PromisedPricing' } }
    /**
     * Find zero or one PromisedPricing that matches the filter.
     * @param {PromisedPricingFindUniqueArgs} args - Arguments to find a PromisedPricing
     * @example
     * // Get one PromisedPricing
     * const promisedPricing = await prisma.promisedPricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromisedPricingFindUniqueArgs>(args: SelectSubset<T, PromisedPricingFindUniqueArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromisedPricing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromisedPricingFindUniqueOrThrowArgs} args - Arguments to find a PromisedPricing
     * @example
     * // Get one PromisedPricing
     * const promisedPricing = await prisma.promisedPricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromisedPricingFindUniqueOrThrowArgs>(args: SelectSubset<T, PromisedPricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromisedPricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromisedPricingFindFirstArgs} args - Arguments to find a PromisedPricing
     * @example
     * // Get one PromisedPricing
     * const promisedPricing = await prisma.promisedPricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromisedPricingFindFirstArgs>(args?: SelectSubset<T, PromisedPricingFindFirstArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromisedPricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromisedPricingFindFirstOrThrowArgs} args - Arguments to find a PromisedPricing
     * @example
     * // Get one PromisedPricing
     * const promisedPricing = await prisma.promisedPricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromisedPricingFindFirstOrThrowArgs>(args?: SelectSubset<T, PromisedPricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromisedPricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromisedPricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromisedPricings
     * const promisedPricings = await prisma.promisedPricing.findMany()
     * 
     * // Get first 10 PromisedPricings
     * const promisedPricings = await prisma.promisedPricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promisedPricingWithIdOnly = await prisma.promisedPricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromisedPricingFindManyArgs>(args?: SelectSubset<T, PromisedPricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromisedPricing.
     * @param {PromisedPricingCreateArgs} args - Arguments to create a PromisedPricing.
     * @example
     * // Create one PromisedPricing
     * const PromisedPricing = await prisma.promisedPricing.create({
     *   data: {
     *     // ... data to create a PromisedPricing
     *   }
     * })
     * 
     */
    create<T extends PromisedPricingCreateArgs>(args: SelectSubset<T, PromisedPricingCreateArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromisedPricings.
     * @param {PromisedPricingCreateManyArgs} args - Arguments to create many PromisedPricings.
     * @example
     * // Create many PromisedPricings
     * const promisedPricing = await prisma.promisedPricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromisedPricingCreateManyArgs>(args?: SelectSubset<T, PromisedPricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromisedPricings and returns the data saved in the database.
     * @param {PromisedPricingCreateManyAndReturnArgs} args - Arguments to create many PromisedPricings.
     * @example
     * // Create many PromisedPricings
     * const promisedPricing = await prisma.promisedPricing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromisedPricings and only return the `id`
     * const promisedPricingWithIdOnly = await prisma.promisedPricing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromisedPricingCreateManyAndReturnArgs>(args?: SelectSubset<T, PromisedPricingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromisedPricing.
     * @param {PromisedPricingDeleteArgs} args - Arguments to delete one PromisedPricing.
     * @example
     * // Delete one PromisedPricing
     * const PromisedPricing = await prisma.promisedPricing.delete({
     *   where: {
     *     // ... filter to delete one PromisedPricing
     *   }
     * })
     * 
     */
    delete<T extends PromisedPricingDeleteArgs>(args: SelectSubset<T, PromisedPricingDeleteArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromisedPricing.
     * @param {PromisedPricingUpdateArgs} args - Arguments to update one PromisedPricing.
     * @example
     * // Update one PromisedPricing
     * const promisedPricing = await prisma.promisedPricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromisedPricingUpdateArgs>(args: SelectSubset<T, PromisedPricingUpdateArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromisedPricings.
     * @param {PromisedPricingDeleteManyArgs} args - Arguments to filter PromisedPricings to delete.
     * @example
     * // Delete a few PromisedPricings
     * const { count } = await prisma.promisedPricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromisedPricingDeleteManyArgs>(args?: SelectSubset<T, PromisedPricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromisedPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromisedPricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromisedPricings
     * const promisedPricing = await prisma.promisedPricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromisedPricingUpdateManyArgs>(args: SelectSubset<T, PromisedPricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromisedPricings and returns the data updated in the database.
     * @param {PromisedPricingUpdateManyAndReturnArgs} args - Arguments to update many PromisedPricings.
     * @example
     * // Update many PromisedPricings
     * const promisedPricing = await prisma.promisedPricing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromisedPricings and only return the `id`
     * const promisedPricingWithIdOnly = await prisma.promisedPricing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromisedPricingUpdateManyAndReturnArgs>(args: SelectSubset<T, PromisedPricingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromisedPricing.
     * @param {PromisedPricingUpsertArgs} args - Arguments to update or create a PromisedPricing.
     * @example
     * // Update or create a PromisedPricing
     * const promisedPricing = await prisma.promisedPricing.upsert({
     *   create: {
     *     // ... data to create a PromisedPricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromisedPricing we want to update
     *   }
     * })
     */
    upsert<T extends PromisedPricingUpsertArgs>(args: SelectSubset<T, PromisedPricingUpsertArgs<ExtArgs>>): Prisma__PromisedPricingClient<$Result.GetResult<Prisma.$PromisedPricingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromisedPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromisedPricingCountArgs} args - Arguments to filter PromisedPricings to count.
     * @example
     * // Count the number of PromisedPricings
     * const count = await prisma.promisedPricing.count({
     *   where: {
     *     // ... the filter for the PromisedPricings we want to count
     *   }
     * })
    **/
    count<T extends PromisedPricingCountArgs>(
      args?: Subset<T, PromisedPricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromisedPricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromisedPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromisedPricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromisedPricingAggregateArgs>(args: Subset<T, PromisedPricingAggregateArgs>): Prisma.PrismaPromise<GetPromisedPricingAggregateType<T>>

    /**
     * Group by PromisedPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromisedPricingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromisedPricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromisedPricingGroupByArgs['orderBy'] }
        : { orderBy?: PromisedPricingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromisedPricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromisedPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromisedPricing model
   */
  readonly fields: PromisedPricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromisedPricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromisedPricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtoQuery<T extends MtoQueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MtoQueryDefaultArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromisedPricing model
   */
  interface PromisedPricingFieldRefs {
    readonly id: FieldRef<"PromisedPricing", 'Int'>
    readonly mtoQueryId: FieldRef<"PromisedPricing", 'String'>
    readonly goldWeight: FieldRef<"PromisedPricing", 'String'>
    readonly stoneDetails: FieldRef<"PromisedPricing", 'String'>
    readonly finalPrice: FieldRef<"PromisedPricing", 'Float'>
    readonly goldRate: FieldRef<"PromisedPricing", 'Float'>
    readonly lockedAt: FieldRef<"PromisedPricing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromisedPricing findUnique
   */
  export type PromisedPricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * Filter, which PromisedPricing to fetch.
     */
    where: PromisedPricingWhereUniqueInput
  }

  /**
   * PromisedPricing findUniqueOrThrow
   */
  export type PromisedPricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * Filter, which PromisedPricing to fetch.
     */
    where: PromisedPricingWhereUniqueInput
  }

  /**
   * PromisedPricing findFirst
   */
  export type PromisedPricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * Filter, which PromisedPricing to fetch.
     */
    where?: PromisedPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromisedPricings to fetch.
     */
    orderBy?: PromisedPricingOrderByWithRelationInput | PromisedPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromisedPricings.
     */
    cursor?: PromisedPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromisedPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromisedPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromisedPricings.
     */
    distinct?: PromisedPricingScalarFieldEnum | PromisedPricingScalarFieldEnum[]
  }

  /**
   * PromisedPricing findFirstOrThrow
   */
  export type PromisedPricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * Filter, which PromisedPricing to fetch.
     */
    where?: PromisedPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromisedPricings to fetch.
     */
    orderBy?: PromisedPricingOrderByWithRelationInput | PromisedPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromisedPricings.
     */
    cursor?: PromisedPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromisedPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromisedPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromisedPricings.
     */
    distinct?: PromisedPricingScalarFieldEnum | PromisedPricingScalarFieldEnum[]
  }

  /**
   * PromisedPricing findMany
   */
  export type PromisedPricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * Filter, which PromisedPricings to fetch.
     */
    where?: PromisedPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromisedPricings to fetch.
     */
    orderBy?: PromisedPricingOrderByWithRelationInput | PromisedPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromisedPricings.
     */
    cursor?: PromisedPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromisedPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromisedPricings.
     */
    skip?: number
    distinct?: PromisedPricingScalarFieldEnum | PromisedPricingScalarFieldEnum[]
  }

  /**
   * PromisedPricing create
   */
  export type PromisedPricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * The data needed to create a PromisedPricing.
     */
    data: XOR<PromisedPricingCreateInput, PromisedPricingUncheckedCreateInput>
  }

  /**
   * PromisedPricing createMany
   */
  export type PromisedPricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromisedPricings.
     */
    data: PromisedPricingCreateManyInput | PromisedPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromisedPricing createManyAndReturn
   */
  export type PromisedPricingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * The data used to create many PromisedPricings.
     */
    data: PromisedPricingCreateManyInput | PromisedPricingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromisedPricing update
   */
  export type PromisedPricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * The data needed to update a PromisedPricing.
     */
    data: XOR<PromisedPricingUpdateInput, PromisedPricingUncheckedUpdateInput>
    /**
     * Choose, which PromisedPricing to update.
     */
    where: PromisedPricingWhereUniqueInput
  }

  /**
   * PromisedPricing updateMany
   */
  export type PromisedPricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromisedPricings.
     */
    data: XOR<PromisedPricingUpdateManyMutationInput, PromisedPricingUncheckedUpdateManyInput>
    /**
     * Filter which PromisedPricings to update
     */
    where?: PromisedPricingWhereInput
    /**
     * Limit how many PromisedPricings to update.
     */
    limit?: number
  }

  /**
   * PromisedPricing updateManyAndReturn
   */
  export type PromisedPricingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * The data used to update PromisedPricings.
     */
    data: XOR<PromisedPricingUpdateManyMutationInput, PromisedPricingUncheckedUpdateManyInput>
    /**
     * Filter which PromisedPricings to update
     */
    where?: PromisedPricingWhereInput
    /**
     * Limit how many PromisedPricings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromisedPricing upsert
   */
  export type PromisedPricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * The filter to search for the PromisedPricing to update in case it exists.
     */
    where: PromisedPricingWhereUniqueInput
    /**
     * In case the PromisedPricing found by the `where` argument doesn't exist, create a new PromisedPricing with this data.
     */
    create: XOR<PromisedPricingCreateInput, PromisedPricingUncheckedCreateInput>
    /**
     * In case the PromisedPricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromisedPricingUpdateInput, PromisedPricingUncheckedUpdateInput>
  }

  /**
   * PromisedPricing delete
   */
  export type PromisedPricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
    /**
     * Filter which PromisedPricing to delete.
     */
    where: PromisedPricingWhereUniqueInput
  }

  /**
   * PromisedPricing deleteMany
   */
  export type PromisedPricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromisedPricings to delete
     */
    where?: PromisedPricingWhereInput
    /**
     * Limit how many PromisedPricings to delete.
     */
    limit?: number
  }

  /**
   * PromisedPricing without action
   */
  export type PromisedPricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromisedPricing
     */
    select?: PromisedPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromisedPricing
     */
    omit?: PromisedPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromisedPricingInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    amount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    amount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    mtoQueryId: number
    amount: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    mtoQueryId?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    mtoQueryId?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    mtoQueryId?: true
    amount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    mtoQueryId: string
    amount: number
    status: string
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    mtoQueryId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mtoQueryId" | "amount" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      mtoQuery: Prisma.$MtoQueryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mtoQueryId: string
      amount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtoQuery<T extends MtoQueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MtoQueryDefaultArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly mtoQueryId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model MtoOrder
   */

  export type AggregateMtoOrder = {
    _count: MtoOrderCountAggregateOutputType | null
    _avg: MtoOrderAvgAggregateOutputType | null
    _sum: MtoOrderSumAggregateOutputType | null
    _min: MtoOrderMinAggregateOutputType | null
    _max: MtoOrderMaxAggregateOutputType | null
  }

  export type MtoOrderAvgAggregateOutputType = {
    id: number | null
    advanceAmount: number | null
    remainingAmount: number | null
  }

  export type MtoOrderSumAggregateOutputType = {
    id: number | null
    advanceAmount: number | null
    remainingAmount: number | null
  }

  export type MtoOrderMinAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    posRefId: string | null
    orderRefId: string | null
    advanceAmount: number | null
    remainingAmount: number | null
    cadDesigns: string | null
    status: string | null
    createdAt: Date | null
  }

  export type MtoOrderMaxAggregateOutputType = {
    id: number | null
    mtoQueryId: string | null
    posRefId: string | null
    orderRefId: string | null
    advanceAmount: number | null
    remainingAmount: number | null
    cadDesigns: string | null
    status: string | null
    createdAt: Date | null
  }

  export type MtoOrderCountAggregateOutputType = {
    id: number
    mtoQueryId: number
    posRefId: number
    orderRefId: number
    advanceAmount: number
    remainingAmount: number
    cadDesigns: number
    status: number
    createdAt: number
    _all: number
  }


  export type MtoOrderAvgAggregateInputType = {
    id?: true
    advanceAmount?: true
    remainingAmount?: true
  }

  export type MtoOrderSumAggregateInputType = {
    id?: true
    advanceAmount?: true
    remainingAmount?: true
  }

  export type MtoOrderMinAggregateInputType = {
    id?: true
    mtoQueryId?: true
    posRefId?: true
    orderRefId?: true
    advanceAmount?: true
    remainingAmount?: true
    cadDesigns?: true
    status?: true
    createdAt?: true
  }

  export type MtoOrderMaxAggregateInputType = {
    id?: true
    mtoQueryId?: true
    posRefId?: true
    orderRefId?: true
    advanceAmount?: true
    remainingAmount?: true
    cadDesigns?: true
    status?: true
    createdAt?: true
  }

  export type MtoOrderCountAggregateInputType = {
    id?: true
    mtoQueryId?: true
    posRefId?: true
    orderRefId?: true
    advanceAmount?: true
    remainingAmount?: true
    cadDesigns?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MtoOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MtoOrder to aggregate.
     */
    where?: MtoOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MtoOrders to fetch.
     */
    orderBy?: MtoOrderOrderByWithRelationInput | MtoOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MtoOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MtoOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MtoOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MtoOrders
    **/
    _count?: true | MtoOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MtoOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MtoOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MtoOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MtoOrderMaxAggregateInputType
  }

  export type GetMtoOrderAggregateType<T extends MtoOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateMtoOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMtoOrder[P]>
      : GetScalarType<T[P], AggregateMtoOrder[P]>
  }




  export type MtoOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MtoOrderWhereInput
    orderBy?: MtoOrderOrderByWithAggregationInput | MtoOrderOrderByWithAggregationInput[]
    by: MtoOrderScalarFieldEnum[] | MtoOrderScalarFieldEnum
    having?: MtoOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MtoOrderCountAggregateInputType | true
    _avg?: MtoOrderAvgAggregateInputType
    _sum?: MtoOrderSumAggregateInputType
    _min?: MtoOrderMinAggregateInputType
    _max?: MtoOrderMaxAggregateInputType
  }

  export type MtoOrderGroupByOutputType = {
    id: number
    mtoQueryId: string
    posRefId: string | null
    orderRefId: string | null
    advanceAmount: number
    remainingAmount: number
    cadDesigns: string | null
    status: string
    createdAt: Date
    _count: MtoOrderCountAggregateOutputType | null
    _avg: MtoOrderAvgAggregateOutputType | null
    _sum: MtoOrderSumAggregateOutputType | null
    _min: MtoOrderMinAggregateOutputType | null
    _max: MtoOrderMaxAggregateOutputType | null
  }

  type GetMtoOrderGroupByPayload<T extends MtoOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MtoOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MtoOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MtoOrderGroupByOutputType[P]>
            : GetScalarType<T[P], MtoOrderGroupByOutputType[P]>
        }
      >
    >


  export type MtoOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    posRefId?: boolean
    orderRefId?: boolean
    advanceAmount?: boolean
    remainingAmount?: boolean
    cadDesigns?: boolean
    status?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
    purchaseOrder?: boolean | MtoOrder$purchaseOrderArgs<ExtArgs>
    invoice?: boolean | MtoOrder$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["mtoOrder"]>

  export type MtoOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    posRefId?: boolean
    orderRefId?: boolean
    advanceAmount?: boolean
    remainingAmount?: boolean
    cadDesigns?: boolean
    status?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mtoOrder"]>

  export type MtoOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoQueryId?: boolean
    posRefId?: boolean
    orderRefId?: boolean
    advanceAmount?: boolean
    remainingAmount?: boolean
    cadDesigns?: boolean
    status?: boolean
    createdAt?: boolean
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mtoOrder"]>

  export type MtoOrderSelectScalar = {
    id?: boolean
    mtoQueryId?: boolean
    posRefId?: boolean
    orderRefId?: boolean
    advanceAmount?: boolean
    remainingAmount?: boolean
    cadDesigns?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MtoOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mtoQueryId" | "posRefId" | "orderRefId" | "advanceAmount" | "remainingAmount" | "cadDesigns" | "status" | "createdAt", ExtArgs["result"]["mtoOrder"]>
  export type MtoOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
    purchaseOrder?: boolean | MtoOrder$purchaseOrderArgs<ExtArgs>
    invoice?: boolean | MtoOrder$invoiceArgs<ExtArgs>
  }
  export type MtoOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }
  export type MtoOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoQuery?: boolean | MtoQueryDefaultArgs<ExtArgs>
  }

  export type $MtoOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MtoOrder"
    objects: {
      mtoQuery: Prisma.$MtoQueryPayload<ExtArgs>
      purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs> | null
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mtoQueryId: string
      posRefId: string | null
      orderRefId: string | null
      advanceAmount: number
      remainingAmount: number
      cadDesigns: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["mtoOrder"]>
    composites: {}
  }

  type MtoOrderGetPayload<S extends boolean | null | undefined | MtoOrderDefaultArgs> = $Result.GetResult<Prisma.$MtoOrderPayload, S>

  type MtoOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MtoOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MtoOrderCountAggregateInputType | true
    }

  export interface MtoOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MtoOrder'], meta: { name: 'MtoOrder' } }
    /**
     * Find zero or one MtoOrder that matches the filter.
     * @param {MtoOrderFindUniqueArgs} args - Arguments to find a MtoOrder
     * @example
     * // Get one MtoOrder
     * const mtoOrder = await prisma.mtoOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MtoOrderFindUniqueArgs>(args: SelectSubset<T, MtoOrderFindUniqueArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MtoOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MtoOrderFindUniqueOrThrowArgs} args - Arguments to find a MtoOrder
     * @example
     * // Get one MtoOrder
     * const mtoOrder = await prisma.mtoOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MtoOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, MtoOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MtoOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoOrderFindFirstArgs} args - Arguments to find a MtoOrder
     * @example
     * // Get one MtoOrder
     * const mtoOrder = await prisma.mtoOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MtoOrderFindFirstArgs>(args?: SelectSubset<T, MtoOrderFindFirstArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MtoOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoOrderFindFirstOrThrowArgs} args - Arguments to find a MtoOrder
     * @example
     * // Get one MtoOrder
     * const mtoOrder = await prisma.mtoOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MtoOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, MtoOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MtoOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MtoOrders
     * const mtoOrders = await prisma.mtoOrder.findMany()
     * 
     * // Get first 10 MtoOrders
     * const mtoOrders = await prisma.mtoOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mtoOrderWithIdOnly = await prisma.mtoOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MtoOrderFindManyArgs>(args?: SelectSubset<T, MtoOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MtoOrder.
     * @param {MtoOrderCreateArgs} args - Arguments to create a MtoOrder.
     * @example
     * // Create one MtoOrder
     * const MtoOrder = await prisma.mtoOrder.create({
     *   data: {
     *     // ... data to create a MtoOrder
     *   }
     * })
     * 
     */
    create<T extends MtoOrderCreateArgs>(args: SelectSubset<T, MtoOrderCreateArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MtoOrders.
     * @param {MtoOrderCreateManyArgs} args - Arguments to create many MtoOrders.
     * @example
     * // Create many MtoOrders
     * const mtoOrder = await prisma.mtoOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MtoOrderCreateManyArgs>(args?: SelectSubset<T, MtoOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MtoOrders and returns the data saved in the database.
     * @param {MtoOrderCreateManyAndReturnArgs} args - Arguments to create many MtoOrders.
     * @example
     * // Create many MtoOrders
     * const mtoOrder = await prisma.mtoOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MtoOrders and only return the `id`
     * const mtoOrderWithIdOnly = await prisma.mtoOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MtoOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, MtoOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MtoOrder.
     * @param {MtoOrderDeleteArgs} args - Arguments to delete one MtoOrder.
     * @example
     * // Delete one MtoOrder
     * const MtoOrder = await prisma.mtoOrder.delete({
     *   where: {
     *     // ... filter to delete one MtoOrder
     *   }
     * })
     * 
     */
    delete<T extends MtoOrderDeleteArgs>(args: SelectSubset<T, MtoOrderDeleteArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MtoOrder.
     * @param {MtoOrderUpdateArgs} args - Arguments to update one MtoOrder.
     * @example
     * // Update one MtoOrder
     * const mtoOrder = await prisma.mtoOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MtoOrderUpdateArgs>(args: SelectSubset<T, MtoOrderUpdateArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MtoOrders.
     * @param {MtoOrderDeleteManyArgs} args - Arguments to filter MtoOrders to delete.
     * @example
     * // Delete a few MtoOrders
     * const { count } = await prisma.mtoOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MtoOrderDeleteManyArgs>(args?: SelectSubset<T, MtoOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MtoOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MtoOrders
     * const mtoOrder = await prisma.mtoOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MtoOrderUpdateManyArgs>(args: SelectSubset<T, MtoOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MtoOrders and returns the data updated in the database.
     * @param {MtoOrderUpdateManyAndReturnArgs} args - Arguments to update many MtoOrders.
     * @example
     * // Update many MtoOrders
     * const mtoOrder = await prisma.mtoOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MtoOrders and only return the `id`
     * const mtoOrderWithIdOnly = await prisma.mtoOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MtoOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, MtoOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MtoOrder.
     * @param {MtoOrderUpsertArgs} args - Arguments to update or create a MtoOrder.
     * @example
     * // Update or create a MtoOrder
     * const mtoOrder = await prisma.mtoOrder.upsert({
     *   create: {
     *     // ... data to create a MtoOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MtoOrder we want to update
     *   }
     * })
     */
    upsert<T extends MtoOrderUpsertArgs>(args: SelectSubset<T, MtoOrderUpsertArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MtoOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoOrderCountArgs} args - Arguments to filter MtoOrders to count.
     * @example
     * // Count the number of MtoOrders
     * const count = await prisma.mtoOrder.count({
     *   where: {
     *     // ... the filter for the MtoOrders we want to count
     *   }
     * })
    **/
    count<T extends MtoOrderCountArgs>(
      args?: Subset<T, MtoOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MtoOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MtoOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MtoOrderAggregateArgs>(args: Subset<T, MtoOrderAggregateArgs>): Prisma.PrismaPromise<GetMtoOrderAggregateType<T>>

    /**
     * Group by MtoOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtoOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MtoOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MtoOrderGroupByArgs['orderBy'] }
        : { orderBy?: MtoOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MtoOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMtoOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MtoOrder model
   */
  readonly fields: MtoOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MtoOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MtoOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtoQuery<T extends MtoQueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MtoQueryDefaultArgs<ExtArgs>>): Prisma__MtoQueryClient<$Result.GetResult<Prisma.$MtoQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchaseOrder<T extends MtoOrder$purchaseOrderArgs<ExtArgs> = {}>(args?: Subset<T, MtoOrder$purchaseOrderArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoice<T extends MtoOrder$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, MtoOrder$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MtoOrder model
   */
  interface MtoOrderFieldRefs {
    readonly id: FieldRef<"MtoOrder", 'Int'>
    readonly mtoQueryId: FieldRef<"MtoOrder", 'String'>
    readonly posRefId: FieldRef<"MtoOrder", 'String'>
    readonly orderRefId: FieldRef<"MtoOrder", 'String'>
    readonly advanceAmount: FieldRef<"MtoOrder", 'Float'>
    readonly remainingAmount: FieldRef<"MtoOrder", 'Float'>
    readonly cadDesigns: FieldRef<"MtoOrder", 'String'>
    readonly status: FieldRef<"MtoOrder", 'String'>
    readonly createdAt: FieldRef<"MtoOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MtoOrder findUnique
   */
  export type MtoOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * Filter, which MtoOrder to fetch.
     */
    where: MtoOrderWhereUniqueInput
  }

  /**
   * MtoOrder findUniqueOrThrow
   */
  export type MtoOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * Filter, which MtoOrder to fetch.
     */
    where: MtoOrderWhereUniqueInput
  }

  /**
   * MtoOrder findFirst
   */
  export type MtoOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * Filter, which MtoOrder to fetch.
     */
    where?: MtoOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MtoOrders to fetch.
     */
    orderBy?: MtoOrderOrderByWithRelationInput | MtoOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MtoOrders.
     */
    cursor?: MtoOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MtoOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MtoOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MtoOrders.
     */
    distinct?: MtoOrderScalarFieldEnum | MtoOrderScalarFieldEnum[]
  }

  /**
   * MtoOrder findFirstOrThrow
   */
  export type MtoOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * Filter, which MtoOrder to fetch.
     */
    where?: MtoOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MtoOrders to fetch.
     */
    orderBy?: MtoOrderOrderByWithRelationInput | MtoOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MtoOrders.
     */
    cursor?: MtoOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MtoOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MtoOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MtoOrders.
     */
    distinct?: MtoOrderScalarFieldEnum | MtoOrderScalarFieldEnum[]
  }

  /**
   * MtoOrder findMany
   */
  export type MtoOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * Filter, which MtoOrders to fetch.
     */
    where?: MtoOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MtoOrders to fetch.
     */
    orderBy?: MtoOrderOrderByWithRelationInput | MtoOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MtoOrders.
     */
    cursor?: MtoOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MtoOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MtoOrders.
     */
    skip?: number
    distinct?: MtoOrderScalarFieldEnum | MtoOrderScalarFieldEnum[]
  }

  /**
   * MtoOrder create
   */
  export type MtoOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a MtoOrder.
     */
    data: XOR<MtoOrderCreateInput, MtoOrderUncheckedCreateInput>
  }

  /**
   * MtoOrder createMany
   */
  export type MtoOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MtoOrders.
     */
    data: MtoOrderCreateManyInput | MtoOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MtoOrder createManyAndReturn
   */
  export type MtoOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * The data used to create many MtoOrders.
     */
    data: MtoOrderCreateManyInput | MtoOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MtoOrder update
   */
  export type MtoOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a MtoOrder.
     */
    data: XOR<MtoOrderUpdateInput, MtoOrderUncheckedUpdateInput>
    /**
     * Choose, which MtoOrder to update.
     */
    where: MtoOrderWhereUniqueInput
  }

  /**
   * MtoOrder updateMany
   */
  export type MtoOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MtoOrders.
     */
    data: XOR<MtoOrderUpdateManyMutationInput, MtoOrderUncheckedUpdateManyInput>
    /**
     * Filter which MtoOrders to update
     */
    where?: MtoOrderWhereInput
    /**
     * Limit how many MtoOrders to update.
     */
    limit?: number
  }

  /**
   * MtoOrder updateManyAndReturn
   */
  export type MtoOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * The data used to update MtoOrders.
     */
    data: XOR<MtoOrderUpdateManyMutationInput, MtoOrderUncheckedUpdateManyInput>
    /**
     * Filter which MtoOrders to update
     */
    where?: MtoOrderWhereInput
    /**
     * Limit how many MtoOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MtoOrder upsert
   */
  export type MtoOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the MtoOrder to update in case it exists.
     */
    where: MtoOrderWhereUniqueInput
    /**
     * In case the MtoOrder found by the `where` argument doesn't exist, create a new MtoOrder with this data.
     */
    create: XOR<MtoOrderCreateInput, MtoOrderUncheckedCreateInput>
    /**
     * In case the MtoOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MtoOrderUpdateInput, MtoOrderUncheckedUpdateInput>
  }

  /**
   * MtoOrder delete
   */
  export type MtoOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
    /**
     * Filter which MtoOrder to delete.
     */
    where: MtoOrderWhereUniqueInput
  }

  /**
   * MtoOrder deleteMany
   */
  export type MtoOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MtoOrders to delete
     */
    where?: MtoOrderWhereInput
    /**
     * Limit how many MtoOrders to delete.
     */
    limit?: number
  }

  /**
   * MtoOrder.purchaseOrder
   */
  export type MtoOrder$purchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
  }

  /**
   * MtoOrder.invoice
   */
  export type MtoOrder$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
  }

  /**
   * MtoOrder without action
   */
  export type MtoOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MtoOrder
     */
    select?: MtoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MtoOrder
     */
    omit?: MtoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MtoOrderInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderAvgAggregateOutputType = {
    id: number | null
    mtoOrderId: number | null
    lockedGoldPrice: number | null
  }

  export type PurchaseOrderSumAggregateOutputType = {
    id: number | null
    mtoOrderId: number | null
    lockedGoldPrice: number | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: number | null
    mtoOrderId: number | null
    vendorName: string | null
    lockedGoldPrice: number | null
    deliveryTimeline: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: number | null
    mtoOrderId: number | null
    vendorName: string | null
    lockedGoldPrice: number | null
    deliveryTimeline: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    mtoOrderId: number
    vendorName: number
    lockedGoldPrice: number
    deliveryTimeline: number
    status: number
    createdAt: number
    _all: number
  }


  export type PurchaseOrderAvgAggregateInputType = {
    id?: true
    mtoOrderId?: true
    lockedGoldPrice?: true
  }

  export type PurchaseOrderSumAggregateInputType = {
    id?: true
    mtoOrderId?: true
    lockedGoldPrice?: true
  }

  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    mtoOrderId?: true
    vendorName?: true
    lockedGoldPrice?: true
    deliveryTimeline?: true
    status?: true
    createdAt?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    mtoOrderId?: true
    vendorName?: true
    lockedGoldPrice?: true
    deliveryTimeline?: true
    status?: true
    createdAt?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    mtoOrderId?: true
    vendorName?: true
    lockedGoldPrice?: true
    deliveryTimeline?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _avg?: PurchaseOrderAvgAggregateInputType
    _sum?: PurchaseOrderSumAggregateInputType
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: number
    mtoOrderId: number
    vendorName: string
    lockedGoldPrice: number
    deliveryTimeline: string
    status: string
    createdAt: Date
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoOrderId?: boolean
    vendorName?: boolean
    lockedGoldPrice?: boolean
    deliveryTimeline?: boolean
    status?: boolean
    createdAt?: boolean
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
    qcRecord?: boolean | PurchaseOrder$qcRecordArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoOrderId?: boolean
    vendorName?: boolean
    lockedGoldPrice?: boolean
    deliveryTimeline?: boolean
    status?: boolean
    createdAt?: boolean
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoOrderId?: boolean
    vendorName?: boolean
    lockedGoldPrice?: boolean
    deliveryTimeline?: boolean
    status?: boolean
    createdAt?: boolean
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    mtoOrderId?: boolean
    vendorName?: boolean
    lockedGoldPrice?: boolean
    deliveryTimeline?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mtoOrderId" | "vendorName" | "lockedGoldPrice" | "deliveryTimeline" | "status" | "createdAt", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
    qcRecord?: boolean | PurchaseOrder$qcRecordArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      mtoOrder: Prisma.$MtoOrderPayload<ExtArgs>
      qcRecord: Prisma.$QcRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mtoOrderId: number
      vendorName: string
      lockedGoldPrice: number
      deliveryTimeline: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrders and returns the data saved in the database.
     * @param {PurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders and returns the data updated in the database.
     * @param {PurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrders.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtoOrder<T extends MtoOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MtoOrderDefaultArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qcRecord<T extends PurchaseOrder$qcRecordArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$qcRecordArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'Int'>
    readonly mtoOrderId: FieldRef<"PurchaseOrder", 'Int'>
    readonly vendorName: FieldRef<"PurchaseOrder", 'String'>
    readonly lockedGoldPrice: FieldRef<"PurchaseOrder", 'Float'>
    readonly deliveryTimeline: FieldRef<"PurchaseOrder", 'String'>
    readonly status: FieldRef<"PurchaseOrder", 'String'>
    readonly createdAt: FieldRef<"PurchaseOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder createManyAndReturn
   */
  export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder updateManyAndReturn
   */
  export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder.qcRecord
   */
  export type PurchaseOrder$qcRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    where?: QcRecordWhereInput
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Model QcRecord
   */

  export type AggregateQcRecord = {
    _count: QcRecordCountAggregateOutputType | null
    _avg: QcRecordAvgAggregateOutputType | null
    _sum: QcRecordSumAggregateOutputType | null
    _min: QcRecordMinAggregateOutputType | null
    _max: QcRecordMaxAggregateOutputType | null
  }

  export type QcRecordAvgAggregateOutputType = {
    id: number | null
    purchaseOrderId: number | null
    iterations: number | null
    actualGoldWeight: number | null
    actualMakingCharges: number | null
    actualStoneWeight: number | null
    actualStoneValue: number | null
    actualOtherCharges: number | null
  }

  export type QcRecordSumAggregateOutputType = {
    id: number | null
    purchaseOrderId: number | null
    iterations: number | null
    actualGoldWeight: number | null
    actualMakingCharges: number | null
    actualStoneWeight: number | null
    actualStoneValue: number | null
    actualOtherCharges: number | null
  }

  export type QcRecordMinAggregateOutputType = {
    id: number | null
    purchaseOrderId: number | null
    status: string | null
    iterations: number | null
    notes: string | null
    actualGoldWeight: number | null
    actualMakingCharges: number | null
    actualStoneWeight: number | null
    actualStoneValue: number | null
    actualOtherCharges: number | null
    isBilled: boolean | null
    createdAt: Date | null
  }

  export type QcRecordMaxAggregateOutputType = {
    id: number | null
    purchaseOrderId: number | null
    status: string | null
    iterations: number | null
    notes: string | null
    actualGoldWeight: number | null
    actualMakingCharges: number | null
    actualStoneWeight: number | null
    actualStoneValue: number | null
    actualOtherCharges: number | null
    isBilled: boolean | null
    createdAt: Date | null
  }

  export type QcRecordCountAggregateOutputType = {
    id: number
    purchaseOrderId: number
    status: number
    iterations: number
    notes: number
    actualGoldWeight: number
    actualMakingCharges: number
    actualStoneWeight: number
    actualStoneValue: number
    actualOtherCharges: number
    isBilled: number
    createdAt: number
    _all: number
  }


  export type QcRecordAvgAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    iterations?: true
    actualGoldWeight?: true
    actualMakingCharges?: true
    actualStoneWeight?: true
    actualStoneValue?: true
    actualOtherCharges?: true
  }

  export type QcRecordSumAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    iterations?: true
    actualGoldWeight?: true
    actualMakingCharges?: true
    actualStoneWeight?: true
    actualStoneValue?: true
    actualOtherCharges?: true
  }

  export type QcRecordMinAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    status?: true
    iterations?: true
    notes?: true
    actualGoldWeight?: true
    actualMakingCharges?: true
    actualStoneWeight?: true
    actualStoneValue?: true
    actualOtherCharges?: true
    isBilled?: true
    createdAt?: true
  }

  export type QcRecordMaxAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    status?: true
    iterations?: true
    notes?: true
    actualGoldWeight?: true
    actualMakingCharges?: true
    actualStoneWeight?: true
    actualStoneValue?: true
    actualOtherCharges?: true
    isBilled?: true
    createdAt?: true
  }

  export type QcRecordCountAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    status?: true
    iterations?: true
    notes?: true
    actualGoldWeight?: true
    actualMakingCharges?: true
    actualStoneWeight?: true
    actualStoneValue?: true
    actualOtherCharges?: true
    isBilled?: true
    createdAt?: true
    _all?: true
  }

  export type QcRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QcRecord to aggregate.
     */
    where?: QcRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcRecords to fetch.
     */
    orderBy?: QcRecordOrderByWithRelationInput | QcRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QcRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QcRecords
    **/
    _count?: true | QcRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QcRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QcRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QcRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QcRecordMaxAggregateInputType
  }

  export type GetQcRecordAggregateType<T extends QcRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateQcRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQcRecord[P]>
      : GetScalarType<T[P], AggregateQcRecord[P]>
  }




  export type QcRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QcRecordWhereInput
    orderBy?: QcRecordOrderByWithAggregationInput | QcRecordOrderByWithAggregationInput[]
    by: QcRecordScalarFieldEnum[] | QcRecordScalarFieldEnum
    having?: QcRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QcRecordCountAggregateInputType | true
    _avg?: QcRecordAvgAggregateInputType
    _sum?: QcRecordSumAggregateInputType
    _min?: QcRecordMinAggregateInputType
    _max?: QcRecordMaxAggregateInputType
  }

  export type QcRecordGroupByOutputType = {
    id: number
    purchaseOrderId: number
    status: string
    iterations: number
    notes: string | null
    actualGoldWeight: number | null
    actualMakingCharges: number | null
    actualStoneWeight: number | null
    actualStoneValue: number | null
    actualOtherCharges: number | null
    isBilled: boolean
    createdAt: Date
    _count: QcRecordCountAggregateOutputType | null
    _avg: QcRecordAvgAggregateOutputType | null
    _sum: QcRecordSumAggregateOutputType | null
    _min: QcRecordMinAggregateOutputType | null
    _max: QcRecordMaxAggregateOutputType | null
  }

  type GetQcRecordGroupByPayload<T extends QcRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QcRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QcRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QcRecordGroupByOutputType[P]>
            : GetScalarType<T[P], QcRecordGroupByOutputType[P]>
        }
      >
    >


  export type QcRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderId?: boolean
    status?: boolean
    iterations?: boolean
    notes?: boolean
    actualGoldWeight?: boolean
    actualMakingCharges?: boolean
    actualStoneWeight?: boolean
    actualStoneValue?: boolean
    actualOtherCharges?: boolean
    isBilled?: boolean
    createdAt?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qcRecord"]>

  export type QcRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderId?: boolean
    status?: boolean
    iterations?: boolean
    notes?: boolean
    actualGoldWeight?: boolean
    actualMakingCharges?: boolean
    actualStoneWeight?: boolean
    actualStoneValue?: boolean
    actualOtherCharges?: boolean
    isBilled?: boolean
    createdAt?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qcRecord"]>

  export type QcRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderId?: boolean
    status?: boolean
    iterations?: boolean
    notes?: boolean
    actualGoldWeight?: boolean
    actualMakingCharges?: boolean
    actualStoneWeight?: boolean
    actualStoneValue?: boolean
    actualOtherCharges?: boolean
    isBilled?: boolean
    createdAt?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qcRecord"]>

  export type QcRecordSelectScalar = {
    id?: boolean
    purchaseOrderId?: boolean
    status?: boolean
    iterations?: boolean
    notes?: boolean
    actualGoldWeight?: boolean
    actualMakingCharges?: boolean
    actualStoneWeight?: boolean
    actualStoneValue?: boolean
    actualOtherCharges?: boolean
    isBilled?: boolean
    createdAt?: boolean
  }

  export type QcRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchaseOrderId" | "status" | "iterations" | "notes" | "actualGoldWeight" | "actualMakingCharges" | "actualStoneWeight" | "actualStoneValue" | "actualOtherCharges" | "isBilled" | "createdAt", ExtArgs["result"]["qcRecord"]>
  export type QcRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type QcRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type QcRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }

  export type $QcRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QcRecord"
    objects: {
      purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      purchaseOrderId: number
      status: string
      iterations: number
      notes: string | null
      actualGoldWeight: number | null
      actualMakingCharges: number | null
      actualStoneWeight: number | null
      actualStoneValue: number | null
      actualOtherCharges: number | null
      isBilled: boolean
      createdAt: Date
    }, ExtArgs["result"]["qcRecord"]>
    composites: {}
  }

  type QcRecordGetPayload<S extends boolean | null | undefined | QcRecordDefaultArgs> = $Result.GetResult<Prisma.$QcRecordPayload, S>

  type QcRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QcRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QcRecordCountAggregateInputType | true
    }

  export interface QcRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QcRecord'], meta: { name: 'QcRecord' } }
    /**
     * Find zero or one QcRecord that matches the filter.
     * @param {QcRecordFindUniqueArgs} args - Arguments to find a QcRecord
     * @example
     * // Get one QcRecord
     * const qcRecord = await prisma.qcRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QcRecordFindUniqueArgs>(args: SelectSubset<T, QcRecordFindUniqueArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QcRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QcRecordFindUniqueOrThrowArgs} args - Arguments to find a QcRecord
     * @example
     * // Get one QcRecord
     * const qcRecord = await prisma.qcRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QcRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, QcRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QcRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcRecordFindFirstArgs} args - Arguments to find a QcRecord
     * @example
     * // Get one QcRecord
     * const qcRecord = await prisma.qcRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QcRecordFindFirstArgs>(args?: SelectSubset<T, QcRecordFindFirstArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QcRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcRecordFindFirstOrThrowArgs} args - Arguments to find a QcRecord
     * @example
     * // Get one QcRecord
     * const qcRecord = await prisma.qcRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QcRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, QcRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QcRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QcRecords
     * const qcRecords = await prisma.qcRecord.findMany()
     * 
     * // Get first 10 QcRecords
     * const qcRecords = await prisma.qcRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qcRecordWithIdOnly = await prisma.qcRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QcRecordFindManyArgs>(args?: SelectSubset<T, QcRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QcRecord.
     * @param {QcRecordCreateArgs} args - Arguments to create a QcRecord.
     * @example
     * // Create one QcRecord
     * const QcRecord = await prisma.qcRecord.create({
     *   data: {
     *     // ... data to create a QcRecord
     *   }
     * })
     * 
     */
    create<T extends QcRecordCreateArgs>(args: SelectSubset<T, QcRecordCreateArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QcRecords.
     * @param {QcRecordCreateManyArgs} args - Arguments to create many QcRecords.
     * @example
     * // Create many QcRecords
     * const qcRecord = await prisma.qcRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QcRecordCreateManyArgs>(args?: SelectSubset<T, QcRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QcRecords and returns the data saved in the database.
     * @param {QcRecordCreateManyAndReturnArgs} args - Arguments to create many QcRecords.
     * @example
     * // Create many QcRecords
     * const qcRecord = await prisma.qcRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QcRecords and only return the `id`
     * const qcRecordWithIdOnly = await prisma.qcRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QcRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, QcRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QcRecord.
     * @param {QcRecordDeleteArgs} args - Arguments to delete one QcRecord.
     * @example
     * // Delete one QcRecord
     * const QcRecord = await prisma.qcRecord.delete({
     *   where: {
     *     // ... filter to delete one QcRecord
     *   }
     * })
     * 
     */
    delete<T extends QcRecordDeleteArgs>(args: SelectSubset<T, QcRecordDeleteArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QcRecord.
     * @param {QcRecordUpdateArgs} args - Arguments to update one QcRecord.
     * @example
     * // Update one QcRecord
     * const qcRecord = await prisma.qcRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QcRecordUpdateArgs>(args: SelectSubset<T, QcRecordUpdateArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QcRecords.
     * @param {QcRecordDeleteManyArgs} args - Arguments to filter QcRecords to delete.
     * @example
     * // Delete a few QcRecords
     * const { count } = await prisma.qcRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QcRecordDeleteManyArgs>(args?: SelectSubset<T, QcRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QcRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QcRecords
     * const qcRecord = await prisma.qcRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QcRecordUpdateManyArgs>(args: SelectSubset<T, QcRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QcRecords and returns the data updated in the database.
     * @param {QcRecordUpdateManyAndReturnArgs} args - Arguments to update many QcRecords.
     * @example
     * // Update many QcRecords
     * const qcRecord = await prisma.qcRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QcRecords and only return the `id`
     * const qcRecordWithIdOnly = await prisma.qcRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QcRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, QcRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QcRecord.
     * @param {QcRecordUpsertArgs} args - Arguments to update or create a QcRecord.
     * @example
     * // Update or create a QcRecord
     * const qcRecord = await prisma.qcRecord.upsert({
     *   create: {
     *     // ... data to create a QcRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QcRecord we want to update
     *   }
     * })
     */
    upsert<T extends QcRecordUpsertArgs>(args: SelectSubset<T, QcRecordUpsertArgs<ExtArgs>>): Prisma__QcRecordClient<$Result.GetResult<Prisma.$QcRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QcRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcRecordCountArgs} args - Arguments to filter QcRecords to count.
     * @example
     * // Count the number of QcRecords
     * const count = await prisma.qcRecord.count({
     *   where: {
     *     // ... the filter for the QcRecords we want to count
     *   }
     * })
    **/
    count<T extends QcRecordCountArgs>(
      args?: Subset<T, QcRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QcRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QcRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QcRecordAggregateArgs>(args: Subset<T, QcRecordAggregateArgs>): Prisma.PrismaPromise<GetQcRecordAggregateType<T>>

    /**
     * Group by QcRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QcRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QcRecordGroupByArgs['orderBy'] }
        : { orderBy?: QcRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QcRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQcRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QcRecord model
   */
  readonly fields: QcRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QcRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QcRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchaseOrder<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QcRecord model
   */
  interface QcRecordFieldRefs {
    readonly id: FieldRef<"QcRecord", 'Int'>
    readonly purchaseOrderId: FieldRef<"QcRecord", 'Int'>
    readonly status: FieldRef<"QcRecord", 'String'>
    readonly iterations: FieldRef<"QcRecord", 'Int'>
    readonly notes: FieldRef<"QcRecord", 'String'>
    readonly actualGoldWeight: FieldRef<"QcRecord", 'Float'>
    readonly actualMakingCharges: FieldRef<"QcRecord", 'Float'>
    readonly actualStoneWeight: FieldRef<"QcRecord", 'Float'>
    readonly actualStoneValue: FieldRef<"QcRecord", 'Float'>
    readonly actualOtherCharges: FieldRef<"QcRecord", 'Float'>
    readonly isBilled: FieldRef<"QcRecord", 'Boolean'>
    readonly createdAt: FieldRef<"QcRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QcRecord findUnique
   */
  export type QcRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * Filter, which QcRecord to fetch.
     */
    where: QcRecordWhereUniqueInput
  }

  /**
   * QcRecord findUniqueOrThrow
   */
  export type QcRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * Filter, which QcRecord to fetch.
     */
    where: QcRecordWhereUniqueInput
  }

  /**
   * QcRecord findFirst
   */
  export type QcRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * Filter, which QcRecord to fetch.
     */
    where?: QcRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcRecords to fetch.
     */
    orderBy?: QcRecordOrderByWithRelationInput | QcRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QcRecords.
     */
    cursor?: QcRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QcRecords.
     */
    distinct?: QcRecordScalarFieldEnum | QcRecordScalarFieldEnum[]
  }

  /**
   * QcRecord findFirstOrThrow
   */
  export type QcRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * Filter, which QcRecord to fetch.
     */
    where?: QcRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcRecords to fetch.
     */
    orderBy?: QcRecordOrderByWithRelationInput | QcRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QcRecords.
     */
    cursor?: QcRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QcRecords.
     */
    distinct?: QcRecordScalarFieldEnum | QcRecordScalarFieldEnum[]
  }

  /**
   * QcRecord findMany
   */
  export type QcRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * Filter, which QcRecords to fetch.
     */
    where?: QcRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcRecords to fetch.
     */
    orderBy?: QcRecordOrderByWithRelationInput | QcRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QcRecords.
     */
    cursor?: QcRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcRecords.
     */
    skip?: number
    distinct?: QcRecordScalarFieldEnum | QcRecordScalarFieldEnum[]
  }

  /**
   * QcRecord create
   */
  export type QcRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a QcRecord.
     */
    data: XOR<QcRecordCreateInput, QcRecordUncheckedCreateInput>
  }

  /**
   * QcRecord createMany
   */
  export type QcRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QcRecords.
     */
    data: QcRecordCreateManyInput | QcRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QcRecord createManyAndReturn
   */
  export type QcRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * The data used to create many QcRecords.
     */
    data: QcRecordCreateManyInput | QcRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QcRecord update
   */
  export type QcRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a QcRecord.
     */
    data: XOR<QcRecordUpdateInput, QcRecordUncheckedUpdateInput>
    /**
     * Choose, which QcRecord to update.
     */
    where: QcRecordWhereUniqueInput
  }

  /**
   * QcRecord updateMany
   */
  export type QcRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QcRecords.
     */
    data: XOR<QcRecordUpdateManyMutationInput, QcRecordUncheckedUpdateManyInput>
    /**
     * Filter which QcRecords to update
     */
    where?: QcRecordWhereInput
    /**
     * Limit how many QcRecords to update.
     */
    limit?: number
  }

  /**
   * QcRecord updateManyAndReturn
   */
  export type QcRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * The data used to update QcRecords.
     */
    data: XOR<QcRecordUpdateManyMutationInput, QcRecordUncheckedUpdateManyInput>
    /**
     * Filter which QcRecords to update
     */
    where?: QcRecordWhereInput
    /**
     * Limit how many QcRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QcRecord upsert
   */
  export type QcRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the QcRecord to update in case it exists.
     */
    where: QcRecordWhereUniqueInput
    /**
     * In case the QcRecord found by the `where` argument doesn't exist, create a new QcRecord with this data.
     */
    create: XOR<QcRecordCreateInput, QcRecordUncheckedCreateInput>
    /**
     * In case the QcRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QcRecordUpdateInput, QcRecordUncheckedUpdateInput>
  }

  /**
   * QcRecord delete
   */
  export type QcRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
    /**
     * Filter which QcRecord to delete.
     */
    where: QcRecordWhereUniqueInput
  }

  /**
   * QcRecord deleteMany
   */
  export type QcRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QcRecords to delete
     */
    where?: QcRecordWhereInput
    /**
     * Limit how many QcRecords to delete.
     */
    limit?: number
  }

  /**
   * QcRecord without action
   */
  export type QcRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcRecord
     */
    select?: QcRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcRecord
     */
    omit?: QcRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QcRecordInclude<ExtArgs> | null
  }


  /**
   * Model GlobalPricing
   */

  export type AggregateGlobalPricing = {
    _count: GlobalPricingCountAggregateOutputType | null
    _avg: GlobalPricingAvgAggregateOutputType | null
    _sum: GlobalPricingSumAggregateOutputType | null
    _min: GlobalPricingMinAggregateOutputType | null
    _max: GlobalPricingMaxAggregateOutputType | null
  }

  export type GlobalPricingAvgAggregateOutputType = {
    id: number | null
    rate9k: number | null
    rate14k: number | null
    rate18k: number | null
    rate22k: number | null
    rate24k: number | null
    diamondRate: number | null
  }

  export type GlobalPricingSumAggregateOutputType = {
    id: number | null
    rate9k: number | null
    rate14k: number | null
    rate18k: number | null
    rate22k: number | null
    rate24k: number | null
    diamondRate: number | null
  }

  export type GlobalPricingMinAggregateOutputType = {
    id: number | null
    rate9k: number | null
    rate14k: number | null
    rate18k: number | null
    rate22k: number | null
    rate24k: number | null
    diamondRate: number | null
    updatedAt: Date | null
  }

  export type GlobalPricingMaxAggregateOutputType = {
    id: number | null
    rate9k: number | null
    rate14k: number | null
    rate18k: number | null
    rate22k: number | null
    rate24k: number | null
    diamondRate: number | null
    updatedAt: Date | null
  }

  export type GlobalPricingCountAggregateOutputType = {
    id: number
    rate9k: number
    rate14k: number
    rate18k: number
    rate22k: number
    rate24k: number
    diamondRate: number
    updatedAt: number
    _all: number
  }


  export type GlobalPricingAvgAggregateInputType = {
    id?: true
    rate9k?: true
    rate14k?: true
    rate18k?: true
    rate22k?: true
    rate24k?: true
    diamondRate?: true
  }

  export type GlobalPricingSumAggregateInputType = {
    id?: true
    rate9k?: true
    rate14k?: true
    rate18k?: true
    rate22k?: true
    rate24k?: true
    diamondRate?: true
  }

  export type GlobalPricingMinAggregateInputType = {
    id?: true
    rate9k?: true
    rate14k?: true
    rate18k?: true
    rate22k?: true
    rate24k?: true
    diamondRate?: true
    updatedAt?: true
  }

  export type GlobalPricingMaxAggregateInputType = {
    id?: true
    rate9k?: true
    rate14k?: true
    rate18k?: true
    rate22k?: true
    rate24k?: true
    diamondRate?: true
    updatedAt?: true
  }

  export type GlobalPricingCountAggregateInputType = {
    id?: true
    rate9k?: true
    rate14k?: true
    rate18k?: true
    rate22k?: true
    rate24k?: true
    diamondRate?: true
    updatedAt?: true
    _all?: true
  }

  export type GlobalPricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalPricing to aggregate.
     */
    where?: GlobalPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPricings to fetch.
     */
    orderBy?: GlobalPricingOrderByWithRelationInput | GlobalPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalPricings
    **/
    _count?: true | GlobalPricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalPricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalPricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalPricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalPricingMaxAggregateInputType
  }

  export type GetGlobalPricingAggregateType<T extends GlobalPricingAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalPricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalPricing[P]>
      : GetScalarType<T[P], AggregateGlobalPricing[P]>
  }




  export type GlobalPricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalPricingWhereInput
    orderBy?: GlobalPricingOrderByWithAggregationInput | GlobalPricingOrderByWithAggregationInput[]
    by: GlobalPricingScalarFieldEnum[] | GlobalPricingScalarFieldEnum
    having?: GlobalPricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalPricingCountAggregateInputType | true
    _avg?: GlobalPricingAvgAggregateInputType
    _sum?: GlobalPricingSumAggregateInputType
    _min?: GlobalPricingMinAggregateInputType
    _max?: GlobalPricingMaxAggregateInputType
  }

  export type GlobalPricingGroupByOutputType = {
    id: number
    rate9k: number
    rate14k: number
    rate18k: number
    rate22k: number
    rate24k: number
    diamondRate: number
    updatedAt: Date
    _count: GlobalPricingCountAggregateOutputType | null
    _avg: GlobalPricingAvgAggregateOutputType | null
    _sum: GlobalPricingSumAggregateOutputType | null
    _min: GlobalPricingMinAggregateOutputType | null
    _max: GlobalPricingMaxAggregateOutputType | null
  }

  type GetGlobalPricingGroupByPayload<T extends GlobalPricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalPricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalPricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalPricingGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalPricingGroupByOutputType[P]>
        }
      >
    >


  export type GlobalPricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rate9k?: boolean
    rate14k?: boolean
    rate18k?: boolean
    rate22k?: boolean
    rate24k?: boolean
    diamondRate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPricing"]>

  export type GlobalPricingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rate9k?: boolean
    rate14k?: boolean
    rate18k?: boolean
    rate22k?: boolean
    rate24k?: boolean
    diamondRate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPricing"]>

  export type GlobalPricingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rate9k?: boolean
    rate14k?: boolean
    rate18k?: boolean
    rate22k?: boolean
    rate24k?: boolean
    diamondRate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPricing"]>

  export type GlobalPricingSelectScalar = {
    id?: boolean
    rate9k?: boolean
    rate14k?: boolean
    rate18k?: boolean
    rate22k?: boolean
    rate24k?: boolean
    diamondRate?: boolean
    updatedAt?: boolean
  }

  export type GlobalPricingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rate9k" | "rate14k" | "rate18k" | "rate22k" | "rate24k" | "diamondRate" | "updatedAt", ExtArgs["result"]["globalPricing"]>

  export type $GlobalPricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalPricing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rate9k: number
      rate14k: number
      rate18k: number
      rate22k: number
      rate24k: number
      diamondRate: number
      updatedAt: Date
    }, ExtArgs["result"]["globalPricing"]>
    composites: {}
  }

  type GlobalPricingGetPayload<S extends boolean | null | undefined | GlobalPricingDefaultArgs> = $Result.GetResult<Prisma.$GlobalPricingPayload, S>

  type GlobalPricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalPricingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalPricingCountAggregateInputType | true
    }

  export interface GlobalPricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalPricing'], meta: { name: 'GlobalPricing' } }
    /**
     * Find zero or one GlobalPricing that matches the filter.
     * @param {GlobalPricingFindUniqueArgs} args - Arguments to find a GlobalPricing
     * @example
     * // Get one GlobalPricing
     * const globalPricing = await prisma.globalPricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalPricingFindUniqueArgs>(args: SelectSubset<T, GlobalPricingFindUniqueArgs<ExtArgs>>): Prisma__GlobalPricingClient<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalPricing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalPricingFindUniqueOrThrowArgs} args - Arguments to find a GlobalPricing
     * @example
     * // Get one GlobalPricing
     * const globalPricing = await prisma.globalPricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalPricingFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalPricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalPricingClient<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalPricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPricingFindFirstArgs} args - Arguments to find a GlobalPricing
     * @example
     * // Get one GlobalPricing
     * const globalPricing = await prisma.globalPricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalPricingFindFirstArgs>(args?: SelectSubset<T, GlobalPricingFindFirstArgs<ExtArgs>>): Prisma__GlobalPricingClient<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalPricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPricingFindFirstOrThrowArgs} args - Arguments to find a GlobalPricing
     * @example
     * // Get one GlobalPricing
     * const globalPricing = await prisma.globalPricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalPricingFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalPricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalPricingClient<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalPricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalPricings
     * const globalPricings = await prisma.globalPricing.findMany()
     * 
     * // Get first 10 GlobalPricings
     * const globalPricings = await prisma.globalPricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalPricingWithIdOnly = await prisma.globalPricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalPricingFindManyArgs>(args?: SelectSubset<T, GlobalPricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalPricing.
     * @param {GlobalPricingCreateArgs} args - Arguments to create a GlobalPricing.
     * @example
     * // Create one GlobalPricing
     * const GlobalPricing = await prisma.globalPricing.create({
     *   data: {
     *     // ... data to create a GlobalPricing
     *   }
     * })
     * 
     */
    create<T extends GlobalPricingCreateArgs>(args: SelectSubset<T, GlobalPricingCreateArgs<ExtArgs>>): Prisma__GlobalPricingClient<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalPricings.
     * @param {GlobalPricingCreateManyArgs} args - Arguments to create many GlobalPricings.
     * @example
     * // Create many GlobalPricings
     * const globalPricing = await prisma.globalPricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalPricingCreateManyArgs>(args?: SelectSubset<T, GlobalPricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalPricings and returns the data saved in the database.
     * @param {GlobalPricingCreateManyAndReturnArgs} args - Arguments to create many GlobalPricings.
     * @example
     * // Create many GlobalPricings
     * const globalPricing = await prisma.globalPricing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalPricings and only return the `id`
     * const globalPricingWithIdOnly = await prisma.globalPricing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalPricingCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalPricingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalPricing.
     * @param {GlobalPricingDeleteArgs} args - Arguments to delete one GlobalPricing.
     * @example
     * // Delete one GlobalPricing
     * const GlobalPricing = await prisma.globalPricing.delete({
     *   where: {
     *     // ... filter to delete one GlobalPricing
     *   }
     * })
     * 
     */
    delete<T extends GlobalPricingDeleteArgs>(args: SelectSubset<T, GlobalPricingDeleteArgs<ExtArgs>>): Prisma__GlobalPricingClient<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalPricing.
     * @param {GlobalPricingUpdateArgs} args - Arguments to update one GlobalPricing.
     * @example
     * // Update one GlobalPricing
     * const globalPricing = await prisma.globalPricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalPricingUpdateArgs>(args: SelectSubset<T, GlobalPricingUpdateArgs<ExtArgs>>): Prisma__GlobalPricingClient<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalPricings.
     * @param {GlobalPricingDeleteManyArgs} args - Arguments to filter GlobalPricings to delete.
     * @example
     * // Delete a few GlobalPricings
     * const { count } = await prisma.globalPricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalPricingDeleteManyArgs>(args?: SelectSubset<T, GlobalPricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalPricings
     * const globalPricing = await prisma.globalPricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalPricingUpdateManyArgs>(args: SelectSubset<T, GlobalPricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalPricings and returns the data updated in the database.
     * @param {GlobalPricingUpdateManyAndReturnArgs} args - Arguments to update many GlobalPricings.
     * @example
     * // Update many GlobalPricings
     * const globalPricing = await prisma.globalPricing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalPricings and only return the `id`
     * const globalPricingWithIdOnly = await prisma.globalPricing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalPricingUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalPricingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalPricing.
     * @param {GlobalPricingUpsertArgs} args - Arguments to update or create a GlobalPricing.
     * @example
     * // Update or create a GlobalPricing
     * const globalPricing = await prisma.globalPricing.upsert({
     *   create: {
     *     // ... data to create a GlobalPricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalPricing we want to update
     *   }
     * })
     */
    upsert<T extends GlobalPricingUpsertArgs>(args: SelectSubset<T, GlobalPricingUpsertArgs<ExtArgs>>): Prisma__GlobalPricingClient<$Result.GetResult<Prisma.$GlobalPricingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPricingCountArgs} args - Arguments to filter GlobalPricings to count.
     * @example
     * // Count the number of GlobalPricings
     * const count = await prisma.globalPricing.count({
     *   where: {
     *     // ... the filter for the GlobalPricings we want to count
     *   }
     * })
    **/
    count<T extends GlobalPricingCountArgs>(
      args?: Subset<T, GlobalPricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalPricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalPricingAggregateArgs>(args: Subset<T, GlobalPricingAggregateArgs>): Prisma.PrismaPromise<GetGlobalPricingAggregateType<T>>

    /**
     * Group by GlobalPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPricingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalPricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalPricingGroupByArgs['orderBy'] }
        : { orderBy?: GlobalPricingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalPricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalPricing model
   */
  readonly fields: GlobalPricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalPricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalPricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalPricing model
   */
  interface GlobalPricingFieldRefs {
    readonly id: FieldRef<"GlobalPricing", 'Int'>
    readonly rate9k: FieldRef<"GlobalPricing", 'Float'>
    readonly rate14k: FieldRef<"GlobalPricing", 'Float'>
    readonly rate18k: FieldRef<"GlobalPricing", 'Float'>
    readonly rate22k: FieldRef<"GlobalPricing", 'Float'>
    readonly rate24k: FieldRef<"GlobalPricing", 'Float'>
    readonly diamondRate: FieldRef<"GlobalPricing", 'Float'>
    readonly updatedAt: FieldRef<"GlobalPricing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalPricing findUnique
   */
  export type GlobalPricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPricing to fetch.
     */
    where: GlobalPricingWhereUniqueInput
  }

  /**
   * GlobalPricing findUniqueOrThrow
   */
  export type GlobalPricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPricing to fetch.
     */
    where: GlobalPricingWhereUniqueInput
  }

  /**
   * GlobalPricing findFirst
   */
  export type GlobalPricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPricing to fetch.
     */
    where?: GlobalPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPricings to fetch.
     */
    orderBy?: GlobalPricingOrderByWithRelationInput | GlobalPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalPricings.
     */
    cursor?: GlobalPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPricings.
     */
    distinct?: GlobalPricingScalarFieldEnum | GlobalPricingScalarFieldEnum[]
  }

  /**
   * GlobalPricing findFirstOrThrow
   */
  export type GlobalPricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPricing to fetch.
     */
    where?: GlobalPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPricings to fetch.
     */
    orderBy?: GlobalPricingOrderByWithRelationInput | GlobalPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalPricings.
     */
    cursor?: GlobalPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPricings.
     */
    distinct?: GlobalPricingScalarFieldEnum | GlobalPricingScalarFieldEnum[]
  }

  /**
   * GlobalPricing findMany
   */
  export type GlobalPricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPricings to fetch.
     */
    where?: GlobalPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPricings to fetch.
     */
    orderBy?: GlobalPricingOrderByWithRelationInput | GlobalPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalPricings.
     */
    cursor?: GlobalPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPricings.
     */
    skip?: number
    distinct?: GlobalPricingScalarFieldEnum | GlobalPricingScalarFieldEnum[]
  }

  /**
   * GlobalPricing create
   */
  export type GlobalPricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalPricing.
     */
    data: XOR<GlobalPricingCreateInput, GlobalPricingUncheckedCreateInput>
  }

  /**
   * GlobalPricing createMany
   */
  export type GlobalPricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalPricings.
     */
    data: GlobalPricingCreateManyInput | GlobalPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalPricing createManyAndReturn
   */
  export type GlobalPricingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalPricings.
     */
    data: GlobalPricingCreateManyInput | GlobalPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalPricing update
   */
  export type GlobalPricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalPricing.
     */
    data: XOR<GlobalPricingUpdateInput, GlobalPricingUncheckedUpdateInput>
    /**
     * Choose, which GlobalPricing to update.
     */
    where: GlobalPricingWhereUniqueInput
  }

  /**
   * GlobalPricing updateMany
   */
  export type GlobalPricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalPricings.
     */
    data: XOR<GlobalPricingUpdateManyMutationInput, GlobalPricingUncheckedUpdateManyInput>
    /**
     * Filter which GlobalPricings to update
     */
    where?: GlobalPricingWhereInput
    /**
     * Limit how many GlobalPricings to update.
     */
    limit?: number
  }

  /**
   * GlobalPricing updateManyAndReturn
   */
  export type GlobalPricingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * The data used to update GlobalPricings.
     */
    data: XOR<GlobalPricingUpdateManyMutationInput, GlobalPricingUncheckedUpdateManyInput>
    /**
     * Filter which GlobalPricings to update
     */
    where?: GlobalPricingWhereInput
    /**
     * Limit how many GlobalPricings to update.
     */
    limit?: number
  }

  /**
   * GlobalPricing upsert
   */
  export type GlobalPricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalPricing to update in case it exists.
     */
    where: GlobalPricingWhereUniqueInput
    /**
     * In case the GlobalPricing found by the `where` argument doesn't exist, create a new GlobalPricing with this data.
     */
    create: XOR<GlobalPricingCreateInput, GlobalPricingUncheckedCreateInput>
    /**
     * In case the GlobalPricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalPricingUpdateInput, GlobalPricingUncheckedUpdateInput>
  }

  /**
   * GlobalPricing delete
   */
  export type GlobalPricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
    /**
     * Filter which GlobalPricing to delete.
     */
    where: GlobalPricingWhereUniqueInput
  }

  /**
   * GlobalPricing deleteMany
   */
  export type GlobalPricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalPricings to delete
     */
    where?: GlobalPricingWhereInput
    /**
     * Limit how many GlobalPricings to delete.
     */
    limit?: number
  }

  /**
   * GlobalPricing without action
   */
  export type GlobalPricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPricing
     */
    select?: GlobalPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPricing
     */
    omit?: GlobalPricingOmit<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    mtoOrderId: number | null
    totalAmount: number | null
    paidAmount: number | null
    balanceAmount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    mtoOrderId: number | null
    totalAmount: number | null
    paidAmount: number | null
    balanceAmount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    mtoOrderId: number | null
    totalAmount: number | null
    paidAmount: number | null
    balanceAmount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    mtoOrderId: number | null
    totalAmount: number | null
    paidAmount: number | null
    balanceAmount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    mtoOrderId: number
    totalAmount: number
    paidAmount: number
    balanceAmount: number
    status: number
    createdAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    mtoOrderId?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    mtoOrderId?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    mtoOrderId?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
    status?: true
    createdAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    mtoOrderId?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
    status?: true
    createdAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    mtoOrderId?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    mtoOrderId: number
    totalAmount: number
    paidAmount: number
    balanceAmount: number
    status: string
    createdAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoOrderId?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balanceAmount?: boolean
    status?: boolean
    createdAt?: boolean
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoOrderId?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balanceAmount?: boolean
    status?: boolean
    createdAt?: boolean
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mtoOrderId?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balanceAmount?: boolean
    status?: boolean
    createdAt?: boolean
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    mtoOrderId?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balanceAmount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mtoOrderId" | "totalAmount" | "paidAmount" | "balanceAmount" | "status" | "createdAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mtoOrder?: boolean | MtoOrderDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      mtoOrder: Prisma.$MtoOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mtoOrderId: number
      totalAmount: number
      paidAmount: number
      balanceAmount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mtoOrder<T extends MtoOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MtoOrderDefaultArgs<ExtArgs>>): Prisma__MtoOrderClient<$Result.GetResult<Prisma.$MtoOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly mtoOrderId: FieldRef<"Invoice", 'Int'>
    readonly totalAmount: FieldRef<"Invoice", 'Float'>
    readonly paidAmount: FieldRef<"Invoice", 'Float'>
    readonly balanceAmount: FieldRef<"Invoice", 'Float'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    email: 'email',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const MtoQueryScalarFieldEnum: {
    id: 'id',
    queryNo: 'queryNo',
    customerId: 'customerId',
    staffId: 'staffId',
    leadType: 'leadType',
    mtoType: 'mtoType',
    category: 'category',
    metalType: 'metalType',
    isStudded: 'isStudded',
    diamondCaratage: 'diamondCaratage',
    weightRange: 'weightRange',
    goldKaratage: 'goldKaratage',
    metalColor: 'metalColor',
    goldWeight: 'goldWeight',
    size: 'size',
    notes: 'notes',
    status: 'status',
    referenceImages: 'referenceImages',
    catalogueSku: 'catalogueSku',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MtoQueryScalarFieldEnum = (typeof MtoQueryScalarFieldEnum)[keyof typeof MtoQueryScalarFieldEnum]


  export const VendorEstimationScalarFieldEnum: {
    id: 'id',
    mtoQueryId: 'mtoQueryId',
    vendorName: 'vendorName',
    goldWeight: 'goldWeight',
    diamondWeight: 'diamondWeight',
    remarks: 'remarks',
    images: 'images',
    isAccepted: 'isAccepted',
    createdAt: 'createdAt'
  };

  export type VendorEstimationScalarFieldEnum = (typeof VendorEstimationScalarFieldEnum)[keyof typeof VendorEstimationScalarFieldEnum]


  export const EstimationScalarFieldEnum: {
    id: 'id',
    mtoQueryId: 'mtoQueryId',
    version: 'version',
    goldWeight: 'goldWeight',
    goldRate: 'goldRate',
    diamondWeight: 'diamondWeight',
    diamondRate: 'diamondRate',
    makingPercent: 'makingPercent',
    discountPercent: 'discountPercent',
    otherStones: 'otherStones',
    gstAmount: 'gstAmount',
    discountAmount: 'discountAmount',
    totalAmount: 'totalAmount',
    finalEstimatedPrice: 'finalEstimatedPrice',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type EstimationScalarFieldEnum = (typeof EstimationScalarFieldEnum)[keyof typeof EstimationScalarFieldEnum]


  export const PromisedPricingScalarFieldEnum: {
    id: 'id',
    mtoQueryId: 'mtoQueryId',
    goldWeight: 'goldWeight',
    stoneDetails: 'stoneDetails',
    finalPrice: 'finalPrice',
    goldRate: 'goldRate',
    lockedAt: 'lockedAt'
  };

  export type PromisedPricingScalarFieldEnum = (typeof PromisedPricingScalarFieldEnum)[keyof typeof PromisedPricingScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    mtoQueryId: 'mtoQueryId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const MtoOrderScalarFieldEnum: {
    id: 'id',
    mtoQueryId: 'mtoQueryId',
    posRefId: 'posRefId',
    orderRefId: 'orderRefId',
    advanceAmount: 'advanceAmount',
    remainingAmount: 'remainingAmount',
    cadDesigns: 'cadDesigns',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MtoOrderScalarFieldEnum = (typeof MtoOrderScalarFieldEnum)[keyof typeof MtoOrderScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    mtoOrderId: 'mtoOrderId',
    vendorName: 'vendorName',
    lockedGoldPrice: 'lockedGoldPrice',
    deliveryTimeline: 'deliveryTimeline',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const QcRecordScalarFieldEnum: {
    id: 'id',
    purchaseOrderId: 'purchaseOrderId',
    status: 'status',
    iterations: 'iterations',
    notes: 'notes',
    actualGoldWeight: 'actualGoldWeight',
    actualMakingCharges: 'actualMakingCharges',
    actualStoneWeight: 'actualStoneWeight',
    actualStoneValue: 'actualStoneValue',
    actualOtherCharges: 'actualOtherCharges',
    isBilled: 'isBilled',
    createdAt: 'createdAt'
  };

  export type QcRecordScalarFieldEnum = (typeof QcRecordScalarFieldEnum)[keyof typeof QcRecordScalarFieldEnum]


  export const GlobalPricingScalarFieldEnum: {
    id: 'id',
    rate9k: 'rate9k',
    rate14k: 'rate14k',
    rate18k: 'rate18k',
    rate22k: 'rate22k',
    rate24k: 'rate24k',
    diamondRate: 'diamondRate',
    updatedAt: 'updatedAt'
  };

  export type GlobalPricingScalarFieldEnum = (typeof GlobalPricingScalarFieldEnum)[keyof typeof GlobalPricingScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    mtoOrderId: 'mtoOrderId',
    totalAmount: 'totalAmount',
    paidAmount: 'paidAmount',
    balanceAmount: 'balanceAmount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    mtos?: MtoQueryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    mtos?: MtoQueryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    mtos?: MtoQueryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    mtos?: MtoQueryListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    mtos?: MtoQueryOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    mtos?: MtoQueryListRelationFilter
  }, "id" | "phone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type MtoQueryWhereInput = {
    AND?: MtoQueryWhereInput | MtoQueryWhereInput[]
    OR?: MtoQueryWhereInput[]
    NOT?: MtoQueryWhereInput | MtoQueryWhereInput[]
    id?: StringFilter<"MtoQuery"> | string
    queryNo?: IntFilter<"MtoQuery"> | number
    customerId?: IntFilter<"MtoQuery"> | number
    staffId?: IntFilter<"MtoQuery"> | number
    leadType?: StringFilter<"MtoQuery"> | string
    mtoType?: StringFilter<"MtoQuery"> | string
    category?: StringFilter<"MtoQuery"> | string
    metalType?: StringFilter<"MtoQuery"> | string
    isStudded?: BoolFilter<"MtoQuery"> | boolean
    diamondCaratage?: StringNullableFilter<"MtoQuery"> | string | null
    weightRange?: StringFilter<"MtoQuery"> | string
    goldKaratage?: StringNullableFilter<"MtoQuery"> | string | null
    metalColor?: StringNullableFilter<"MtoQuery"> | string | null
    goldWeight?: StringNullableFilter<"MtoQuery"> | string | null
    size?: StringNullableFilter<"MtoQuery"> | string | null
    notes?: StringNullableFilter<"MtoQuery"> | string | null
    status?: StringFilter<"MtoQuery"> | string
    referenceImages?: StringNullableFilter<"MtoQuery"> | string | null
    catalogueSku?: StringNullableFilter<"MtoQuery"> | string | null
    createdAt?: DateTimeFilter<"MtoQuery"> | Date | string
    updatedAt?: DateTimeFilter<"MtoQuery"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendorEstimations?: VendorEstimationListRelationFilter
    estimations?: EstimationListRelationFilter
    pricing?: XOR<PromisedPricingNullableScalarRelationFilter, PromisedPricingWhereInput> | null
    order?: XOR<MtoOrderNullableScalarRelationFilter, MtoOrderWhereInput> | null
    payment?: PaymentListRelationFilter
  }

  export type MtoQueryOrderByWithRelationInput = {
    id?: SortOrder
    queryNo?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    leadType?: SortOrder
    mtoType?: SortOrder
    category?: SortOrder
    metalType?: SortOrder
    isStudded?: SortOrder
    diamondCaratage?: SortOrderInput | SortOrder
    weightRange?: SortOrder
    goldKaratage?: SortOrderInput | SortOrder
    metalColor?: SortOrderInput | SortOrder
    goldWeight?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    referenceImages?: SortOrderInput | SortOrder
    catalogueSku?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    staff?: UserOrderByWithRelationInput
    vendorEstimations?: VendorEstimationOrderByRelationAggregateInput
    estimations?: EstimationOrderByRelationAggregateInput
    pricing?: PromisedPricingOrderByWithRelationInput
    order?: MtoOrderOrderByWithRelationInput
    payment?: PaymentOrderByRelationAggregateInput
  }

  export type MtoQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    queryNo?: number
    AND?: MtoQueryWhereInput | MtoQueryWhereInput[]
    OR?: MtoQueryWhereInput[]
    NOT?: MtoQueryWhereInput | MtoQueryWhereInput[]
    customerId?: IntFilter<"MtoQuery"> | number
    staffId?: IntFilter<"MtoQuery"> | number
    leadType?: StringFilter<"MtoQuery"> | string
    mtoType?: StringFilter<"MtoQuery"> | string
    category?: StringFilter<"MtoQuery"> | string
    metalType?: StringFilter<"MtoQuery"> | string
    isStudded?: BoolFilter<"MtoQuery"> | boolean
    diamondCaratage?: StringNullableFilter<"MtoQuery"> | string | null
    weightRange?: StringFilter<"MtoQuery"> | string
    goldKaratage?: StringNullableFilter<"MtoQuery"> | string | null
    metalColor?: StringNullableFilter<"MtoQuery"> | string | null
    goldWeight?: StringNullableFilter<"MtoQuery"> | string | null
    size?: StringNullableFilter<"MtoQuery"> | string | null
    notes?: StringNullableFilter<"MtoQuery"> | string | null
    status?: StringFilter<"MtoQuery"> | string
    referenceImages?: StringNullableFilter<"MtoQuery"> | string | null
    catalogueSku?: StringNullableFilter<"MtoQuery"> | string | null
    createdAt?: DateTimeFilter<"MtoQuery"> | Date | string
    updatedAt?: DateTimeFilter<"MtoQuery"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendorEstimations?: VendorEstimationListRelationFilter
    estimations?: EstimationListRelationFilter
    pricing?: XOR<PromisedPricingNullableScalarRelationFilter, PromisedPricingWhereInput> | null
    order?: XOR<MtoOrderNullableScalarRelationFilter, MtoOrderWhereInput> | null
    payment?: PaymentListRelationFilter
  }, "id" | "queryNo">

  export type MtoQueryOrderByWithAggregationInput = {
    id?: SortOrder
    queryNo?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    leadType?: SortOrder
    mtoType?: SortOrder
    category?: SortOrder
    metalType?: SortOrder
    isStudded?: SortOrder
    diamondCaratage?: SortOrderInput | SortOrder
    weightRange?: SortOrder
    goldKaratage?: SortOrderInput | SortOrder
    metalColor?: SortOrderInput | SortOrder
    goldWeight?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    referenceImages?: SortOrderInput | SortOrder
    catalogueSku?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MtoQueryCountOrderByAggregateInput
    _avg?: MtoQueryAvgOrderByAggregateInput
    _max?: MtoQueryMaxOrderByAggregateInput
    _min?: MtoQueryMinOrderByAggregateInput
    _sum?: MtoQuerySumOrderByAggregateInput
  }

  export type MtoQueryScalarWhereWithAggregatesInput = {
    AND?: MtoQueryScalarWhereWithAggregatesInput | MtoQueryScalarWhereWithAggregatesInput[]
    OR?: MtoQueryScalarWhereWithAggregatesInput[]
    NOT?: MtoQueryScalarWhereWithAggregatesInput | MtoQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MtoQuery"> | string
    queryNo?: IntWithAggregatesFilter<"MtoQuery"> | number
    customerId?: IntWithAggregatesFilter<"MtoQuery"> | number
    staffId?: IntWithAggregatesFilter<"MtoQuery"> | number
    leadType?: StringWithAggregatesFilter<"MtoQuery"> | string
    mtoType?: StringWithAggregatesFilter<"MtoQuery"> | string
    category?: StringWithAggregatesFilter<"MtoQuery"> | string
    metalType?: StringWithAggregatesFilter<"MtoQuery"> | string
    isStudded?: BoolWithAggregatesFilter<"MtoQuery"> | boolean
    diamondCaratage?: StringNullableWithAggregatesFilter<"MtoQuery"> | string | null
    weightRange?: StringWithAggregatesFilter<"MtoQuery"> | string
    goldKaratage?: StringNullableWithAggregatesFilter<"MtoQuery"> | string | null
    metalColor?: StringNullableWithAggregatesFilter<"MtoQuery"> | string | null
    goldWeight?: StringNullableWithAggregatesFilter<"MtoQuery"> | string | null
    size?: StringNullableWithAggregatesFilter<"MtoQuery"> | string | null
    notes?: StringNullableWithAggregatesFilter<"MtoQuery"> | string | null
    status?: StringWithAggregatesFilter<"MtoQuery"> | string
    referenceImages?: StringNullableWithAggregatesFilter<"MtoQuery"> | string | null
    catalogueSku?: StringNullableWithAggregatesFilter<"MtoQuery"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MtoQuery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MtoQuery"> | Date | string
  }

  export type VendorEstimationWhereInput = {
    AND?: VendorEstimationWhereInput | VendorEstimationWhereInput[]
    OR?: VendorEstimationWhereInput[]
    NOT?: VendorEstimationWhereInput | VendorEstimationWhereInput[]
    id?: IntFilter<"VendorEstimation"> | number
    mtoQueryId?: StringFilter<"VendorEstimation"> | string
    vendorName?: StringFilter<"VendorEstimation"> | string
    goldWeight?: StringNullableFilter<"VendorEstimation"> | string | null
    diamondWeight?: StringNullableFilter<"VendorEstimation"> | string | null
    remarks?: StringNullableFilter<"VendorEstimation"> | string | null
    images?: StringNullableFilter<"VendorEstimation"> | string | null
    isAccepted?: BoolFilter<"VendorEstimation"> | boolean
    createdAt?: DateTimeFilter<"VendorEstimation"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
  }

  export type VendorEstimationOrderByWithRelationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    vendorName?: SortOrder
    goldWeight?: SortOrderInput | SortOrder
    diamondWeight?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
    mtoQuery?: MtoQueryOrderByWithRelationInput
  }

  export type VendorEstimationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VendorEstimationWhereInput | VendorEstimationWhereInput[]
    OR?: VendorEstimationWhereInput[]
    NOT?: VendorEstimationWhereInput | VendorEstimationWhereInput[]
    mtoQueryId?: StringFilter<"VendorEstimation"> | string
    vendorName?: StringFilter<"VendorEstimation"> | string
    goldWeight?: StringNullableFilter<"VendorEstimation"> | string | null
    diamondWeight?: StringNullableFilter<"VendorEstimation"> | string | null
    remarks?: StringNullableFilter<"VendorEstimation"> | string | null
    images?: StringNullableFilter<"VendorEstimation"> | string | null
    isAccepted?: BoolFilter<"VendorEstimation"> | boolean
    createdAt?: DateTimeFilter<"VendorEstimation"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
  }, "id">

  export type VendorEstimationOrderByWithAggregationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    vendorName?: SortOrder
    goldWeight?: SortOrderInput | SortOrder
    diamondWeight?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
    _count?: VendorEstimationCountOrderByAggregateInput
    _avg?: VendorEstimationAvgOrderByAggregateInput
    _max?: VendorEstimationMaxOrderByAggregateInput
    _min?: VendorEstimationMinOrderByAggregateInput
    _sum?: VendorEstimationSumOrderByAggregateInput
  }

  export type VendorEstimationScalarWhereWithAggregatesInput = {
    AND?: VendorEstimationScalarWhereWithAggregatesInput | VendorEstimationScalarWhereWithAggregatesInput[]
    OR?: VendorEstimationScalarWhereWithAggregatesInput[]
    NOT?: VendorEstimationScalarWhereWithAggregatesInput | VendorEstimationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VendorEstimation"> | number
    mtoQueryId?: StringWithAggregatesFilter<"VendorEstimation"> | string
    vendorName?: StringWithAggregatesFilter<"VendorEstimation"> | string
    goldWeight?: StringNullableWithAggregatesFilter<"VendorEstimation"> | string | null
    diamondWeight?: StringNullableWithAggregatesFilter<"VendorEstimation"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"VendorEstimation"> | string | null
    images?: StringNullableWithAggregatesFilter<"VendorEstimation"> | string | null
    isAccepted?: BoolWithAggregatesFilter<"VendorEstimation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VendorEstimation"> | Date | string
  }

  export type EstimationWhereInput = {
    AND?: EstimationWhereInput | EstimationWhereInput[]
    OR?: EstimationWhereInput[]
    NOT?: EstimationWhereInput | EstimationWhereInput[]
    id?: IntFilter<"Estimation"> | number
    mtoQueryId?: StringFilter<"Estimation"> | string
    version?: IntFilter<"Estimation"> | number
    goldWeight?: StringFilter<"Estimation"> | string
    goldRate?: FloatFilter<"Estimation"> | number
    diamondWeight?: FloatNullableFilter<"Estimation"> | number | null
    diamondRate?: FloatNullableFilter<"Estimation"> | number | null
    makingPercent?: FloatFilter<"Estimation"> | number
    discountPercent?: FloatFilter<"Estimation"> | number
    otherStones?: FloatNullableFilter<"Estimation"> | number | null
    gstAmount?: FloatFilter<"Estimation"> | number
    discountAmount?: FloatFilter<"Estimation"> | number
    totalAmount?: FloatFilter<"Estimation"> | number
    finalEstimatedPrice?: FloatFilter<"Estimation"> | number
    notes?: StringNullableFilter<"Estimation"> | string | null
    createdAt?: DateTimeFilter<"Estimation"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
  }

  export type EstimationOrderByWithRelationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    version?: SortOrder
    goldWeight?: SortOrder
    goldRate?: SortOrder
    diamondWeight?: SortOrderInput | SortOrder
    diamondRate?: SortOrderInput | SortOrder
    makingPercent?: SortOrder
    discountPercent?: SortOrder
    otherStones?: SortOrderInput | SortOrder
    gstAmount?: SortOrder
    discountAmount?: SortOrder
    totalAmount?: SortOrder
    finalEstimatedPrice?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    mtoQuery?: MtoQueryOrderByWithRelationInput
  }

  export type EstimationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstimationWhereInput | EstimationWhereInput[]
    OR?: EstimationWhereInput[]
    NOT?: EstimationWhereInput | EstimationWhereInput[]
    mtoQueryId?: StringFilter<"Estimation"> | string
    version?: IntFilter<"Estimation"> | number
    goldWeight?: StringFilter<"Estimation"> | string
    goldRate?: FloatFilter<"Estimation"> | number
    diamondWeight?: FloatNullableFilter<"Estimation"> | number | null
    diamondRate?: FloatNullableFilter<"Estimation"> | number | null
    makingPercent?: FloatFilter<"Estimation"> | number
    discountPercent?: FloatFilter<"Estimation"> | number
    otherStones?: FloatNullableFilter<"Estimation"> | number | null
    gstAmount?: FloatFilter<"Estimation"> | number
    discountAmount?: FloatFilter<"Estimation"> | number
    totalAmount?: FloatFilter<"Estimation"> | number
    finalEstimatedPrice?: FloatFilter<"Estimation"> | number
    notes?: StringNullableFilter<"Estimation"> | string | null
    createdAt?: DateTimeFilter<"Estimation"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
  }, "id">

  export type EstimationOrderByWithAggregationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    version?: SortOrder
    goldWeight?: SortOrder
    goldRate?: SortOrder
    diamondWeight?: SortOrderInput | SortOrder
    diamondRate?: SortOrderInput | SortOrder
    makingPercent?: SortOrder
    discountPercent?: SortOrder
    otherStones?: SortOrderInput | SortOrder
    gstAmount?: SortOrder
    discountAmount?: SortOrder
    totalAmount?: SortOrder
    finalEstimatedPrice?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EstimationCountOrderByAggregateInput
    _avg?: EstimationAvgOrderByAggregateInput
    _max?: EstimationMaxOrderByAggregateInput
    _min?: EstimationMinOrderByAggregateInput
    _sum?: EstimationSumOrderByAggregateInput
  }

  export type EstimationScalarWhereWithAggregatesInput = {
    AND?: EstimationScalarWhereWithAggregatesInput | EstimationScalarWhereWithAggregatesInput[]
    OR?: EstimationScalarWhereWithAggregatesInput[]
    NOT?: EstimationScalarWhereWithAggregatesInput | EstimationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estimation"> | number
    mtoQueryId?: StringWithAggregatesFilter<"Estimation"> | string
    version?: IntWithAggregatesFilter<"Estimation"> | number
    goldWeight?: StringWithAggregatesFilter<"Estimation"> | string
    goldRate?: FloatWithAggregatesFilter<"Estimation"> | number
    diamondWeight?: FloatNullableWithAggregatesFilter<"Estimation"> | number | null
    diamondRate?: FloatNullableWithAggregatesFilter<"Estimation"> | number | null
    makingPercent?: FloatWithAggregatesFilter<"Estimation"> | number
    discountPercent?: FloatWithAggregatesFilter<"Estimation"> | number
    otherStones?: FloatNullableWithAggregatesFilter<"Estimation"> | number | null
    gstAmount?: FloatWithAggregatesFilter<"Estimation"> | number
    discountAmount?: FloatWithAggregatesFilter<"Estimation"> | number
    totalAmount?: FloatWithAggregatesFilter<"Estimation"> | number
    finalEstimatedPrice?: FloatWithAggregatesFilter<"Estimation"> | number
    notes?: StringNullableWithAggregatesFilter<"Estimation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Estimation"> | Date | string
  }

  export type PromisedPricingWhereInput = {
    AND?: PromisedPricingWhereInput | PromisedPricingWhereInput[]
    OR?: PromisedPricingWhereInput[]
    NOT?: PromisedPricingWhereInput | PromisedPricingWhereInput[]
    id?: IntFilter<"PromisedPricing"> | number
    mtoQueryId?: StringFilter<"PromisedPricing"> | string
    goldWeight?: StringFilter<"PromisedPricing"> | string
    stoneDetails?: StringFilter<"PromisedPricing"> | string
    finalPrice?: FloatFilter<"PromisedPricing"> | number
    goldRate?: FloatFilter<"PromisedPricing"> | number
    lockedAt?: DateTimeFilter<"PromisedPricing"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
  }

  export type PromisedPricingOrderByWithRelationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    goldWeight?: SortOrder
    stoneDetails?: SortOrder
    finalPrice?: SortOrder
    goldRate?: SortOrder
    lockedAt?: SortOrder
    mtoQuery?: MtoQueryOrderByWithRelationInput
  }

  export type PromisedPricingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mtoQueryId?: string
    AND?: PromisedPricingWhereInput | PromisedPricingWhereInput[]
    OR?: PromisedPricingWhereInput[]
    NOT?: PromisedPricingWhereInput | PromisedPricingWhereInput[]
    goldWeight?: StringFilter<"PromisedPricing"> | string
    stoneDetails?: StringFilter<"PromisedPricing"> | string
    finalPrice?: FloatFilter<"PromisedPricing"> | number
    goldRate?: FloatFilter<"PromisedPricing"> | number
    lockedAt?: DateTimeFilter<"PromisedPricing"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
  }, "id" | "mtoQueryId">

  export type PromisedPricingOrderByWithAggregationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    goldWeight?: SortOrder
    stoneDetails?: SortOrder
    finalPrice?: SortOrder
    goldRate?: SortOrder
    lockedAt?: SortOrder
    _count?: PromisedPricingCountOrderByAggregateInput
    _avg?: PromisedPricingAvgOrderByAggregateInput
    _max?: PromisedPricingMaxOrderByAggregateInput
    _min?: PromisedPricingMinOrderByAggregateInput
    _sum?: PromisedPricingSumOrderByAggregateInput
  }

  export type PromisedPricingScalarWhereWithAggregatesInput = {
    AND?: PromisedPricingScalarWhereWithAggregatesInput | PromisedPricingScalarWhereWithAggregatesInput[]
    OR?: PromisedPricingScalarWhereWithAggregatesInput[]
    NOT?: PromisedPricingScalarWhereWithAggregatesInput | PromisedPricingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PromisedPricing"> | number
    mtoQueryId?: StringWithAggregatesFilter<"PromisedPricing"> | string
    goldWeight?: StringWithAggregatesFilter<"PromisedPricing"> | string
    stoneDetails?: StringWithAggregatesFilter<"PromisedPricing"> | string
    finalPrice?: FloatWithAggregatesFilter<"PromisedPricing"> | number
    goldRate?: FloatWithAggregatesFilter<"PromisedPricing"> | number
    lockedAt?: DateTimeWithAggregatesFilter<"PromisedPricing"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    mtoQueryId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    mtoQuery?: MtoQueryOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    mtoQueryId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    mtoQueryId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type MtoOrderWhereInput = {
    AND?: MtoOrderWhereInput | MtoOrderWhereInput[]
    OR?: MtoOrderWhereInput[]
    NOT?: MtoOrderWhereInput | MtoOrderWhereInput[]
    id?: IntFilter<"MtoOrder"> | number
    mtoQueryId?: StringFilter<"MtoOrder"> | string
    posRefId?: StringNullableFilter<"MtoOrder"> | string | null
    orderRefId?: StringNullableFilter<"MtoOrder"> | string | null
    advanceAmount?: FloatFilter<"MtoOrder"> | number
    remainingAmount?: FloatFilter<"MtoOrder"> | number
    cadDesigns?: StringNullableFilter<"MtoOrder"> | string | null
    status?: StringFilter<"MtoOrder"> | string
    createdAt?: DateTimeFilter<"MtoOrder"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
    purchaseOrder?: XOR<PurchaseOrderNullableScalarRelationFilter, PurchaseOrderWhereInput> | null
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
  }

  export type MtoOrderOrderByWithRelationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    posRefId?: SortOrderInput | SortOrder
    orderRefId?: SortOrderInput | SortOrder
    advanceAmount?: SortOrder
    remainingAmount?: SortOrder
    cadDesigns?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    mtoQuery?: MtoQueryOrderByWithRelationInput
    purchaseOrder?: PurchaseOrderOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type MtoOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mtoQueryId?: string
    AND?: MtoOrderWhereInput | MtoOrderWhereInput[]
    OR?: MtoOrderWhereInput[]
    NOT?: MtoOrderWhereInput | MtoOrderWhereInput[]
    posRefId?: StringNullableFilter<"MtoOrder"> | string | null
    orderRefId?: StringNullableFilter<"MtoOrder"> | string | null
    advanceAmount?: FloatFilter<"MtoOrder"> | number
    remainingAmount?: FloatFilter<"MtoOrder"> | number
    cadDesigns?: StringNullableFilter<"MtoOrder"> | string | null
    status?: StringFilter<"MtoOrder"> | string
    createdAt?: DateTimeFilter<"MtoOrder"> | Date | string
    mtoQuery?: XOR<MtoQueryScalarRelationFilter, MtoQueryWhereInput>
    purchaseOrder?: XOR<PurchaseOrderNullableScalarRelationFilter, PurchaseOrderWhereInput> | null
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
  }, "id" | "mtoQueryId">

  export type MtoOrderOrderByWithAggregationInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    posRefId?: SortOrderInput | SortOrder
    orderRefId?: SortOrderInput | SortOrder
    advanceAmount?: SortOrder
    remainingAmount?: SortOrder
    cadDesigns?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MtoOrderCountOrderByAggregateInput
    _avg?: MtoOrderAvgOrderByAggregateInput
    _max?: MtoOrderMaxOrderByAggregateInput
    _min?: MtoOrderMinOrderByAggregateInput
    _sum?: MtoOrderSumOrderByAggregateInput
  }

  export type MtoOrderScalarWhereWithAggregatesInput = {
    AND?: MtoOrderScalarWhereWithAggregatesInput | MtoOrderScalarWhereWithAggregatesInput[]
    OR?: MtoOrderScalarWhereWithAggregatesInput[]
    NOT?: MtoOrderScalarWhereWithAggregatesInput | MtoOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MtoOrder"> | number
    mtoQueryId?: StringWithAggregatesFilter<"MtoOrder"> | string
    posRefId?: StringNullableWithAggregatesFilter<"MtoOrder"> | string | null
    orderRefId?: StringNullableWithAggregatesFilter<"MtoOrder"> | string | null
    advanceAmount?: FloatWithAggregatesFilter<"MtoOrder"> | number
    remainingAmount?: FloatWithAggregatesFilter<"MtoOrder"> | number
    cadDesigns?: StringNullableWithAggregatesFilter<"MtoOrder"> | string | null
    status?: StringWithAggregatesFilter<"MtoOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MtoOrder"> | Date | string
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    mtoOrderId?: IntFilter<"PurchaseOrder"> | number
    vendorName?: StringFilter<"PurchaseOrder"> | string
    lockedGoldPrice?: FloatFilter<"PurchaseOrder"> | number
    deliveryTimeline?: StringFilter<"PurchaseOrder"> | string
    status?: StringFilter<"PurchaseOrder"> | string
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    mtoOrder?: XOR<MtoOrderScalarRelationFilter, MtoOrderWhereInput>
    qcRecord?: XOR<QcRecordNullableScalarRelationFilter, QcRecordWhereInput> | null
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    vendorName?: SortOrder
    lockedGoldPrice?: SortOrder
    deliveryTimeline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    mtoOrder?: MtoOrderOrderByWithRelationInput
    qcRecord?: QcRecordOrderByWithRelationInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mtoOrderId?: number
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    vendorName?: StringFilter<"PurchaseOrder"> | string
    lockedGoldPrice?: FloatFilter<"PurchaseOrder"> | number
    deliveryTimeline?: StringFilter<"PurchaseOrder"> | string
    status?: StringFilter<"PurchaseOrder"> | string
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    mtoOrder?: XOR<MtoOrderScalarRelationFilter, MtoOrderWhereInput>
    qcRecord?: XOR<QcRecordNullableScalarRelationFilter, QcRecordWhereInput> | null
  }, "id" | "mtoOrderId">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    vendorName?: SortOrder
    lockedGoldPrice?: SortOrder
    deliveryTimeline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _avg?: PurchaseOrderAvgOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
    _sum?: PurchaseOrderSumOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    mtoOrderId?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    vendorName?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    lockedGoldPrice?: FloatWithAggregatesFilter<"PurchaseOrder"> | number
    deliveryTimeline?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    status?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
  }

  export type QcRecordWhereInput = {
    AND?: QcRecordWhereInput | QcRecordWhereInput[]
    OR?: QcRecordWhereInput[]
    NOT?: QcRecordWhereInput | QcRecordWhereInput[]
    id?: IntFilter<"QcRecord"> | number
    purchaseOrderId?: IntFilter<"QcRecord"> | number
    status?: StringFilter<"QcRecord"> | string
    iterations?: IntFilter<"QcRecord"> | number
    notes?: StringNullableFilter<"QcRecord"> | string | null
    actualGoldWeight?: FloatNullableFilter<"QcRecord"> | number | null
    actualMakingCharges?: FloatNullableFilter<"QcRecord"> | number | null
    actualStoneWeight?: FloatNullableFilter<"QcRecord"> | number | null
    actualStoneValue?: FloatNullableFilter<"QcRecord"> | number | null
    actualOtherCharges?: FloatNullableFilter<"QcRecord"> | number | null
    isBilled?: BoolFilter<"QcRecord"> | boolean
    createdAt?: DateTimeFilter<"QcRecord"> | Date | string
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }

  export type QcRecordOrderByWithRelationInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    status?: SortOrder
    iterations?: SortOrder
    notes?: SortOrderInput | SortOrder
    actualGoldWeight?: SortOrderInput | SortOrder
    actualMakingCharges?: SortOrderInput | SortOrder
    actualStoneWeight?: SortOrderInput | SortOrder
    actualStoneValue?: SortOrderInput | SortOrder
    actualOtherCharges?: SortOrderInput | SortOrder
    isBilled?: SortOrder
    createdAt?: SortOrder
    purchaseOrder?: PurchaseOrderOrderByWithRelationInput
  }

  export type QcRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    purchaseOrderId?: number
    AND?: QcRecordWhereInput | QcRecordWhereInput[]
    OR?: QcRecordWhereInput[]
    NOT?: QcRecordWhereInput | QcRecordWhereInput[]
    status?: StringFilter<"QcRecord"> | string
    iterations?: IntFilter<"QcRecord"> | number
    notes?: StringNullableFilter<"QcRecord"> | string | null
    actualGoldWeight?: FloatNullableFilter<"QcRecord"> | number | null
    actualMakingCharges?: FloatNullableFilter<"QcRecord"> | number | null
    actualStoneWeight?: FloatNullableFilter<"QcRecord"> | number | null
    actualStoneValue?: FloatNullableFilter<"QcRecord"> | number | null
    actualOtherCharges?: FloatNullableFilter<"QcRecord"> | number | null
    isBilled?: BoolFilter<"QcRecord"> | boolean
    createdAt?: DateTimeFilter<"QcRecord"> | Date | string
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }, "id" | "purchaseOrderId">

  export type QcRecordOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    status?: SortOrder
    iterations?: SortOrder
    notes?: SortOrderInput | SortOrder
    actualGoldWeight?: SortOrderInput | SortOrder
    actualMakingCharges?: SortOrderInput | SortOrder
    actualStoneWeight?: SortOrderInput | SortOrder
    actualStoneValue?: SortOrderInput | SortOrder
    actualOtherCharges?: SortOrderInput | SortOrder
    isBilled?: SortOrder
    createdAt?: SortOrder
    _count?: QcRecordCountOrderByAggregateInput
    _avg?: QcRecordAvgOrderByAggregateInput
    _max?: QcRecordMaxOrderByAggregateInput
    _min?: QcRecordMinOrderByAggregateInput
    _sum?: QcRecordSumOrderByAggregateInput
  }

  export type QcRecordScalarWhereWithAggregatesInput = {
    AND?: QcRecordScalarWhereWithAggregatesInput | QcRecordScalarWhereWithAggregatesInput[]
    OR?: QcRecordScalarWhereWithAggregatesInput[]
    NOT?: QcRecordScalarWhereWithAggregatesInput | QcRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QcRecord"> | number
    purchaseOrderId?: IntWithAggregatesFilter<"QcRecord"> | number
    status?: StringWithAggregatesFilter<"QcRecord"> | string
    iterations?: IntWithAggregatesFilter<"QcRecord"> | number
    notes?: StringNullableWithAggregatesFilter<"QcRecord"> | string | null
    actualGoldWeight?: FloatNullableWithAggregatesFilter<"QcRecord"> | number | null
    actualMakingCharges?: FloatNullableWithAggregatesFilter<"QcRecord"> | number | null
    actualStoneWeight?: FloatNullableWithAggregatesFilter<"QcRecord"> | number | null
    actualStoneValue?: FloatNullableWithAggregatesFilter<"QcRecord"> | number | null
    actualOtherCharges?: FloatNullableWithAggregatesFilter<"QcRecord"> | number | null
    isBilled?: BoolWithAggregatesFilter<"QcRecord"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"QcRecord"> | Date | string
  }

  export type GlobalPricingWhereInput = {
    AND?: GlobalPricingWhereInput | GlobalPricingWhereInput[]
    OR?: GlobalPricingWhereInput[]
    NOT?: GlobalPricingWhereInput | GlobalPricingWhereInput[]
    id?: IntFilter<"GlobalPricing"> | number
    rate9k?: FloatFilter<"GlobalPricing"> | number
    rate14k?: FloatFilter<"GlobalPricing"> | number
    rate18k?: FloatFilter<"GlobalPricing"> | number
    rate22k?: FloatFilter<"GlobalPricing"> | number
    rate24k?: FloatFilter<"GlobalPricing"> | number
    diamondRate?: FloatFilter<"GlobalPricing"> | number
    updatedAt?: DateTimeFilter<"GlobalPricing"> | Date | string
  }

  export type GlobalPricingOrderByWithRelationInput = {
    id?: SortOrder
    rate9k?: SortOrder
    rate14k?: SortOrder
    rate18k?: SortOrder
    rate22k?: SortOrder
    rate24k?: SortOrder
    diamondRate?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPricingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GlobalPricingWhereInput | GlobalPricingWhereInput[]
    OR?: GlobalPricingWhereInput[]
    NOT?: GlobalPricingWhereInput | GlobalPricingWhereInput[]
    rate9k?: FloatFilter<"GlobalPricing"> | number
    rate14k?: FloatFilter<"GlobalPricing"> | number
    rate18k?: FloatFilter<"GlobalPricing"> | number
    rate22k?: FloatFilter<"GlobalPricing"> | number
    rate24k?: FloatFilter<"GlobalPricing"> | number
    diamondRate?: FloatFilter<"GlobalPricing"> | number
    updatedAt?: DateTimeFilter<"GlobalPricing"> | Date | string
  }, "id">

  export type GlobalPricingOrderByWithAggregationInput = {
    id?: SortOrder
    rate9k?: SortOrder
    rate14k?: SortOrder
    rate18k?: SortOrder
    rate22k?: SortOrder
    rate24k?: SortOrder
    diamondRate?: SortOrder
    updatedAt?: SortOrder
    _count?: GlobalPricingCountOrderByAggregateInput
    _avg?: GlobalPricingAvgOrderByAggregateInput
    _max?: GlobalPricingMaxOrderByAggregateInput
    _min?: GlobalPricingMinOrderByAggregateInput
    _sum?: GlobalPricingSumOrderByAggregateInput
  }

  export type GlobalPricingScalarWhereWithAggregatesInput = {
    AND?: GlobalPricingScalarWhereWithAggregatesInput | GlobalPricingScalarWhereWithAggregatesInput[]
    OR?: GlobalPricingScalarWhereWithAggregatesInput[]
    NOT?: GlobalPricingScalarWhereWithAggregatesInput | GlobalPricingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GlobalPricing"> | number
    rate9k?: FloatWithAggregatesFilter<"GlobalPricing"> | number
    rate14k?: FloatWithAggregatesFilter<"GlobalPricing"> | number
    rate18k?: FloatWithAggregatesFilter<"GlobalPricing"> | number
    rate22k?: FloatWithAggregatesFilter<"GlobalPricing"> | number
    rate24k?: FloatWithAggregatesFilter<"GlobalPricing"> | number
    diamondRate?: FloatWithAggregatesFilter<"GlobalPricing"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalPricing"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    mtoOrderId?: IntFilter<"Invoice"> | number
    totalAmount?: FloatFilter<"Invoice"> | number
    paidAmount?: FloatFilter<"Invoice"> | number
    balanceAmount?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    mtoOrder?: XOR<MtoOrderScalarRelationFilter, MtoOrderWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    mtoOrder?: MtoOrderOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mtoOrderId?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    totalAmount?: FloatFilter<"Invoice"> | number
    paidAmount?: FloatFilter<"Invoice"> | number
    balanceAmount?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    mtoOrder?: XOR<MtoOrderScalarRelationFilter, MtoOrderWhereInput>
  }, "id" | "mtoOrderId">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    mtoOrderId?: IntWithAggregatesFilter<"Invoice"> | number
    totalAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    paidAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    balanceAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    status?: StringWithAggregatesFilter<"Invoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    role: string
    email: string
    phone?: string | null
    mtos?: MtoQueryCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    role: string
    email: string
    phone?: string | null
    mtos?: MtoQueryUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mtos?: MtoQueryUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mtos?: MtoQueryUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    role: string
    email: string
    phone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    name: string
    phone: string
    mtos?: MtoQueryCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    mtos?: MtoQueryUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    mtos?: MtoQueryUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    mtos?: MtoQueryUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    phone: string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type MtoQueryCreateInput = {
    id?: string
    queryNo?: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMtosInput
    staff: UserCreateNestedOneWithoutMtosInput
    vendorEstimations?: VendorEstimationCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryUncheckedCreateInput = {
    id?: string
    queryNo?: number
    customerId: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorEstimations?: VendorEstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingUncheckedCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderUncheckedCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentUncheckedCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMtosNestedInput
    staff?: UserUpdateOneRequiredWithoutMtosNestedInput
    vendorEstimations?: VendorEstimationUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorEstimations?: VendorEstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUncheckedUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUncheckedUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryCreateManyInput = {
    id?: string
    queryNo?: number
    customerId: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MtoQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MtoQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorEstimationCreateInput = {
    vendorName: string
    goldWeight?: string | null
    diamondWeight?: string | null
    remarks?: string | null
    images?: string | null
    isAccepted?: boolean
    createdAt?: Date | string
    mtoQuery: MtoQueryCreateNestedOneWithoutVendorEstimationsInput
  }

  export type VendorEstimationUncheckedCreateInput = {
    id?: number
    mtoQueryId: string
    vendorName: string
    goldWeight?: string | null
    diamondWeight?: string | null
    remarks?: string | null
    images?: string | null
    isAccepted?: boolean
    createdAt?: Date | string
  }

  export type VendorEstimationUpdateInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    diamondWeight?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoQuery?: MtoQueryUpdateOneRequiredWithoutVendorEstimationsNestedInput
  }

  export type VendorEstimationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    vendorName?: StringFieldUpdateOperationsInput | string
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    diamondWeight?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorEstimationCreateManyInput = {
    id?: number
    mtoQueryId: string
    vendorName: string
    goldWeight?: string | null
    diamondWeight?: string | null
    remarks?: string | null
    images?: string | null
    isAccepted?: boolean
    createdAt?: Date | string
  }

  export type VendorEstimationUpdateManyMutationInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    diamondWeight?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorEstimationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    vendorName?: StringFieldUpdateOperationsInput | string
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    diamondWeight?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimationCreateInput = {
    version: number
    goldWeight: string
    goldRate: number
    diamondWeight?: number | null
    diamondRate?: number | null
    makingPercent?: number
    discountPercent?: number
    otherStones?: number | null
    gstAmount?: number
    discountAmount?: number
    totalAmount?: number
    finalEstimatedPrice: number
    notes?: string | null
    createdAt?: Date | string
    mtoQuery: MtoQueryCreateNestedOneWithoutEstimationsInput
  }

  export type EstimationUncheckedCreateInput = {
    id?: number
    mtoQueryId: string
    version: number
    goldWeight: string
    goldRate: number
    diamondWeight?: number | null
    diamondRate?: number | null
    makingPercent?: number
    discountPercent?: number
    otherStones?: number | null
    gstAmount?: number
    discountAmount?: number
    totalAmount?: number
    finalEstimatedPrice: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type EstimationUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    goldWeight?: StringFieldUpdateOperationsInput | string
    goldRate?: FloatFieldUpdateOperationsInput | number
    diamondWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    diamondRate?: NullableFloatFieldUpdateOperationsInput | number | null
    makingPercent?: FloatFieldUpdateOperationsInput | number
    discountPercent?: FloatFieldUpdateOperationsInput | number
    otherStones?: NullableFloatFieldUpdateOperationsInput | number | null
    gstAmount?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    finalEstimatedPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoQuery?: MtoQueryUpdateOneRequiredWithoutEstimationsNestedInput
  }

  export type EstimationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    goldWeight?: StringFieldUpdateOperationsInput | string
    goldRate?: FloatFieldUpdateOperationsInput | number
    diamondWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    diamondRate?: NullableFloatFieldUpdateOperationsInput | number | null
    makingPercent?: FloatFieldUpdateOperationsInput | number
    discountPercent?: FloatFieldUpdateOperationsInput | number
    otherStones?: NullableFloatFieldUpdateOperationsInput | number | null
    gstAmount?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    finalEstimatedPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimationCreateManyInput = {
    id?: number
    mtoQueryId: string
    version: number
    goldWeight: string
    goldRate: number
    diamondWeight?: number | null
    diamondRate?: number | null
    makingPercent?: number
    discountPercent?: number
    otherStones?: number | null
    gstAmount?: number
    discountAmount?: number
    totalAmount?: number
    finalEstimatedPrice: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type EstimationUpdateManyMutationInput = {
    version?: IntFieldUpdateOperationsInput | number
    goldWeight?: StringFieldUpdateOperationsInput | string
    goldRate?: FloatFieldUpdateOperationsInput | number
    diamondWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    diamondRate?: NullableFloatFieldUpdateOperationsInput | number | null
    makingPercent?: FloatFieldUpdateOperationsInput | number
    discountPercent?: FloatFieldUpdateOperationsInput | number
    otherStones?: NullableFloatFieldUpdateOperationsInput | number | null
    gstAmount?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    finalEstimatedPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    goldWeight?: StringFieldUpdateOperationsInput | string
    goldRate?: FloatFieldUpdateOperationsInput | number
    diamondWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    diamondRate?: NullableFloatFieldUpdateOperationsInput | number | null
    makingPercent?: FloatFieldUpdateOperationsInput | number
    discountPercent?: FloatFieldUpdateOperationsInput | number
    otherStones?: NullableFloatFieldUpdateOperationsInput | number | null
    gstAmount?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    finalEstimatedPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromisedPricingCreateInput = {
    goldWeight: string
    stoneDetails: string
    finalPrice: number
    goldRate?: number
    lockedAt?: Date | string
    mtoQuery: MtoQueryCreateNestedOneWithoutPricingInput
  }

  export type PromisedPricingUncheckedCreateInput = {
    id?: number
    mtoQueryId: string
    goldWeight: string
    stoneDetails: string
    finalPrice: number
    goldRate?: number
    lockedAt?: Date | string
  }

  export type PromisedPricingUpdateInput = {
    goldWeight?: StringFieldUpdateOperationsInput | string
    stoneDetails?: StringFieldUpdateOperationsInput | string
    finalPrice?: FloatFieldUpdateOperationsInput | number
    goldRate?: FloatFieldUpdateOperationsInput | number
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoQuery?: MtoQueryUpdateOneRequiredWithoutPricingNestedInput
  }

  export type PromisedPricingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    goldWeight?: StringFieldUpdateOperationsInput | string
    stoneDetails?: StringFieldUpdateOperationsInput | string
    finalPrice?: FloatFieldUpdateOperationsInput | number
    goldRate?: FloatFieldUpdateOperationsInput | number
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromisedPricingCreateManyInput = {
    id?: number
    mtoQueryId: string
    goldWeight: string
    stoneDetails: string
    finalPrice: number
    goldRate?: number
    lockedAt?: Date | string
  }

  export type PromisedPricingUpdateManyMutationInput = {
    goldWeight?: StringFieldUpdateOperationsInput | string
    stoneDetails?: StringFieldUpdateOperationsInput | string
    finalPrice?: FloatFieldUpdateOperationsInput | number
    goldRate?: FloatFieldUpdateOperationsInput | number
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromisedPricingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    goldWeight?: StringFieldUpdateOperationsInput | string
    stoneDetails?: StringFieldUpdateOperationsInput | string
    finalPrice?: FloatFieldUpdateOperationsInput | number
    goldRate?: FloatFieldUpdateOperationsInput | number
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: number
    status: string
    createdAt?: Date | string
    mtoQuery: MtoQueryCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    mtoQueryId: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoQuery?: MtoQueryUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    mtoQueryId: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MtoOrderCreateInput = {
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
    mtoQuery: MtoQueryCreateNestedOneWithoutOrderInput
    purchaseOrder?: PurchaseOrderCreateNestedOneWithoutMtoOrderInput
    invoice?: InvoiceCreateNestedOneWithoutMtoOrderInput
  }

  export type MtoOrderUncheckedCreateInput = {
    id?: number
    mtoQueryId: string
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
    purchaseOrder?: PurchaseOrderUncheckedCreateNestedOneWithoutMtoOrderInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutMtoOrderInput
  }

  export type MtoOrderUpdateInput = {
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoQuery?: MtoQueryUpdateOneRequiredWithoutOrderNestedInput
    purchaseOrder?: PurchaseOrderUpdateOneWithoutMtoOrderNestedInput
    invoice?: InvoiceUpdateOneWithoutMtoOrderNestedInput
  }

  export type MtoOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseOrder?: PurchaseOrderUncheckedUpdateOneWithoutMtoOrderNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutMtoOrderNestedInput
  }

  export type MtoOrderCreateManyInput = {
    id?: number
    mtoQueryId: string
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type MtoOrderUpdateManyMutationInput = {
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MtoOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateInput = {
    vendorName: string
    lockedGoldPrice: number
    deliveryTimeline: string
    status: string
    createdAt?: Date | string
    mtoOrder: MtoOrderCreateNestedOneWithoutPurchaseOrderInput
    qcRecord?: QcRecordCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: number
    mtoOrderId: number
    vendorName: string
    lockedGoldPrice: number
    deliveryTimeline: string
    status: string
    createdAt?: Date | string
    qcRecord?: QcRecordUncheckedCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUpdateInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    lockedGoldPrice?: FloatFieldUpdateOperationsInput | number
    deliveryTimeline?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoOrder?: MtoOrderUpdateOneRequiredWithoutPurchaseOrderNestedInput
    qcRecord?: QcRecordUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoOrderId?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    lockedGoldPrice?: FloatFieldUpdateOperationsInput | number
    deliveryTimeline?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qcRecord?: QcRecordUncheckedUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderCreateManyInput = {
    id?: number
    mtoOrderId: number
    vendorName: string
    lockedGoldPrice: number
    deliveryTimeline: string
    status: string
    createdAt?: Date | string
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    lockedGoldPrice?: FloatFieldUpdateOperationsInput | number
    deliveryTimeline?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoOrderId?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    lockedGoldPrice?: FloatFieldUpdateOperationsInput | number
    deliveryTimeline?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcRecordCreateInput = {
    status: string
    iterations?: number
    notes?: string | null
    actualGoldWeight?: number | null
    actualMakingCharges?: number | null
    actualStoneWeight?: number | null
    actualStoneValue?: number | null
    actualOtherCharges?: number | null
    isBilled?: boolean
    createdAt?: Date | string
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutQcRecordInput
  }

  export type QcRecordUncheckedCreateInput = {
    id?: number
    purchaseOrderId: number
    status: string
    iterations?: number
    notes?: string | null
    actualGoldWeight?: number | null
    actualMakingCharges?: number | null
    actualStoneWeight?: number | null
    actualStoneValue?: number | null
    actualOtherCharges?: number | null
    isBilled?: boolean
    createdAt?: Date | string
  }

  export type QcRecordUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actualGoldWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualMakingCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneValue?: NullableFloatFieldUpdateOperationsInput | number | null
    actualOtherCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    isBilled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutQcRecordNestedInput
  }

  export type QcRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actualGoldWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualMakingCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneValue?: NullableFloatFieldUpdateOperationsInput | number | null
    actualOtherCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    isBilled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcRecordCreateManyInput = {
    id?: number
    purchaseOrderId: number
    status: string
    iterations?: number
    notes?: string | null
    actualGoldWeight?: number | null
    actualMakingCharges?: number | null
    actualStoneWeight?: number | null
    actualStoneValue?: number | null
    actualOtherCharges?: number | null
    isBilled?: boolean
    createdAt?: Date | string
  }

  export type QcRecordUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actualGoldWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualMakingCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneValue?: NullableFloatFieldUpdateOperationsInput | number | null
    actualOtherCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    isBilled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actualGoldWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualMakingCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneValue?: NullableFloatFieldUpdateOperationsInput | number | null
    actualOtherCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    isBilled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPricingCreateInput = {
    id?: number
    rate9k?: number
    rate14k?: number
    rate18k?: number
    rate22k?: number
    rate24k?: number
    diamondRate?: number
    updatedAt?: Date | string
  }

  export type GlobalPricingUncheckedCreateInput = {
    id?: number
    rate9k?: number
    rate14k?: number
    rate18k?: number
    rate22k?: number
    rate24k?: number
    diamondRate?: number
    updatedAt?: Date | string
  }

  export type GlobalPricingUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rate9k?: FloatFieldUpdateOperationsInput | number
    rate14k?: FloatFieldUpdateOperationsInput | number
    rate18k?: FloatFieldUpdateOperationsInput | number
    rate22k?: FloatFieldUpdateOperationsInput | number
    rate24k?: FloatFieldUpdateOperationsInput | number
    diamondRate?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPricingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rate9k?: FloatFieldUpdateOperationsInput | number
    rate14k?: FloatFieldUpdateOperationsInput | number
    rate18k?: FloatFieldUpdateOperationsInput | number
    rate22k?: FloatFieldUpdateOperationsInput | number
    rate24k?: FloatFieldUpdateOperationsInput | number
    diamondRate?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPricingCreateManyInput = {
    id?: number
    rate9k?: number
    rate14k?: number
    rate18k?: number
    rate22k?: number
    rate24k?: number
    diamondRate?: number
    updatedAt?: Date | string
  }

  export type GlobalPricingUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    rate9k?: FloatFieldUpdateOperationsInput | number
    rate14k?: FloatFieldUpdateOperationsInput | number
    rate18k?: FloatFieldUpdateOperationsInput | number
    rate22k?: FloatFieldUpdateOperationsInput | number
    rate24k?: FloatFieldUpdateOperationsInput | number
    diamondRate?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPricingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rate9k?: FloatFieldUpdateOperationsInput | number
    rate14k?: FloatFieldUpdateOperationsInput | number
    rate18k?: FloatFieldUpdateOperationsInput | number
    rate22k?: FloatFieldUpdateOperationsInput | number
    rate24k?: FloatFieldUpdateOperationsInput | number
    diamondRate?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    totalAmount: number
    paidAmount: number
    balanceAmount: number
    status: string
    createdAt?: Date | string
    mtoOrder: MtoOrderCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    mtoOrderId: number
    totalAmount: number
    paidAmount: number
    balanceAmount: number
    status: string
    createdAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    balanceAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoOrder?: MtoOrderUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoOrderId?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    balanceAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: number
    mtoOrderId: number
    totalAmount: number
    paidAmount: number
    balanceAmount: number
    status: string
    createdAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    balanceAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoOrderId?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    balanceAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MtoQueryListRelationFilter = {
    every?: MtoQueryWhereInput
    some?: MtoQueryWhereInput
    none?: MtoQueryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MtoQueryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VendorEstimationListRelationFilter = {
    every?: VendorEstimationWhereInput
    some?: VendorEstimationWhereInput
    none?: VendorEstimationWhereInput
  }

  export type EstimationListRelationFilter = {
    every?: EstimationWhereInput
    some?: EstimationWhereInput
    none?: EstimationWhereInput
  }

  export type PromisedPricingNullableScalarRelationFilter = {
    is?: PromisedPricingWhereInput | null
    isNot?: PromisedPricingWhereInput | null
  }

  export type MtoOrderNullableScalarRelationFilter = {
    is?: MtoOrderWhereInput | null
    isNot?: MtoOrderWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type VendorEstimationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstimationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MtoQueryCountOrderByAggregateInput = {
    id?: SortOrder
    queryNo?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    leadType?: SortOrder
    mtoType?: SortOrder
    category?: SortOrder
    metalType?: SortOrder
    isStudded?: SortOrder
    diamondCaratage?: SortOrder
    weightRange?: SortOrder
    goldKaratage?: SortOrder
    metalColor?: SortOrder
    goldWeight?: SortOrder
    size?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    referenceImages?: SortOrder
    catalogueSku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MtoQueryAvgOrderByAggregateInput = {
    queryNo?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
  }

  export type MtoQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    queryNo?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    leadType?: SortOrder
    mtoType?: SortOrder
    category?: SortOrder
    metalType?: SortOrder
    isStudded?: SortOrder
    diamondCaratage?: SortOrder
    weightRange?: SortOrder
    goldKaratage?: SortOrder
    metalColor?: SortOrder
    goldWeight?: SortOrder
    size?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    referenceImages?: SortOrder
    catalogueSku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MtoQueryMinOrderByAggregateInput = {
    id?: SortOrder
    queryNo?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    leadType?: SortOrder
    mtoType?: SortOrder
    category?: SortOrder
    metalType?: SortOrder
    isStudded?: SortOrder
    diamondCaratage?: SortOrder
    weightRange?: SortOrder
    goldKaratage?: SortOrder
    metalColor?: SortOrder
    goldWeight?: SortOrder
    size?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    referenceImages?: SortOrder
    catalogueSku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MtoQuerySumOrderByAggregateInput = {
    queryNo?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MtoQueryScalarRelationFilter = {
    is?: MtoQueryWhereInput
    isNot?: MtoQueryWhereInput
  }

  export type VendorEstimationCountOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    vendorName?: SortOrder
    goldWeight?: SortOrder
    diamondWeight?: SortOrder
    remarks?: SortOrder
    images?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type VendorEstimationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VendorEstimationMaxOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    vendorName?: SortOrder
    goldWeight?: SortOrder
    diamondWeight?: SortOrder
    remarks?: SortOrder
    images?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type VendorEstimationMinOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    vendorName?: SortOrder
    goldWeight?: SortOrder
    diamondWeight?: SortOrder
    remarks?: SortOrder
    images?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type VendorEstimationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EstimationCountOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    version?: SortOrder
    goldWeight?: SortOrder
    goldRate?: SortOrder
    diamondWeight?: SortOrder
    diamondRate?: SortOrder
    makingPercent?: SortOrder
    discountPercent?: SortOrder
    otherStones?: SortOrder
    gstAmount?: SortOrder
    discountAmount?: SortOrder
    totalAmount?: SortOrder
    finalEstimatedPrice?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EstimationAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    goldRate?: SortOrder
    diamondWeight?: SortOrder
    diamondRate?: SortOrder
    makingPercent?: SortOrder
    discountPercent?: SortOrder
    otherStones?: SortOrder
    gstAmount?: SortOrder
    discountAmount?: SortOrder
    totalAmount?: SortOrder
    finalEstimatedPrice?: SortOrder
  }

  export type EstimationMaxOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    version?: SortOrder
    goldWeight?: SortOrder
    goldRate?: SortOrder
    diamondWeight?: SortOrder
    diamondRate?: SortOrder
    makingPercent?: SortOrder
    discountPercent?: SortOrder
    otherStones?: SortOrder
    gstAmount?: SortOrder
    discountAmount?: SortOrder
    totalAmount?: SortOrder
    finalEstimatedPrice?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EstimationMinOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    version?: SortOrder
    goldWeight?: SortOrder
    goldRate?: SortOrder
    diamondWeight?: SortOrder
    diamondRate?: SortOrder
    makingPercent?: SortOrder
    discountPercent?: SortOrder
    otherStones?: SortOrder
    gstAmount?: SortOrder
    discountAmount?: SortOrder
    totalAmount?: SortOrder
    finalEstimatedPrice?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EstimationSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    goldRate?: SortOrder
    diamondWeight?: SortOrder
    diamondRate?: SortOrder
    makingPercent?: SortOrder
    discountPercent?: SortOrder
    otherStones?: SortOrder
    gstAmount?: SortOrder
    discountAmount?: SortOrder
    totalAmount?: SortOrder
    finalEstimatedPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PromisedPricingCountOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    goldWeight?: SortOrder
    stoneDetails?: SortOrder
    finalPrice?: SortOrder
    goldRate?: SortOrder
    lockedAt?: SortOrder
  }

  export type PromisedPricingAvgOrderByAggregateInput = {
    id?: SortOrder
    finalPrice?: SortOrder
    goldRate?: SortOrder
  }

  export type PromisedPricingMaxOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    goldWeight?: SortOrder
    stoneDetails?: SortOrder
    finalPrice?: SortOrder
    goldRate?: SortOrder
    lockedAt?: SortOrder
  }

  export type PromisedPricingMinOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    goldWeight?: SortOrder
    stoneDetails?: SortOrder
    finalPrice?: SortOrder
    goldRate?: SortOrder
    lockedAt?: SortOrder
  }

  export type PromisedPricingSumOrderByAggregateInput = {
    id?: SortOrder
    finalPrice?: SortOrder
    goldRate?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type PurchaseOrderNullableScalarRelationFilter = {
    is?: PurchaseOrderWhereInput | null
    isNot?: PurchaseOrderWhereInput | null
  }

  export type InvoiceNullableScalarRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type MtoOrderCountOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    posRefId?: SortOrder
    orderRefId?: SortOrder
    advanceAmount?: SortOrder
    remainingAmount?: SortOrder
    cadDesigns?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MtoOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    advanceAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type MtoOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    posRefId?: SortOrder
    orderRefId?: SortOrder
    advanceAmount?: SortOrder
    remainingAmount?: SortOrder
    cadDesigns?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MtoOrderMinOrderByAggregateInput = {
    id?: SortOrder
    mtoQueryId?: SortOrder
    posRefId?: SortOrder
    orderRefId?: SortOrder
    advanceAmount?: SortOrder
    remainingAmount?: SortOrder
    cadDesigns?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MtoOrderSumOrderByAggregateInput = {
    id?: SortOrder
    advanceAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type MtoOrderScalarRelationFilter = {
    is?: MtoOrderWhereInput
    isNot?: MtoOrderWhereInput
  }

  export type QcRecordNullableScalarRelationFilter = {
    is?: QcRecordWhereInput | null
    isNot?: QcRecordWhereInput | null
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    vendorName?: SortOrder
    lockedGoldPrice?: SortOrder
    deliveryTimeline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    lockedGoldPrice?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    vendorName?: SortOrder
    lockedGoldPrice?: SortOrder
    deliveryTimeline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    vendorName?: SortOrder
    lockedGoldPrice?: SortOrder
    deliveryTimeline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseOrderSumOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    lockedGoldPrice?: SortOrder
  }

  export type PurchaseOrderScalarRelationFilter = {
    is?: PurchaseOrderWhereInput
    isNot?: PurchaseOrderWhereInput
  }

  export type QcRecordCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    status?: SortOrder
    iterations?: SortOrder
    notes?: SortOrder
    actualGoldWeight?: SortOrder
    actualMakingCharges?: SortOrder
    actualStoneWeight?: SortOrder
    actualStoneValue?: SortOrder
    actualOtherCharges?: SortOrder
    isBilled?: SortOrder
    createdAt?: SortOrder
  }

  export type QcRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    iterations?: SortOrder
    actualGoldWeight?: SortOrder
    actualMakingCharges?: SortOrder
    actualStoneWeight?: SortOrder
    actualStoneValue?: SortOrder
    actualOtherCharges?: SortOrder
  }

  export type QcRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    status?: SortOrder
    iterations?: SortOrder
    notes?: SortOrder
    actualGoldWeight?: SortOrder
    actualMakingCharges?: SortOrder
    actualStoneWeight?: SortOrder
    actualStoneValue?: SortOrder
    actualOtherCharges?: SortOrder
    isBilled?: SortOrder
    createdAt?: SortOrder
  }

  export type QcRecordMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    status?: SortOrder
    iterations?: SortOrder
    notes?: SortOrder
    actualGoldWeight?: SortOrder
    actualMakingCharges?: SortOrder
    actualStoneWeight?: SortOrder
    actualStoneValue?: SortOrder
    actualOtherCharges?: SortOrder
    isBilled?: SortOrder
    createdAt?: SortOrder
  }

  export type QcRecordSumOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    iterations?: SortOrder
    actualGoldWeight?: SortOrder
    actualMakingCharges?: SortOrder
    actualStoneWeight?: SortOrder
    actualStoneValue?: SortOrder
    actualOtherCharges?: SortOrder
  }

  export type GlobalPricingCountOrderByAggregateInput = {
    id?: SortOrder
    rate9k?: SortOrder
    rate14k?: SortOrder
    rate18k?: SortOrder
    rate22k?: SortOrder
    rate24k?: SortOrder
    diamondRate?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPricingAvgOrderByAggregateInput = {
    id?: SortOrder
    rate9k?: SortOrder
    rate14k?: SortOrder
    rate18k?: SortOrder
    rate22k?: SortOrder
    rate24k?: SortOrder
    diamondRate?: SortOrder
  }

  export type GlobalPricingMaxOrderByAggregateInput = {
    id?: SortOrder
    rate9k?: SortOrder
    rate14k?: SortOrder
    rate18k?: SortOrder
    rate22k?: SortOrder
    rate24k?: SortOrder
    diamondRate?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPricingMinOrderByAggregateInput = {
    id?: SortOrder
    rate9k?: SortOrder
    rate14k?: SortOrder
    rate18k?: SortOrder
    rate22k?: SortOrder
    rate24k?: SortOrder
    diamondRate?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPricingSumOrderByAggregateInput = {
    id?: SortOrder
    rate9k?: SortOrder
    rate14k?: SortOrder
    rate18k?: SortOrder
    rate22k?: SortOrder
    rate24k?: SortOrder
    diamondRate?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    mtoOrderId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
  }

  export type MtoQueryCreateNestedManyWithoutStaffInput = {
    create?: XOR<MtoQueryCreateWithoutStaffInput, MtoQueryUncheckedCreateWithoutStaffInput> | MtoQueryCreateWithoutStaffInput[] | MtoQueryUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: MtoQueryCreateOrConnectWithoutStaffInput | MtoQueryCreateOrConnectWithoutStaffInput[]
    createMany?: MtoQueryCreateManyStaffInputEnvelope
    connect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
  }

  export type MtoQueryUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<MtoQueryCreateWithoutStaffInput, MtoQueryUncheckedCreateWithoutStaffInput> | MtoQueryCreateWithoutStaffInput[] | MtoQueryUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: MtoQueryCreateOrConnectWithoutStaffInput | MtoQueryCreateOrConnectWithoutStaffInput[]
    createMany?: MtoQueryCreateManyStaffInputEnvelope
    connect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MtoQueryUpdateManyWithoutStaffNestedInput = {
    create?: XOR<MtoQueryCreateWithoutStaffInput, MtoQueryUncheckedCreateWithoutStaffInput> | MtoQueryCreateWithoutStaffInput[] | MtoQueryUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: MtoQueryCreateOrConnectWithoutStaffInput | MtoQueryCreateOrConnectWithoutStaffInput[]
    upsert?: MtoQueryUpsertWithWhereUniqueWithoutStaffInput | MtoQueryUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: MtoQueryCreateManyStaffInputEnvelope
    set?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    disconnect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    delete?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    connect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    update?: MtoQueryUpdateWithWhereUniqueWithoutStaffInput | MtoQueryUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: MtoQueryUpdateManyWithWhereWithoutStaffInput | MtoQueryUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: MtoQueryScalarWhereInput | MtoQueryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MtoQueryUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<MtoQueryCreateWithoutStaffInput, MtoQueryUncheckedCreateWithoutStaffInput> | MtoQueryCreateWithoutStaffInput[] | MtoQueryUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: MtoQueryCreateOrConnectWithoutStaffInput | MtoQueryCreateOrConnectWithoutStaffInput[]
    upsert?: MtoQueryUpsertWithWhereUniqueWithoutStaffInput | MtoQueryUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: MtoQueryCreateManyStaffInputEnvelope
    set?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    disconnect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    delete?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    connect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    update?: MtoQueryUpdateWithWhereUniqueWithoutStaffInput | MtoQueryUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: MtoQueryUpdateManyWithWhereWithoutStaffInput | MtoQueryUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: MtoQueryScalarWhereInput | MtoQueryScalarWhereInput[]
  }

  export type MtoQueryCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MtoQueryCreateWithoutCustomerInput, MtoQueryUncheckedCreateWithoutCustomerInput> | MtoQueryCreateWithoutCustomerInput[] | MtoQueryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MtoQueryCreateOrConnectWithoutCustomerInput | MtoQueryCreateOrConnectWithoutCustomerInput[]
    createMany?: MtoQueryCreateManyCustomerInputEnvelope
    connect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
  }

  export type MtoQueryUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MtoQueryCreateWithoutCustomerInput, MtoQueryUncheckedCreateWithoutCustomerInput> | MtoQueryCreateWithoutCustomerInput[] | MtoQueryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MtoQueryCreateOrConnectWithoutCustomerInput | MtoQueryCreateOrConnectWithoutCustomerInput[]
    createMany?: MtoQueryCreateManyCustomerInputEnvelope
    connect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
  }

  export type MtoQueryUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MtoQueryCreateWithoutCustomerInput, MtoQueryUncheckedCreateWithoutCustomerInput> | MtoQueryCreateWithoutCustomerInput[] | MtoQueryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MtoQueryCreateOrConnectWithoutCustomerInput | MtoQueryCreateOrConnectWithoutCustomerInput[]
    upsert?: MtoQueryUpsertWithWhereUniqueWithoutCustomerInput | MtoQueryUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MtoQueryCreateManyCustomerInputEnvelope
    set?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    disconnect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    delete?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    connect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    update?: MtoQueryUpdateWithWhereUniqueWithoutCustomerInput | MtoQueryUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MtoQueryUpdateManyWithWhereWithoutCustomerInput | MtoQueryUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MtoQueryScalarWhereInput | MtoQueryScalarWhereInput[]
  }

  export type MtoQueryUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MtoQueryCreateWithoutCustomerInput, MtoQueryUncheckedCreateWithoutCustomerInput> | MtoQueryCreateWithoutCustomerInput[] | MtoQueryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MtoQueryCreateOrConnectWithoutCustomerInput | MtoQueryCreateOrConnectWithoutCustomerInput[]
    upsert?: MtoQueryUpsertWithWhereUniqueWithoutCustomerInput | MtoQueryUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MtoQueryCreateManyCustomerInputEnvelope
    set?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    disconnect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    delete?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    connect?: MtoQueryWhereUniqueInput | MtoQueryWhereUniqueInput[]
    update?: MtoQueryUpdateWithWhereUniqueWithoutCustomerInput | MtoQueryUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MtoQueryUpdateManyWithWhereWithoutCustomerInput | MtoQueryUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MtoQueryScalarWhereInput | MtoQueryScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutMtosInput = {
    create?: XOR<CustomerCreateWithoutMtosInput, CustomerUncheckedCreateWithoutMtosInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutMtosInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMtosInput = {
    create?: XOR<UserCreateWithoutMtosInput, UserUncheckedCreateWithoutMtosInput>
    connectOrCreate?: UserCreateOrConnectWithoutMtosInput
    connect?: UserWhereUniqueInput
  }

  export type VendorEstimationCreateNestedManyWithoutMtoQueryInput = {
    create?: XOR<VendorEstimationCreateWithoutMtoQueryInput, VendorEstimationUncheckedCreateWithoutMtoQueryInput> | VendorEstimationCreateWithoutMtoQueryInput[] | VendorEstimationUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: VendorEstimationCreateOrConnectWithoutMtoQueryInput | VendorEstimationCreateOrConnectWithoutMtoQueryInput[]
    createMany?: VendorEstimationCreateManyMtoQueryInputEnvelope
    connect?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
  }

  export type EstimationCreateNestedManyWithoutMtoQueryInput = {
    create?: XOR<EstimationCreateWithoutMtoQueryInput, EstimationUncheckedCreateWithoutMtoQueryInput> | EstimationCreateWithoutMtoQueryInput[] | EstimationUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: EstimationCreateOrConnectWithoutMtoQueryInput | EstimationCreateOrConnectWithoutMtoQueryInput[]
    createMany?: EstimationCreateManyMtoQueryInputEnvelope
    connect?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
  }

  export type PromisedPricingCreateNestedOneWithoutMtoQueryInput = {
    create?: XOR<PromisedPricingCreateWithoutMtoQueryInput, PromisedPricingUncheckedCreateWithoutMtoQueryInput>
    connectOrCreate?: PromisedPricingCreateOrConnectWithoutMtoQueryInput
    connect?: PromisedPricingWhereUniqueInput
  }

  export type MtoOrderCreateNestedOneWithoutMtoQueryInput = {
    create?: XOR<MtoOrderCreateWithoutMtoQueryInput, MtoOrderUncheckedCreateWithoutMtoQueryInput>
    connectOrCreate?: MtoOrderCreateOrConnectWithoutMtoQueryInput
    connect?: MtoOrderWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutMtoQueryInput = {
    create?: XOR<PaymentCreateWithoutMtoQueryInput, PaymentUncheckedCreateWithoutMtoQueryInput> | PaymentCreateWithoutMtoQueryInput[] | PaymentUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMtoQueryInput | PaymentCreateOrConnectWithoutMtoQueryInput[]
    createMany?: PaymentCreateManyMtoQueryInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type VendorEstimationUncheckedCreateNestedManyWithoutMtoQueryInput = {
    create?: XOR<VendorEstimationCreateWithoutMtoQueryInput, VendorEstimationUncheckedCreateWithoutMtoQueryInput> | VendorEstimationCreateWithoutMtoQueryInput[] | VendorEstimationUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: VendorEstimationCreateOrConnectWithoutMtoQueryInput | VendorEstimationCreateOrConnectWithoutMtoQueryInput[]
    createMany?: VendorEstimationCreateManyMtoQueryInputEnvelope
    connect?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
  }

  export type EstimationUncheckedCreateNestedManyWithoutMtoQueryInput = {
    create?: XOR<EstimationCreateWithoutMtoQueryInput, EstimationUncheckedCreateWithoutMtoQueryInput> | EstimationCreateWithoutMtoQueryInput[] | EstimationUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: EstimationCreateOrConnectWithoutMtoQueryInput | EstimationCreateOrConnectWithoutMtoQueryInput[]
    createMany?: EstimationCreateManyMtoQueryInputEnvelope
    connect?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
  }

  export type PromisedPricingUncheckedCreateNestedOneWithoutMtoQueryInput = {
    create?: XOR<PromisedPricingCreateWithoutMtoQueryInput, PromisedPricingUncheckedCreateWithoutMtoQueryInput>
    connectOrCreate?: PromisedPricingCreateOrConnectWithoutMtoQueryInput
    connect?: PromisedPricingWhereUniqueInput
  }

  export type MtoOrderUncheckedCreateNestedOneWithoutMtoQueryInput = {
    create?: XOR<MtoOrderCreateWithoutMtoQueryInput, MtoOrderUncheckedCreateWithoutMtoQueryInput>
    connectOrCreate?: MtoOrderCreateOrConnectWithoutMtoQueryInput
    connect?: MtoOrderWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutMtoQueryInput = {
    create?: XOR<PaymentCreateWithoutMtoQueryInput, PaymentUncheckedCreateWithoutMtoQueryInput> | PaymentCreateWithoutMtoQueryInput[] | PaymentUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMtoQueryInput | PaymentCreateOrConnectWithoutMtoQueryInput[]
    createMany?: PaymentCreateManyMtoQueryInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneRequiredWithoutMtosNestedInput = {
    create?: XOR<CustomerCreateWithoutMtosInput, CustomerUncheckedCreateWithoutMtosInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutMtosInput
    upsert?: CustomerUpsertWithoutMtosInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutMtosInput, CustomerUpdateWithoutMtosInput>, CustomerUncheckedUpdateWithoutMtosInput>
  }

  export type UserUpdateOneRequiredWithoutMtosNestedInput = {
    create?: XOR<UserCreateWithoutMtosInput, UserUncheckedCreateWithoutMtosInput>
    connectOrCreate?: UserCreateOrConnectWithoutMtosInput
    upsert?: UserUpsertWithoutMtosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMtosInput, UserUpdateWithoutMtosInput>, UserUncheckedUpdateWithoutMtosInput>
  }

  export type VendorEstimationUpdateManyWithoutMtoQueryNestedInput = {
    create?: XOR<VendorEstimationCreateWithoutMtoQueryInput, VendorEstimationUncheckedCreateWithoutMtoQueryInput> | VendorEstimationCreateWithoutMtoQueryInput[] | VendorEstimationUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: VendorEstimationCreateOrConnectWithoutMtoQueryInput | VendorEstimationCreateOrConnectWithoutMtoQueryInput[]
    upsert?: VendorEstimationUpsertWithWhereUniqueWithoutMtoQueryInput | VendorEstimationUpsertWithWhereUniqueWithoutMtoQueryInput[]
    createMany?: VendorEstimationCreateManyMtoQueryInputEnvelope
    set?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
    disconnect?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
    delete?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
    connect?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
    update?: VendorEstimationUpdateWithWhereUniqueWithoutMtoQueryInput | VendorEstimationUpdateWithWhereUniqueWithoutMtoQueryInput[]
    updateMany?: VendorEstimationUpdateManyWithWhereWithoutMtoQueryInput | VendorEstimationUpdateManyWithWhereWithoutMtoQueryInput[]
    deleteMany?: VendorEstimationScalarWhereInput | VendorEstimationScalarWhereInput[]
  }

  export type EstimationUpdateManyWithoutMtoQueryNestedInput = {
    create?: XOR<EstimationCreateWithoutMtoQueryInput, EstimationUncheckedCreateWithoutMtoQueryInput> | EstimationCreateWithoutMtoQueryInput[] | EstimationUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: EstimationCreateOrConnectWithoutMtoQueryInput | EstimationCreateOrConnectWithoutMtoQueryInput[]
    upsert?: EstimationUpsertWithWhereUniqueWithoutMtoQueryInput | EstimationUpsertWithWhereUniqueWithoutMtoQueryInput[]
    createMany?: EstimationCreateManyMtoQueryInputEnvelope
    set?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
    disconnect?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
    delete?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
    connect?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
    update?: EstimationUpdateWithWhereUniqueWithoutMtoQueryInput | EstimationUpdateWithWhereUniqueWithoutMtoQueryInput[]
    updateMany?: EstimationUpdateManyWithWhereWithoutMtoQueryInput | EstimationUpdateManyWithWhereWithoutMtoQueryInput[]
    deleteMany?: EstimationScalarWhereInput | EstimationScalarWhereInput[]
  }

  export type PromisedPricingUpdateOneWithoutMtoQueryNestedInput = {
    create?: XOR<PromisedPricingCreateWithoutMtoQueryInput, PromisedPricingUncheckedCreateWithoutMtoQueryInput>
    connectOrCreate?: PromisedPricingCreateOrConnectWithoutMtoQueryInput
    upsert?: PromisedPricingUpsertWithoutMtoQueryInput
    disconnect?: PromisedPricingWhereInput | boolean
    delete?: PromisedPricingWhereInput | boolean
    connect?: PromisedPricingWhereUniqueInput
    update?: XOR<XOR<PromisedPricingUpdateToOneWithWhereWithoutMtoQueryInput, PromisedPricingUpdateWithoutMtoQueryInput>, PromisedPricingUncheckedUpdateWithoutMtoQueryInput>
  }

  export type MtoOrderUpdateOneWithoutMtoQueryNestedInput = {
    create?: XOR<MtoOrderCreateWithoutMtoQueryInput, MtoOrderUncheckedCreateWithoutMtoQueryInput>
    connectOrCreate?: MtoOrderCreateOrConnectWithoutMtoQueryInput
    upsert?: MtoOrderUpsertWithoutMtoQueryInput
    disconnect?: MtoOrderWhereInput | boolean
    delete?: MtoOrderWhereInput | boolean
    connect?: MtoOrderWhereUniqueInput
    update?: XOR<XOR<MtoOrderUpdateToOneWithWhereWithoutMtoQueryInput, MtoOrderUpdateWithoutMtoQueryInput>, MtoOrderUncheckedUpdateWithoutMtoQueryInput>
  }

  export type PaymentUpdateManyWithoutMtoQueryNestedInput = {
    create?: XOR<PaymentCreateWithoutMtoQueryInput, PaymentUncheckedCreateWithoutMtoQueryInput> | PaymentCreateWithoutMtoQueryInput[] | PaymentUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMtoQueryInput | PaymentCreateOrConnectWithoutMtoQueryInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMtoQueryInput | PaymentUpsertWithWhereUniqueWithoutMtoQueryInput[]
    createMany?: PaymentCreateManyMtoQueryInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMtoQueryInput | PaymentUpdateWithWhereUniqueWithoutMtoQueryInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMtoQueryInput | PaymentUpdateManyWithWhereWithoutMtoQueryInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type VendorEstimationUncheckedUpdateManyWithoutMtoQueryNestedInput = {
    create?: XOR<VendorEstimationCreateWithoutMtoQueryInput, VendorEstimationUncheckedCreateWithoutMtoQueryInput> | VendorEstimationCreateWithoutMtoQueryInput[] | VendorEstimationUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: VendorEstimationCreateOrConnectWithoutMtoQueryInput | VendorEstimationCreateOrConnectWithoutMtoQueryInput[]
    upsert?: VendorEstimationUpsertWithWhereUniqueWithoutMtoQueryInput | VendorEstimationUpsertWithWhereUniqueWithoutMtoQueryInput[]
    createMany?: VendorEstimationCreateManyMtoQueryInputEnvelope
    set?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
    disconnect?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
    delete?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
    connect?: VendorEstimationWhereUniqueInput | VendorEstimationWhereUniqueInput[]
    update?: VendorEstimationUpdateWithWhereUniqueWithoutMtoQueryInput | VendorEstimationUpdateWithWhereUniqueWithoutMtoQueryInput[]
    updateMany?: VendorEstimationUpdateManyWithWhereWithoutMtoQueryInput | VendorEstimationUpdateManyWithWhereWithoutMtoQueryInput[]
    deleteMany?: VendorEstimationScalarWhereInput | VendorEstimationScalarWhereInput[]
  }

  export type EstimationUncheckedUpdateManyWithoutMtoQueryNestedInput = {
    create?: XOR<EstimationCreateWithoutMtoQueryInput, EstimationUncheckedCreateWithoutMtoQueryInput> | EstimationCreateWithoutMtoQueryInput[] | EstimationUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: EstimationCreateOrConnectWithoutMtoQueryInput | EstimationCreateOrConnectWithoutMtoQueryInput[]
    upsert?: EstimationUpsertWithWhereUniqueWithoutMtoQueryInput | EstimationUpsertWithWhereUniqueWithoutMtoQueryInput[]
    createMany?: EstimationCreateManyMtoQueryInputEnvelope
    set?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
    disconnect?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
    delete?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
    connect?: EstimationWhereUniqueInput | EstimationWhereUniqueInput[]
    update?: EstimationUpdateWithWhereUniqueWithoutMtoQueryInput | EstimationUpdateWithWhereUniqueWithoutMtoQueryInput[]
    updateMany?: EstimationUpdateManyWithWhereWithoutMtoQueryInput | EstimationUpdateManyWithWhereWithoutMtoQueryInput[]
    deleteMany?: EstimationScalarWhereInput | EstimationScalarWhereInput[]
  }

  export type PromisedPricingUncheckedUpdateOneWithoutMtoQueryNestedInput = {
    create?: XOR<PromisedPricingCreateWithoutMtoQueryInput, PromisedPricingUncheckedCreateWithoutMtoQueryInput>
    connectOrCreate?: PromisedPricingCreateOrConnectWithoutMtoQueryInput
    upsert?: PromisedPricingUpsertWithoutMtoQueryInput
    disconnect?: PromisedPricingWhereInput | boolean
    delete?: PromisedPricingWhereInput | boolean
    connect?: PromisedPricingWhereUniqueInput
    update?: XOR<XOR<PromisedPricingUpdateToOneWithWhereWithoutMtoQueryInput, PromisedPricingUpdateWithoutMtoQueryInput>, PromisedPricingUncheckedUpdateWithoutMtoQueryInput>
  }

  export type MtoOrderUncheckedUpdateOneWithoutMtoQueryNestedInput = {
    create?: XOR<MtoOrderCreateWithoutMtoQueryInput, MtoOrderUncheckedCreateWithoutMtoQueryInput>
    connectOrCreate?: MtoOrderCreateOrConnectWithoutMtoQueryInput
    upsert?: MtoOrderUpsertWithoutMtoQueryInput
    disconnect?: MtoOrderWhereInput | boolean
    delete?: MtoOrderWhereInput | boolean
    connect?: MtoOrderWhereUniqueInput
    update?: XOR<XOR<MtoOrderUpdateToOneWithWhereWithoutMtoQueryInput, MtoOrderUpdateWithoutMtoQueryInput>, MtoOrderUncheckedUpdateWithoutMtoQueryInput>
  }

  export type PaymentUncheckedUpdateManyWithoutMtoQueryNestedInput = {
    create?: XOR<PaymentCreateWithoutMtoQueryInput, PaymentUncheckedCreateWithoutMtoQueryInput> | PaymentCreateWithoutMtoQueryInput[] | PaymentUncheckedCreateWithoutMtoQueryInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMtoQueryInput | PaymentCreateOrConnectWithoutMtoQueryInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMtoQueryInput | PaymentUpsertWithWhereUniqueWithoutMtoQueryInput[]
    createMany?: PaymentCreateManyMtoQueryInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMtoQueryInput | PaymentUpdateWithWhereUniqueWithoutMtoQueryInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMtoQueryInput | PaymentUpdateManyWithWhereWithoutMtoQueryInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MtoQueryCreateNestedOneWithoutVendorEstimationsInput = {
    create?: XOR<MtoQueryCreateWithoutVendorEstimationsInput, MtoQueryUncheckedCreateWithoutVendorEstimationsInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutVendorEstimationsInput
    connect?: MtoQueryWhereUniqueInput
  }

  export type MtoQueryUpdateOneRequiredWithoutVendorEstimationsNestedInput = {
    create?: XOR<MtoQueryCreateWithoutVendorEstimationsInput, MtoQueryUncheckedCreateWithoutVendorEstimationsInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutVendorEstimationsInput
    upsert?: MtoQueryUpsertWithoutVendorEstimationsInput
    connect?: MtoQueryWhereUniqueInput
    update?: XOR<XOR<MtoQueryUpdateToOneWithWhereWithoutVendorEstimationsInput, MtoQueryUpdateWithoutVendorEstimationsInput>, MtoQueryUncheckedUpdateWithoutVendorEstimationsInput>
  }

  export type MtoQueryCreateNestedOneWithoutEstimationsInput = {
    create?: XOR<MtoQueryCreateWithoutEstimationsInput, MtoQueryUncheckedCreateWithoutEstimationsInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutEstimationsInput
    connect?: MtoQueryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MtoQueryUpdateOneRequiredWithoutEstimationsNestedInput = {
    create?: XOR<MtoQueryCreateWithoutEstimationsInput, MtoQueryUncheckedCreateWithoutEstimationsInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutEstimationsInput
    upsert?: MtoQueryUpsertWithoutEstimationsInput
    connect?: MtoQueryWhereUniqueInput
    update?: XOR<XOR<MtoQueryUpdateToOneWithWhereWithoutEstimationsInput, MtoQueryUpdateWithoutEstimationsInput>, MtoQueryUncheckedUpdateWithoutEstimationsInput>
  }

  export type MtoQueryCreateNestedOneWithoutPricingInput = {
    create?: XOR<MtoQueryCreateWithoutPricingInput, MtoQueryUncheckedCreateWithoutPricingInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutPricingInput
    connect?: MtoQueryWhereUniqueInput
  }

  export type MtoQueryUpdateOneRequiredWithoutPricingNestedInput = {
    create?: XOR<MtoQueryCreateWithoutPricingInput, MtoQueryUncheckedCreateWithoutPricingInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutPricingInput
    upsert?: MtoQueryUpsertWithoutPricingInput
    connect?: MtoQueryWhereUniqueInput
    update?: XOR<XOR<MtoQueryUpdateToOneWithWhereWithoutPricingInput, MtoQueryUpdateWithoutPricingInput>, MtoQueryUncheckedUpdateWithoutPricingInput>
  }

  export type MtoQueryCreateNestedOneWithoutPaymentInput = {
    create?: XOR<MtoQueryCreateWithoutPaymentInput, MtoQueryUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutPaymentInput
    connect?: MtoQueryWhereUniqueInput
  }

  export type MtoQueryUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<MtoQueryCreateWithoutPaymentInput, MtoQueryUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutPaymentInput
    upsert?: MtoQueryUpsertWithoutPaymentInput
    connect?: MtoQueryWhereUniqueInput
    update?: XOR<XOR<MtoQueryUpdateToOneWithWhereWithoutPaymentInput, MtoQueryUpdateWithoutPaymentInput>, MtoQueryUncheckedUpdateWithoutPaymentInput>
  }

  export type MtoQueryCreateNestedOneWithoutOrderInput = {
    create?: XOR<MtoQueryCreateWithoutOrderInput, MtoQueryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutOrderInput
    connect?: MtoQueryWhereUniqueInput
  }

  export type PurchaseOrderCreateNestedOneWithoutMtoOrderInput = {
    create?: XOR<PurchaseOrderCreateWithoutMtoOrderInput, PurchaseOrderUncheckedCreateWithoutMtoOrderInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutMtoOrderInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutMtoOrderInput = {
    create?: XOR<InvoiceCreateWithoutMtoOrderInput, InvoiceUncheckedCreateWithoutMtoOrderInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutMtoOrderInput
    connect?: InvoiceWhereUniqueInput
  }

  export type PurchaseOrderUncheckedCreateNestedOneWithoutMtoOrderInput = {
    create?: XOR<PurchaseOrderCreateWithoutMtoOrderInput, PurchaseOrderUncheckedCreateWithoutMtoOrderInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutMtoOrderInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedOneWithoutMtoOrderInput = {
    create?: XOR<InvoiceCreateWithoutMtoOrderInput, InvoiceUncheckedCreateWithoutMtoOrderInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutMtoOrderInput
    connect?: InvoiceWhereUniqueInput
  }

  export type MtoQueryUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<MtoQueryCreateWithoutOrderInput, MtoQueryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: MtoQueryCreateOrConnectWithoutOrderInput
    upsert?: MtoQueryUpsertWithoutOrderInput
    connect?: MtoQueryWhereUniqueInput
    update?: XOR<XOR<MtoQueryUpdateToOneWithWhereWithoutOrderInput, MtoQueryUpdateWithoutOrderInput>, MtoQueryUncheckedUpdateWithoutOrderInput>
  }

  export type PurchaseOrderUpdateOneWithoutMtoOrderNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutMtoOrderInput, PurchaseOrderUncheckedCreateWithoutMtoOrderInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutMtoOrderInput
    upsert?: PurchaseOrderUpsertWithoutMtoOrderInput
    disconnect?: PurchaseOrderWhereInput | boolean
    delete?: PurchaseOrderWhereInput | boolean
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutMtoOrderInput, PurchaseOrderUpdateWithoutMtoOrderInput>, PurchaseOrderUncheckedUpdateWithoutMtoOrderInput>
  }

  export type InvoiceUpdateOneWithoutMtoOrderNestedInput = {
    create?: XOR<InvoiceCreateWithoutMtoOrderInput, InvoiceUncheckedCreateWithoutMtoOrderInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutMtoOrderInput
    upsert?: InvoiceUpsertWithoutMtoOrderInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutMtoOrderInput, InvoiceUpdateWithoutMtoOrderInput>, InvoiceUncheckedUpdateWithoutMtoOrderInput>
  }

  export type PurchaseOrderUncheckedUpdateOneWithoutMtoOrderNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutMtoOrderInput, PurchaseOrderUncheckedCreateWithoutMtoOrderInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutMtoOrderInput
    upsert?: PurchaseOrderUpsertWithoutMtoOrderInput
    disconnect?: PurchaseOrderWhereInput | boolean
    delete?: PurchaseOrderWhereInput | boolean
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutMtoOrderInput, PurchaseOrderUpdateWithoutMtoOrderInput>, PurchaseOrderUncheckedUpdateWithoutMtoOrderInput>
  }

  export type InvoiceUncheckedUpdateOneWithoutMtoOrderNestedInput = {
    create?: XOR<InvoiceCreateWithoutMtoOrderInput, InvoiceUncheckedCreateWithoutMtoOrderInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutMtoOrderInput
    upsert?: InvoiceUpsertWithoutMtoOrderInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutMtoOrderInput, InvoiceUpdateWithoutMtoOrderInput>, InvoiceUncheckedUpdateWithoutMtoOrderInput>
  }

  export type MtoOrderCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<MtoOrderCreateWithoutPurchaseOrderInput, MtoOrderUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: MtoOrderCreateOrConnectWithoutPurchaseOrderInput
    connect?: MtoOrderWhereUniqueInput
  }

  export type QcRecordCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<QcRecordCreateWithoutPurchaseOrderInput, QcRecordUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: QcRecordCreateOrConnectWithoutPurchaseOrderInput
    connect?: QcRecordWhereUniqueInput
  }

  export type QcRecordUncheckedCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<QcRecordCreateWithoutPurchaseOrderInput, QcRecordUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: QcRecordCreateOrConnectWithoutPurchaseOrderInput
    connect?: QcRecordWhereUniqueInput
  }

  export type MtoOrderUpdateOneRequiredWithoutPurchaseOrderNestedInput = {
    create?: XOR<MtoOrderCreateWithoutPurchaseOrderInput, MtoOrderUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: MtoOrderCreateOrConnectWithoutPurchaseOrderInput
    upsert?: MtoOrderUpsertWithoutPurchaseOrderInput
    connect?: MtoOrderWhereUniqueInput
    update?: XOR<XOR<MtoOrderUpdateToOneWithWhereWithoutPurchaseOrderInput, MtoOrderUpdateWithoutPurchaseOrderInput>, MtoOrderUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type QcRecordUpdateOneWithoutPurchaseOrderNestedInput = {
    create?: XOR<QcRecordCreateWithoutPurchaseOrderInput, QcRecordUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: QcRecordCreateOrConnectWithoutPurchaseOrderInput
    upsert?: QcRecordUpsertWithoutPurchaseOrderInput
    disconnect?: QcRecordWhereInput | boolean
    delete?: QcRecordWhereInput | boolean
    connect?: QcRecordWhereUniqueInput
    update?: XOR<XOR<QcRecordUpdateToOneWithWhereWithoutPurchaseOrderInput, QcRecordUpdateWithoutPurchaseOrderInput>, QcRecordUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type QcRecordUncheckedUpdateOneWithoutPurchaseOrderNestedInput = {
    create?: XOR<QcRecordCreateWithoutPurchaseOrderInput, QcRecordUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: QcRecordCreateOrConnectWithoutPurchaseOrderInput
    upsert?: QcRecordUpsertWithoutPurchaseOrderInput
    disconnect?: QcRecordWhereInput | boolean
    delete?: QcRecordWhereInput | boolean
    connect?: QcRecordWhereUniqueInput
    update?: XOR<XOR<QcRecordUpdateToOneWithWhereWithoutPurchaseOrderInput, QcRecordUpdateWithoutPurchaseOrderInput>, QcRecordUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderCreateNestedOneWithoutQcRecordInput = {
    create?: XOR<PurchaseOrderCreateWithoutQcRecordInput, PurchaseOrderUncheckedCreateWithoutQcRecordInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutQcRecordInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type PurchaseOrderUpdateOneRequiredWithoutQcRecordNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutQcRecordInput, PurchaseOrderUncheckedCreateWithoutQcRecordInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutQcRecordInput
    upsert?: PurchaseOrderUpsertWithoutQcRecordInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutQcRecordInput, PurchaseOrderUpdateWithoutQcRecordInput>, PurchaseOrderUncheckedUpdateWithoutQcRecordInput>
  }

  export type MtoOrderCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<MtoOrderCreateWithoutInvoiceInput, MtoOrderUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: MtoOrderCreateOrConnectWithoutInvoiceInput
    connect?: MtoOrderWhereUniqueInput
  }

  export type MtoOrderUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<MtoOrderCreateWithoutInvoiceInput, MtoOrderUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: MtoOrderCreateOrConnectWithoutInvoiceInput
    upsert?: MtoOrderUpsertWithoutInvoiceInput
    connect?: MtoOrderWhereUniqueInput
    update?: XOR<XOR<MtoOrderUpdateToOneWithWhereWithoutInvoiceInput, MtoOrderUpdateWithoutInvoiceInput>, MtoOrderUncheckedUpdateWithoutInvoiceInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MtoQueryCreateWithoutStaffInput = {
    id?: string
    queryNo?: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMtosInput
    vendorEstimations?: VendorEstimationCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryUncheckedCreateWithoutStaffInput = {
    id?: string
    queryNo?: number
    customerId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorEstimations?: VendorEstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingUncheckedCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderUncheckedCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentUncheckedCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryCreateOrConnectWithoutStaffInput = {
    where: MtoQueryWhereUniqueInput
    create: XOR<MtoQueryCreateWithoutStaffInput, MtoQueryUncheckedCreateWithoutStaffInput>
  }

  export type MtoQueryCreateManyStaffInputEnvelope = {
    data: MtoQueryCreateManyStaffInput | MtoQueryCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type MtoQueryUpsertWithWhereUniqueWithoutStaffInput = {
    where: MtoQueryWhereUniqueInput
    update: XOR<MtoQueryUpdateWithoutStaffInput, MtoQueryUncheckedUpdateWithoutStaffInput>
    create: XOR<MtoQueryCreateWithoutStaffInput, MtoQueryUncheckedCreateWithoutStaffInput>
  }

  export type MtoQueryUpdateWithWhereUniqueWithoutStaffInput = {
    where: MtoQueryWhereUniqueInput
    data: XOR<MtoQueryUpdateWithoutStaffInput, MtoQueryUncheckedUpdateWithoutStaffInput>
  }

  export type MtoQueryUpdateManyWithWhereWithoutStaffInput = {
    where: MtoQueryScalarWhereInput
    data: XOR<MtoQueryUpdateManyMutationInput, MtoQueryUncheckedUpdateManyWithoutStaffInput>
  }

  export type MtoQueryScalarWhereInput = {
    AND?: MtoQueryScalarWhereInput | MtoQueryScalarWhereInput[]
    OR?: MtoQueryScalarWhereInput[]
    NOT?: MtoQueryScalarWhereInput | MtoQueryScalarWhereInput[]
    id?: StringFilter<"MtoQuery"> | string
    queryNo?: IntFilter<"MtoQuery"> | number
    customerId?: IntFilter<"MtoQuery"> | number
    staffId?: IntFilter<"MtoQuery"> | number
    leadType?: StringFilter<"MtoQuery"> | string
    mtoType?: StringFilter<"MtoQuery"> | string
    category?: StringFilter<"MtoQuery"> | string
    metalType?: StringFilter<"MtoQuery"> | string
    isStudded?: BoolFilter<"MtoQuery"> | boolean
    diamondCaratage?: StringNullableFilter<"MtoQuery"> | string | null
    weightRange?: StringFilter<"MtoQuery"> | string
    goldKaratage?: StringNullableFilter<"MtoQuery"> | string | null
    metalColor?: StringNullableFilter<"MtoQuery"> | string | null
    goldWeight?: StringNullableFilter<"MtoQuery"> | string | null
    size?: StringNullableFilter<"MtoQuery"> | string | null
    notes?: StringNullableFilter<"MtoQuery"> | string | null
    status?: StringFilter<"MtoQuery"> | string
    referenceImages?: StringNullableFilter<"MtoQuery"> | string | null
    catalogueSku?: StringNullableFilter<"MtoQuery"> | string | null
    createdAt?: DateTimeFilter<"MtoQuery"> | Date | string
    updatedAt?: DateTimeFilter<"MtoQuery"> | Date | string
  }

  export type MtoQueryCreateWithoutCustomerInput = {
    id?: string
    queryNo?: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staff: UserCreateNestedOneWithoutMtosInput
    vendorEstimations?: VendorEstimationCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryUncheckedCreateWithoutCustomerInput = {
    id?: string
    queryNo?: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorEstimations?: VendorEstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingUncheckedCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderUncheckedCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentUncheckedCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryCreateOrConnectWithoutCustomerInput = {
    where: MtoQueryWhereUniqueInput
    create: XOR<MtoQueryCreateWithoutCustomerInput, MtoQueryUncheckedCreateWithoutCustomerInput>
  }

  export type MtoQueryCreateManyCustomerInputEnvelope = {
    data: MtoQueryCreateManyCustomerInput | MtoQueryCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type MtoQueryUpsertWithWhereUniqueWithoutCustomerInput = {
    where: MtoQueryWhereUniqueInput
    update: XOR<MtoQueryUpdateWithoutCustomerInput, MtoQueryUncheckedUpdateWithoutCustomerInput>
    create: XOR<MtoQueryCreateWithoutCustomerInput, MtoQueryUncheckedCreateWithoutCustomerInput>
  }

  export type MtoQueryUpdateWithWhereUniqueWithoutCustomerInput = {
    where: MtoQueryWhereUniqueInput
    data: XOR<MtoQueryUpdateWithoutCustomerInput, MtoQueryUncheckedUpdateWithoutCustomerInput>
  }

  export type MtoQueryUpdateManyWithWhereWithoutCustomerInput = {
    where: MtoQueryScalarWhereInput
    data: XOR<MtoQueryUpdateManyMutationInput, MtoQueryUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutMtosInput = {
    name: string
    phone: string
  }

  export type CustomerUncheckedCreateWithoutMtosInput = {
    id?: number
    name: string
    phone: string
  }

  export type CustomerCreateOrConnectWithoutMtosInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutMtosInput, CustomerUncheckedCreateWithoutMtosInput>
  }

  export type UserCreateWithoutMtosInput = {
    name: string
    role: string
    email: string
    phone?: string | null
  }

  export type UserUncheckedCreateWithoutMtosInput = {
    id?: number
    name: string
    role: string
    email: string
    phone?: string | null
  }

  export type UserCreateOrConnectWithoutMtosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMtosInput, UserUncheckedCreateWithoutMtosInput>
  }

  export type VendorEstimationCreateWithoutMtoQueryInput = {
    vendorName: string
    goldWeight?: string | null
    diamondWeight?: string | null
    remarks?: string | null
    images?: string | null
    isAccepted?: boolean
    createdAt?: Date | string
  }

  export type VendorEstimationUncheckedCreateWithoutMtoQueryInput = {
    id?: number
    vendorName: string
    goldWeight?: string | null
    diamondWeight?: string | null
    remarks?: string | null
    images?: string | null
    isAccepted?: boolean
    createdAt?: Date | string
  }

  export type VendorEstimationCreateOrConnectWithoutMtoQueryInput = {
    where: VendorEstimationWhereUniqueInput
    create: XOR<VendorEstimationCreateWithoutMtoQueryInput, VendorEstimationUncheckedCreateWithoutMtoQueryInput>
  }

  export type VendorEstimationCreateManyMtoQueryInputEnvelope = {
    data: VendorEstimationCreateManyMtoQueryInput | VendorEstimationCreateManyMtoQueryInput[]
    skipDuplicates?: boolean
  }

  export type EstimationCreateWithoutMtoQueryInput = {
    version: number
    goldWeight: string
    goldRate: number
    diamondWeight?: number | null
    diamondRate?: number | null
    makingPercent?: number
    discountPercent?: number
    otherStones?: number | null
    gstAmount?: number
    discountAmount?: number
    totalAmount?: number
    finalEstimatedPrice: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type EstimationUncheckedCreateWithoutMtoQueryInput = {
    id?: number
    version: number
    goldWeight: string
    goldRate: number
    diamondWeight?: number | null
    diamondRate?: number | null
    makingPercent?: number
    discountPercent?: number
    otherStones?: number | null
    gstAmount?: number
    discountAmount?: number
    totalAmount?: number
    finalEstimatedPrice: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type EstimationCreateOrConnectWithoutMtoQueryInput = {
    where: EstimationWhereUniqueInput
    create: XOR<EstimationCreateWithoutMtoQueryInput, EstimationUncheckedCreateWithoutMtoQueryInput>
  }

  export type EstimationCreateManyMtoQueryInputEnvelope = {
    data: EstimationCreateManyMtoQueryInput | EstimationCreateManyMtoQueryInput[]
    skipDuplicates?: boolean
  }

  export type PromisedPricingCreateWithoutMtoQueryInput = {
    goldWeight: string
    stoneDetails: string
    finalPrice: number
    goldRate?: number
    lockedAt?: Date | string
  }

  export type PromisedPricingUncheckedCreateWithoutMtoQueryInput = {
    id?: number
    goldWeight: string
    stoneDetails: string
    finalPrice: number
    goldRate?: number
    lockedAt?: Date | string
  }

  export type PromisedPricingCreateOrConnectWithoutMtoQueryInput = {
    where: PromisedPricingWhereUniqueInput
    create: XOR<PromisedPricingCreateWithoutMtoQueryInput, PromisedPricingUncheckedCreateWithoutMtoQueryInput>
  }

  export type MtoOrderCreateWithoutMtoQueryInput = {
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
    purchaseOrder?: PurchaseOrderCreateNestedOneWithoutMtoOrderInput
    invoice?: InvoiceCreateNestedOneWithoutMtoOrderInput
  }

  export type MtoOrderUncheckedCreateWithoutMtoQueryInput = {
    id?: number
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
    purchaseOrder?: PurchaseOrderUncheckedCreateNestedOneWithoutMtoOrderInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutMtoOrderInput
  }

  export type MtoOrderCreateOrConnectWithoutMtoQueryInput = {
    where: MtoOrderWhereUniqueInput
    create: XOR<MtoOrderCreateWithoutMtoQueryInput, MtoOrderUncheckedCreateWithoutMtoQueryInput>
  }

  export type PaymentCreateWithoutMtoQueryInput = {
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutMtoQueryInput = {
    id?: number
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutMtoQueryInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutMtoQueryInput, PaymentUncheckedCreateWithoutMtoQueryInput>
  }

  export type PaymentCreateManyMtoQueryInputEnvelope = {
    data: PaymentCreateManyMtoQueryInput | PaymentCreateManyMtoQueryInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutMtosInput = {
    update: XOR<CustomerUpdateWithoutMtosInput, CustomerUncheckedUpdateWithoutMtosInput>
    create: XOR<CustomerCreateWithoutMtosInput, CustomerUncheckedCreateWithoutMtosInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutMtosInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutMtosInput, CustomerUncheckedUpdateWithoutMtosInput>
  }

  export type CustomerUpdateWithoutMtosInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutMtosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutMtosInput = {
    update: XOR<UserUpdateWithoutMtosInput, UserUncheckedUpdateWithoutMtosInput>
    create: XOR<UserCreateWithoutMtosInput, UserUncheckedCreateWithoutMtosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMtosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMtosInput, UserUncheckedUpdateWithoutMtosInput>
  }

  export type UserUpdateWithoutMtosInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutMtosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VendorEstimationUpsertWithWhereUniqueWithoutMtoQueryInput = {
    where: VendorEstimationWhereUniqueInput
    update: XOR<VendorEstimationUpdateWithoutMtoQueryInput, VendorEstimationUncheckedUpdateWithoutMtoQueryInput>
    create: XOR<VendorEstimationCreateWithoutMtoQueryInput, VendorEstimationUncheckedCreateWithoutMtoQueryInput>
  }

  export type VendorEstimationUpdateWithWhereUniqueWithoutMtoQueryInput = {
    where: VendorEstimationWhereUniqueInput
    data: XOR<VendorEstimationUpdateWithoutMtoQueryInput, VendorEstimationUncheckedUpdateWithoutMtoQueryInput>
  }

  export type VendorEstimationUpdateManyWithWhereWithoutMtoQueryInput = {
    where: VendorEstimationScalarWhereInput
    data: XOR<VendorEstimationUpdateManyMutationInput, VendorEstimationUncheckedUpdateManyWithoutMtoQueryInput>
  }

  export type VendorEstimationScalarWhereInput = {
    AND?: VendorEstimationScalarWhereInput | VendorEstimationScalarWhereInput[]
    OR?: VendorEstimationScalarWhereInput[]
    NOT?: VendorEstimationScalarWhereInput | VendorEstimationScalarWhereInput[]
    id?: IntFilter<"VendorEstimation"> | number
    mtoQueryId?: StringFilter<"VendorEstimation"> | string
    vendorName?: StringFilter<"VendorEstimation"> | string
    goldWeight?: StringNullableFilter<"VendorEstimation"> | string | null
    diamondWeight?: StringNullableFilter<"VendorEstimation"> | string | null
    remarks?: StringNullableFilter<"VendorEstimation"> | string | null
    images?: StringNullableFilter<"VendorEstimation"> | string | null
    isAccepted?: BoolFilter<"VendorEstimation"> | boolean
    createdAt?: DateTimeFilter<"VendorEstimation"> | Date | string
  }

  export type EstimationUpsertWithWhereUniqueWithoutMtoQueryInput = {
    where: EstimationWhereUniqueInput
    update: XOR<EstimationUpdateWithoutMtoQueryInput, EstimationUncheckedUpdateWithoutMtoQueryInput>
    create: XOR<EstimationCreateWithoutMtoQueryInput, EstimationUncheckedCreateWithoutMtoQueryInput>
  }

  export type EstimationUpdateWithWhereUniqueWithoutMtoQueryInput = {
    where: EstimationWhereUniqueInput
    data: XOR<EstimationUpdateWithoutMtoQueryInput, EstimationUncheckedUpdateWithoutMtoQueryInput>
  }

  export type EstimationUpdateManyWithWhereWithoutMtoQueryInput = {
    where: EstimationScalarWhereInput
    data: XOR<EstimationUpdateManyMutationInput, EstimationUncheckedUpdateManyWithoutMtoQueryInput>
  }

  export type EstimationScalarWhereInput = {
    AND?: EstimationScalarWhereInput | EstimationScalarWhereInput[]
    OR?: EstimationScalarWhereInput[]
    NOT?: EstimationScalarWhereInput | EstimationScalarWhereInput[]
    id?: IntFilter<"Estimation"> | number
    mtoQueryId?: StringFilter<"Estimation"> | string
    version?: IntFilter<"Estimation"> | number
    goldWeight?: StringFilter<"Estimation"> | string
    goldRate?: FloatFilter<"Estimation"> | number
    diamondWeight?: FloatNullableFilter<"Estimation"> | number | null
    diamondRate?: FloatNullableFilter<"Estimation"> | number | null
    makingPercent?: FloatFilter<"Estimation"> | number
    discountPercent?: FloatFilter<"Estimation"> | number
    otherStones?: FloatNullableFilter<"Estimation"> | number | null
    gstAmount?: FloatFilter<"Estimation"> | number
    discountAmount?: FloatFilter<"Estimation"> | number
    totalAmount?: FloatFilter<"Estimation"> | number
    finalEstimatedPrice?: FloatFilter<"Estimation"> | number
    notes?: StringNullableFilter<"Estimation"> | string | null
    createdAt?: DateTimeFilter<"Estimation"> | Date | string
  }

  export type PromisedPricingUpsertWithoutMtoQueryInput = {
    update: XOR<PromisedPricingUpdateWithoutMtoQueryInput, PromisedPricingUncheckedUpdateWithoutMtoQueryInput>
    create: XOR<PromisedPricingCreateWithoutMtoQueryInput, PromisedPricingUncheckedCreateWithoutMtoQueryInput>
    where?: PromisedPricingWhereInput
  }

  export type PromisedPricingUpdateToOneWithWhereWithoutMtoQueryInput = {
    where?: PromisedPricingWhereInput
    data: XOR<PromisedPricingUpdateWithoutMtoQueryInput, PromisedPricingUncheckedUpdateWithoutMtoQueryInput>
  }

  export type PromisedPricingUpdateWithoutMtoQueryInput = {
    goldWeight?: StringFieldUpdateOperationsInput | string
    stoneDetails?: StringFieldUpdateOperationsInput | string
    finalPrice?: FloatFieldUpdateOperationsInput | number
    goldRate?: FloatFieldUpdateOperationsInput | number
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromisedPricingUncheckedUpdateWithoutMtoQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    goldWeight?: StringFieldUpdateOperationsInput | string
    stoneDetails?: StringFieldUpdateOperationsInput | string
    finalPrice?: FloatFieldUpdateOperationsInput | number
    goldRate?: FloatFieldUpdateOperationsInput | number
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MtoOrderUpsertWithoutMtoQueryInput = {
    update: XOR<MtoOrderUpdateWithoutMtoQueryInput, MtoOrderUncheckedUpdateWithoutMtoQueryInput>
    create: XOR<MtoOrderCreateWithoutMtoQueryInput, MtoOrderUncheckedCreateWithoutMtoQueryInput>
    where?: MtoOrderWhereInput
  }

  export type MtoOrderUpdateToOneWithWhereWithoutMtoQueryInput = {
    where?: MtoOrderWhereInput
    data: XOR<MtoOrderUpdateWithoutMtoQueryInput, MtoOrderUncheckedUpdateWithoutMtoQueryInput>
  }

  export type MtoOrderUpdateWithoutMtoQueryInput = {
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseOrder?: PurchaseOrderUpdateOneWithoutMtoOrderNestedInput
    invoice?: InvoiceUpdateOneWithoutMtoOrderNestedInput
  }

  export type MtoOrderUncheckedUpdateWithoutMtoQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseOrder?: PurchaseOrderUncheckedUpdateOneWithoutMtoOrderNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutMtoOrderNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutMtoQueryInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutMtoQueryInput, PaymentUncheckedUpdateWithoutMtoQueryInput>
    create: XOR<PaymentCreateWithoutMtoQueryInput, PaymentUncheckedCreateWithoutMtoQueryInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutMtoQueryInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutMtoQueryInput, PaymentUncheckedUpdateWithoutMtoQueryInput>
  }

  export type PaymentUpdateManyWithWhereWithoutMtoQueryInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutMtoQueryInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    mtoQueryId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type MtoQueryCreateWithoutVendorEstimationsInput = {
    id?: string
    queryNo?: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMtosInput
    staff: UserCreateNestedOneWithoutMtosInput
    estimations?: EstimationCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryUncheckedCreateWithoutVendorEstimationsInput = {
    id?: string
    queryNo?: number
    customerId: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    estimations?: EstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingUncheckedCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderUncheckedCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentUncheckedCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryCreateOrConnectWithoutVendorEstimationsInput = {
    where: MtoQueryWhereUniqueInput
    create: XOR<MtoQueryCreateWithoutVendorEstimationsInput, MtoQueryUncheckedCreateWithoutVendorEstimationsInput>
  }

  export type MtoQueryUpsertWithoutVendorEstimationsInput = {
    update: XOR<MtoQueryUpdateWithoutVendorEstimationsInput, MtoQueryUncheckedUpdateWithoutVendorEstimationsInput>
    create: XOR<MtoQueryCreateWithoutVendorEstimationsInput, MtoQueryUncheckedCreateWithoutVendorEstimationsInput>
    where?: MtoQueryWhereInput
  }

  export type MtoQueryUpdateToOneWithWhereWithoutVendorEstimationsInput = {
    where?: MtoQueryWhereInput
    data: XOR<MtoQueryUpdateWithoutVendorEstimationsInput, MtoQueryUncheckedUpdateWithoutVendorEstimationsInput>
  }

  export type MtoQueryUpdateWithoutVendorEstimationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMtosNestedInput
    staff?: UserUpdateOneRequiredWithoutMtosNestedInput
    estimations?: EstimationUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateWithoutVendorEstimationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimations?: EstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUncheckedUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUncheckedUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryCreateWithoutEstimationsInput = {
    id?: string
    queryNo?: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMtosInput
    staff: UserCreateNestedOneWithoutMtosInput
    vendorEstimations?: VendorEstimationCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryUncheckedCreateWithoutEstimationsInput = {
    id?: string
    queryNo?: number
    customerId: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorEstimations?: VendorEstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingUncheckedCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderUncheckedCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentUncheckedCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryCreateOrConnectWithoutEstimationsInput = {
    where: MtoQueryWhereUniqueInput
    create: XOR<MtoQueryCreateWithoutEstimationsInput, MtoQueryUncheckedCreateWithoutEstimationsInput>
  }

  export type MtoQueryUpsertWithoutEstimationsInput = {
    update: XOR<MtoQueryUpdateWithoutEstimationsInput, MtoQueryUncheckedUpdateWithoutEstimationsInput>
    create: XOR<MtoQueryCreateWithoutEstimationsInput, MtoQueryUncheckedCreateWithoutEstimationsInput>
    where?: MtoQueryWhereInput
  }

  export type MtoQueryUpdateToOneWithWhereWithoutEstimationsInput = {
    where?: MtoQueryWhereInput
    data: XOR<MtoQueryUpdateWithoutEstimationsInput, MtoQueryUncheckedUpdateWithoutEstimationsInput>
  }

  export type MtoQueryUpdateWithoutEstimationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMtosNestedInput
    staff?: UserUpdateOneRequiredWithoutMtosNestedInput
    vendorEstimations?: VendorEstimationUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateWithoutEstimationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorEstimations?: VendorEstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUncheckedUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUncheckedUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryCreateWithoutPricingInput = {
    id?: string
    queryNo?: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMtosInput
    staff: UserCreateNestedOneWithoutMtosInput
    vendorEstimations?: VendorEstimationCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationCreateNestedManyWithoutMtoQueryInput
    order?: MtoOrderCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryUncheckedCreateWithoutPricingInput = {
    id?: string
    queryNo?: number
    customerId: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorEstimations?: VendorEstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    order?: MtoOrderUncheckedCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentUncheckedCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryCreateOrConnectWithoutPricingInput = {
    where: MtoQueryWhereUniqueInput
    create: XOR<MtoQueryCreateWithoutPricingInput, MtoQueryUncheckedCreateWithoutPricingInput>
  }

  export type MtoQueryUpsertWithoutPricingInput = {
    update: XOR<MtoQueryUpdateWithoutPricingInput, MtoQueryUncheckedUpdateWithoutPricingInput>
    create: XOR<MtoQueryCreateWithoutPricingInput, MtoQueryUncheckedCreateWithoutPricingInput>
    where?: MtoQueryWhereInput
  }

  export type MtoQueryUpdateToOneWithWhereWithoutPricingInput = {
    where?: MtoQueryWhereInput
    data: XOR<MtoQueryUpdateWithoutPricingInput, MtoQueryUncheckedUpdateWithoutPricingInput>
  }

  export type MtoQueryUpdateWithoutPricingInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMtosNestedInput
    staff?: UserUpdateOneRequiredWithoutMtosNestedInput
    vendorEstimations?: VendorEstimationUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUpdateManyWithoutMtoQueryNestedInput
    order?: MtoOrderUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateWithoutPricingInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorEstimations?: VendorEstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    order?: MtoOrderUncheckedUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryCreateWithoutPaymentInput = {
    id?: string
    queryNo?: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMtosInput
    staff: UserCreateNestedOneWithoutMtosInput
    vendorEstimations?: VendorEstimationCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderCreateNestedOneWithoutMtoQueryInput
  }

  export type MtoQueryUncheckedCreateWithoutPaymentInput = {
    id?: string
    queryNo?: number
    customerId: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorEstimations?: VendorEstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingUncheckedCreateNestedOneWithoutMtoQueryInput
    order?: MtoOrderUncheckedCreateNestedOneWithoutMtoQueryInput
  }

  export type MtoQueryCreateOrConnectWithoutPaymentInput = {
    where: MtoQueryWhereUniqueInput
    create: XOR<MtoQueryCreateWithoutPaymentInput, MtoQueryUncheckedCreateWithoutPaymentInput>
  }

  export type MtoQueryUpsertWithoutPaymentInput = {
    update: XOR<MtoQueryUpdateWithoutPaymentInput, MtoQueryUncheckedUpdateWithoutPaymentInput>
    create: XOR<MtoQueryCreateWithoutPaymentInput, MtoQueryUncheckedCreateWithoutPaymentInput>
    where?: MtoQueryWhereInput
  }

  export type MtoQueryUpdateToOneWithWhereWithoutPaymentInput = {
    where?: MtoQueryWhereInput
    data: XOR<MtoQueryUpdateWithoutPaymentInput, MtoQueryUncheckedUpdateWithoutPaymentInput>
  }

  export type MtoQueryUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMtosNestedInput
    staff?: UserUpdateOneRequiredWithoutMtosNestedInput
    vendorEstimations?: VendorEstimationUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUpdateOneWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorEstimations?: VendorEstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUncheckedUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUncheckedUpdateOneWithoutMtoQueryNestedInput
  }

  export type MtoQueryCreateWithoutOrderInput = {
    id?: string
    queryNo?: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMtosInput
    staff: UserCreateNestedOneWithoutMtosInput
    vendorEstimations?: VendorEstimationCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryUncheckedCreateWithoutOrderInput = {
    id?: string
    queryNo?: number
    customerId: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorEstimations?: VendorEstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    estimations?: EstimationUncheckedCreateNestedManyWithoutMtoQueryInput
    pricing?: PromisedPricingUncheckedCreateNestedOneWithoutMtoQueryInput
    payment?: PaymentUncheckedCreateNestedManyWithoutMtoQueryInput
  }

  export type MtoQueryCreateOrConnectWithoutOrderInput = {
    where: MtoQueryWhereUniqueInput
    create: XOR<MtoQueryCreateWithoutOrderInput, MtoQueryUncheckedCreateWithoutOrderInput>
  }

  export type PurchaseOrderCreateWithoutMtoOrderInput = {
    vendorName: string
    lockedGoldPrice: number
    deliveryTimeline: string
    status: string
    createdAt?: Date | string
    qcRecord?: QcRecordCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutMtoOrderInput = {
    id?: number
    vendorName: string
    lockedGoldPrice: number
    deliveryTimeline: string
    status: string
    createdAt?: Date | string
    qcRecord?: QcRecordUncheckedCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderCreateOrConnectWithoutMtoOrderInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutMtoOrderInput, PurchaseOrderUncheckedCreateWithoutMtoOrderInput>
  }

  export type InvoiceCreateWithoutMtoOrderInput = {
    totalAmount: number
    paidAmount: number
    balanceAmount: number
    status: string
    createdAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutMtoOrderInput = {
    id?: number
    totalAmount: number
    paidAmount: number
    balanceAmount: number
    status: string
    createdAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutMtoOrderInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutMtoOrderInput, InvoiceUncheckedCreateWithoutMtoOrderInput>
  }

  export type MtoQueryUpsertWithoutOrderInput = {
    update: XOR<MtoQueryUpdateWithoutOrderInput, MtoQueryUncheckedUpdateWithoutOrderInput>
    create: XOR<MtoQueryCreateWithoutOrderInput, MtoQueryUncheckedCreateWithoutOrderInput>
    where?: MtoQueryWhereInput
  }

  export type MtoQueryUpdateToOneWithWhereWithoutOrderInput = {
    where?: MtoQueryWhereInput
    data: XOR<MtoQueryUpdateWithoutOrderInput, MtoQueryUncheckedUpdateWithoutOrderInput>
  }

  export type MtoQueryUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMtosNestedInput
    staff?: UserUpdateOneRequiredWithoutMtosNestedInput
    vendorEstimations?: VendorEstimationUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorEstimations?: VendorEstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUncheckedUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutMtoQueryNestedInput
  }

  export type PurchaseOrderUpsertWithoutMtoOrderInput = {
    update: XOR<PurchaseOrderUpdateWithoutMtoOrderInput, PurchaseOrderUncheckedUpdateWithoutMtoOrderInput>
    create: XOR<PurchaseOrderCreateWithoutMtoOrderInput, PurchaseOrderUncheckedCreateWithoutMtoOrderInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutMtoOrderInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutMtoOrderInput, PurchaseOrderUncheckedUpdateWithoutMtoOrderInput>
  }

  export type PurchaseOrderUpdateWithoutMtoOrderInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    lockedGoldPrice?: FloatFieldUpdateOperationsInput | number
    deliveryTimeline?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qcRecord?: QcRecordUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutMtoOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    lockedGoldPrice?: FloatFieldUpdateOperationsInput | number
    deliveryTimeline?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qcRecord?: QcRecordUncheckedUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type InvoiceUpsertWithoutMtoOrderInput = {
    update: XOR<InvoiceUpdateWithoutMtoOrderInput, InvoiceUncheckedUpdateWithoutMtoOrderInput>
    create: XOR<InvoiceCreateWithoutMtoOrderInput, InvoiceUncheckedCreateWithoutMtoOrderInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutMtoOrderInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutMtoOrderInput, InvoiceUncheckedUpdateWithoutMtoOrderInput>
  }

  export type InvoiceUpdateWithoutMtoOrderInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    balanceAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutMtoOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    balanceAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MtoOrderCreateWithoutPurchaseOrderInput = {
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
    mtoQuery: MtoQueryCreateNestedOneWithoutOrderInput
    invoice?: InvoiceCreateNestedOneWithoutMtoOrderInput
  }

  export type MtoOrderUncheckedCreateWithoutPurchaseOrderInput = {
    id?: number
    mtoQueryId: string
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
    invoice?: InvoiceUncheckedCreateNestedOneWithoutMtoOrderInput
  }

  export type MtoOrderCreateOrConnectWithoutPurchaseOrderInput = {
    where: MtoOrderWhereUniqueInput
    create: XOR<MtoOrderCreateWithoutPurchaseOrderInput, MtoOrderUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type QcRecordCreateWithoutPurchaseOrderInput = {
    status: string
    iterations?: number
    notes?: string | null
    actualGoldWeight?: number | null
    actualMakingCharges?: number | null
    actualStoneWeight?: number | null
    actualStoneValue?: number | null
    actualOtherCharges?: number | null
    isBilled?: boolean
    createdAt?: Date | string
  }

  export type QcRecordUncheckedCreateWithoutPurchaseOrderInput = {
    id?: number
    status: string
    iterations?: number
    notes?: string | null
    actualGoldWeight?: number | null
    actualMakingCharges?: number | null
    actualStoneWeight?: number | null
    actualStoneValue?: number | null
    actualOtherCharges?: number | null
    isBilled?: boolean
    createdAt?: Date | string
  }

  export type QcRecordCreateOrConnectWithoutPurchaseOrderInput = {
    where: QcRecordWhereUniqueInput
    create: XOR<QcRecordCreateWithoutPurchaseOrderInput, QcRecordUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type MtoOrderUpsertWithoutPurchaseOrderInput = {
    update: XOR<MtoOrderUpdateWithoutPurchaseOrderInput, MtoOrderUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<MtoOrderCreateWithoutPurchaseOrderInput, MtoOrderUncheckedCreateWithoutPurchaseOrderInput>
    where?: MtoOrderWhereInput
  }

  export type MtoOrderUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: MtoOrderWhereInput
    data: XOR<MtoOrderUpdateWithoutPurchaseOrderInput, MtoOrderUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type MtoOrderUpdateWithoutPurchaseOrderInput = {
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoQuery?: MtoQueryUpdateOneRequiredWithoutOrderNestedInput
    invoice?: InvoiceUpdateOneWithoutMtoOrderNestedInput
  }

  export type MtoOrderUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUncheckedUpdateOneWithoutMtoOrderNestedInput
  }

  export type QcRecordUpsertWithoutPurchaseOrderInput = {
    update: XOR<QcRecordUpdateWithoutPurchaseOrderInput, QcRecordUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<QcRecordCreateWithoutPurchaseOrderInput, QcRecordUncheckedCreateWithoutPurchaseOrderInput>
    where?: QcRecordWhereInput
  }

  export type QcRecordUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: QcRecordWhereInput
    data: XOR<QcRecordUpdateWithoutPurchaseOrderInput, QcRecordUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type QcRecordUpdateWithoutPurchaseOrderInput = {
    status?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actualGoldWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualMakingCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneValue?: NullableFloatFieldUpdateOperationsInput | number | null
    actualOtherCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    isBilled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcRecordUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actualGoldWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualMakingCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    actualStoneValue?: NullableFloatFieldUpdateOperationsInput | number | null
    actualOtherCharges?: NullableFloatFieldUpdateOperationsInput | number | null
    isBilled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateWithoutQcRecordInput = {
    vendorName: string
    lockedGoldPrice: number
    deliveryTimeline: string
    status: string
    createdAt?: Date | string
    mtoOrder: MtoOrderCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutQcRecordInput = {
    id?: number
    mtoOrderId: number
    vendorName: string
    lockedGoldPrice: number
    deliveryTimeline: string
    status: string
    createdAt?: Date | string
  }

  export type PurchaseOrderCreateOrConnectWithoutQcRecordInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutQcRecordInput, PurchaseOrderUncheckedCreateWithoutQcRecordInput>
  }

  export type PurchaseOrderUpsertWithoutQcRecordInput = {
    update: XOR<PurchaseOrderUpdateWithoutQcRecordInput, PurchaseOrderUncheckedUpdateWithoutQcRecordInput>
    create: XOR<PurchaseOrderCreateWithoutQcRecordInput, PurchaseOrderUncheckedCreateWithoutQcRecordInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutQcRecordInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutQcRecordInput, PurchaseOrderUncheckedUpdateWithoutQcRecordInput>
  }

  export type PurchaseOrderUpdateWithoutQcRecordInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    lockedGoldPrice?: FloatFieldUpdateOperationsInput | number
    deliveryTimeline?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoOrder?: MtoOrderUpdateOneRequiredWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutQcRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoOrderId?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    lockedGoldPrice?: FloatFieldUpdateOperationsInput | number
    deliveryTimeline?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MtoOrderCreateWithoutInvoiceInput = {
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
    mtoQuery: MtoQueryCreateNestedOneWithoutOrderInput
    purchaseOrder?: PurchaseOrderCreateNestedOneWithoutMtoOrderInput
  }

  export type MtoOrderUncheckedCreateWithoutInvoiceInput = {
    id?: number
    mtoQueryId: string
    posRefId?: string | null
    orderRefId?: string | null
    advanceAmount?: number
    remainingAmount?: number
    cadDesigns?: string | null
    status?: string
    createdAt?: Date | string
    purchaseOrder?: PurchaseOrderUncheckedCreateNestedOneWithoutMtoOrderInput
  }

  export type MtoOrderCreateOrConnectWithoutInvoiceInput = {
    where: MtoOrderWhereUniqueInput
    create: XOR<MtoOrderCreateWithoutInvoiceInput, MtoOrderUncheckedCreateWithoutInvoiceInput>
  }

  export type MtoOrderUpsertWithoutInvoiceInput = {
    update: XOR<MtoOrderUpdateWithoutInvoiceInput, MtoOrderUncheckedUpdateWithoutInvoiceInput>
    create: XOR<MtoOrderCreateWithoutInvoiceInput, MtoOrderUncheckedCreateWithoutInvoiceInput>
    where?: MtoOrderWhereInput
  }

  export type MtoOrderUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: MtoOrderWhereInput
    data: XOR<MtoOrderUpdateWithoutInvoiceInput, MtoOrderUncheckedUpdateWithoutInvoiceInput>
  }

  export type MtoOrderUpdateWithoutInvoiceInput = {
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mtoQuery?: MtoQueryUpdateOneRequiredWithoutOrderNestedInput
    purchaseOrder?: PurchaseOrderUpdateOneWithoutMtoOrderNestedInput
  }

  export type MtoOrderUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    mtoQueryId?: StringFieldUpdateOperationsInput | string
    posRefId?: NullableStringFieldUpdateOperationsInput | string | null
    orderRefId?: NullableStringFieldUpdateOperationsInput | string | null
    advanceAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    cadDesigns?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseOrder?: PurchaseOrderUncheckedUpdateOneWithoutMtoOrderNestedInput
  }

  export type MtoQueryCreateManyStaffInput = {
    id?: string
    queryNo?: number
    customerId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MtoQueryUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMtosNestedInput
    vendorEstimations?: VendorEstimationUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorEstimations?: VendorEstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUncheckedUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUncheckedUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MtoQueryCreateManyCustomerInput = {
    id?: string
    queryNo?: number
    staffId: number
    leadType: string
    mtoType: string
    category: string
    metalType: string
    isStudded: boolean
    diamondCaratage?: string | null
    weightRange: string
    goldKaratage?: string | null
    metalColor?: string | null
    goldWeight?: string | null
    size?: string | null
    notes?: string | null
    status: string
    referenceImages?: string | null
    catalogueSku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MtoQueryUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: UserUpdateOneRequiredWithoutMtosNestedInput
    vendorEstimations?: VendorEstimationUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorEstimations?: VendorEstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    estimations?: EstimationUncheckedUpdateManyWithoutMtoQueryNestedInput
    pricing?: PromisedPricingUncheckedUpdateOneWithoutMtoQueryNestedInput
    order?: MtoOrderUncheckedUpdateOneWithoutMtoQueryNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutMtoQueryNestedInput
  }

  export type MtoQueryUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryNo?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    leadType?: StringFieldUpdateOperationsInput | string
    mtoType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    metalType?: StringFieldUpdateOperationsInput | string
    isStudded?: BoolFieldUpdateOperationsInput | boolean
    diamondCaratage?: NullableStringFieldUpdateOperationsInput | string | null
    weightRange?: StringFieldUpdateOperationsInput | string
    goldKaratage?: NullableStringFieldUpdateOperationsInput | string | null
    metalColor?: NullableStringFieldUpdateOperationsInput | string | null
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    referenceImages?: NullableStringFieldUpdateOperationsInput | string | null
    catalogueSku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorEstimationCreateManyMtoQueryInput = {
    id?: number
    vendorName: string
    goldWeight?: string | null
    diamondWeight?: string | null
    remarks?: string | null
    images?: string | null
    isAccepted?: boolean
    createdAt?: Date | string
  }

  export type EstimationCreateManyMtoQueryInput = {
    id?: number
    version: number
    goldWeight: string
    goldRate: number
    diamondWeight?: number | null
    diamondRate?: number | null
    makingPercent?: number
    discountPercent?: number
    otherStones?: number | null
    gstAmount?: number
    discountAmount?: number
    totalAmount?: number
    finalEstimatedPrice: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyMtoQueryInput = {
    id?: number
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type VendorEstimationUpdateWithoutMtoQueryInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    diamondWeight?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorEstimationUncheckedUpdateWithoutMtoQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    diamondWeight?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorEstimationUncheckedUpdateManyWithoutMtoQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    goldWeight?: NullableStringFieldUpdateOperationsInput | string | null
    diamondWeight?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimationUpdateWithoutMtoQueryInput = {
    version?: IntFieldUpdateOperationsInput | number
    goldWeight?: StringFieldUpdateOperationsInput | string
    goldRate?: FloatFieldUpdateOperationsInput | number
    diamondWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    diamondRate?: NullableFloatFieldUpdateOperationsInput | number | null
    makingPercent?: FloatFieldUpdateOperationsInput | number
    discountPercent?: FloatFieldUpdateOperationsInput | number
    otherStones?: NullableFloatFieldUpdateOperationsInput | number | null
    gstAmount?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    finalEstimatedPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimationUncheckedUpdateWithoutMtoQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    goldWeight?: StringFieldUpdateOperationsInput | string
    goldRate?: FloatFieldUpdateOperationsInput | number
    diamondWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    diamondRate?: NullableFloatFieldUpdateOperationsInput | number | null
    makingPercent?: FloatFieldUpdateOperationsInput | number
    discountPercent?: FloatFieldUpdateOperationsInput | number
    otherStones?: NullableFloatFieldUpdateOperationsInput | number | null
    gstAmount?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    finalEstimatedPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimationUncheckedUpdateManyWithoutMtoQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    goldWeight?: StringFieldUpdateOperationsInput | string
    goldRate?: FloatFieldUpdateOperationsInput | number
    diamondWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    diamondRate?: NullableFloatFieldUpdateOperationsInput | number | null
    makingPercent?: FloatFieldUpdateOperationsInput | number
    discountPercent?: FloatFieldUpdateOperationsInput | number
    otherStones?: NullableFloatFieldUpdateOperationsInput | number | null
    gstAmount?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    finalEstimatedPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutMtoQueryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutMtoQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutMtoQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}