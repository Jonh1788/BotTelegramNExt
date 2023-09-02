
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Telegram
 * 
 */
export type Telegram = $Result.DefaultSelection<Prisma.$TelegramPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Telegrams
 * const telegrams = await prisma.telegram.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Telegrams
   * const telegrams = await prisma.telegram.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.telegram`: Exposes CRUD operations for the **Telegram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telegrams
    * const telegrams = await prisma.telegram.findMany()
    * ```
    */
  get telegram(): Prisma.TelegramDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Telegram: 'Telegram'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'telegram'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Telegram: {
        payload: Prisma.$TelegramPayload<ExtArgs>
        fields: Prisma.TelegramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload>
          }
          findFirst: {
            args: Prisma.TelegramFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload>
          }
          findMany: {
            args: Prisma.TelegramFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload>[]
          }
          create: {
            args: Prisma.TelegramCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload>
          }
          delete: {
            args: Prisma.TelegramDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload>
          }
          update: {
            args: Prisma.TelegramUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload>
          }
          deleteMany: {
            args: Prisma.TelegramDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TelegramUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TelegramPayload>
          }
          aggregate: {
            args: Prisma.TelegramAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTelegram>
          }
          groupBy: {
            args: Prisma.TelegramGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TelegramGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramCountArgs<ExtArgs>,
            result: $Utils.Optional<TelegramCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Telegram
   */

  export type AggregateTelegram = {
    _count: TelegramCountAggregateOutputType | null
    _avg: TelegramAvgAggregateOutputType | null
    _sum: TelegramSumAggregateOutputType | null
    _min: TelegramMinAggregateOutputType | null
    _max: TelegramMaxAggregateOutputType | null
  }

  export type TelegramAvgAggregateOutputType = {
    id: number | null
  }

  export type TelegramSumAggregateOutputType = {
    id: number | null
  }

  export type TelegramMinAggregateOutputType = {
    id: number | null
    text: string | null
    fileUrl: string | null
    buttonText: string | null
    buttonLink: string | null
    type: string | null
  }

  export type TelegramMaxAggregateOutputType = {
    id: number | null
    text: string | null
    fileUrl: string | null
    buttonText: string | null
    buttonLink: string | null
    type: string | null
  }

  export type TelegramCountAggregateOutputType = {
    id: number
    text: number
    fileUrl: number
    buttonText: number
    buttonLink: number
    type: number
    _all: number
  }


  export type TelegramAvgAggregateInputType = {
    id?: true
  }

  export type TelegramSumAggregateInputType = {
    id?: true
  }

  export type TelegramMinAggregateInputType = {
    id?: true
    text?: true
    fileUrl?: true
    buttonText?: true
    buttonLink?: true
    type?: true
  }

  export type TelegramMaxAggregateInputType = {
    id?: true
    text?: true
    fileUrl?: true
    buttonText?: true
    buttonLink?: true
    type?: true
  }

  export type TelegramCountAggregateInputType = {
    id?: true
    text?: true
    fileUrl?: true
    buttonText?: true
    buttonLink?: true
    type?: true
    _all?: true
  }

  export type TelegramAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telegram to aggregate.
     */
    where?: TelegramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telegrams to fetch.
     */
    orderBy?: TelegramOrderByWithRelationInput | TelegramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telegrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telegrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Telegrams
    **/
    _count?: true | TelegramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelegramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelegramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramMaxAggregateInputType
  }

  export type GetTelegramAggregateType<T extends TelegramAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegram[P]>
      : GetScalarType<T[P], AggregateTelegram[P]>
  }




  export type TelegramGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TelegramWhereInput
    orderBy?: TelegramOrderByWithAggregationInput | TelegramOrderByWithAggregationInput[]
    by: TelegramScalarFieldEnum[] | TelegramScalarFieldEnum
    having?: TelegramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramCountAggregateInputType | true
    _avg?: TelegramAvgAggregateInputType
    _sum?: TelegramSumAggregateInputType
    _min?: TelegramMinAggregateInputType
    _max?: TelegramMaxAggregateInputType
  }

  export type TelegramGroupByOutputType = {
    id: number
    text: string | null
    fileUrl: string | null
    buttonText: string | null
    buttonLink: string | null
    type: string | null
    _count: TelegramCountAggregateOutputType | null
    _avg: TelegramAvgAggregateOutputType | null
    _sum: TelegramSumAggregateOutputType | null
    _min: TelegramMinAggregateOutputType | null
    _max: TelegramMaxAggregateOutputType | null
  }

  type GetTelegramGroupByPayload<T extends TelegramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramGroupByOutputType[P]>
        }
      >
    >


  export type TelegramSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    fileUrl?: boolean
    buttonText?: boolean
    buttonLink?: boolean
    type?: boolean
  }, ExtArgs["result"]["telegram"]>

  export type TelegramSelectScalar = {
    id?: boolean
    text?: boolean
    fileUrl?: boolean
    buttonText?: boolean
    buttonLink?: boolean
    type?: boolean
  }


  export type $TelegramPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Telegram"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      text: string | null
      fileUrl: string | null
      buttonText: string | null
      buttonLink: string | null
      type: string | null
    }, ExtArgs["result"]["telegram"]>
    composites: {}
  }


  type TelegramGetPayload<S extends boolean | null | undefined | TelegramDefaultArgs> = $Result.GetResult<Prisma.$TelegramPayload, S>

  type TelegramCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TelegramFindManyArgs, 'select' | 'include'> & {
      select?: TelegramCountAggregateInputType | true
    }

  export interface TelegramDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Telegram'], meta: { name: 'Telegram' } }
    /**
     * Find zero or one Telegram that matches the filter.
     * @param {TelegramFindUniqueArgs} args - Arguments to find a Telegram
     * @example
     * // Get one Telegram
     * const telegram = await prisma.telegram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TelegramFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramFindUniqueArgs<ExtArgs>>
    ): Prisma__TelegramClient<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Telegram that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TelegramFindUniqueOrThrowArgs} args - Arguments to find a Telegram
     * @example
     * // Get one Telegram
     * const telegram = await prisma.telegram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TelegramFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TelegramClient<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Telegram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramFindFirstArgs} args - Arguments to find a Telegram
     * @example
     * // Get one Telegram
     * const telegram = await prisma.telegram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TelegramFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramFindFirstArgs<ExtArgs>>
    ): Prisma__TelegramClient<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Telegram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramFindFirstOrThrowArgs} args - Arguments to find a Telegram
     * @example
     * // Get one Telegram
     * const telegram = await prisma.telegram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TelegramFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TelegramClient<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Telegrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telegrams
     * const telegrams = await prisma.telegram.findMany()
     * 
     * // Get first 10 Telegrams
     * const telegrams = await prisma.telegram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramWithIdOnly = await prisma.telegram.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TelegramFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Telegram.
     * @param {TelegramCreateArgs} args - Arguments to create a Telegram.
     * @example
     * // Create one Telegram
     * const Telegram = await prisma.telegram.create({
     *   data: {
     *     // ... data to create a Telegram
     *   }
     * })
     * 
    **/
    create<T extends TelegramCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramCreateArgs<ExtArgs>>
    ): Prisma__TelegramClient<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Telegram.
     * @param {TelegramDeleteArgs} args - Arguments to delete one Telegram.
     * @example
     * // Delete one Telegram
     * const Telegram = await prisma.telegram.delete({
     *   where: {
     *     // ... filter to delete one Telegram
     *   }
     * })
     * 
    **/
    delete<T extends TelegramDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramDeleteArgs<ExtArgs>>
    ): Prisma__TelegramClient<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Telegram.
     * @param {TelegramUpdateArgs} args - Arguments to update one Telegram.
     * @example
     * // Update one Telegram
     * const telegram = await prisma.telegram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TelegramUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramUpdateArgs<ExtArgs>>
    ): Prisma__TelegramClient<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Telegrams.
     * @param {TelegramDeleteManyArgs} args - Arguments to filter Telegrams to delete.
     * @example
     * // Delete a few Telegrams
     * const { count } = await prisma.telegram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TelegramDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TelegramDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telegrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telegrams
     * const telegram = await prisma.telegram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TelegramUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Telegram.
     * @param {TelegramUpsertArgs} args - Arguments to update or create a Telegram.
     * @example
     * // Update or create a Telegram
     * const telegram = await prisma.telegram.upsert({
     *   create: {
     *     // ... data to create a Telegram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telegram we want to update
     *   }
     * })
    **/
    upsert<T extends TelegramUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TelegramUpsertArgs<ExtArgs>>
    ): Prisma__TelegramClient<$Result.GetResult<Prisma.$TelegramPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Telegrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramCountArgs} args - Arguments to filter Telegrams to count.
     * @example
     * // Count the number of Telegrams
     * const count = await prisma.telegram.count({
     *   where: {
     *     // ... the filter for the Telegrams we want to count
     *   }
     * })
    **/
    count<T extends TelegramCountArgs>(
      args?: Subset<T, TelegramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telegram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelegramAggregateArgs>(args: Subset<T, TelegramAggregateArgs>): Prisma.PrismaPromise<GetTelegramAggregateType<T>>

    /**
     * Group by Telegram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramGroupByArgs} args - Group by arguments.
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
      T extends TelegramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramGroupByArgs['orderBy'] }
        : { orderBy?: TelegramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelegramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Telegram model
   */
  readonly fields: TelegramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Telegram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Telegram model
   */ 
  interface TelegramFieldRefs {
    readonly id: FieldRef<"Telegram", 'Int'>
    readonly text: FieldRef<"Telegram", 'String'>
    readonly fileUrl: FieldRef<"Telegram", 'String'>
    readonly buttonText: FieldRef<"Telegram", 'String'>
    readonly buttonLink: FieldRef<"Telegram", 'String'>
    readonly type: FieldRef<"Telegram", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Telegram findUnique
   */
  export type TelegramFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * Filter, which Telegram to fetch.
     */
    where: TelegramWhereUniqueInput
  }


  /**
   * Telegram findUniqueOrThrow
   */
  export type TelegramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * Filter, which Telegram to fetch.
     */
    where: TelegramWhereUniqueInput
  }


  /**
   * Telegram findFirst
   */
  export type TelegramFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * Filter, which Telegram to fetch.
     */
    where?: TelegramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telegrams to fetch.
     */
    orderBy?: TelegramOrderByWithRelationInput | TelegramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telegrams.
     */
    cursor?: TelegramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telegrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telegrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telegrams.
     */
    distinct?: TelegramScalarFieldEnum | TelegramScalarFieldEnum[]
  }


  /**
   * Telegram findFirstOrThrow
   */
  export type TelegramFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * Filter, which Telegram to fetch.
     */
    where?: TelegramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telegrams to fetch.
     */
    orderBy?: TelegramOrderByWithRelationInput | TelegramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telegrams.
     */
    cursor?: TelegramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telegrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telegrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telegrams.
     */
    distinct?: TelegramScalarFieldEnum | TelegramScalarFieldEnum[]
  }


  /**
   * Telegram findMany
   */
  export type TelegramFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * Filter, which Telegrams to fetch.
     */
    where?: TelegramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telegrams to fetch.
     */
    orderBy?: TelegramOrderByWithRelationInput | TelegramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Telegrams.
     */
    cursor?: TelegramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telegrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telegrams.
     */
    skip?: number
    distinct?: TelegramScalarFieldEnum | TelegramScalarFieldEnum[]
  }


  /**
   * Telegram create
   */
  export type TelegramCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * The data needed to create a Telegram.
     */
    data?: XOR<TelegramCreateInput, TelegramUncheckedCreateInput>
  }


  /**
   * Telegram update
   */
  export type TelegramUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * The data needed to update a Telegram.
     */
    data: XOR<TelegramUpdateInput, TelegramUncheckedUpdateInput>
    /**
     * Choose, which Telegram to update.
     */
    where: TelegramWhereUniqueInput
  }


  /**
   * Telegram updateMany
   */
  export type TelegramUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Telegrams.
     */
    data: XOR<TelegramUpdateManyMutationInput, TelegramUncheckedUpdateManyInput>
    /**
     * Filter which Telegrams to update
     */
    where?: TelegramWhereInput
  }


  /**
   * Telegram upsert
   */
  export type TelegramUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * The filter to search for the Telegram to update in case it exists.
     */
    where: TelegramWhereUniqueInput
    /**
     * In case the Telegram found by the `where` argument doesn't exist, create a new Telegram with this data.
     */
    create: XOR<TelegramCreateInput, TelegramUncheckedCreateInput>
    /**
     * In case the Telegram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramUpdateInput, TelegramUncheckedUpdateInput>
  }


  /**
   * Telegram delete
   */
  export type TelegramDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
    /**
     * Filter which Telegram to delete.
     */
    where: TelegramWhereUniqueInput
  }


  /**
   * Telegram deleteMany
   */
  export type TelegramDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telegrams to delete
     */
    where?: TelegramWhereInput
  }


  /**
   * Telegram without action
   */
  export type TelegramDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telegram
     */
    select?: TelegramSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TelegramScalarFieldEnum: {
    id: 'id',
    text: 'text',
    fileUrl: 'fileUrl',
    buttonText: 'buttonText',
    buttonLink: 'buttonLink',
    type: 'type'
  };

  export type TelegramScalarFieldEnum = (typeof TelegramScalarFieldEnum)[keyof typeof TelegramScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TelegramWhereInput = {
    AND?: TelegramWhereInput | TelegramWhereInput[]
    OR?: TelegramWhereInput[]
    NOT?: TelegramWhereInput | TelegramWhereInput[]
    id?: IntFilter<"Telegram"> | number
    text?: StringNullableFilter<"Telegram"> | string | null
    fileUrl?: StringNullableFilter<"Telegram"> | string | null
    buttonText?: StringNullableFilter<"Telegram"> | string | null
    buttonLink?: StringNullableFilter<"Telegram"> | string | null
    type?: StringNullableFilter<"Telegram"> | string | null
  }

  export type TelegramOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    buttonText?: SortOrderInput | SortOrder
    buttonLink?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
  }

  export type TelegramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TelegramWhereInput | TelegramWhereInput[]
    OR?: TelegramWhereInput[]
    NOT?: TelegramWhereInput | TelegramWhereInput[]
    text?: StringNullableFilter<"Telegram"> | string | null
    fileUrl?: StringNullableFilter<"Telegram"> | string | null
    buttonText?: StringNullableFilter<"Telegram"> | string | null
    buttonLink?: StringNullableFilter<"Telegram"> | string | null
    type?: StringNullableFilter<"Telegram"> | string | null
  }, "id">

  export type TelegramOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    buttonText?: SortOrderInput | SortOrder
    buttonLink?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: TelegramCountOrderByAggregateInput
    _avg?: TelegramAvgOrderByAggregateInput
    _max?: TelegramMaxOrderByAggregateInput
    _min?: TelegramMinOrderByAggregateInput
    _sum?: TelegramSumOrderByAggregateInput
  }

  export type TelegramScalarWhereWithAggregatesInput = {
    AND?: TelegramScalarWhereWithAggregatesInput | TelegramScalarWhereWithAggregatesInput[]
    OR?: TelegramScalarWhereWithAggregatesInput[]
    NOT?: TelegramScalarWhereWithAggregatesInput | TelegramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Telegram"> | number
    text?: StringNullableWithAggregatesFilter<"Telegram"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Telegram"> | string | null
    buttonText?: StringNullableWithAggregatesFilter<"Telegram"> | string | null
    buttonLink?: StringNullableWithAggregatesFilter<"Telegram"> | string | null
    type?: StringNullableWithAggregatesFilter<"Telegram"> | string | null
  }

  export type TelegramCreateInput = {
    text?: string | null
    fileUrl?: string | null
    buttonText?: string | null
    buttonLink?: string | null
    type?: string | null
  }

  export type TelegramUncheckedCreateInput = {
    id?: number
    text?: string | null
    fileUrl?: string | null
    buttonText?: string | null
    buttonLink?: string | null
    type?: string | null
  }

  export type TelegramUpdateInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    buttonLink?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TelegramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    buttonLink?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TelegramUpdateManyMutationInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    buttonLink?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TelegramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    buttonLink?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TelegramCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fileUrl?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    type?: SortOrder
  }

  export type TelegramAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TelegramMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fileUrl?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    type?: SortOrder
  }

  export type TelegramMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fileUrl?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    type?: SortOrder
  }

  export type TelegramSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TelegramDefaultArgs instead
     */
    export type TelegramArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TelegramDefaultArgs<ExtArgs>

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