
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
 * Model ColorScheme
 * 
 */
export type ColorScheme = $Result.DefaultSelection<Prisma.$ColorSchemePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ProjectData
 * 
 */
export type ProjectData = $Result.DefaultSelection<Prisma.$ProjectDataPayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model PublishedSite
 * 
 */
export type PublishedSite = $Result.DefaultSelection<Prisma.$PublishedSitePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectData`: Exposes CRUD operations for the **ProjectData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectData
    * const projectData = await prisma.projectData.findMany()
    * ```
    */
  get projectData(): Prisma.ProjectDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publishedSite`: Exposes CRUD operations for the **PublishedSite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublishedSites
    * const publishedSites = await prisma.publishedSite.findMany()
    * ```
    */
  get publishedSite(): Prisma.PublishedSiteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Project: 'Project',
    Chat: 'Chat',
    ProjectData: 'ProjectData',
    Block: 'Block',
    PublishedSite: 'PublishedSite'
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
      modelProps: "project" | "chat" | "projectData" | "block" | "publishedSite"
      txIsolationLevel: never
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProjectFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProjectAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ProjectData: {
        payload: Prisma.$ProjectDataPayload<ExtArgs>
        fields: Prisma.ProjectDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload>
          }
          findFirst: {
            args: Prisma.ProjectDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload>
          }
          findMany: {
            args: Prisma.ProjectDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload>[]
          }
          create: {
            args: Prisma.ProjectDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload>
          }
          createMany: {
            args: Prisma.ProjectDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload>
          }
          update: {
            args: Prisma.ProjectDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDataPayload>
          }
          aggregate: {
            args: Prisma.ProjectDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectData>
          }
          groupBy: {
            args: Prisma.ProjectDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProjectDataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProjectDataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProjectDataCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDataCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BlockFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BlockAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      PublishedSite: {
        payload: Prisma.$PublishedSitePayload<ExtArgs>
        fields: Prisma.PublishedSiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublishedSiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublishedSiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload>
          }
          findFirst: {
            args: Prisma.PublishedSiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublishedSiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload>
          }
          findMany: {
            args: Prisma.PublishedSiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload>[]
          }
          create: {
            args: Prisma.PublishedSiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload>
          }
          createMany: {
            args: Prisma.PublishedSiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PublishedSiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload>
          }
          update: {
            args: Prisma.PublishedSiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload>
          }
          deleteMany: {
            args: Prisma.PublishedSiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublishedSiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PublishedSiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublishedSitePayload>
          }
          aggregate: {
            args: Prisma.PublishedSiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublishedSite>
          }
          groupBy: {
            args: Prisma.PublishedSiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublishedSiteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PublishedSiteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PublishedSiteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PublishedSiteCountArgs<ExtArgs>
            result: $Utils.Optional<PublishedSiteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    }
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
    project?: ProjectOmit
    chat?: ChatOmit
    projectData?: ProjectDataOmit
    block?: BlockOmit
    publishedSite?: PublishedSiteOmit
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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    chats: number
    projectData: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | ProjectCountOutputTypeCountChatsArgs
    projectData?: boolean | ProjectCountOutputTypeCountProjectDataArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDataWhereInput
  }


  /**
   * Count Type ProjectDataCountOutputType
   */

  export type ProjectDataCountOutputType = {
    blocks: number
  }

  export type ProjectDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | ProjectDataCountOutputTypeCountBlocksArgs
  }

  // Custom InputTypes
  /**
   * ProjectDataCountOutputType without action
   */
  export type ProjectDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDataCountOutputType
     */
    select?: ProjectDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectDataCountOutputType without action
   */
  export type ProjectDataCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ColorScheme
   */





  export type ColorSchemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    primaryColor?: boolean
    secondaryColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    neutralColor?: boolean
    accentColor?: boolean
  }, ExtArgs["result"]["colorScheme"]>



  export type ColorSchemeSelectScalar = {
    primaryColor?: boolean
    secondaryColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    neutralColor?: boolean
    accentColor?: boolean
  }

  export type ColorSchemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"primaryColor" | "secondaryColor" | "backgroundColor" | "textColor" | "neutralColor" | "accentColor", ExtArgs["result"]["colorScheme"]>

  export type $ColorSchemePayload = {
    name: "ColorScheme"
    objects: {}
    scalars: {
      primaryColor: string
      secondaryColor: string
      backgroundColor: string
      textColor: string
      neutralColor: string
      accentColor: string
    }
    composites: {}
  }

  type ColorSchemeGetPayload<S extends boolean | null | undefined | ColorSchemeDefaultArgs> = $Result.GetResult<Prisma.$ColorSchemePayload, S>





  /**
   * Fields of the ColorScheme model
   */
  interface ColorSchemeFieldRefs {
    readonly primaryColor: FieldRef<"ColorScheme", 'String'>
    readonly secondaryColor: FieldRef<"ColorScheme", 'String'>
    readonly backgroundColor: FieldRef<"ColorScheme", 'String'>
    readonly textColor: FieldRef<"ColorScheme", 'String'>
    readonly neutralColor: FieldRef<"ColorScheme", 'String'>
    readonly accentColor: FieldRef<"ColorScheme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ColorScheme without action
   */
  export type ColorSchemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorScheme
     */
    select?: ColorSchemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorScheme
     */
    omit?: ColorSchemeOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    prompt: string | null
    language: string | null
    template: string | null
    selectedProjectDataId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    prompt: string | null
    language: string | null
    template: string | null
    selectedProjectDataId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    prompt: number
    language: number
    template: number
    selectedProjectDataId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    prompt?: true
    language?: true
    template?: true
    selectedProjectDataId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    prompt?: true
    language?: true
    template?: true
    selectedProjectDataId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    prompt?: true
    language?: true
    template?: true
    selectedProjectDataId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    name: string
    prompt: string | null
    language: string | null
    template: string | null
    selectedProjectDataId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    prompt?: boolean
    language?: boolean
    template?: boolean
    colors?: boolean | ColorSchemeDefaultArgs<ExtArgs>
    selectedProjectDataId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chats?: boolean | Project$chatsArgs<ExtArgs>
    projectData?: boolean | Project$projectDataArgs<ExtArgs>
    selectedProjectData?: boolean | Project$selectedProjectDataArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    prompt?: boolean
    language?: boolean
    template?: boolean
    selectedProjectDataId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "prompt" | "language" | "template" | "colors" | "selectedProjectDataId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | Project$chatsArgs<ExtArgs>
    projectData?: boolean | Project$projectDataArgs<ExtArgs>
    selectedProjectData?: boolean | Project$selectedProjectDataArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      chats: Prisma.$ChatPayload<ExtArgs>[]
      projectData: Prisma.$ProjectDataPayload<ExtArgs>[]
      selectedProjectData: Prisma.$ProjectDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      prompt: string | null
      language: string | null
      template: string | null
      selectedProjectDataId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {
      colors: Prisma.$ColorSchemePayload | null
    }
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * @param {ProjectFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const project = await prisma.project.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProjectFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Project.
     * @param {ProjectAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const project = await prisma.project.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProjectAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends Project$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Project$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectData<T extends Project$projectDataArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    selectedProjectData<T extends Project$selectedProjectDataArgs<ExtArgs> = {}>(args?: Subset<T, Project$selectedProjectDataArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly prompt: FieldRef<"Project", 'String'>
    readonly language: FieldRef<"Project", 'String'>
    readonly template: FieldRef<"Project", 'String'>
    readonly selectedProjectDataId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project findRaw
   */
  export type ProjectFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Project aggregateRaw
   */
  export type ProjectAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Project.chats
   */
  export type Project$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Project.projectData
   */
  export type Project$projectDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    where?: ProjectDataWhereInput
    orderBy?: ProjectDataOrderByWithRelationInput | ProjectDataOrderByWithRelationInput[]
    cursor?: ProjectDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDataScalarFieldEnum | ProjectDataScalarFieldEnum[]
  }

  /**
   * Project.selectedProjectData
   */
  export type Project$selectedProjectDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    where?: ProjectDataWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    message: string | null
    isAi: boolean | null
    aiModel: string | null
    createdAt: Date | null
    isRefinedPrompt: boolean | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    message: string | null
    isAi: boolean | null
    aiModel: string | null
    createdAt: Date | null
    isRefinedPrompt: boolean | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    message: number
    isAi: number
    aiModel: number
    createdAt: number
    isRefinedPrompt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    message?: true
    isAi?: true
    aiModel?: true
    createdAt?: true
    isRefinedPrompt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    message?: true
    isAi?: true
    aiModel?: true
    createdAt?: true
    isRefinedPrompt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    message?: true
    isAi?: true
    aiModel?: true
    createdAt?: true
    isRefinedPrompt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    userId: string | null
    projectId: string | null
    message: string
    isAi: boolean
    aiModel: string
    createdAt: Date
    isRefinedPrompt: boolean
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    message?: boolean
    isAi?: boolean
    aiModel?: boolean
    createdAt?: boolean
    isRefinedPrompt?: boolean
    project?: boolean | Chat$projectArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>



  export type ChatSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
    message?: boolean
    isAi?: boolean
    aiModel?: boolean
    createdAt?: boolean
    isRefinedPrompt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "projectId" | "message" | "isAi" | "aiModel" | "createdAt" | "isRefinedPrompt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Chat$projectArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      projectId: string | null
      message: string
      isAi: boolean
      aiModel: string
      createdAt: Date
      isRefinedPrompt: boolean
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * @param {ChatFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chat = await prisma.chat.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ChatFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Chat.
     * @param {ChatAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chat = await prisma.chat.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ChatAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Chat$projectArgs<ExtArgs> = {}>(args?: Subset<T, Chat$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly projectId: FieldRef<"Chat", 'String'>
    readonly message: FieldRef<"Chat", 'String'>
    readonly isAi: FieldRef<"Chat", 'Boolean'>
    readonly aiModel: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly isRefinedPrompt: FieldRef<"Chat", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat findRaw
   */
  export type ChatFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Chat aggregateRaw
   */
  export type ChatAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Chat.project
   */
  export type Chat$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ProjectData
   */

  export type AggregateProjectData = {
    _count: ProjectDataCountAggregateOutputType | null
    _avg: ProjectDataAvgAggregateOutputType | null
    _sum: ProjectDataSumAggregateOutputType | null
    _min: ProjectDataMinAggregateOutputType | null
    _max: ProjectDataMaxAggregateOutputType | null
  }

  export type ProjectDataAvgAggregateOutputType = {
    version: number | null
  }

  export type ProjectDataSumAggregateOutputType = {
    version: number | null
  }

  export type ProjectDataMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDataMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDataCountAggregateOutputType = {
    id: number
    projectId: number
    data: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectDataAvgAggregateInputType = {
    version?: true
  }

  export type ProjectDataSumAggregateInputType = {
    version?: true
  }

  export type ProjectDataMinAggregateInputType = {
    id?: true
    projectId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDataMaxAggregateInputType = {
    id?: true
    projectId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDataCountAggregateInputType = {
    id?: true
    projectId?: true
    data?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectData to aggregate.
     */
    where?: ProjectDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectData to fetch.
     */
    orderBy?: ProjectDataOrderByWithRelationInput | ProjectDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectData
    **/
    _count?: true | ProjectDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDataMaxAggregateInputType
  }

  export type GetProjectDataAggregateType<T extends ProjectDataAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectData[P]>
      : GetScalarType<T[P], AggregateProjectData[P]>
  }




  export type ProjectDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDataWhereInput
    orderBy?: ProjectDataOrderByWithAggregationInput | ProjectDataOrderByWithAggregationInput[]
    by: ProjectDataScalarFieldEnum[] | ProjectDataScalarFieldEnum
    having?: ProjectDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDataCountAggregateInputType | true
    _avg?: ProjectDataAvgAggregateInputType
    _sum?: ProjectDataSumAggregateInputType
    _min?: ProjectDataMinAggregateInputType
    _max?: ProjectDataMaxAggregateInputType
  }

  export type ProjectDataGroupByOutputType = {
    id: string
    projectId: string
    data: JsonValue
    version: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectDataCountAggregateOutputType | null
    _avg: ProjectDataAvgAggregateOutputType | null
    _sum: ProjectDataSumAggregateOutputType | null
    _min: ProjectDataMinAggregateOutputType | null
    _max: ProjectDataMaxAggregateOutputType | null
  }

  type GetProjectDataGroupByPayload<T extends ProjectDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDataGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDataGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    data?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    selectedBy?: boolean | ProjectData$selectedByArgs<ExtArgs>
    blocks?: boolean | ProjectData$blocksArgs<ExtArgs>
    _count?: boolean | ProjectDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectData"]>



  export type ProjectDataSelectScalar = {
    id?: boolean
    projectId?: boolean
    data?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "data" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["projectData"]>
  export type ProjectDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    selectedBy?: boolean | ProjectData$selectedByArgs<ExtArgs>
    blocks?: boolean | ProjectData$blocksArgs<ExtArgs>
    _count?: boolean | ProjectDataCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectData"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      selectedBy: Prisma.$ProjectPayload<ExtArgs> | null
      blocks: Prisma.$BlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      data: Prisma.JsonValue
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectData"]>
    composites: {}
  }

  type ProjectDataGetPayload<S extends boolean | null | undefined | ProjectDataDefaultArgs> = $Result.GetResult<Prisma.$ProjectDataPayload, S>

  type ProjectDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectDataCountAggregateInputType | true
    }

  export interface ProjectDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectData'], meta: { name: 'ProjectData' } }
    /**
     * Find zero or one ProjectData that matches the filter.
     * @param {ProjectDataFindUniqueArgs} args - Arguments to find a ProjectData
     * @example
     * // Get one ProjectData
     * const projectData = await prisma.projectData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDataFindUniqueArgs>(args: SelectSubset<T, ProjectDataFindUniqueArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectDataFindUniqueOrThrowArgs} args - Arguments to find a ProjectData
     * @example
     * // Get one ProjectData
     * const projectData = await prisma.projectData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDataFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDataFindFirstArgs} args - Arguments to find a ProjectData
     * @example
     * // Get one ProjectData
     * const projectData = await prisma.projectData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDataFindFirstArgs>(args?: SelectSubset<T, ProjectDataFindFirstArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDataFindFirstOrThrowArgs} args - Arguments to find a ProjectData
     * @example
     * // Get one ProjectData
     * const projectData = await prisma.projectData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDataFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectData
     * const projectData = await prisma.projectData.findMany()
     * 
     * // Get first 10 ProjectData
     * const projectData = await prisma.projectData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDataWithIdOnly = await prisma.projectData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDataFindManyArgs>(args?: SelectSubset<T, ProjectDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectData.
     * @param {ProjectDataCreateArgs} args - Arguments to create a ProjectData.
     * @example
     * // Create one ProjectData
     * const ProjectData = await prisma.projectData.create({
     *   data: {
     *     // ... data to create a ProjectData
     *   }
     * })
     * 
     */
    create<T extends ProjectDataCreateArgs>(args: SelectSubset<T, ProjectDataCreateArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectData.
     * @param {ProjectDataCreateManyArgs} args - Arguments to create many ProjectData.
     * @example
     * // Create many ProjectData
     * const projectData = await prisma.projectData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDataCreateManyArgs>(args?: SelectSubset<T, ProjectDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectData.
     * @param {ProjectDataDeleteArgs} args - Arguments to delete one ProjectData.
     * @example
     * // Delete one ProjectData
     * const ProjectData = await prisma.projectData.delete({
     *   where: {
     *     // ... filter to delete one ProjectData
     *   }
     * })
     * 
     */
    delete<T extends ProjectDataDeleteArgs>(args: SelectSubset<T, ProjectDataDeleteArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectData.
     * @param {ProjectDataUpdateArgs} args - Arguments to update one ProjectData.
     * @example
     * // Update one ProjectData
     * const projectData = await prisma.projectData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDataUpdateArgs>(args: SelectSubset<T, ProjectDataUpdateArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectData.
     * @param {ProjectDataDeleteManyArgs} args - Arguments to filter ProjectData to delete.
     * @example
     * // Delete a few ProjectData
     * const { count } = await prisma.projectData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDataDeleteManyArgs>(args?: SelectSubset<T, ProjectDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectData
     * const projectData = await prisma.projectData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDataUpdateManyArgs>(args: SelectSubset<T, ProjectDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectData.
     * @param {ProjectDataUpsertArgs} args - Arguments to update or create a ProjectData.
     * @example
     * // Update or create a ProjectData
     * const projectData = await prisma.projectData.upsert({
     *   create: {
     *     // ... data to create a ProjectData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectData we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDataUpsertArgs>(args: SelectSubset<T, ProjectDataUpsertArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectData that matches the filter.
     * @param {ProjectDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const projectData = await prisma.projectData.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProjectDataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProjectData.
     * @param {ProjectDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const projectData = await prisma.projectData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProjectDataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProjectData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDataCountArgs} args - Arguments to filter ProjectData to count.
     * @example
     * // Count the number of ProjectData
     * const count = await prisma.projectData.count({
     *   where: {
     *     // ... the filter for the ProjectData we want to count
     *   }
     * })
    **/
    count<T extends ProjectDataCountArgs>(
      args?: Subset<T, ProjectDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectDataAggregateArgs>(args: Subset<T, ProjectDataAggregateArgs>): Prisma.PrismaPromise<GetProjectDataAggregateType<T>>

    /**
     * Group by ProjectData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDataGroupByArgs} args - Group by arguments.
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
      T extends ProjectDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDataGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectData model
   */
  readonly fields: ProjectDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selectedBy<T extends ProjectData$selectedByArgs<ExtArgs> = {}>(args?: Subset<T, ProjectData$selectedByArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    blocks<T extends ProjectData$blocksArgs<ExtArgs> = {}>(args?: Subset<T, ProjectData$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProjectData model
   */
  interface ProjectDataFieldRefs {
    readonly id: FieldRef<"ProjectData", 'String'>
    readonly projectId: FieldRef<"ProjectData", 'String'>
    readonly data: FieldRef<"ProjectData", 'Json'>
    readonly version: FieldRef<"ProjectData", 'Int'>
    readonly createdAt: FieldRef<"ProjectData", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectData findUnique
   */
  export type ProjectDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * Filter, which ProjectData to fetch.
     */
    where: ProjectDataWhereUniqueInput
  }

  /**
   * ProjectData findUniqueOrThrow
   */
  export type ProjectDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * Filter, which ProjectData to fetch.
     */
    where: ProjectDataWhereUniqueInput
  }

  /**
   * ProjectData findFirst
   */
  export type ProjectDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * Filter, which ProjectData to fetch.
     */
    where?: ProjectDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectData to fetch.
     */
    orderBy?: ProjectDataOrderByWithRelationInput | ProjectDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectData.
     */
    cursor?: ProjectDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectData.
     */
    distinct?: ProjectDataScalarFieldEnum | ProjectDataScalarFieldEnum[]
  }

  /**
   * ProjectData findFirstOrThrow
   */
  export type ProjectDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * Filter, which ProjectData to fetch.
     */
    where?: ProjectDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectData to fetch.
     */
    orderBy?: ProjectDataOrderByWithRelationInput | ProjectDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectData.
     */
    cursor?: ProjectDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectData.
     */
    distinct?: ProjectDataScalarFieldEnum | ProjectDataScalarFieldEnum[]
  }

  /**
   * ProjectData findMany
   */
  export type ProjectDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * Filter, which ProjectData to fetch.
     */
    where?: ProjectDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectData to fetch.
     */
    orderBy?: ProjectDataOrderByWithRelationInput | ProjectDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectData.
     */
    cursor?: ProjectDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectData.
     */
    skip?: number
    distinct?: ProjectDataScalarFieldEnum | ProjectDataScalarFieldEnum[]
  }

  /**
   * ProjectData create
   */
  export type ProjectDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectData.
     */
    data: XOR<ProjectDataCreateInput, ProjectDataUncheckedCreateInput>
  }

  /**
   * ProjectData createMany
   */
  export type ProjectDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectData.
     */
    data: ProjectDataCreateManyInput | ProjectDataCreateManyInput[]
  }

  /**
   * ProjectData update
   */
  export type ProjectDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectData.
     */
    data: XOR<ProjectDataUpdateInput, ProjectDataUncheckedUpdateInput>
    /**
     * Choose, which ProjectData to update.
     */
    where: ProjectDataWhereUniqueInput
  }

  /**
   * ProjectData updateMany
   */
  export type ProjectDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectData.
     */
    data: XOR<ProjectDataUpdateManyMutationInput, ProjectDataUncheckedUpdateManyInput>
    /**
     * Filter which ProjectData to update
     */
    where?: ProjectDataWhereInput
    /**
     * Limit how many ProjectData to update.
     */
    limit?: number
  }

  /**
   * ProjectData upsert
   */
  export type ProjectDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectData to update in case it exists.
     */
    where: ProjectDataWhereUniqueInput
    /**
     * In case the ProjectData found by the `where` argument doesn't exist, create a new ProjectData with this data.
     */
    create: XOR<ProjectDataCreateInput, ProjectDataUncheckedCreateInput>
    /**
     * In case the ProjectData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDataUpdateInput, ProjectDataUncheckedUpdateInput>
  }

  /**
   * ProjectData delete
   */
  export type ProjectDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
    /**
     * Filter which ProjectData to delete.
     */
    where: ProjectDataWhereUniqueInput
  }

  /**
   * ProjectData deleteMany
   */
  export type ProjectDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectData to delete
     */
    where?: ProjectDataWhereInput
    /**
     * Limit how many ProjectData to delete.
     */
    limit?: number
  }

  /**
   * ProjectData findRaw
   */
  export type ProjectDataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProjectData aggregateRaw
   */
  export type ProjectDataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProjectData.selectedBy
   */
  export type ProjectData$selectedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * ProjectData.blocks
   */
  export type ProjectData$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * ProjectData without action
   */
  export type ProjectDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectData
     */
    select?: ProjectDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectData
     */
    omit?: ProjectDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDataInclude<ExtArgs> | null
  }


  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockMinAggregateOutputType = {
    id: string | null
    projectDataId: string | null
    blockId: string | null
    label: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockMaxAggregateOutputType = {
    id: string | null
    projectDataId: string | null
    blockId: string | null
    label: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    projectDataId: number
    blockId: number
    label: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlockMinAggregateInputType = {
    id?: true
    projectDataId?: true
    blockId?: true
    label?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    projectDataId?: true
    blockId?: true
    label?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    projectDataId?: true
    blockId?: true
    label?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: string
    projectDataId: string
    blockId: string
    label: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: BlockCountAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectDataId?: boolean
    blockId?: boolean
    label?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectData?: boolean | ProjectDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>



  export type BlockSelectScalar = {
    id?: boolean
    projectDataId?: boolean
    blockId?: boolean
    label?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectDataId" | "blockId" | "label" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["block"]>
  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectData?: boolean | ProjectDataDefaultArgs<ExtArgs>
  }

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      projectData: Prisma.$ProjectDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectDataId: string
      blockId: string
      label: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockFindManyArgs>(args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends BlockCreateArgs>(args: SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockCreateManyArgs>(args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends BlockDeleteArgs>(args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockUpdateArgs>(args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockDeleteManyArgs>(args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockUpdateManyArgs>(args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * @param {BlockFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const block = await prisma.block.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BlockFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Block.
     * @param {BlockAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const block = await prisma.block.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BlockAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
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
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectData<T extends ProjectDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDataDefaultArgs<ExtArgs>>): Prisma__ProjectDataClient<$Result.GetResult<Prisma.$ProjectDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'String'>
    readonly projectDataId: FieldRef<"Block", 'String'>
    readonly blockId: FieldRef<"Block", 'String'>
    readonly label: FieldRef<"Block", 'String'>
    readonly content: FieldRef<"Block", 'String'>
    readonly createdAt: FieldRef<"Block", 'DateTime'>
    readonly updatedAt: FieldRef<"Block", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Block findRaw
   */
  export type BlockFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Block aggregateRaw
   */
  export type BlockAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
  }


  /**
   * Model PublishedSite
   */

  export type AggregatePublishedSite = {
    _count: PublishedSiteCountAggregateOutputType | null
    _min: PublishedSiteMinAggregateOutputType | null
    _max: PublishedSiteMaxAggregateOutputType | null
  }

  export type PublishedSiteMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    subdomain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublishedSiteMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    subdomain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublishedSiteCountAggregateOutputType = {
    id: number
    projectId: number
    subdomain: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublishedSiteMinAggregateInputType = {
    id?: true
    projectId?: true
    subdomain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublishedSiteMaxAggregateInputType = {
    id?: true
    projectId?: true
    subdomain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublishedSiteCountAggregateInputType = {
    id?: true
    projectId?: true
    subdomain?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublishedSiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublishedSite to aggregate.
     */
    where?: PublishedSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublishedSites to fetch.
     */
    orderBy?: PublishedSiteOrderByWithRelationInput | PublishedSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublishedSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublishedSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublishedSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublishedSites
    **/
    _count?: true | PublishedSiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublishedSiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublishedSiteMaxAggregateInputType
  }

  export type GetPublishedSiteAggregateType<T extends PublishedSiteAggregateArgs> = {
        [P in keyof T & keyof AggregatePublishedSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublishedSite[P]>
      : GetScalarType<T[P], AggregatePublishedSite[P]>
  }




  export type PublishedSiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublishedSiteWhereInput
    orderBy?: PublishedSiteOrderByWithAggregationInput | PublishedSiteOrderByWithAggregationInput[]
    by: PublishedSiteScalarFieldEnum[] | PublishedSiteScalarFieldEnum
    having?: PublishedSiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublishedSiteCountAggregateInputType | true
    _min?: PublishedSiteMinAggregateInputType
    _max?: PublishedSiteMaxAggregateInputType
  }

  export type PublishedSiteGroupByOutputType = {
    id: string
    projectId: string
    subdomain: string
    createdAt: Date
    updatedAt: Date
    _count: PublishedSiteCountAggregateOutputType | null
    _min: PublishedSiteMinAggregateOutputType | null
    _max: PublishedSiteMaxAggregateOutputType | null
  }

  type GetPublishedSiteGroupByPayload<T extends PublishedSiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublishedSiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublishedSiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublishedSiteGroupByOutputType[P]>
            : GetScalarType<T[P], PublishedSiteGroupByOutputType[P]>
        }
      >
    >


  export type PublishedSiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    subdomain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publishedSite"]>



  export type PublishedSiteSelectScalar = {
    id?: boolean
    projectId?: boolean
    subdomain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublishedSiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "subdomain" | "createdAt" | "updatedAt", ExtArgs["result"]["publishedSite"]>

  export type $PublishedSitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublishedSite"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      subdomain: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publishedSite"]>
    composites: {}
  }

  type PublishedSiteGetPayload<S extends boolean | null | undefined | PublishedSiteDefaultArgs> = $Result.GetResult<Prisma.$PublishedSitePayload, S>

  type PublishedSiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublishedSiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublishedSiteCountAggregateInputType | true
    }

  export interface PublishedSiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublishedSite'], meta: { name: 'PublishedSite' } }
    /**
     * Find zero or one PublishedSite that matches the filter.
     * @param {PublishedSiteFindUniqueArgs} args - Arguments to find a PublishedSite
     * @example
     * // Get one PublishedSite
     * const publishedSite = await prisma.publishedSite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublishedSiteFindUniqueArgs>(args: SelectSubset<T, PublishedSiteFindUniqueArgs<ExtArgs>>): Prisma__PublishedSiteClient<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublishedSite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublishedSiteFindUniqueOrThrowArgs} args - Arguments to find a PublishedSite
     * @example
     * // Get one PublishedSite
     * const publishedSite = await prisma.publishedSite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublishedSiteFindUniqueOrThrowArgs>(args: SelectSubset<T, PublishedSiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublishedSiteClient<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublishedSite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedSiteFindFirstArgs} args - Arguments to find a PublishedSite
     * @example
     * // Get one PublishedSite
     * const publishedSite = await prisma.publishedSite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublishedSiteFindFirstArgs>(args?: SelectSubset<T, PublishedSiteFindFirstArgs<ExtArgs>>): Prisma__PublishedSiteClient<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublishedSite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedSiteFindFirstOrThrowArgs} args - Arguments to find a PublishedSite
     * @example
     * // Get one PublishedSite
     * const publishedSite = await prisma.publishedSite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublishedSiteFindFirstOrThrowArgs>(args?: SelectSubset<T, PublishedSiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublishedSiteClient<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublishedSites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedSiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublishedSites
     * const publishedSites = await prisma.publishedSite.findMany()
     * 
     * // Get first 10 PublishedSites
     * const publishedSites = await prisma.publishedSite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publishedSiteWithIdOnly = await prisma.publishedSite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublishedSiteFindManyArgs>(args?: SelectSubset<T, PublishedSiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublishedSite.
     * @param {PublishedSiteCreateArgs} args - Arguments to create a PublishedSite.
     * @example
     * // Create one PublishedSite
     * const PublishedSite = await prisma.publishedSite.create({
     *   data: {
     *     // ... data to create a PublishedSite
     *   }
     * })
     * 
     */
    create<T extends PublishedSiteCreateArgs>(args: SelectSubset<T, PublishedSiteCreateArgs<ExtArgs>>): Prisma__PublishedSiteClient<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublishedSites.
     * @param {PublishedSiteCreateManyArgs} args - Arguments to create many PublishedSites.
     * @example
     * // Create many PublishedSites
     * const publishedSite = await prisma.publishedSite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublishedSiteCreateManyArgs>(args?: SelectSubset<T, PublishedSiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PublishedSite.
     * @param {PublishedSiteDeleteArgs} args - Arguments to delete one PublishedSite.
     * @example
     * // Delete one PublishedSite
     * const PublishedSite = await prisma.publishedSite.delete({
     *   where: {
     *     // ... filter to delete one PublishedSite
     *   }
     * })
     * 
     */
    delete<T extends PublishedSiteDeleteArgs>(args: SelectSubset<T, PublishedSiteDeleteArgs<ExtArgs>>): Prisma__PublishedSiteClient<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublishedSite.
     * @param {PublishedSiteUpdateArgs} args - Arguments to update one PublishedSite.
     * @example
     * // Update one PublishedSite
     * const publishedSite = await prisma.publishedSite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublishedSiteUpdateArgs>(args: SelectSubset<T, PublishedSiteUpdateArgs<ExtArgs>>): Prisma__PublishedSiteClient<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublishedSites.
     * @param {PublishedSiteDeleteManyArgs} args - Arguments to filter PublishedSites to delete.
     * @example
     * // Delete a few PublishedSites
     * const { count } = await prisma.publishedSite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublishedSiteDeleteManyArgs>(args?: SelectSubset<T, PublishedSiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublishedSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedSiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublishedSites
     * const publishedSite = await prisma.publishedSite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublishedSiteUpdateManyArgs>(args: SelectSubset<T, PublishedSiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PublishedSite.
     * @param {PublishedSiteUpsertArgs} args - Arguments to update or create a PublishedSite.
     * @example
     * // Update or create a PublishedSite
     * const publishedSite = await prisma.publishedSite.upsert({
     *   create: {
     *     // ... data to create a PublishedSite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublishedSite we want to update
     *   }
     * })
     */
    upsert<T extends PublishedSiteUpsertArgs>(args: SelectSubset<T, PublishedSiteUpsertArgs<ExtArgs>>): Prisma__PublishedSiteClient<$Result.GetResult<Prisma.$PublishedSitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublishedSites that matches the filter.
     * @param {PublishedSiteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const publishedSite = await prisma.publishedSite.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PublishedSiteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PublishedSite.
     * @param {PublishedSiteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const publishedSite = await prisma.publishedSite.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PublishedSiteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PublishedSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedSiteCountArgs} args - Arguments to filter PublishedSites to count.
     * @example
     * // Count the number of PublishedSites
     * const count = await prisma.publishedSite.count({
     *   where: {
     *     // ... the filter for the PublishedSites we want to count
     *   }
     * })
    **/
    count<T extends PublishedSiteCountArgs>(
      args?: Subset<T, PublishedSiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublishedSiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublishedSite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedSiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublishedSiteAggregateArgs>(args: Subset<T, PublishedSiteAggregateArgs>): Prisma.PrismaPromise<GetPublishedSiteAggregateType<T>>

    /**
     * Group by PublishedSite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublishedSiteGroupByArgs} args - Group by arguments.
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
      T extends PublishedSiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublishedSiteGroupByArgs['orderBy'] }
        : { orderBy?: PublishedSiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublishedSiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublishedSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublishedSite model
   */
  readonly fields: PublishedSiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublishedSite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublishedSiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PublishedSite model
   */
  interface PublishedSiteFieldRefs {
    readonly id: FieldRef<"PublishedSite", 'String'>
    readonly projectId: FieldRef<"PublishedSite", 'String'>
    readonly subdomain: FieldRef<"PublishedSite", 'String'>
    readonly createdAt: FieldRef<"PublishedSite", 'DateTime'>
    readonly updatedAt: FieldRef<"PublishedSite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublishedSite findUnique
   */
  export type PublishedSiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * Filter, which PublishedSite to fetch.
     */
    where: PublishedSiteWhereUniqueInput
  }

  /**
   * PublishedSite findUniqueOrThrow
   */
  export type PublishedSiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * Filter, which PublishedSite to fetch.
     */
    where: PublishedSiteWhereUniqueInput
  }

  /**
   * PublishedSite findFirst
   */
  export type PublishedSiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * Filter, which PublishedSite to fetch.
     */
    where?: PublishedSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublishedSites to fetch.
     */
    orderBy?: PublishedSiteOrderByWithRelationInput | PublishedSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublishedSites.
     */
    cursor?: PublishedSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublishedSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublishedSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublishedSites.
     */
    distinct?: PublishedSiteScalarFieldEnum | PublishedSiteScalarFieldEnum[]
  }

  /**
   * PublishedSite findFirstOrThrow
   */
  export type PublishedSiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * Filter, which PublishedSite to fetch.
     */
    where?: PublishedSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublishedSites to fetch.
     */
    orderBy?: PublishedSiteOrderByWithRelationInput | PublishedSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublishedSites.
     */
    cursor?: PublishedSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublishedSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublishedSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublishedSites.
     */
    distinct?: PublishedSiteScalarFieldEnum | PublishedSiteScalarFieldEnum[]
  }

  /**
   * PublishedSite findMany
   */
  export type PublishedSiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * Filter, which PublishedSites to fetch.
     */
    where?: PublishedSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublishedSites to fetch.
     */
    orderBy?: PublishedSiteOrderByWithRelationInput | PublishedSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublishedSites.
     */
    cursor?: PublishedSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublishedSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublishedSites.
     */
    skip?: number
    distinct?: PublishedSiteScalarFieldEnum | PublishedSiteScalarFieldEnum[]
  }

  /**
   * PublishedSite create
   */
  export type PublishedSiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * The data needed to create a PublishedSite.
     */
    data: XOR<PublishedSiteCreateInput, PublishedSiteUncheckedCreateInput>
  }

  /**
   * PublishedSite createMany
   */
  export type PublishedSiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublishedSites.
     */
    data: PublishedSiteCreateManyInput | PublishedSiteCreateManyInput[]
  }

  /**
   * PublishedSite update
   */
  export type PublishedSiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * The data needed to update a PublishedSite.
     */
    data: XOR<PublishedSiteUpdateInput, PublishedSiteUncheckedUpdateInput>
    /**
     * Choose, which PublishedSite to update.
     */
    where: PublishedSiteWhereUniqueInput
  }

  /**
   * PublishedSite updateMany
   */
  export type PublishedSiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublishedSites.
     */
    data: XOR<PublishedSiteUpdateManyMutationInput, PublishedSiteUncheckedUpdateManyInput>
    /**
     * Filter which PublishedSites to update
     */
    where?: PublishedSiteWhereInput
    /**
     * Limit how many PublishedSites to update.
     */
    limit?: number
  }

  /**
   * PublishedSite upsert
   */
  export type PublishedSiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * The filter to search for the PublishedSite to update in case it exists.
     */
    where: PublishedSiteWhereUniqueInput
    /**
     * In case the PublishedSite found by the `where` argument doesn't exist, create a new PublishedSite with this data.
     */
    create: XOR<PublishedSiteCreateInput, PublishedSiteUncheckedCreateInput>
    /**
     * In case the PublishedSite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublishedSiteUpdateInput, PublishedSiteUncheckedUpdateInput>
  }

  /**
   * PublishedSite delete
   */
  export type PublishedSiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
    /**
     * Filter which PublishedSite to delete.
     */
    where: PublishedSiteWhereUniqueInput
  }

  /**
   * PublishedSite deleteMany
   */
  export type PublishedSiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublishedSites to delete
     */
    where?: PublishedSiteWhereInput
    /**
     * Limit how many PublishedSites to delete.
     */
    limit?: number
  }

  /**
   * PublishedSite findRaw
   */
  export type PublishedSiteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PublishedSite aggregateRaw
   */
  export type PublishedSiteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PublishedSite without action
   */
  export type PublishedSiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublishedSite
     */
    select?: PublishedSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublishedSite
     */
    omit?: PublishedSiteOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    prompt: 'prompt',
    language: 'language',
    template: 'template',
    selectedProjectDataId: 'selectedProjectDataId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    message: 'message',
    isAi: 'isAi',
    aiModel: 'aiModel',
    createdAt: 'createdAt',
    isRefinedPrompt: 'isRefinedPrompt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ProjectDataScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    data: 'data',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectDataScalarFieldEnum = (typeof ProjectDataScalarFieldEnum)[keyof typeof ProjectDataScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    projectDataId: 'projectDataId',
    blockId: 'blockId',
    label: 'label',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const PublishedSiteScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    subdomain: 'subdomain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublishedSiteScalarFieldEnum = (typeof PublishedSiteScalarFieldEnum)[keyof typeof PublishedSiteScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    prompt?: StringNullableFilter<"Project"> | string | null
    language?: StringNullableFilter<"Project"> | string | null
    template?: StringNullableFilter<"Project"> | string | null
    colors?: XOR<ColorSchemeNullableCompositeFilter, ColorSchemeObjectEqualityInput> | null
    selectedProjectDataId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    chats?: ChatListRelationFilter
    projectData?: ProjectDataListRelationFilter
    selectedProjectData?: XOR<ProjectDataNullableScalarRelationFilter, ProjectDataWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    language?: SortOrder
    template?: SortOrder
    colors?: ColorSchemeOrderByInput
    selectedProjectDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chats?: ChatOrderByRelationAggregateInput
    projectData?: ProjectDataOrderByRelationAggregateInput
    selectedProjectData?: ProjectDataOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    selectedProjectDataId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    prompt?: StringNullableFilter<"Project"> | string | null
    language?: StringNullableFilter<"Project"> | string | null
    template?: StringNullableFilter<"Project"> | string | null
    colors?: XOR<ColorSchemeNullableCompositeFilter, ColorSchemeObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    chats?: ChatListRelationFilter
    projectData?: ProjectDataListRelationFilter
    selectedProjectData?: XOR<ProjectDataNullableScalarRelationFilter, ProjectDataWhereInput> | null
  }, "id" | "selectedProjectDataId">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    language?: SortOrder
    template?: SortOrder
    selectedProjectDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    prompt?: StringNullableWithAggregatesFilter<"Project"> | string | null
    language?: StringNullableWithAggregatesFilter<"Project"> | string | null
    template?: StringNullableWithAggregatesFilter<"Project"> | string | null
    selectedProjectDataId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringNullableFilter<"Chat"> | string | null
    projectId?: StringNullableFilter<"Chat"> | string | null
    message?: StringFilter<"Chat"> | string
    isAi?: BoolFilter<"Chat"> | boolean
    aiModel?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    isRefinedPrompt?: BoolFilter<"Chat"> | boolean
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    message?: SortOrder
    isAi?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    isRefinedPrompt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    userId?: StringNullableFilter<"Chat"> | string | null
    projectId?: StringNullableFilter<"Chat"> | string | null
    message?: StringFilter<"Chat"> | string
    isAi?: BoolFilter<"Chat"> | boolean
    aiModel?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    isRefinedPrompt?: BoolFilter<"Chat"> | boolean
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    message?: SortOrder
    isAi?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    isRefinedPrompt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    userId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    message?: StringWithAggregatesFilter<"Chat"> | string
    isAi?: BoolWithAggregatesFilter<"Chat"> | boolean
    aiModel?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    isRefinedPrompt?: BoolWithAggregatesFilter<"Chat"> | boolean
  }

  export type ProjectDataWhereInput = {
    AND?: ProjectDataWhereInput | ProjectDataWhereInput[]
    OR?: ProjectDataWhereInput[]
    NOT?: ProjectDataWhereInput | ProjectDataWhereInput[]
    id?: StringFilter<"ProjectData"> | string
    projectId?: StringFilter<"ProjectData"> | string
    data?: JsonFilter<"ProjectData">
    version?: IntFilter<"ProjectData"> | number
    createdAt?: DateTimeFilter<"ProjectData"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectData"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    selectedBy?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    blocks?: BlockListRelationFilter
  }

  export type ProjectDataOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    data?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    selectedBy?: ProjectOrderByWithRelationInput
    blocks?: BlockOrderByRelationAggregateInput
  }

  export type ProjectDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectDataWhereInput | ProjectDataWhereInput[]
    OR?: ProjectDataWhereInput[]
    NOT?: ProjectDataWhereInput | ProjectDataWhereInput[]
    projectId?: StringFilter<"ProjectData"> | string
    data?: JsonFilter<"ProjectData">
    version?: IntFilter<"ProjectData"> | number
    createdAt?: DateTimeFilter<"ProjectData"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectData"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    selectedBy?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    blocks?: BlockListRelationFilter
  }, "id">

  export type ProjectDataOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    data?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectDataCountOrderByAggregateInput
    _avg?: ProjectDataAvgOrderByAggregateInput
    _max?: ProjectDataMaxOrderByAggregateInput
    _min?: ProjectDataMinOrderByAggregateInput
    _sum?: ProjectDataSumOrderByAggregateInput
  }

  export type ProjectDataScalarWhereWithAggregatesInput = {
    AND?: ProjectDataScalarWhereWithAggregatesInput | ProjectDataScalarWhereWithAggregatesInput[]
    OR?: ProjectDataScalarWhereWithAggregatesInput[]
    NOT?: ProjectDataScalarWhereWithAggregatesInput | ProjectDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectData"> | string
    projectId?: StringWithAggregatesFilter<"ProjectData"> | string
    data?: JsonWithAggregatesFilter<"ProjectData">
    version?: IntWithAggregatesFilter<"ProjectData"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectData"> | Date | string
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: StringFilter<"Block"> | string
    projectDataId?: StringFilter<"Block"> | string
    blockId?: StringFilter<"Block"> | string
    label?: StringFilter<"Block"> | string
    content?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    projectData?: XOR<ProjectDataScalarRelationFilter, ProjectDataWhereInput>
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    projectDataId?: SortOrder
    blockId?: SortOrder
    label?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectData?: ProjectDataOrderByWithRelationInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    projectDataId?: StringFilter<"Block"> | string
    blockId?: StringFilter<"Block"> | string
    label?: StringFilter<"Block"> | string
    content?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    projectData?: XOR<ProjectDataScalarRelationFilter, ProjectDataWhereInput>
  }, "id">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    projectDataId?: SortOrder
    blockId?: SortOrder
    label?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Block"> | string
    projectDataId?: StringWithAggregatesFilter<"Block"> | string
    blockId?: StringWithAggregatesFilter<"Block"> | string
    label?: StringWithAggregatesFilter<"Block"> | string
    content?: StringWithAggregatesFilter<"Block"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
  }

  export type PublishedSiteWhereInput = {
    AND?: PublishedSiteWhereInput | PublishedSiteWhereInput[]
    OR?: PublishedSiteWhereInput[]
    NOT?: PublishedSiteWhereInput | PublishedSiteWhereInput[]
    id?: StringFilter<"PublishedSite"> | string
    projectId?: StringFilter<"PublishedSite"> | string
    subdomain?: StringFilter<"PublishedSite"> | string
    createdAt?: DateTimeFilter<"PublishedSite"> | Date | string
    updatedAt?: DateTimeFilter<"PublishedSite"> | Date | string
  }

  export type PublishedSiteOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    subdomain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublishedSiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    subdomain?: string
    AND?: PublishedSiteWhereInput | PublishedSiteWhereInput[]
    OR?: PublishedSiteWhereInput[]
    NOT?: PublishedSiteWhereInput | PublishedSiteWhereInput[]
    createdAt?: DateTimeFilter<"PublishedSite"> | Date | string
    updatedAt?: DateTimeFilter<"PublishedSite"> | Date | string
  }, "id" | "projectId" | "subdomain">

  export type PublishedSiteOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    subdomain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublishedSiteCountOrderByAggregateInput
    _max?: PublishedSiteMaxOrderByAggregateInput
    _min?: PublishedSiteMinOrderByAggregateInput
  }

  export type PublishedSiteScalarWhereWithAggregatesInput = {
    AND?: PublishedSiteScalarWhereWithAggregatesInput | PublishedSiteScalarWhereWithAggregatesInput[]
    OR?: PublishedSiteScalarWhereWithAggregatesInput[]
    NOT?: PublishedSiteScalarWhereWithAggregatesInput | PublishedSiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublishedSite"> | string
    projectId?: StringWithAggregatesFilter<"PublishedSite"> | string
    subdomain?: StringWithAggregatesFilter<"PublishedSite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PublishedSite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PublishedSite"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutProjectInput
    projectData?: ProjectDataCreateNestedManyWithoutProjectInput
    selectedProjectData?: ProjectDataCreateNestedOneWithoutSelectedByInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    selectedProjectDataId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutProjectInput
    projectData?: ProjectDataUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutProjectNestedInput
    projectData?: ProjectDataUpdateManyWithoutProjectNestedInput
    selectedProjectData?: ProjectDataUpdateOneWithoutSelectedByNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    selectedProjectDataId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutProjectNestedInput
    projectData?: ProjectDataUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    selectedProjectDataId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    selectedProjectDataId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    userId?: string | null
    message: string
    isAi: boolean
    aiModel: string
    createdAt?: Date | string
    isRefinedPrompt?: boolean
    project?: ProjectCreateNestedOneWithoutChatsInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    userId?: string | null
    projectId?: string | null
    message: string
    isAi: boolean
    aiModel: string
    createdAt?: Date | string
    isRefinedPrompt?: boolean
  }

  export type ChatUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRefinedPrompt?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRefinedPrompt?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatCreateManyInput = {
    id?: string
    userId?: string | null
    projectId?: string | null
    message: string
    isAi: boolean
    aiModel: string
    createdAt?: Date | string
    isRefinedPrompt?: boolean
  }

  export type ChatUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRefinedPrompt?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRefinedPrompt?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectDataCreateInput = {
    id?: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectDataInput
    selectedBy?: ProjectCreateNestedOneWithoutSelectedProjectDataInput
    blocks?: BlockCreateNestedManyWithoutProjectDataInput
  }

  export type ProjectDataUncheckedCreateInput = {
    id?: string
    projectId: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedBy?: ProjectUncheckedCreateNestedOneWithoutSelectedProjectDataInput
    blocks?: BlockUncheckedCreateNestedManyWithoutProjectDataInput
  }

  export type ProjectDataUpdateInput = {
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectDataNestedInput
    selectedBy?: ProjectUpdateOneWithoutSelectedProjectDataNestedInput
    blocks?: BlockUpdateManyWithoutProjectDataNestedInput
  }

  export type ProjectDataUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedBy?: ProjectUncheckedUpdateOneWithoutSelectedProjectDataNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutProjectDataNestedInput
  }

  export type ProjectDataCreateManyInput = {
    id?: string
    projectId: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDataUpdateManyMutationInput = {
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDataUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateInput = {
    id?: string
    blockId: string
    label: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectData: ProjectDataCreateNestedOneWithoutBlocksInput
  }

  export type BlockUncheckedCreateInput = {
    id?: string
    projectDataId: string
    blockId: string
    label: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectData?: ProjectDataUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    projectDataId?: StringFieldUpdateOperationsInput | string
    blockId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyInput = {
    id?: string
    projectDataId: string
    blockId: string
    label: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateManyMutationInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyInput = {
    projectDataId?: StringFieldUpdateOperationsInput | string
    blockId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublishedSiteCreateInput = {
    id?: string
    projectId: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublishedSiteUncheckedCreateInput = {
    id?: string
    projectId: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublishedSiteUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublishedSiteUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublishedSiteCreateManyInput = {
    id?: string
    projectId: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublishedSiteUpdateManyMutationInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublishedSiteUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
  }

  export type ColorSchemeNullableCompositeFilter = {
    equals?: ColorSchemeObjectEqualityInput | null
    is?: ColorSchemeWhereInput | null
    isNot?: ColorSchemeWhereInput | null
    isSet?: boolean
  }

  export type ColorSchemeObjectEqualityInput = {
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    neutralColor: string
    accentColor: string
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

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type ProjectDataListRelationFilter = {
    every?: ProjectDataWhereInput
    some?: ProjectDataWhereInput
    none?: ProjectDataWhereInput
  }

  export type ProjectDataNullableScalarRelationFilter = {
    is?: ProjectDataWhereInput | null
    isNot?: ProjectDataWhereInput | null
  }

  export type ColorSchemeOrderByInput = {
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    neutralColor?: SortOrder
    accentColor?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    language?: SortOrder
    template?: SortOrder
    selectedProjectDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    language?: SortOrder
    template?: SortOrder
    selectedProjectDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    language?: SortOrder
    template?: SortOrder
    selectedProjectDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    message?: SortOrder
    isAi?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    isRefinedPrompt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    message?: SortOrder
    isAi?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    isRefinedPrompt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    message?: SortOrder
    isAi?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    isRefinedPrompt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
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

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type BlockListRelationFilter = {
    every?: BlockWhereInput
    some?: BlockWhereInput
    none?: BlockWhereInput
  }

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectDataCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    data?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDataAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ProjectDataMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDataMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDataSumOrderByAggregateInput = {
    version?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type ProjectDataScalarRelationFilter = {
    is?: ProjectDataWhereInput
    isNot?: ProjectDataWhereInput
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    projectDataId?: SortOrder
    blockId?: SortOrder
    label?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    projectDataId?: SortOrder
    blockId?: SortOrder
    label?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    projectDataId?: SortOrder
    blockId?: SortOrder
    label?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublishedSiteCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    subdomain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublishedSiteMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    subdomain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublishedSiteMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    subdomain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorSchemeNullableCreateEnvelopeInput = {
    set?: ColorSchemeCreateInput | null
  }

  export type ColorSchemeCreateInput = {
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    neutralColor: string
    accentColor: string
  }

  export type ChatCreateNestedManyWithoutProjectInput = {
    create?: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput> | ChatCreateWithoutProjectInput[] | ChatUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutProjectInput | ChatCreateOrConnectWithoutProjectInput[]
    createMany?: ChatCreateManyProjectInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ProjectDataCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDataCreateWithoutProjectInput, ProjectDataUncheckedCreateWithoutProjectInput> | ProjectDataCreateWithoutProjectInput[] | ProjectDataUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDataCreateOrConnectWithoutProjectInput | ProjectDataCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDataCreateManyProjectInputEnvelope
    connect?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
  }

  export type ProjectDataCreateNestedOneWithoutSelectedByInput = {
    create?: XOR<ProjectDataCreateWithoutSelectedByInput, ProjectDataUncheckedCreateWithoutSelectedByInput>
    connectOrCreate?: ProjectDataCreateOrConnectWithoutSelectedByInput
    connect?: ProjectDataWhereUniqueInput
  }

  export type ChatUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput> | ChatCreateWithoutProjectInput[] | ChatUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutProjectInput | ChatCreateOrConnectWithoutProjectInput[]
    createMany?: ChatCreateManyProjectInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ProjectDataUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDataCreateWithoutProjectInput, ProjectDataUncheckedCreateWithoutProjectInput> | ProjectDataCreateWithoutProjectInput[] | ProjectDataUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDataCreateOrConnectWithoutProjectInput | ProjectDataCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDataCreateManyProjectInputEnvelope
    connect?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ColorSchemeNullableUpdateEnvelopeInput = {
    set?: ColorSchemeCreateInput | null
    upsert?: ColorSchemeUpsertInput
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput> | ChatCreateWithoutProjectInput[] | ChatUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutProjectInput | ChatCreateOrConnectWithoutProjectInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutProjectInput | ChatUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ChatCreateManyProjectInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutProjectInput | ChatUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutProjectInput | ChatUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ProjectDataUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDataCreateWithoutProjectInput, ProjectDataUncheckedCreateWithoutProjectInput> | ProjectDataCreateWithoutProjectInput[] | ProjectDataUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDataCreateOrConnectWithoutProjectInput | ProjectDataCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDataUpsertWithWhereUniqueWithoutProjectInput | ProjectDataUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDataCreateManyProjectInputEnvelope
    set?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
    disconnect?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
    delete?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
    connect?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
    update?: ProjectDataUpdateWithWhereUniqueWithoutProjectInput | ProjectDataUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDataUpdateManyWithWhereWithoutProjectInput | ProjectDataUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDataScalarWhereInput | ProjectDataScalarWhereInput[]
  }

  export type ProjectDataUpdateOneWithoutSelectedByNestedInput = {
    create?: XOR<ProjectDataCreateWithoutSelectedByInput, ProjectDataUncheckedCreateWithoutSelectedByInput>
    connectOrCreate?: ProjectDataCreateOrConnectWithoutSelectedByInput
    upsert?: ProjectDataUpsertWithoutSelectedByInput
    disconnect?: boolean
    delete?: ProjectDataWhereInput | boolean
    connect?: ProjectDataWhereUniqueInput
    update?: XOR<XOR<ProjectDataUpdateToOneWithWhereWithoutSelectedByInput, ProjectDataUpdateWithoutSelectedByInput>, ProjectDataUncheckedUpdateWithoutSelectedByInput>
  }

  export type ChatUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput> | ChatCreateWithoutProjectInput[] | ChatUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutProjectInput | ChatCreateOrConnectWithoutProjectInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutProjectInput | ChatUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ChatCreateManyProjectInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutProjectInput | ChatUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutProjectInput | ChatUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ProjectDataUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDataCreateWithoutProjectInput, ProjectDataUncheckedCreateWithoutProjectInput> | ProjectDataCreateWithoutProjectInput[] | ProjectDataUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDataCreateOrConnectWithoutProjectInput | ProjectDataCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDataUpsertWithWhereUniqueWithoutProjectInput | ProjectDataUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDataCreateManyProjectInputEnvelope
    set?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
    disconnect?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
    delete?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
    connect?: ProjectDataWhereUniqueInput | ProjectDataWhereUniqueInput[]
    update?: ProjectDataUpdateWithWhereUniqueWithoutProjectInput | ProjectDataUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDataUpdateManyWithWhereWithoutProjectInput | ProjectDataUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDataScalarWhereInput | ProjectDataScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutChatsInput = {
    create?: XOR<ProjectCreateWithoutChatsInput, ProjectUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChatsInput
    connect?: ProjectWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneWithoutChatsNestedInput = {
    create?: XOR<ProjectCreateWithoutChatsInput, ProjectUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChatsInput
    upsert?: ProjectUpsertWithoutChatsInput
    disconnect?: boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutChatsInput, ProjectUpdateWithoutChatsInput>, ProjectUncheckedUpdateWithoutChatsInput>
  }

  export type ProjectCreateNestedOneWithoutProjectDataInput = {
    create?: XOR<ProjectCreateWithoutProjectDataInput, ProjectUncheckedCreateWithoutProjectDataInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectDataInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutSelectedProjectDataInput = {
    create?: XOR<ProjectCreateWithoutSelectedProjectDataInput, ProjectUncheckedCreateWithoutSelectedProjectDataInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSelectedProjectDataInput
    connect?: ProjectWhereUniqueInput
  }

  export type BlockCreateNestedManyWithoutProjectDataInput = {
    create?: XOR<BlockCreateWithoutProjectDataInput, BlockUncheckedCreateWithoutProjectDataInput> | BlockCreateWithoutProjectDataInput[] | BlockUncheckedCreateWithoutProjectDataInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutProjectDataInput | BlockCreateOrConnectWithoutProjectDataInput[]
    createMany?: BlockCreateManyProjectDataInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedOneWithoutSelectedProjectDataInput = {
    create?: XOR<ProjectCreateWithoutSelectedProjectDataInput, ProjectUncheckedCreateWithoutSelectedProjectDataInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSelectedProjectDataInput
    connect?: ProjectWhereUniqueInput
  }

  export type BlockUncheckedCreateNestedManyWithoutProjectDataInput = {
    create?: XOR<BlockCreateWithoutProjectDataInput, BlockUncheckedCreateWithoutProjectDataInput> | BlockCreateWithoutProjectDataInput[] | BlockUncheckedCreateWithoutProjectDataInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutProjectDataInput | BlockCreateOrConnectWithoutProjectDataInput[]
    createMany?: BlockCreateManyProjectDataInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutProjectDataNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectDataInput, ProjectUncheckedCreateWithoutProjectDataInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectDataInput
    upsert?: ProjectUpsertWithoutProjectDataInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectDataInput, ProjectUpdateWithoutProjectDataInput>, ProjectUncheckedUpdateWithoutProjectDataInput>
  }

  export type ProjectUpdateOneWithoutSelectedProjectDataNestedInput = {
    create?: XOR<ProjectCreateWithoutSelectedProjectDataInput, ProjectUncheckedCreateWithoutSelectedProjectDataInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSelectedProjectDataInput
    upsert?: ProjectUpsertWithoutSelectedProjectDataInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSelectedProjectDataInput, ProjectUpdateWithoutSelectedProjectDataInput>, ProjectUncheckedUpdateWithoutSelectedProjectDataInput>
  }

  export type BlockUpdateManyWithoutProjectDataNestedInput = {
    create?: XOR<BlockCreateWithoutProjectDataInput, BlockUncheckedCreateWithoutProjectDataInput> | BlockCreateWithoutProjectDataInput[] | BlockUncheckedCreateWithoutProjectDataInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutProjectDataInput | BlockCreateOrConnectWithoutProjectDataInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutProjectDataInput | BlockUpsertWithWhereUniqueWithoutProjectDataInput[]
    createMany?: BlockCreateManyProjectDataInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutProjectDataInput | BlockUpdateWithWhereUniqueWithoutProjectDataInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutProjectDataInput | BlockUpdateManyWithWhereWithoutProjectDataInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateOneWithoutSelectedProjectDataNestedInput = {
    create?: XOR<ProjectCreateWithoutSelectedProjectDataInput, ProjectUncheckedCreateWithoutSelectedProjectDataInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSelectedProjectDataInput
    upsert?: ProjectUpsertWithoutSelectedProjectDataInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSelectedProjectDataInput, ProjectUpdateWithoutSelectedProjectDataInput>, ProjectUncheckedUpdateWithoutSelectedProjectDataInput>
  }

  export type BlockUncheckedUpdateManyWithoutProjectDataNestedInput = {
    create?: XOR<BlockCreateWithoutProjectDataInput, BlockUncheckedCreateWithoutProjectDataInput> | BlockCreateWithoutProjectDataInput[] | BlockUncheckedCreateWithoutProjectDataInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutProjectDataInput | BlockCreateOrConnectWithoutProjectDataInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutProjectDataInput | BlockUpsertWithWhereUniqueWithoutProjectDataInput[]
    createMany?: BlockCreateManyProjectDataInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutProjectDataInput | BlockUpdateWithWhereUniqueWithoutProjectDataInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutProjectDataInput | BlockUpdateManyWithWhereWithoutProjectDataInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type ProjectDataCreateNestedOneWithoutBlocksInput = {
    create?: XOR<ProjectDataCreateWithoutBlocksInput, ProjectDataUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ProjectDataCreateOrConnectWithoutBlocksInput
    connect?: ProjectDataWhereUniqueInput
  }

  export type ProjectDataUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<ProjectDataCreateWithoutBlocksInput, ProjectDataUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ProjectDataCreateOrConnectWithoutBlocksInput
    upsert?: ProjectDataUpsertWithoutBlocksInput
    connect?: ProjectDataWhereUniqueInput
    update?: XOR<XOR<ProjectDataUpdateToOneWithWhereWithoutBlocksInput, ProjectDataUpdateWithoutBlocksInput>, ProjectDataUncheckedUpdateWithoutBlocksInput>
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
    isSet?: boolean
  }

  export type ColorSchemeWhereInput = {
    AND?: ColorSchemeWhereInput | ColorSchemeWhereInput[]
    OR?: ColorSchemeWhereInput[]
    NOT?: ColorSchemeWhereInput | ColorSchemeWhereInput[]
    primaryColor?: StringFilter<"ColorScheme"> | string
    secondaryColor?: StringFilter<"ColorScheme"> | string
    backgroundColor?: StringFilter<"ColorScheme"> | string
    textColor?: StringFilter<"ColorScheme"> | string
    neutralColor?: StringFilter<"ColorScheme"> | string
    accentColor?: StringFilter<"ColorScheme"> | string
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
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

  export type ChatCreateWithoutProjectInput = {
    id?: string
    userId?: string | null
    message: string
    isAi: boolean
    aiModel: string
    createdAt?: Date | string
    isRefinedPrompt?: boolean
  }

  export type ChatUncheckedCreateWithoutProjectInput = {
    id?: string
    userId?: string | null
    message: string
    isAi: boolean
    aiModel: string
    createdAt?: Date | string
    isRefinedPrompt?: boolean
  }

  export type ChatCreateOrConnectWithoutProjectInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput>
  }

  export type ChatCreateManyProjectInputEnvelope = {
    data: ChatCreateManyProjectInput | ChatCreateManyProjectInput[]
  }

  export type ProjectDataCreateWithoutProjectInput = {
    id?: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedBy?: ProjectCreateNestedOneWithoutSelectedProjectDataInput
    blocks?: BlockCreateNestedManyWithoutProjectDataInput
  }

  export type ProjectDataUncheckedCreateWithoutProjectInput = {
    id?: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedBy?: ProjectUncheckedCreateNestedOneWithoutSelectedProjectDataInput
    blocks?: BlockUncheckedCreateNestedManyWithoutProjectDataInput
  }

  export type ProjectDataCreateOrConnectWithoutProjectInput = {
    where: ProjectDataWhereUniqueInput
    create: XOR<ProjectDataCreateWithoutProjectInput, ProjectDataUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDataCreateManyProjectInputEnvelope = {
    data: ProjectDataCreateManyProjectInput | ProjectDataCreateManyProjectInput[]
  }

  export type ProjectDataCreateWithoutSelectedByInput = {
    id?: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectDataInput
    blocks?: BlockCreateNestedManyWithoutProjectDataInput
  }

  export type ProjectDataUncheckedCreateWithoutSelectedByInput = {
    id?: string
    projectId: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutProjectDataInput
  }

  export type ProjectDataCreateOrConnectWithoutSelectedByInput = {
    where: ProjectDataWhereUniqueInput
    create: XOR<ProjectDataCreateWithoutSelectedByInput, ProjectDataUncheckedCreateWithoutSelectedByInput>
  }

  export type ColorSchemeUpsertInput = {
    set: ColorSchemeCreateInput | null
    update: ColorSchemeUpdateInput
  }

  export type ChatUpsertWithWhereUniqueWithoutProjectInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutProjectInput, ChatUncheckedUpdateWithoutProjectInput>
    create: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutProjectInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutProjectInput, ChatUncheckedUpdateWithoutProjectInput>
  }

  export type ChatUpdateManyWithWhereWithoutProjectInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutProjectInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringNullableFilter<"Chat"> | string | null
    projectId?: StringNullableFilter<"Chat"> | string | null
    message?: StringFilter<"Chat"> | string
    isAi?: BoolFilter<"Chat"> | boolean
    aiModel?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    isRefinedPrompt?: BoolFilter<"Chat"> | boolean
  }

  export type ProjectDataUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectDataWhereUniqueInput
    update: XOR<ProjectDataUpdateWithoutProjectInput, ProjectDataUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectDataCreateWithoutProjectInput, ProjectDataUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDataUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectDataWhereUniqueInput
    data: XOR<ProjectDataUpdateWithoutProjectInput, ProjectDataUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectDataUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectDataScalarWhereInput
    data: XOR<ProjectDataUpdateManyMutationInput, ProjectDataUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectDataScalarWhereInput = {
    AND?: ProjectDataScalarWhereInput | ProjectDataScalarWhereInput[]
    OR?: ProjectDataScalarWhereInput[]
    NOT?: ProjectDataScalarWhereInput | ProjectDataScalarWhereInput[]
    id?: StringFilter<"ProjectData"> | string
    projectId?: StringFilter<"ProjectData"> | string
    data?: JsonFilter<"ProjectData">
    version?: IntFilter<"ProjectData"> | number
    createdAt?: DateTimeFilter<"ProjectData"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectData"> | Date | string
  }

  export type ProjectDataUpsertWithoutSelectedByInput = {
    update: XOR<ProjectDataUpdateWithoutSelectedByInput, ProjectDataUncheckedUpdateWithoutSelectedByInput>
    create: XOR<ProjectDataCreateWithoutSelectedByInput, ProjectDataUncheckedCreateWithoutSelectedByInput>
    where?: ProjectDataWhereInput
  }

  export type ProjectDataUpdateToOneWithWhereWithoutSelectedByInput = {
    where?: ProjectDataWhereInput
    data: XOR<ProjectDataUpdateWithoutSelectedByInput, ProjectDataUncheckedUpdateWithoutSelectedByInput>
  }

  export type ProjectDataUpdateWithoutSelectedByInput = {
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectDataNestedInput
    blocks?: BlockUpdateManyWithoutProjectDataNestedInput
  }

  export type ProjectDataUncheckedUpdateWithoutSelectedByInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutProjectDataNestedInput
  }

  export type ProjectCreateWithoutChatsInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectData?: ProjectDataCreateNestedManyWithoutProjectInput
    selectedProjectData?: ProjectDataCreateNestedOneWithoutSelectedByInput
  }

  export type ProjectUncheckedCreateWithoutChatsInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    selectedProjectDataId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectData?: ProjectDataUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutChatsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutChatsInput, ProjectUncheckedCreateWithoutChatsInput>
  }

  export type ProjectUpsertWithoutChatsInput = {
    update: XOR<ProjectUpdateWithoutChatsInput, ProjectUncheckedUpdateWithoutChatsInput>
    create: XOR<ProjectCreateWithoutChatsInput, ProjectUncheckedCreateWithoutChatsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutChatsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutChatsInput, ProjectUncheckedUpdateWithoutChatsInput>
  }

  export type ProjectUpdateWithoutChatsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectData?: ProjectDataUpdateManyWithoutProjectNestedInput
    selectedProjectData?: ProjectDataUpdateOneWithoutSelectedByNestedInput
  }

  export type ProjectUncheckedUpdateWithoutChatsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    selectedProjectDataId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectData?: ProjectDataUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutProjectDataInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutProjectInput
    selectedProjectData?: ProjectDataCreateNestedOneWithoutSelectedByInput
  }

  export type ProjectUncheckedCreateWithoutProjectDataInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    selectedProjectDataId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectDataInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectDataInput, ProjectUncheckedCreateWithoutProjectDataInput>
  }

  export type ProjectCreateWithoutSelectedProjectDataInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutProjectInput
    projectData?: ProjectDataCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSelectedProjectDataInput = {
    id?: string
    userId: string
    name: string
    prompt?: string | null
    language?: string | null
    template?: string | null
    colors?: XOR<ColorSchemeNullableCreateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutProjectInput
    projectData?: ProjectDataUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSelectedProjectDataInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSelectedProjectDataInput, ProjectUncheckedCreateWithoutSelectedProjectDataInput>
  }

  export type BlockCreateWithoutProjectDataInput = {
    id?: string
    blockId: string
    label: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUncheckedCreateWithoutProjectDataInput = {
    id?: string
    blockId: string
    label: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockCreateOrConnectWithoutProjectDataInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutProjectDataInput, BlockUncheckedCreateWithoutProjectDataInput>
  }

  export type BlockCreateManyProjectDataInputEnvelope = {
    data: BlockCreateManyProjectDataInput | BlockCreateManyProjectDataInput[]
  }

  export type ProjectUpsertWithoutProjectDataInput = {
    update: XOR<ProjectUpdateWithoutProjectDataInput, ProjectUncheckedUpdateWithoutProjectDataInput>
    create: XOR<ProjectCreateWithoutProjectDataInput, ProjectUncheckedCreateWithoutProjectDataInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectDataInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectDataInput, ProjectUncheckedUpdateWithoutProjectDataInput>
  }

  export type ProjectUpdateWithoutProjectDataInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutProjectNestedInput
    selectedProjectData?: ProjectDataUpdateOneWithoutSelectedByNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectDataInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    selectedProjectDataId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUpsertWithoutSelectedProjectDataInput = {
    update: XOR<ProjectUpdateWithoutSelectedProjectDataInput, ProjectUncheckedUpdateWithoutSelectedProjectDataInput>
    create: XOR<ProjectCreateWithoutSelectedProjectDataInput, ProjectUncheckedCreateWithoutSelectedProjectDataInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSelectedProjectDataInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSelectedProjectDataInput, ProjectUncheckedUpdateWithoutSelectedProjectDataInput>
  }

  export type ProjectUpdateWithoutSelectedProjectDataInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutProjectNestedInput
    projectData?: ProjectDataUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSelectedProjectDataInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: XOR<ColorSchemeNullableUpdateEnvelopeInput, ColorSchemeCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutProjectNestedInput
    projectData?: ProjectDataUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type BlockUpsertWithWhereUniqueWithoutProjectDataInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutProjectDataInput, BlockUncheckedUpdateWithoutProjectDataInput>
    create: XOR<BlockCreateWithoutProjectDataInput, BlockUncheckedCreateWithoutProjectDataInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutProjectDataInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutProjectDataInput, BlockUncheckedUpdateWithoutProjectDataInput>
  }

  export type BlockUpdateManyWithWhereWithoutProjectDataInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutProjectDataInput>
  }

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[]
    OR?: BlockScalarWhereInput[]
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[]
    id?: StringFilter<"Block"> | string
    projectDataId?: StringFilter<"Block"> | string
    blockId?: StringFilter<"Block"> | string
    label?: StringFilter<"Block"> | string
    content?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
  }

  export type ProjectDataCreateWithoutBlocksInput = {
    id?: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectDataInput
    selectedBy?: ProjectCreateNestedOneWithoutSelectedProjectDataInput
  }

  export type ProjectDataUncheckedCreateWithoutBlocksInput = {
    id?: string
    projectId: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedBy?: ProjectUncheckedCreateNestedOneWithoutSelectedProjectDataInput
  }

  export type ProjectDataCreateOrConnectWithoutBlocksInput = {
    where: ProjectDataWhereUniqueInput
    create: XOR<ProjectDataCreateWithoutBlocksInput, ProjectDataUncheckedCreateWithoutBlocksInput>
  }

  export type ProjectDataUpsertWithoutBlocksInput = {
    update: XOR<ProjectDataUpdateWithoutBlocksInput, ProjectDataUncheckedUpdateWithoutBlocksInput>
    create: XOR<ProjectDataCreateWithoutBlocksInput, ProjectDataUncheckedCreateWithoutBlocksInput>
    where?: ProjectDataWhereInput
  }

  export type ProjectDataUpdateToOneWithWhereWithoutBlocksInput = {
    where?: ProjectDataWhereInput
    data: XOR<ProjectDataUpdateWithoutBlocksInput, ProjectDataUncheckedUpdateWithoutBlocksInput>
  }

  export type ProjectDataUpdateWithoutBlocksInput = {
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectDataNestedInput
    selectedBy?: ProjectUpdateOneWithoutSelectedProjectDataNestedInput
  }

  export type ProjectDataUncheckedUpdateWithoutBlocksInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedBy?: ProjectUncheckedUpdateOneWithoutSelectedProjectDataNestedInput
  }

  export type ChatCreateManyProjectInput = {
    id?: string
    userId?: string | null
    message: string
    isAi: boolean
    aiModel: string
    createdAt?: Date | string
    isRefinedPrompt?: boolean
  }

  export type ProjectDataCreateManyProjectInput = {
    id?: string
    data?: InputJsonValue
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorSchemeUpdateInput = {
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    neutralColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUpdateWithoutProjectInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRefinedPrompt?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatUncheckedUpdateWithoutProjectInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRefinedPrompt?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatUncheckedUpdateManyWithoutProjectInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRefinedPrompt?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectDataUpdateWithoutProjectInput = {
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedBy?: ProjectUpdateOneWithoutSelectedProjectDataNestedInput
    blocks?: BlockUpdateManyWithoutProjectDataNestedInput
  }

  export type ProjectDataUncheckedUpdateWithoutProjectInput = {
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedBy?: ProjectUncheckedUpdateOneWithoutSelectedProjectDataNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutProjectDataNestedInput
  }

  export type ProjectDataUncheckedUpdateManyWithoutProjectInput = {
    data?: InputJsonValue | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyProjectDataInput = {
    id?: string
    blockId: string
    label: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateWithoutProjectDataInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateWithoutProjectDataInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyWithoutProjectDataInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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