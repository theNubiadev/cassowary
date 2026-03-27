
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model DriverProfile
 * 
 */
export type DriverProfile = $Result.DefaultSelection<Prisma.$DriverProfilePayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model CargoListing
 * 
 */
export type CargoListing = $Result.DefaultSelection<Prisma.$CargoListingPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  DRIVER: 'DRIVER',
  CARGO_OWNER: 'CARGO_OWNER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BookingStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  PAYMENT_PENDING: 'PAYMENT_PENDING',
  PAID: 'PAID',
  IN_TRANSIT: 'IN_TRANSIT',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  DISPUTED: 'DISPUTED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const TransactionStatus: {
  INITIATED: 'INITIATED',
  SUCCESSFUL: 'SUCCESSFUL',
  FAILED: 'FAILED',
  REVERSED: 'REVERSED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const TruckType: {
  FLATBED: 'FLATBED',
  REFRIGERATED: 'REFRIGERATED',
  TANKER: 'TANKER',
  CONTAINER: 'CONTAINER',
  TIPPER: 'TIPPER',
  VAN: 'VAN',
  LOWBED: 'LOWBED',
  CURTAINSIDER: 'CURTAINSIDER'
};

export type TruckType = (typeof TruckType)[keyof typeof TruckType]


export const CargoType: {
  GENERAL: 'GENERAL',
  PERISHABLE: 'PERISHABLE',
  FRAGILE: 'FRAGILE',
  HAZARDOUS: 'HAZARDOUS',
  LIVESTOCK: 'LIVESTOCK',
  LIQUID: 'LIQUID',
  MACHINERY: 'MACHINERY',
  ELECTRONICS: 'ELECTRONICS'
};

export type CargoType = (typeof CargoType)[keyof typeof CargoType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type TruckType = $Enums.TruckType

export const TruckType: typeof $Enums.TruckType

export type CargoType = $Enums.CargoType

export const CargoType: typeof $Enums.CargoType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driverProfile`: Exposes CRUD operations for the **DriverProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverProfiles
    * const driverProfiles = await prisma.driverProfile.findMany()
    * ```
    */
  get driverProfile(): Prisma.DriverProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargoListing`: Exposes CRUD operations for the **CargoListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CargoListings
    * const cargoListings = await prisma.cargoListing.findMany()
    * ```
    */
  get cargoListing(): Prisma.CargoListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    DriverProfile: 'DriverProfile',
    Route: 'Route',
    CargoListing: 'CargoListing',
    Booking: 'Booking',
    Transaction: 'Transaction',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "driverProfile" | "route" | "cargoListing" | "booking" | "transaction" | "review"
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      DriverProfile: {
        payload: Prisma.$DriverProfilePayload<ExtArgs>
        fields: Prisma.DriverProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          findFirst: {
            args: Prisma.DriverProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          findMany: {
            args: Prisma.DriverProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>[]
          }
          create: {
            args: Prisma.DriverProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          createMany: {
            args: Prisma.DriverProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>[]
          }
          delete: {
            args: Prisma.DriverProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          update: {
            args: Prisma.DriverProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          deleteMany: {
            args: Prisma.DriverProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>[]
          }
          upsert: {
            args: Prisma.DriverProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          aggregate: {
            args: Prisma.DriverProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverProfile>
          }
          groupBy: {
            args: Prisma.DriverProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverProfileCountArgs<ExtArgs>
            result: $Utils.Optional<DriverProfileCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      CargoListing: {
        payload: Prisma.$CargoListingPayload<ExtArgs>
        fields: Prisma.CargoListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargoListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargoListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>
          }
          findFirst: {
            args: Prisma.CargoListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargoListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>
          }
          findMany: {
            args: Prisma.CargoListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>[]
          }
          create: {
            args: Prisma.CargoListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>
          }
          createMany: {
            args: Prisma.CargoListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CargoListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>[]
          }
          delete: {
            args: Prisma.CargoListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>
          }
          update: {
            args: Prisma.CargoListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>
          }
          deleteMany: {
            args: Prisma.CargoListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargoListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CargoListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>[]
          }
          upsert: {
            args: Prisma.CargoListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoListingPayload>
          }
          aggregate: {
            args: Prisma.CargoListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargoListing>
          }
          groupBy: {
            args: Prisma.CargoListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargoListingCountArgs<ExtArgs>
            result: $Utils.Optional<CargoListingCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    driverProfile?: DriverProfileOmit
    route?: RouteOmit
    cargoListing?: CargoListingOmit
    booking?: BookingOmit
    transaction?: TransactionOmit
    review?: ReviewOmit
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
    accounts: number
    bookingsAsDriver: number
    bookingsAsOwner: number
    cargoListings: number
    reviewsGiven: number
    reviewsReceived: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    bookingsAsDriver?: boolean | UserCountOutputTypeCountBookingsAsDriverArgs
    bookingsAsOwner?: boolean | UserCountOutputTypeCountBookingsAsOwnerArgs
    cargoListings?: boolean | UserCountOutputTypeCountCargoListingsArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsAsDriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsAsOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCargoListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type DriverProfileCountOutputType
   */

  export type DriverProfileCountOutputType = {
    bookings: number
    servicesRoutes: number
  }

  export type DriverProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | DriverProfileCountOutputTypeCountBookingsArgs
    servicesRoutes?: boolean | DriverProfileCountOutputTypeCountServicesRoutesArgs
  }

  // Custom InputTypes
  /**
   * DriverProfileCountOutputType without action
   */
  export type DriverProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfileCountOutputType
     */
    select?: DriverProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverProfileCountOutputType without action
   */
  export type DriverProfileCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * DriverProfileCountOutputType without action
   */
  export type DriverProfileCountOutputTypeCountServicesRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }


  /**
   * Count Type CargoListingCountOutputType
   */

  export type CargoListingCountOutputType = {
    bookings: number
  }

  export type CargoListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CargoListingCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CargoListingCountOutputType without action
   */
  export type CargoListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListingCountOutputType
     */
    select?: CargoListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargoListingCountOutputType without action
   */
  export type CargoListingCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    phone: string | null
    image: string | null
    role: $Enums.Role | null
    onboardingComplete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    phone: string | null
    image: string | null
    role: $Enums.Role | null
    onboardingComplete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    phone: number
    image: number
    role: number
    onboardingComplete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    phone?: true
    image?: true
    role?: true
    onboardingComplete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    phone?: true
    image?: true
    role?: true
    onboardingComplete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    phone?: true
    image?: true
    role?: true
    onboardingComplete?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    password: string | null
    phone: string | null
    image: string | null
    role: $Enums.Role
    onboardingComplete: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    onboardingComplete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    bookingsAsDriver?: boolean | User$bookingsAsDriverArgs<ExtArgs>
    bookingsAsOwner?: boolean | User$bookingsAsOwnerArgs<ExtArgs>
    cargoListings?: boolean | User$cargoListingsArgs<ExtArgs>
    driverProfile?: boolean | User$driverProfileArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    onboardingComplete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    onboardingComplete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    onboardingComplete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "phone" | "image" | "role" | "onboardingComplete" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    bookingsAsDriver?: boolean | User$bookingsAsDriverArgs<ExtArgs>
    bookingsAsOwner?: boolean | User$bookingsAsOwnerArgs<ExtArgs>
    cargoListings?: boolean | User$cargoListingsArgs<ExtArgs>
    driverProfile?: boolean | User$driverProfileArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      bookingsAsDriver: Prisma.$BookingPayload<ExtArgs>[]
      bookingsAsOwner: Prisma.$BookingPayload<ExtArgs>[]
      cargoListings: Prisma.$CargoListingPayload<ExtArgs>[]
      driverProfile: Prisma.$DriverProfilePayload<ExtArgs> | null
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      password: string | null
      phone: string | null
      image: string | null
      role: $Enums.Role
      onboardingComplete: boolean
      createdAt: Date
      updatedAt: Date
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingsAsDriver<T extends User$bookingsAsDriverArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsAsDriverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingsAsOwner<T extends User$bookingsAsOwnerArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsAsOwnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cargoListings<T extends User$cargoListingsArgs<ExtArgs> = {}>(args?: Subset<T, User$cargoListingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    driverProfile<T extends User$driverProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$driverProfileArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly onboardingComplete: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.bookingsAsDriver
   */
  export type User$bookingsAsDriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.bookingsAsOwner
   */
  export type User$bookingsAsOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.cargoListings
   */
  export type User$cargoListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    where?: CargoListingWhereInput
    orderBy?: CargoListingOrderByWithRelationInput | CargoListingOrderByWithRelationInput[]
    cursor?: CargoListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CargoListingScalarFieldEnum | CargoListingScalarFieldEnum[]
  }

  /**
   * User.driverProfile
   */
  export type User$driverProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    where?: DriverProfileWhereInput
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model DriverProfile
   */

  export type AggregateDriverProfile = {
    _count: DriverProfileCountAggregateOutputType | null
    _avg: DriverProfileAvgAggregateOutputType | null
    _sum: DriverProfileSumAggregateOutputType | null
    _min: DriverProfileMinAggregateOutputType | null
    _max: DriverProfileMaxAggregateOutputType | null
  }

  export type DriverProfileAvgAggregateOutputType = {
    yearsExperience: number | null
    truckYear: number | null
    capacityTons: number | null
    lengthMeters: number | null
    ratePerKm: number | null
    minimumCharge: number | null
    totalTrips: number | null
    avgRating: number | null
    totalEarnings: number | null
  }

  export type DriverProfileSumAggregateOutputType = {
    yearsExperience: number | null
    truckYear: number | null
    capacityTons: number | null
    lengthMeters: number | null
    ratePerKm: number | null
    minimumCharge: number | null
    totalTrips: number | null
    avgRating: number | null
    totalEarnings: number | null
  }

  export type DriverProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    licenseNumber: string | null
    licenseExpiry: Date | null
    yearsExperience: number | null
    bio: string | null
    isVerified: boolean | null
    isAvailable: boolean | null
    truckType: $Enums.TruckType | null
    truckModel: string | null
    truckYear: number | null
    plateNumber: string | null
    capacityTons: number | null
    lengthMeters: number | null
    ratePerKm: number | null
    minimumCharge: number | null
    baseState: string | null
    baseCity: string | null
    totalTrips: number | null
    avgRating: number | null
    totalEarnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    licenseNumber: string | null
    licenseExpiry: Date | null
    yearsExperience: number | null
    bio: string | null
    isVerified: boolean | null
    isAvailable: boolean | null
    truckType: $Enums.TruckType | null
    truckModel: string | null
    truckYear: number | null
    plateNumber: string | null
    capacityTons: number | null
    lengthMeters: number | null
    ratePerKm: number | null
    minimumCharge: number | null
    baseState: string | null
    baseCity: string | null
    totalTrips: number | null
    avgRating: number | null
    totalEarnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverProfileCountAggregateOutputType = {
    id: number
    userId: number
    licenseNumber: number
    licenseExpiry: number
    yearsExperience: number
    bio: number
    isVerified: number
    isAvailable: number
    truckType: number
    truckModel: number
    truckYear: number
    plateNumber: number
    capacityTons: number
    lengthMeters: number
    ratePerKm: number
    minimumCharge: number
    baseState: number
    baseCity: number
    totalTrips: number
    avgRating: number
    totalEarnings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverProfileAvgAggregateInputType = {
    yearsExperience?: true
    truckYear?: true
    capacityTons?: true
    lengthMeters?: true
    ratePerKm?: true
    minimumCharge?: true
    totalTrips?: true
    avgRating?: true
    totalEarnings?: true
  }

  export type DriverProfileSumAggregateInputType = {
    yearsExperience?: true
    truckYear?: true
    capacityTons?: true
    lengthMeters?: true
    ratePerKm?: true
    minimumCharge?: true
    totalTrips?: true
    avgRating?: true
    totalEarnings?: true
  }

  export type DriverProfileMinAggregateInputType = {
    id?: true
    userId?: true
    licenseNumber?: true
    licenseExpiry?: true
    yearsExperience?: true
    bio?: true
    isVerified?: true
    isAvailable?: true
    truckType?: true
    truckModel?: true
    truckYear?: true
    plateNumber?: true
    capacityTons?: true
    lengthMeters?: true
    ratePerKm?: true
    minimumCharge?: true
    baseState?: true
    baseCity?: true
    totalTrips?: true
    avgRating?: true
    totalEarnings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    licenseNumber?: true
    licenseExpiry?: true
    yearsExperience?: true
    bio?: true
    isVerified?: true
    isAvailable?: true
    truckType?: true
    truckModel?: true
    truckYear?: true
    plateNumber?: true
    capacityTons?: true
    lengthMeters?: true
    ratePerKm?: true
    minimumCharge?: true
    baseState?: true
    baseCity?: true
    totalTrips?: true
    avgRating?: true
    totalEarnings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverProfileCountAggregateInputType = {
    id?: true
    userId?: true
    licenseNumber?: true
    licenseExpiry?: true
    yearsExperience?: true
    bio?: true
    isVerified?: true
    isAvailable?: true
    truckType?: true
    truckModel?: true
    truckYear?: true
    plateNumber?: true
    capacityTons?: true
    lengthMeters?: true
    ratePerKm?: true
    minimumCharge?: true
    baseState?: true
    baseCity?: true
    totalTrips?: true
    avgRating?: true
    totalEarnings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverProfile to aggregate.
     */
    where?: DriverProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverProfiles to fetch.
     */
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverProfiles
    **/
    _count?: true | DriverProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverProfileMaxAggregateInputType
  }

  export type GetDriverProfileAggregateType<T extends DriverProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverProfile[P]>
      : GetScalarType<T[P], AggregateDriverProfile[P]>
  }




  export type DriverProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverProfileWhereInput
    orderBy?: DriverProfileOrderByWithAggregationInput | DriverProfileOrderByWithAggregationInput[]
    by: DriverProfileScalarFieldEnum[] | DriverProfileScalarFieldEnum
    having?: DriverProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverProfileCountAggregateInputType | true
    _avg?: DriverProfileAvgAggregateInputType
    _sum?: DriverProfileSumAggregateInputType
    _min?: DriverProfileMinAggregateInputType
    _max?: DriverProfileMaxAggregateInputType
  }

  export type DriverProfileGroupByOutputType = {
    id: string
    userId: string
    licenseNumber: string | null
    licenseExpiry: Date | null
    yearsExperience: number
    bio: string | null
    isVerified: boolean
    isAvailable: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips: number
    avgRating: number
    totalEarnings: number
    createdAt: Date
    updatedAt: Date
    _count: DriverProfileCountAggregateOutputType | null
    _avg: DriverProfileAvgAggregateOutputType | null
    _sum: DriverProfileSumAggregateOutputType | null
    _min: DriverProfileMinAggregateOutputType | null
    _max: DriverProfileMaxAggregateOutputType | null
  }

  type GetDriverProfileGroupByPayload<T extends DriverProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverProfileGroupByOutputType[P]>
            : GetScalarType<T[P], DriverProfileGroupByOutputType[P]>
        }
      >
    >


  export type DriverProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    licenseNumber?: boolean
    licenseExpiry?: boolean
    yearsExperience?: boolean
    bio?: boolean
    isVerified?: boolean
    isAvailable?: boolean
    truckType?: boolean
    truckModel?: boolean
    truckYear?: boolean
    plateNumber?: boolean
    capacityTons?: boolean
    lengthMeters?: boolean
    ratePerKm?: boolean
    minimumCharge?: boolean
    baseState?: boolean
    baseCity?: boolean
    totalTrips?: boolean
    avgRating?: boolean
    totalEarnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | DriverProfile$bookingsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    servicesRoutes?: boolean | DriverProfile$servicesRoutesArgs<ExtArgs>
    _count?: boolean | DriverProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverProfile"]>

  export type DriverProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    licenseNumber?: boolean
    licenseExpiry?: boolean
    yearsExperience?: boolean
    bio?: boolean
    isVerified?: boolean
    isAvailable?: boolean
    truckType?: boolean
    truckModel?: boolean
    truckYear?: boolean
    plateNumber?: boolean
    capacityTons?: boolean
    lengthMeters?: boolean
    ratePerKm?: boolean
    minimumCharge?: boolean
    baseState?: boolean
    baseCity?: boolean
    totalTrips?: boolean
    avgRating?: boolean
    totalEarnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverProfile"]>

  export type DriverProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    licenseNumber?: boolean
    licenseExpiry?: boolean
    yearsExperience?: boolean
    bio?: boolean
    isVerified?: boolean
    isAvailable?: boolean
    truckType?: boolean
    truckModel?: boolean
    truckYear?: boolean
    plateNumber?: boolean
    capacityTons?: boolean
    lengthMeters?: boolean
    ratePerKm?: boolean
    minimumCharge?: boolean
    baseState?: boolean
    baseCity?: boolean
    totalTrips?: boolean
    avgRating?: boolean
    totalEarnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverProfile"]>

  export type DriverProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    licenseNumber?: boolean
    licenseExpiry?: boolean
    yearsExperience?: boolean
    bio?: boolean
    isVerified?: boolean
    isAvailable?: boolean
    truckType?: boolean
    truckModel?: boolean
    truckYear?: boolean
    plateNumber?: boolean
    capacityTons?: boolean
    lengthMeters?: boolean
    ratePerKm?: boolean
    minimumCharge?: boolean
    baseState?: boolean
    baseCity?: boolean
    totalTrips?: boolean
    avgRating?: boolean
    totalEarnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "licenseNumber" | "licenseExpiry" | "yearsExperience" | "bio" | "isVerified" | "isAvailable" | "truckType" | "truckModel" | "truckYear" | "plateNumber" | "capacityTons" | "lengthMeters" | "ratePerKm" | "minimumCharge" | "baseState" | "baseCity" | "totalTrips" | "avgRating" | "totalEarnings" | "createdAt" | "updatedAt", ExtArgs["result"]["driverProfile"]>
  export type DriverProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | DriverProfile$bookingsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    servicesRoutes?: boolean | DriverProfile$servicesRoutesArgs<ExtArgs>
    _count?: boolean | DriverProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DriverProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DriverProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverProfile"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      servicesRoutes: Prisma.$RoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      licenseNumber: string | null
      licenseExpiry: Date | null
      yearsExperience: number
      bio: string | null
      isVerified: boolean
      isAvailable: boolean
      truckType: $Enums.TruckType
      truckModel: string
      truckYear: number
      plateNumber: string
      capacityTons: number
      lengthMeters: number | null
      ratePerKm: number
      minimumCharge: number
      baseState: string
      baseCity: string
      totalTrips: number
      avgRating: number
      totalEarnings: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driverProfile"]>
    composites: {}
  }

  type DriverProfileGetPayload<S extends boolean | null | undefined | DriverProfileDefaultArgs> = $Result.GetResult<Prisma.$DriverProfilePayload, S>

  type DriverProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverProfileCountAggregateInputType | true
    }

  export interface DriverProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverProfile'], meta: { name: 'DriverProfile' } }
    /**
     * Find zero or one DriverProfile that matches the filter.
     * @param {DriverProfileFindUniqueArgs} args - Arguments to find a DriverProfile
     * @example
     * // Get one DriverProfile
     * const driverProfile = await prisma.driverProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverProfileFindUniqueArgs>(args: SelectSubset<T, DriverProfileFindUniqueArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverProfileFindUniqueOrThrowArgs} args - Arguments to find a DriverProfile
     * @example
     * // Get one DriverProfile
     * const driverProfile = await prisma.driverProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileFindFirstArgs} args - Arguments to find a DriverProfile
     * @example
     * // Get one DriverProfile
     * const driverProfile = await prisma.driverProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverProfileFindFirstArgs>(args?: SelectSubset<T, DriverProfileFindFirstArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileFindFirstOrThrowArgs} args - Arguments to find a DriverProfile
     * @example
     * // Get one DriverProfile
     * const driverProfile = await prisma.driverProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverProfiles
     * const driverProfiles = await prisma.driverProfile.findMany()
     * 
     * // Get first 10 DriverProfiles
     * const driverProfiles = await prisma.driverProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverProfileWithIdOnly = await prisma.driverProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverProfileFindManyArgs>(args?: SelectSubset<T, DriverProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverProfile.
     * @param {DriverProfileCreateArgs} args - Arguments to create a DriverProfile.
     * @example
     * // Create one DriverProfile
     * const DriverProfile = await prisma.driverProfile.create({
     *   data: {
     *     // ... data to create a DriverProfile
     *   }
     * })
     * 
     */
    create<T extends DriverProfileCreateArgs>(args: SelectSubset<T, DriverProfileCreateArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverProfiles.
     * @param {DriverProfileCreateManyArgs} args - Arguments to create many DriverProfiles.
     * @example
     * // Create many DriverProfiles
     * const driverProfile = await prisma.driverProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverProfileCreateManyArgs>(args?: SelectSubset<T, DriverProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverProfiles and returns the data saved in the database.
     * @param {DriverProfileCreateManyAndReturnArgs} args - Arguments to create many DriverProfiles.
     * @example
     * // Create many DriverProfiles
     * const driverProfile = await prisma.driverProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverProfiles and only return the `id`
     * const driverProfileWithIdOnly = await prisma.driverProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverProfile.
     * @param {DriverProfileDeleteArgs} args - Arguments to delete one DriverProfile.
     * @example
     * // Delete one DriverProfile
     * const DriverProfile = await prisma.driverProfile.delete({
     *   where: {
     *     // ... filter to delete one DriverProfile
     *   }
     * })
     * 
     */
    delete<T extends DriverProfileDeleteArgs>(args: SelectSubset<T, DriverProfileDeleteArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverProfile.
     * @param {DriverProfileUpdateArgs} args - Arguments to update one DriverProfile.
     * @example
     * // Update one DriverProfile
     * const driverProfile = await prisma.driverProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverProfileUpdateArgs>(args: SelectSubset<T, DriverProfileUpdateArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverProfiles.
     * @param {DriverProfileDeleteManyArgs} args - Arguments to filter DriverProfiles to delete.
     * @example
     * // Delete a few DriverProfiles
     * const { count } = await prisma.driverProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverProfileDeleteManyArgs>(args?: SelectSubset<T, DriverProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverProfiles
     * const driverProfile = await prisma.driverProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverProfileUpdateManyArgs>(args: SelectSubset<T, DriverProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverProfiles and returns the data updated in the database.
     * @param {DriverProfileUpdateManyAndReturnArgs} args - Arguments to update many DriverProfiles.
     * @example
     * // Update many DriverProfiles
     * const driverProfile = await prisma.driverProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverProfiles and only return the `id`
     * const driverProfileWithIdOnly = await prisma.driverProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverProfile.
     * @param {DriverProfileUpsertArgs} args - Arguments to update or create a DriverProfile.
     * @example
     * // Update or create a DriverProfile
     * const driverProfile = await prisma.driverProfile.upsert({
     *   create: {
     *     // ... data to create a DriverProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverProfile we want to update
     *   }
     * })
     */
    upsert<T extends DriverProfileUpsertArgs>(args: SelectSubset<T, DriverProfileUpsertArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileCountArgs} args - Arguments to filter DriverProfiles to count.
     * @example
     * // Count the number of DriverProfiles
     * const count = await prisma.driverProfile.count({
     *   where: {
     *     // ... the filter for the DriverProfiles we want to count
     *   }
     * })
    **/
    count<T extends DriverProfileCountArgs>(
      args?: Subset<T, DriverProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverProfileAggregateArgs>(args: Subset<T, DriverProfileAggregateArgs>): Prisma.PrismaPromise<GetDriverProfileAggregateType<T>>

    /**
     * Group by DriverProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileGroupByArgs} args - Group by arguments.
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
      T extends DriverProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverProfileGroupByArgs['orderBy'] }
        : { orderBy?: DriverProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverProfile model
   */
  readonly fields: DriverProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends DriverProfile$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfile$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicesRoutes<T extends DriverProfile$servicesRoutesArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfile$servicesRoutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DriverProfile model
   */
  interface DriverProfileFieldRefs {
    readonly id: FieldRef<"DriverProfile", 'String'>
    readonly userId: FieldRef<"DriverProfile", 'String'>
    readonly licenseNumber: FieldRef<"DriverProfile", 'String'>
    readonly licenseExpiry: FieldRef<"DriverProfile", 'DateTime'>
    readonly yearsExperience: FieldRef<"DriverProfile", 'Int'>
    readonly bio: FieldRef<"DriverProfile", 'String'>
    readonly isVerified: FieldRef<"DriverProfile", 'Boolean'>
    readonly isAvailable: FieldRef<"DriverProfile", 'Boolean'>
    readonly truckType: FieldRef<"DriverProfile", 'TruckType'>
    readonly truckModel: FieldRef<"DriverProfile", 'String'>
    readonly truckYear: FieldRef<"DriverProfile", 'Int'>
    readonly plateNumber: FieldRef<"DriverProfile", 'String'>
    readonly capacityTons: FieldRef<"DriverProfile", 'Float'>
    readonly lengthMeters: FieldRef<"DriverProfile", 'Float'>
    readonly ratePerKm: FieldRef<"DriverProfile", 'Float'>
    readonly minimumCharge: FieldRef<"DriverProfile", 'Float'>
    readonly baseState: FieldRef<"DriverProfile", 'String'>
    readonly baseCity: FieldRef<"DriverProfile", 'String'>
    readonly totalTrips: FieldRef<"DriverProfile", 'Int'>
    readonly avgRating: FieldRef<"DriverProfile", 'Float'>
    readonly totalEarnings: FieldRef<"DriverProfile", 'Float'>
    readonly createdAt: FieldRef<"DriverProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"DriverProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DriverProfile findUnique
   */
  export type DriverProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfile to fetch.
     */
    where: DriverProfileWhereUniqueInput
  }

  /**
   * DriverProfile findUniqueOrThrow
   */
  export type DriverProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfile to fetch.
     */
    where: DriverProfileWhereUniqueInput
  }

  /**
   * DriverProfile findFirst
   */
  export type DriverProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfile to fetch.
     */
    where?: DriverProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverProfiles to fetch.
     */
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverProfiles.
     */
    cursor?: DriverProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverProfiles.
     */
    distinct?: DriverProfileScalarFieldEnum | DriverProfileScalarFieldEnum[]
  }

  /**
   * DriverProfile findFirstOrThrow
   */
  export type DriverProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfile to fetch.
     */
    where?: DriverProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverProfiles to fetch.
     */
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverProfiles.
     */
    cursor?: DriverProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverProfiles.
     */
    distinct?: DriverProfileScalarFieldEnum | DriverProfileScalarFieldEnum[]
  }

  /**
   * DriverProfile findMany
   */
  export type DriverProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfiles to fetch.
     */
    where?: DriverProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverProfiles to fetch.
     */
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverProfiles.
     */
    cursor?: DriverProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverProfiles.
     */
    distinct?: DriverProfileScalarFieldEnum | DriverProfileScalarFieldEnum[]
  }

  /**
   * DriverProfile create
   */
  export type DriverProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverProfile.
     */
    data: XOR<DriverProfileCreateInput, DriverProfileUncheckedCreateInput>
  }

  /**
   * DriverProfile createMany
   */
  export type DriverProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverProfiles.
     */
    data: DriverProfileCreateManyInput | DriverProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverProfile createManyAndReturn
   */
  export type DriverProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * The data used to create many DriverProfiles.
     */
    data: DriverProfileCreateManyInput | DriverProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverProfile update
   */
  export type DriverProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverProfile.
     */
    data: XOR<DriverProfileUpdateInput, DriverProfileUncheckedUpdateInput>
    /**
     * Choose, which DriverProfile to update.
     */
    where: DriverProfileWhereUniqueInput
  }

  /**
   * DriverProfile updateMany
   */
  export type DriverProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverProfiles.
     */
    data: XOR<DriverProfileUpdateManyMutationInput, DriverProfileUncheckedUpdateManyInput>
    /**
     * Filter which DriverProfiles to update
     */
    where?: DriverProfileWhereInput
    /**
     * Limit how many DriverProfiles to update.
     */
    limit?: number
  }

  /**
   * DriverProfile updateManyAndReturn
   */
  export type DriverProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * The data used to update DriverProfiles.
     */
    data: XOR<DriverProfileUpdateManyMutationInput, DriverProfileUncheckedUpdateManyInput>
    /**
     * Filter which DriverProfiles to update
     */
    where?: DriverProfileWhereInput
    /**
     * Limit how many DriverProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverProfile upsert
   */
  export type DriverProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverProfile to update in case it exists.
     */
    where: DriverProfileWhereUniqueInput
    /**
     * In case the DriverProfile found by the `where` argument doesn't exist, create a new DriverProfile with this data.
     */
    create: XOR<DriverProfileCreateInput, DriverProfileUncheckedCreateInput>
    /**
     * In case the DriverProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverProfileUpdateInput, DriverProfileUncheckedUpdateInput>
  }

  /**
   * DriverProfile delete
   */
  export type DriverProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter which DriverProfile to delete.
     */
    where: DriverProfileWhereUniqueInput
  }

  /**
   * DriverProfile deleteMany
   */
  export type DriverProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverProfiles to delete
     */
    where?: DriverProfileWhereInput
    /**
     * Limit how many DriverProfiles to delete.
     */
    limit?: number
  }

  /**
   * DriverProfile.bookings
   */
  export type DriverProfile$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * DriverProfile.servicesRoutes
   */
  export type DriverProfile$servicesRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * DriverProfile without action
   */
  export type DriverProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    estimatedDays: number | null
  }

  export type RouteSumAggregateOutputType = {
    estimatedDays: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
    driverProfileId: string | null
    originState: string | null
    originCity: string | null
    destState: string | null
    destCity: string | null
    estimatedDays: number | null
    createdAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
    driverProfileId: string | null
    originState: string | null
    originCity: string | null
    destState: string | null
    destCity: string | null
    estimatedDays: number | null
    createdAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    driverProfileId: number
    originState: number
    originCity: number
    destState: number
    destCity: number
    estimatedDays: number
    createdAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    estimatedDays?: true
  }

  export type RouteSumAggregateInputType = {
    estimatedDays?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    driverProfileId?: true
    originState?: true
    originCity?: true
    destState?: true
    destCity?: true
    estimatedDays?: true
    createdAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    driverProfileId?: true
    originState?: true
    originCity?: true
    destState?: true
    destCity?: true
    estimatedDays?: true
    createdAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    driverProfileId?: true
    originState?: true
    originCity?: true
    destState?: true
    destCity?: true
    estimatedDays?: true
    createdAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    driverProfileId: string
    originState: string
    originCity: string | null
    destState: string
    destCity: string | null
    estimatedDays: number
    createdAt: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverProfileId?: boolean
    originState?: boolean
    originCity?: boolean
    destState?: boolean
    destCity?: boolean
    estimatedDays?: boolean
    createdAt?: boolean
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverProfileId?: boolean
    originState?: boolean
    originCity?: boolean
    destState?: boolean
    destCity?: boolean
    estimatedDays?: boolean
    createdAt?: boolean
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverProfileId?: boolean
    originState?: boolean
    originCity?: boolean
    destState?: boolean
    destCity?: boolean
    estimatedDays?: boolean
    createdAt?: boolean
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    driverProfileId?: boolean
    originState?: boolean
    originCity?: boolean
    destState?: boolean
    destCity?: boolean
    estimatedDays?: boolean
    createdAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverProfileId" | "originState" | "originCity" | "destState" | "destCity" | "estimatedDays" | "createdAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      driverProfile: Prisma.$DriverProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverProfileId: string
      originState: string
      originCity: string | null
      destState: string
      destCity: string | null
      estimatedDays: number
      createdAt: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
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
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
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
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driverProfile<T extends DriverProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfileDefaultArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
    readonly driverProfileId: FieldRef<"Route", 'String'>
    readonly originState: FieldRef<"Route", 'String'>
    readonly originCity: FieldRef<"Route", 'String'>
    readonly destState: FieldRef<"Route", 'String'>
    readonly destCity: FieldRef<"Route", 'String'>
    readonly estimatedDays: FieldRef<"Route", 'Int'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model CargoListing
   */

  export type AggregateCargoListing = {
    _count: CargoListingCountAggregateOutputType | null
    _avg: CargoListingAvgAggregateOutputType | null
    _sum: CargoListingSumAggregateOutputType | null
    _min: CargoListingMinAggregateOutputType | null
    _max: CargoListingMaxAggregateOutputType | null
  }

  export type CargoListingAvgAggregateOutputType = {
    weightTons: number | null
    lengthMeters: number | null
    budget: number | null
  }

  export type CargoListingSumAggregateOutputType = {
    weightTons: number | null
    lengthMeters: number | null
    budget: number | null
  }

  export type CargoListingMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    cargoType: $Enums.CargoType | null
    weightTons: number | null
    lengthMeters: number | null
    originState: string | null
    originCity: string | null
    originAddress: string | null
    destState: string | null
    destCity: string | null
    destAddress: string | null
    requiredTruck: $Enums.TruckType | null
    neededBy: Date | null
    budget: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CargoListingMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    cargoType: $Enums.CargoType | null
    weightTons: number | null
    lengthMeters: number | null
    originState: string | null
    originCity: string | null
    originAddress: string | null
    destState: string | null
    destCity: string | null
    destAddress: string | null
    requiredTruck: $Enums.TruckType | null
    neededBy: Date | null
    budget: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CargoListingCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    description: number
    cargoType: number
    weightTons: number
    lengthMeters: number
    originState: number
    originCity: number
    originAddress: number
    destState: number
    destCity: number
    destAddress: number
    requiredTruck: number
    neededBy: number
    budget: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CargoListingAvgAggregateInputType = {
    weightTons?: true
    lengthMeters?: true
    budget?: true
  }

  export type CargoListingSumAggregateInputType = {
    weightTons?: true
    lengthMeters?: true
    budget?: true
  }

  export type CargoListingMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    cargoType?: true
    weightTons?: true
    lengthMeters?: true
    originState?: true
    originCity?: true
    originAddress?: true
    destState?: true
    destCity?: true
    destAddress?: true
    requiredTruck?: true
    neededBy?: true
    budget?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CargoListingMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    cargoType?: true
    weightTons?: true
    lengthMeters?: true
    originState?: true
    originCity?: true
    originAddress?: true
    destState?: true
    destCity?: true
    destAddress?: true
    requiredTruck?: true
    neededBy?: true
    budget?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CargoListingCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    cargoType?: true
    weightTons?: true
    lengthMeters?: true
    originState?: true
    originCity?: true
    originAddress?: true
    destState?: true
    destCity?: true
    destAddress?: true
    requiredTruck?: true
    neededBy?: true
    budget?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CargoListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CargoListing to aggregate.
     */
    where?: CargoListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargoListings to fetch.
     */
    orderBy?: CargoListingOrderByWithRelationInput | CargoListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargoListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargoListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargoListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CargoListings
    **/
    _count?: true | CargoListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoListingMaxAggregateInputType
  }

  export type GetCargoListingAggregateType<T extends CargoListingAggregateArgs> = {
        [P in keyof T & keyof AggregateCargoListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargoListing[P]>
      : GetScalarType<T[P], AggregateCargoListing[P]>
  }




  export type CargoListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoListingWhereInput
    orderBy?: CargoListingOrderByWithAggregationInput | CargoListingOrderByWithAggregationInput[]
    by: CargoListingScalarFieldEnum[] | CargoListingScalarFieldEnum
    having?: CargoListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoListingCountAggregateInputType | true
    _avg?: CargoListingAvgAggregateInputType
    _sum?: CargoListingSumAggregateInputType
    _min?: CargoListingMinAggregateInputType
    _max?: CargoListingMaxAggregateInputType
  }

  export type CargoListingGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    description: string | null
    cargoType: $Enums.CargoType
    weightTons: number
    lengthMeters: number | null
    originState: string
    originCity: string
    originAddress: string | null
    destState: string
    destCity: string
    destAddress: string | null
    requiredTruck: $Enums.TruckType | null
    neededBy: Date
    budget: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CargoListingCountAggregateOutputType | null
    _avg: CargoListingAvgAggregateOutputType | null
    _sum: CargoListingSumAggregateOutputType | null
    _min: CargoListingMinAggregateOutputType | null
    _max: CargoListingMaxAggregateOutputType | null
  }

  type GetCargoListingGroupByPayload<T extends CargoListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoListingGroupByOutputType[P]>
            : GetScalarType<T[P], CargoListingGroupByOutputType[P]>
        }
      >
    >


  export type CargoListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    cargoType?: boolean
    weightTons?: boolean
    lengthMeters?: boolean
    originState?: boolean
    originCity?: boolean
    originAddress?: boolean
    destState?: boolean
    destCity?: boolean
    destAddress?: boolean
    requiredTruck?: boolean
    neededBy?: boolean
    budget?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | CargoListing$bookingsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CargoListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargoListing"]>

  export type CargoListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    cargoType?: boolean
    weightTons?: boolean
    lengthMeters?: boolean
    originState?: boolean
    originCity?: boolean
    originAddress?: boolean
    destState?: boolean
    destCity?: boolean
    destAddress?: boolean
    requiredTruck?: boolean
    neededBy?: boolean
    budget?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargoListing"]>

  export type CargoListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    cargoType?: boolean
    weightTons?: boolean
    lengthMeters?: boolean
    originState?: boolean
    originCity?: boolean
    originAddress?: boolean
    destState?: boolean
    destCity?: boolean
    destAddress?: boolean
    requiredTruck?: boolean
    neededBy?: boolean
    budget?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargoListing"]>

  export type CargoListingSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    cargoType?: boolean
    weightTons?: boolean
    lengthMeters?: boolean
    originState?: boolean
    originCity?: boolean
    originAddress?: boolean
    destState?: boolean
    destCity?: boolean
    destAddress?: boolean
    requiredTruck?: boolean
    neededBy?: boolean
    budget?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CargoListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "description" | "cargoType" | "weightTons" | "lengthMeters" | "originState" | "originCity" | "originAddress" | "destState" | "destCity" | "destAddress" | "requiredTruck" | "neededBy" | "budget" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["cargoListing"]>
  export type CargoListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CargoListing$bookingsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CargoListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CargoListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CargoListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CargoListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CargoListing"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      description: string | null
      cargoType: $Enums.CargoType
      weightTons: number
      lengthMeters: number | null
      originState: string
      originCity: string
      originAddress: string | null
      destState: string
      destCity: string
      destAddress: string | null
      requiredTruck: $Enums.TruckType | null
      neededBy: Date
      budget: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cargoListing"]>
    composites: {}
  }

  type CargoListingGetPayload<S extends boolean | null | undefined | CargoListingDefaultArgs> = $Result.GetResult<Prisma.$CargoListingPayload, S>

  type CargoListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargoListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoListingCountAggregateInputType | true
    }

  export interface CargoListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CargoListing'], meta: { name: 'CargoListing' } }
    /**
     * Find zero or one CargoListing that matches the filter.
     * @param {CargoListingFindUniqueArgs} args - Arguments to find a CargoListing
     * @example
     * // Get one CargoListing
     * const cargoListing = await prisma.cargoListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargoListingFindUniqueArgs>(args: SelectSubset<T, CargoListingFindUniqueArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CargoListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargoListingFindUniqueOrThrowArgs} args - Arguments to find a CargoListing
     * @example
     * // Get one CargoListing
     * const cargoListing = await prisma.cargoListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargoListingFindUniqueOrThrowArgs>(args: SelectSubset<T, CargoListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CargoListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoListingFindFirstArgs} args - Arguments to find a CargoListing
     * @example
     * // Get one CargoListing
     * const cargoListing = await prisma.cargoListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargoListingFindFirstArgs>(args?: SelectSubset<T, CargoListingFindFirstArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CargoListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoListingFindFirstOrThrowArgs} args - Arguments to find a CargoListing
     * @example
     * // Get one CargoListing
     * const cargoListing = await prisma.cargoListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargoListingFindFirstOrThrowArgs>(args?: SelectSubset<T, CargoListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CargoListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CargoListings
     * const cargoListings = await prisma.cargoListing.findMany()
     * 
     * // Get first 10 CargoListings
     * const cargoListings = await prisma.cargoListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargoListingWithIdOnly = await prisma.cargoListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargoListingFindManyArgs>(args?: SelectSubset<T, CargoListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CargoListing.
     * @param {CargoListingCreateArgs} args - Arguments to create a CargoListing.
     * @example
     * // Create one CargoListing
     * const CargoListing = await prisma.cargoListing.create({
     *   data: {
     *     // ... data to create a CargoListing
     *   }
     * })
     * 
     */
    create<T extends CargoListingCreateArgs>(args: SelectSubset<T, CargoListingCreateArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CargoListings.
     * @param {CargoListingCreateManyArgs} args - Arguments to create many CargoListings.
     * @example
     * // Create many CargoListings
     * const cargoListing = await prisma.cargoListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargoListingCreateManyArgs>(args?: SelectSubset<T, CargoListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CargoListings and returns the data saved in the database.
     * @param {CargoListingCreateManyAndReturnArgs} args - Arguments to create many CargoListings.
     * @example
     * // Create many CargoListings
     * const cargoListing = await prisma.cargoListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CargoListings and only return the `id`
     * const cargoListingWithIdOnly = await prisma.cargoListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CargoListingCreateManyAndReturnArgs>(args?: SelectSubset<T, CargoListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CargoListing.
     * @param {CargoListingDeleteArgs} args - Arguments to delete one CargoListing.
     * @example
     * // Delete one CargoListing
     * const CargoListing = await prisma.cargoListing.delete({
     *   where: {
     *     // ... filter to delete one CargoListing
     *   }
     * })
     * 
     */
    delete<T extends CargoListingDeleteArgs>(args: SelectSubset<T, CargoListingDeleteArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CargoListing.
     * @param {CargoListingUpdateArgs} args - Arguments to update one CargoListing.
     * @example
     * // Update one CargoListing
     * const cargoListing = await prisma.cargoListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargoListingUpdateArgs>(args: SelectSubset<T, CargoListingUpdateArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CargoListings.
     * @param {CargoListingDeleteManyArgs} args - Arguments to filter CargoListings to delete.
     * @example
     * // Delete a few CargoListings
     * const { count } = await prisma.cargoListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargoListingDeleteManyArgs>(args?: SelectSubset<T, CargoListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CargoListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CargoListings
     * const cargoListing = await prisma.cargoListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargoListingUpdateManyArgs>(args: SelectSubset<T, CargoListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CargoListings and returns the data updated in the database.
     * @param {CargoListingUpdateManyAndReturnArgs} args - Arguments to update many CargoListings.
     * @example
     * // Update many CargoListings
     * const cargoListing = await prisma.cargoListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CargoListings and only return the `id`
     * const cargoListingWithIdOnly = await prisma.cargoListing.updateManyAndReturn({
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
    updateManyAndReturn<T extends CargoListingUpdateManyAndReturnArgs>(args: SelectSubset<T, CargoListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CargoListing.
     * @param {CargoListingUpsertArgs} args - Arguments to update or create a CargoListing.
     * @example
     * // Update or create a CargoListing
     * const cargoListing = await prisma.cargoListing.upsert({
     *   create: {
     *     // ... data to create a CargoListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CargoListing we want to update
     *   }
     * })
     */
    upsert<T extends CargoListingUpsertArgs>(args: SelectSubset<T, CargoListingUpsertArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CargoListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoListingCountArgs} args - Arguments to filter CargoListings to count.
     * @example
     * // Count the number of CargoListings
     * const count = await prisma.cargoListing.count({
     *   where: {
     *     // ... the filter for the CargoListings we want to count
     *   }
     * })
    **/
    count<T extends CargoListingCountArgs>(
      args?: Subset<T, CargoListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CargoListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CargoListingAggregateArgs>(args: Subset<T, CargoListingAggregateArgs>): Prisma.PrismaPromise<GetCargoListingAggregateType<T>>

    /**
     * Group by CargoListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoListingGroupByArgs} args - Group by arguments.
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
      T extends CargoListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargoListingGroupByArgs['orderBy'] }
        : { orderBy?: CargoListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CargoListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CargoListing model
   */
  readonly fields: CargoListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CargoListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargoListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends CargoListing$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, CargoListing$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CargoListing model
   */
  interface CargoListingFieldRefs {
    readonly id: FieldRef<"CargoListing", 'String'>
    readonly ownerId: FieldRef<"CargoListing", 'String'>
    readonly title: FieldRef<"CargoListing", 'String'>
    readonly description: FieldRef<"CargoListing", 'String'>
    readonly cargoType: FieldRef<"CargoListing", 'CargoType'>
    readonly weightTons: FieldRef<"CargoListing", 'Float'>
    readonly lengthMeters: FieldRef<"CargoListing", 'Float'>
    readonly originState: FieldRef<"CargoListing", 'String'>
    readonly originCity: FieldRef<"CargoListing", 'String'>
    readonly originAddress: FieldRef<"CargoListing", 'String'>
    readonly destState: FieldRef<"CargoListing", 'String'>
    readonly destCity: FieldRef<"CargoListing", 'String'>
    readonly destAddress: FieldRef<"CargoListing", 'String'>
    readonly requiredTruck: FieldRef<"CargoListing", 'TruckType'>
    readonly neededBy: FieldRef<"CargoListing", 'DateTime'>
    readonly budget: FieldRef<"CargoListing", 'Float'>
    readonly isActive: FieldRef<"CargoListing", 'Boolean'>
    readonly createdAt: FieldRef<"CargoListing", 'DateTime'>
    readonly updatedAt: FieldRef<"CargoListing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CargoListing findUnique
   */
  export type CargoListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * Filter, which CargoListing to fetch.
     */
    where: CargoListingWhereUniqueInput
  }

  /**
   * CargoListing findUniqueOrThrow
   */
  export type CargoListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * Filter, which CargoListing to fetch.
     */
    where: CargoListingWhereUniqueInput
  }

  /**
   * CargoListing findFirst
   */
  export type CargoListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * Filter, which CargoListing to fetch.
     */
    where?: CargoListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargoListings to fetch.
     */
    orderBy?: CargoListingOrderByWithRelationInput | CargoListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CargoListings.
     */
    cursor?: CargoListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargoListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargoListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CargoListings.
     */
    distinct?: CargoListingScalarFieldEnum | CargoListingScalarFieldEnum[]
  }

  /**
   * CargoListing findFirstOrThrow
   */
  export type CargoListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * Filter, which CargoListing to fetch.
     */
    where?: CargoListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargoListings to fetch.
     */
    orderBy?: CargoListingOrderByWithRelationInput | CargoListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CargoListings.
     */
    cursor?: CargoListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargoListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargoListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CargoListings.
     */
    distinct?: CargoListingScalarFieldEnum | CargoListingScalarFieldEnum[]
  }

  /**
   * CargoListing findMany
   */
  export type CargoListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * Filter, which CargoListings to fetch.
     */
    where?: CargoListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargoListings to fetch.
     */
    orderBy?: CargoListingOrderByWithRelationInput | CargoListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CargoListings.
     */
    cursor?: CargoListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargoListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargoListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CargoListings.
     */
    distinct?: CargoListingScalarFieldEnum | CargoListingScalarFieldEnum[]
  }

  /**
   * CargoListing create
   */
  export type CargoListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * The data needed to create a CargoListing.
     */
    data: XOR<CargoListingCreateInput, CargoListingUncheckedCreateInput>
  }

  /**
   * CargoListing createMany
   */
  export type CargoListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CargoListings.
     */
    data: CargoListingCreateManyInput | CargoListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CargoListing createManyAndReturn
   */
  export type CargoListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * The data used to create many CargoListings.
     */
    data: CargoListingCreateManyInput | CargoListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CargoListing update
   */
  export type CargoListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * The data needed to update a CargoListing.
     */
    data: XOR<CargoListingUpdateInput, CargoListingUncheckedUpdateInput>
    /**
     * Choose, which CargoListing to update.
     */
    where: CargoListingWhereUniqueInput
  }

  /**
   * CargoListing updateMany
   */
  export type CargoListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CargoListings.
     */
    data: XOR<CargoListingUpdateManyMutationInput, CargoListingUncheckedUpdateManyInput>
    /**
     * Filter which CargoListings to update
     */
    where?: CargoListingWhereInput
    /**
     * Limit how many CargoListings to update.
     */
    limit?: number
  }

  /**
   * CargoListing updateManyAndReturn
   */
  export type CargoListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * The data used to update CargoListings.
     */
    data: XOR<CargoListingUpdateManyMutationInput, CargoListingUncheckedUpdateManyInput>
    /**
     * Filter which CargoListings to update
     */
    where?: CargoListingWhereInput
    /**
     * Limit how many CargoListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CargoListing upsert
   */
  export type CargoListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * The filter to search for the CargoListing to update in case it exists.
     */
    where: CargoListingWhereUniqueInput
    /**
     * In case the CargoListing found by the `where` argument doesn't exist, create a new CargoListing with this data.
     */
    create: XOR<CargoListingCreateInput, CargoListingUncheckedCreateInput>
    /**
     * In case the CargoListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargoListingUpdateInput, CargoListingUncheckedUpdateInput>
  }

  /**
   * CargoListing delete
   */
  export type CargoListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
    /**
     * Filter which CargoListing to delete.
     */
    where: CargoListingWhereUniqueInput
  }

  /**
   * CargoListing deleteMany
   */
  export type CargoListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CargoListings to delete
     */
    where?: CargoListingWhereInput
    /**
     * Limit how many CargoListings to delete.
     */
    limit?: number
  }

  /**
   * CargoListing.bookings
   */
  export type CargoListing$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * CargoListing without action
   */
  export type CargoListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoListing
     */
    select?: CargoListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargoListing
     */
    omit?: CargoListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoListingInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    agreedAmount: number | null
    commission: number | null
    amount: number | null
  }

  export type BookingSumAggregateOutputType = {
    agreedAmount: number | null
    commission: number | null
    amount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    cargoListingId: string | null
    ownerId: string | null
    driverId: string | null
    driverProfileId: string | null
    status: $Enums.BookingStatus | null
    agreedAmount: number | null
    commission: number | null
    amount: number | null
    pickupDate: Date | null
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    notes: string | null
    acceptedAt: Date | null
    declinedAt: Date | null
    declineReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    cargoListingId: string | null
    ownerId: string | null
    driverId: string | null
    driverProfileId: string | null
    status: $Enums.BookingStatus | null
    agreedAmount: number | null
    commission: number | null
    amount: number | null
    pickupDate: Date | null
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    notes: string | null
    acceptedAt: Date | null
    declinedAt: Date | null
    declineReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    cargoListingId: number
    ownerId: number
    driverId: number
    driverProfileId: number
    status: number
    agreedAmount: number
    commission: number
    amount: number
    pickupDate: number
    estimatedDelivery: number
    actualDelivery: number
    notes: number
    acceptedAt: number
    declinedAt: number
    declineReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    agreedAmount?: true
    commission?: true
    amount?: true
  }

  export type BookingSumAggregateInputType = {
    agreedAmount?: true
    commission?: true
    amount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    cargoListingId?: true
    ownerId?: true
    driverId?: true
    driverProfileId?: true
    status?: true
    agreedAmount?: true
    commission?: true
    amount?: true
    pickupDate?: true
    estimatedDelivery?: true
    actualDelivery?: true
    notes?: true
    acceptedAt?: true
    declinedAt?: true
    declineReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    cargoListingId?: true
    ownerId?: true
    driverId?: true
    driverProfileId?: true
    status?: true
    agreedAmount?: true
    commission?: true
    amount?: true
    pickupDate?: true
    estimatedDelivery?: true
    actualDelivery?: true
    notes?: true
    acceptedAt?: true
    declinedAt?: true
    declineReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    cargoListingId?: true
    ownerId?: true
    driverId?: true
    driverProfileId?: true
    status?: true
    agreedAmount?: true
    commission?: true
    amount?: true
    pickupDate?: true
    estimatedDelivery?: true
    actualDelivery?: true
    notes?: true
    acceptedAt?: true
    declinedAt?: true
    declineReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    cargoListingId: string
    ownerId: string
    driverId: string
    driverProfileId: string
    status: $Enums.BookingStatus
    agreedAmount: number
    commission: number
    amount: number
    pickupDate: Date
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    notes: string | null
    acceptedAt: Date | null
    declinedAt: Date | null
    declineReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargoListingId?: boolean
    ownerId?: boolean
    driverId?: boolean
    driverProfileId?: boolean
    status?: boolean
    agreedAmount?: boolean
    commission?: boolean
    amount?: boolean
    pickupDate?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    notes?: boolean
    acceptedAt?: boolean
    declinedAt?: boolean
    declineReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cargoListing?: boolean | CargoListingDefaultArgs<ExtArgs>
    driver?: boolean | UserDefaultArgs<ExtArgs>
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
    transaction?: boolean | Booking$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargoListingId?: boolean
    ownerId?: boolean
    driverId?: boolean
    driverProfileId?: boolean
    status?: boolean
    agreedAmount?: boolean
    commission?: boolean
    amount?: boolean
    pickupDate?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    notes?: boolean
    acceptedAt?: boolean
    declinedAt?: boolean
    declineReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cargoListing?: boolean | CargoListingDefaultArgs<ExtArgs>
    driver?: boolean | UserDefaultArgs<ExtArgs>
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargoListingId?: boolean
    ownerId?: boolean
    driverId?: boolean
    driverProfileId?: boolean
    status?: boolean
    agreedAmount?: boolean
    commission?: boolean
    amount?: boolean
    pickupDate?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    notes?: boolean
    acceptedAt?: boolean
    declinedAt?: boolean
    declineReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cargoListing?: boolean | CargoListingDefaultArgs<ExtArgs>
    driver?: boolean | UserDefaultArgs<ExtArgs>
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    cargoListingId?: boolean
    ownerId?: boolean
    driverId?: boolean
    driverProfileId?: boolean
    status?: boolean
    agreedAmount?: boolean
    commission?: boolean
    amount?: boolean
    pickupDate?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    notes?: boolean
    acceptedAt?: boolean
    declinedAt?: boolean
    declineReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cargoListingId" | "ownerId" | "driverId" | "driverProfileId" | "status" | "agreedAmount" | "commission" | "amount" | "pickupDate" | "estimatedDelivery" | "actualDelivery" | "notes" | "acceptedAt" | "declinedAt" | "declineReason" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargoListing?: boolean | CargoListingDefaultArgs<ExtArgs>
    driver?: boolean | UserDefaultArgs<ExtArgs>
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
    transaction?: boolean | Booking$transactionArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargoListing?: boolean | CargoListingDefaultArgs<ExtArgs>
    driver?: boolean | UserDefaultArgs<ExtArgs>
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargoListing?: boolean | CargoListingDefaultArgs<ExtArgs>
    driver?: boolean | UserDefaultArgs<ExtArgs>
    driverProfile?: boolean | DriverProfileDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      cargoListing: Prisma.$CargoListingPayload<ExtArgs>
      driver: Prisma.$UserPayload<ExtArgs>
      driverProfile: Prisma.$DriverProfilePayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs> | null
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cargoListingId: string
      ownerId: string
      driverId: string
      driverProfileId: string
      status: $Enums.BookingStatus
      agreedAmount: number
      commission: number
      amount: number
      pickupDate: Date
      estimatedDelivery: Date | null
      actualDelivery: Date | null
      notes: string | null
      acceptedAt: Date | null
      declinedAt: Date | null
      declineReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cargoListing<T extends CargoListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CargoListingDefaultArgs<ExtArgs>>): Prisma__CargoListingClient<$Result.GetResult<Prisma.$CargoListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driverProfile<T extends DriverProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfileDefaultArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends Booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaction<T extends Booking$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Booking$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly cargoListingId: FieldRef<"Booking", 'String'>
    readonly ownerId: FieldRef<"Booking", 'String'>
    readonly driverId: FieldRef<"Booking", 'String'>
    readonly driverProfileId: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly agreedAmount: FieldRef<"Booking", 'Float'>
    readonly commission: FieldRef<"Booking", 'Float'>
    readonly amount: FieldRef<"Booking", 'Float'>
    readonly pickupDate: FieldRef<"Booking", 'DateTime'>
    readonly estimatedDelivery: FieldRef<"Booking", 'DateTime'>
    readonly actualDelivery: FieldRef<"Booking", 'DateTime'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly acceptedAt: FieldRef<"Booking", 'DateTime'>
    readonly declinedAt: FieldRef<"Booking", 'DateTime'>
    readonly declineReason: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.review
   */
  export type Booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Booking.transaction
   */
  export type Booking$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
    amountKobo: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
    amountKobo: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    merchantCode: string | null
    payItemId: string | null
    transactionReference: string | null
    paymentReference: string | null
    amount: number | null
    amountKobo: number | null
    currency: string | null
    status: $Enums.TransactionStatus | null
    channel: string | null
    responseCode: string | null
    responseDescription: string | null
    initiatedAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    merchantCode: string | null
    payItemId: string | null
    transactionReference: string | null
    paymentReference: string | null
    amount: number | null
    amountKobo: number | null
    currency: string | null
    status: $Enums.TransactionStatus | null
    channel: string | null
    responseCode: string | null
    responseDescription: string | null
    initiatedAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    bookingId: number
    merchantCode: number
    payItemId: number
    transactionReference: number
    paymentReference: number
    amount: number
    amountKobo: number
    currency: number
    status: number
    channel: number
    responseCode: number
    responseDescription: number
    initiatedAt: number
    completedAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
    amountKobo?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
    amountKobo?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    bookingId?: true
    merchantCode?: true
    payItemId?: true
    transactionReference?: true
    paymentReference?: true
    amount?: true
    amountKobo?: true
    currency?: true
    status?: true
    channel?: true
    responseCode?: true
    responseDescription?: true
    initiatedAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    bookingId?: true
    merchantCode?: true
    payItemId?: true
    transactionReference?: true
    paymentReference?: true
    amount?: true
    amountKobo?: true
    currency?: true
    status?: true
    channel?: true
    responseCode?: true
    responseDescription?: true
    initiatedAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    bookingId?: true
    merchantCode?: true
    payItemId?: true
    transactionReference?: true
    paymentReference?: true
    amount?: true
    amountKobo?: true
    currency?: true
    status?: true
    channel?: true
    responseCode?: true
    responseDescription?: true
    initiatedAt?: true
    completedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    bookingId: string
    merchantCode: string
    payItemId: string
    transactionReference: string
    paymentReference: string | null
    amount: number
    amountKobo: number
    currency: string
    status: $Enums.TransactionStatus
    channel: string | null
    responseCode: string | null
    responseDescription: string | null
    initiatedAt: Date
    completedAt: Date | null
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    merchantCode?: boolean
    payItemId?: boolean
    transactionReference?: boolean
    paymentReference?: boolean
    amount?: boolean
    amountKobo?: boolean
    currency?: boolean
    status?: boolean
    channel?: boolean
    responseCode?: boolean
    responseDescription?: boolean
    initiatedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    merchantCode?: boolean
    payItemId?: boolean
    transactionReference?: boolean
    paymentReference?: boolean
    amount?: boolean
    amountKobo?: boolean
    currency?: boolean
    status?: boolean
    channel?: boolean
    responseCode?: boolean
    responseDescription?: boolean
    initiatedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    merchantCode?: boolean
    payItemId?: boolean
    transactionReference?: boolean
    paymentReference?: boolean
    amount?: boolean
    amountKobo?: boolean
    currency?: boolean
    status?: boolean
    channel?: boolean
    responseCode?: boolean
    responseDescription?: boolean
    initiatedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    bookingId?: boolean
    merchantCode?: boolean
    payItemId?: boolean
    transactionReference?: boolean
    paymentReference?: boolean
    amount?: boolean
    amountKobo?: boolean
    currency?: boolean
    status?: boolean
    channel?: boolean
    responseCode?: boolean
    responseDescription?: boolean
    initiatedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "merchantCode" | "payItemId" | "transactionReference" | "paymentReference" | "amount" | "amountKobo" | "currency" | "status" | "channel" | "responseCode" | "responseDescription" | "initiatedAt" | "completedAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      merchantCode: string
      payItemId: string
      transactionReference: string
      paymentReference: string | null
      amount: number
      amountKobo: number
      currency: string
      status: $Enums.TransactionStatus
      channel: string | null
      responseCode: string | null
      responseDescription: string | null
      initiatedAt: Date
      completedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly bookingId: FieldRef<"Transaction", 'String'>
    readonly merchantCode: FieldRef<"Transaction", 'String'>
    readonly payItemId: FieldRef<"Transaction", 'String'>
    readonly transactionReference: FieldRef<"Transaction", 'String'>
    readonly paymentReference: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly amountKobo: FieldRef<"Transaction", 'Int'>
    readonly currency: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly channel: FieldRef<"Transaction", 'String'>
    readonly responseCode: FieldRef<"Transaction", 'String'>
    readonly responseDescription: FieldRef<"Transaction", 'String'>
    readonly initiatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly completedAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    giverId: string | null
    receiverId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    giverId: string | null
    receiverId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    bookingId: number
    giverId: number
    receiverId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    bookingId?: true
    giverId?: true
    receiverId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    bookingId?: true
    giverId?: true
    receiverId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    bookingId?: true
    giverId?: true
    receiverId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    bookingId: string
    giverId: string
    receiverId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    giverId?: boolean
    receiverId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    giverId?: boolean
    receiverId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    giverId?: boolean
    receiverId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    bookingId?: boolean
    giverId?: boolean
    receiverId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "giverId" | "receiverId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      giver: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      giverId: string
      receiverId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    giver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly bookingId: FieldRef<"Review", 'String'>
    readonly giverId: FieldRef<"Review", 'String'>
    readonly receiverId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
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
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    phone: 'phone',
    image: 'image',
    role: 'role',
    onboardingComplete: 'onboardingComplete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const DriverProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    licenseNumber: 'licenseNumber',
    licenseExpiry: 'licenseExpiry',
    yearsExperience: 'yearsExperience',
    bio: 'bio',
    isVerified: 'isVerified',
    isAvailable: 'isAvailable',
    truckType: 'truckType',
    truckModel: 'truckModel',
    truckYear: 'truckYear',
    plateNumber: 'plateNumber',
    capacityTons: 'capacityTons',
    lengthMeters: 'lengthMeters',
    ratePerKm: 'ratePerKm',
    minimumCharge: 'minimumCharge',
    baseState: 'baseState',
    baseCity: 'baseCity',
    totalTrips: 'totalTrips',
    avgRating: 'avgRating',
    totalEarnings: 'totalEarnings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverProfileScalarFieldEnum = (typeof DriverProfileScalarFieldEnum)[keyof typeof DriverProfileScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    driverProfileId: 'driverProfileId',
    originState: 'originState',
    originCity: 'originCity',
    destState: 'destState',
    destCity: 'destCity',
    estimatedDays: 'estimatedDays',
    createdAt: 'createdAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const CargoListingScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    description: 'description',
    cargoType: 'cargoType',
    weightTons: 'weightTons',
    lengthMeters: 'lengthMeters',
    originState: 'originState',
    originCity: 'originCity',
    originAddress: 'originAddress',
    destState: 'destState',
    destCity: 'destCity',
    destAddress: 'destAddress',
    requiredTruck: 'requiredTruck',
    neededBy: 'neededBy',
    budget: 'budget',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CargoListingScalarFieldEnum = (typeof CargoListingScalarFieldEnum)[keyof typeof CargoListingScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    cargoListingId: 'cargoListingId',
    ownerId: 'ownerId',
    driverId: 'driverId',
    driverProfileId: 'driverProfileId',
    status: 'status',
    agreedAmount: 'agreedAmount',
    commission: 'commission',
    amount: 'amount',
    pickupDate: 'pickupDate',
    estimatedDelivery: 'estimatedDelivery',
    actualDelivery: 'actualDelivery',
    notes: 'notes',
    acceptedAt: 'acceptedAt',
    declinedAt: 'declinedAt',
    declineReason: 'declineReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    merchantCode: 'merchantCode',
    payItemId: 'payItemId',
    transactionReference: 'transactionReference',
    paymentReference: 'paymentReference',
    amount: 'amount',
    amountKobo: 'amountKobo',
    currency: 'currency',
    status: 'status',
    channel: 'channel',
    responseCode: 'responseCode',
    responseDescription: 'responseDescription',
    initiatedAt: 'initiatedAt',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    giverId: 'giverId',
    receiverId: 'receiverId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TruckType'
   */
  export type EnumTruckTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TruckType'>
    


  /**
   * Reference to a field of type 'TruckType[]'
   */
  export type ListEnumTruckTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TruckType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CargoType'
   */
  export type EnumCargoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoType'>
    


  /**
   * Reference to a field of type 'CargoType[]'
   */
  export type ListEnumCargoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoType[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    onboardingComplete?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    bookingsAsDriver?: BookingListRelationFilter
    bookingsAsOwner?: BookingListRelationFilter
    cargoListings?: CargoListingListRelationFilter
    driverProfile?: XOR<DriverProfileNullableScalarRelationFilter, DriverProfileWhereInput> | null
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    onboardingComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    bookingsAsDriver?: BookingOrderByRelationAggregateInput
    bookingsAsOwner?: BookingOrderByRelationAggregateInput
    cargoListings?: CargoListingOrderByRelationAggregateInput
    driverProfile?: DriverProfileOrderByWithRelationInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    onboardingComplete?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    bookingsAsDriver?: BookingListRelationFilter
    bookingsAsOwner?: BookingListRelationFilter
    cargoListings?: CargoListingListRelationFilter
    driverProfile?: XOR<DriverProfileNullableScalarRelationFilter, DriverProfileWhereInput> | null
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    onboardingComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    onboardingComplete?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type DriverProfileWhereInput = {
    AND?: DriverProfileWhereInput | DriverProfileWhereInput[]
    OR?: DriverProfileWhereInput[]
    NOT?: DriverProfileWhereInput | DriverProfileWhereInput[]
    id?: StringFilter<"DriverProfile"> | string
    userId?: StringFilter<"DriverProfile"> | string
    licenseNumber?: StringNullableFilter<"DriverProfile"> | string | null
    licenseExpiry?: DateTimeNullableFilter<"DriverProfile"> | Date | string | null
    yearsExperience?: IntFilter<"DriverProfile"> | number
    bio?: StringNullableFilter<"DriverProfile"> | string | null
    isVerified?: BoolFilter<"DriverProfile"> | boolean
    isAvailable?: BoolFilter<"DriverProfile"> | boolean
    truckType?: EnumTruckTypeFilter<"DriverProfile"> | $Enums.TruckType
    truckModel?: StringFilter<"DriverProfile"> | string
    truckYear?: IntFilter<"DriverProfile"> | number
    plateNumber?: StringFilter<"DriverProfile"> | string
    capacityTons?: FloatFilter<"DriverProfile"> | number
    lengthMeters?: FloatNullableFilter<"DriverProfile"> | number | null
    ratePerKm?: FloatFilter<"DriverProfile"> | number
    minimumCharge?: FloatFilter<"DriverProfile"> | number
    baseState?: StringFilter<"DriverProfile"> | string
    baseCity?: StringFilter<"DriverProfile"> | string
    totalTrips?: IntFilter<"DriverProfile"> | number
    avgRating?: FloatFilter<"DriverProfile"> | number
    totalEarnings?: FloatFilter<"DriverProfile"> | number
    createdAt?: DateTimeFilter<"DriverProfile"> | Date | string
    updatedAt?: DateTimeFilter<"DriverProfile"> | Date | string
    bookings?: BookingListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    servicesRoutes?: RouteListRelationFilter
  }

  export type DriverProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    licenseExpiry?: SortOrderInput | SortOrder
    yearsExperience?: SortOrder
    bio?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isAvailable?: SortOrder
    truckType?: SortOrder
    truckModel?: SortOrder
    truckYear?: SortOrder
    plateNumber?: SortOrder
    capacityTons?: SortOrder
    lengthMeters?: SortOrderInput | SortOrder
    ratePerKm?: SortOrder
    minimumCharge?: SortOrder
    baseState?: SortOrder
    baseCity?: SortOrder
    totalTrips?: SortOrder
    avgRating?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    servicesRoutes?: RouteOrderByRelationAggregateInput
  }

  export type DriverProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    plateNumber?: string
    AND?: DriverProfileWhereInput | DriverProfileWhereInput[]
    OR?: DriverProfileWhereInput[]
    NOT?: DriverProfileWhereInput | DriverProfileWhereInput[]
    licenseNumber?: StringNullableFilter<"DriverProfile"> | string | null
    licenseExpiry?: DateTimeNullableFilter<"DriverProfile"> | Date | string | null
    yearsExperience?: IntFilter<"DriverProfile"> | number
    bio?: StringNullableFilter<"DriverProfile"> | string | null
    isVerified?: BoolFilter<"DriverProfile"> | boolean
    isAvailable?: BoolFilter<"DriverProfile"> | boolean
    truckType?: EnumTruckTypeFilter<"DriverProfile"> | $Enums.TruckType
    truckModel?: StringFilter<"DriverProfile"> | string
    truckYear?: IntFilter<"DriverProfile"> | number
    capacityTons?: FloatFilter<"DriverProfile"> | number
    lengthMeters?: FloatNullableFilter<"DriverProfile"> | number | null
    ratePerKm?: FloatFilter<"DriverProfile"> | number
    minimumCharge?: FloatFilter<"DriverProfile"> | number
    baseState?: StringFilter<"DriverProfile"> | string
    baseCity?: StringFilter<"DriverProfile"> | string
    totalTrips?: IntFilter<"DriverProfile"> | number
    avgRating?: FloatFilter<"DriverProfile"> | number
    totalEarnings?: FloatFilter<"DriverProfile"> | number
    createdAt?: DateTimeFilter<"DriverProfile"> | Date | string
    updatedAt?: DateTimeFilter<"DriverProfile"> | Date | string
    bookings?: BookingListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    servicesRoutes?: RouteListRelationFilter
  }, "id" | "userId" | "plateNumber">

  export type DriverProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    licenseExpiry?: SortOrderInput | SortOrder
    yearsExperience?: SortOrder
    bio?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isAvailable?: SortOrder
    truckType?: SortOrder
    truckModel?: SortOrder
    truckYear?: SortOrder
    plateNumber?: SortOrder
    capacityTons?: SortOrder
    lengthMeters?: SortOrderInput | SortOrder
    ratePerKm?: SortOrder
    minimumCharge?: SortOrder
    baseState?: SortOrder
    baseCity?: SortOrder
    totalTrips?: SortOrder
    avgRating?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverProfileCountOrderByAggregateInput
    _avg?: DriverProfileAvgOrderByAggregateInput
    _max?: DriverProfileMaxOrderByAggregateInput
    _min?: DriverProfileMinOrderByAggregateInput
    _sum?: DriverProfileSumOrderByAggregateInput
  }

  export type DriverProfileScalarWhereWithAggregatesInput = {
    AND?: DriverProfileScalarWhereWithAggregatesInput | DriverProfileScalarWhereWithAggregatesInput[]
    OR?: DriverProfileScalarWhereWithAggregatesInput[]
    NOT?: DriverProfileScalarWhereWithAggregatesInput | DriverProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DriverProfile"> | string
    userId?: StringWithAggregatesFilter<"DriverProfile"> | string
    licenseNumber?: StringNullableWithAggregatesFilter<"DriverProfile"> | string | null
    licenseExpiry?: DateTimeNullableWithAggregatesFilter<"DriverProfile"> | Date | string | null
    yearsExperience?: IntWithAggregatesFilter<"DriverProfile"> | number
    bio?: StringNullableWithAggregatesFilter<"DriverProfile"> | string | null
    isVerified?: BoolWithAggregatesFilter<"DriverProfile"> | boolean
    isAvailable?: BoolWithAggregatesFilter<"DriverProfile"> | boolean
    truckType?: EnumTruckTypeWithAggregatesFilter<"DriverProfile"> | $Enums.TruckType
    truckModel?: StringWithAggregatesFilter<"DriverProfile"> | string
    truckYear?: IntWithAggregatesFilter<"DriverProfile"> | number
    plateNumber?: StringWithAggregatesFilter<"DriverProfile"> | string
    capacityTons?: FloatWithAggregatesFilter<"DriverProfile"> | number
    lengthMeters?: FloatNullableWithAggregatesFilter<"DriverProfile"> | number | null
    ratePerKm?: FloatWithAggregatesFilter<"DriverProfile"> | number
    minimumCharge?: FloatWithAggregatesFilter<"DriverProfile"> | number
    baseState?: StringWithAggregatesFilter<"DriverProfile"> | string
    baseCity?: StringWithAggregatesFilter<"DriverProfile"> | string
    totalTrips?: IntWithAggregatesFilter<"DriverProfile"> | number
    avgRating?: FloatWithAggregatesFilter<"DriverProfile"> | number
    totalEarnings?: FloatWithAggregatesFilter<"DriverProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DriverProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DriverProfile"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: StringFilter<"Route"> | string
    driverProfileId?: StringFilter<"Route"> | string
    originState?: StringFilter<"Route"> | string
    originCity?: StringNullableFilter<"Route"> | string | null
    destState?: StringFilter<"Route"> | string
    destCity?: StringNullableFilter<"Route"> | string | null
    estimatedDays?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    driverProfile?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    driverProfileId?: SortOrder
    originState?: SortOrder
    originCity?: SortOrderInput | SortOrder
    destState?: SortOrder
    destCity?: SortOrderInput | SortOrder
    estimatedDays?: SortOrder
    createdAt?: SortOrder
    driverProfile?: DriverProfileOrderByWithRelationInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    driverProfileId?: StringFilter<"Route"> | string
    originState?: StringFilter<"Route"> | string
    originCity?: StringNullableFilter<"Route"> | string | null
    destState?: StringFilter<"Route"> | string
    destCity?: StringNullableFilter<"Route"> | string | null
    estimatedDays?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    driverProfile?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    driverProfileId?: SortOrder
    originState?: SortOrder
    originCity?: SortOrderInput | SortOrder
    destState?: SortOrder
    destCity?: SortOrderInput | SortOrder
    estimatedDays?: SortOrder
    createdAt?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Route"> | string
    driverProfileId?: StringWithAggregatesFilter<"Route"> | string
    originState?: StringWithAggregatesFilter<"Route"> | string
    originCity?: StringNullableWithAggregatesFilter<"Route"> | string | null
    destState?: StringWithAggregatesFilter<"Route"> | string
    destCity?: StringNullableWithAggregatesFilter<"Route"> | string | null
    estimatedDays?: IntWithAggregatesFilter<"Route"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type CargoListingWhereInput = {
    AND?: CargoListingWhereInput | CargoListingWhereInput[]
    OR?: CargoListingWhereInput[]
    NOT?: CargoListingWhereInput | CargoListingWhereInput[]
    id?: StringFilter<"CargoListing"> | string
    ownerId?: StringFilter<"CargoListing"> | string
    title?: StringFilter<"CargoListing"> | string
    description?: StringNullableFilter<"CargoListing"> | string | null
    cargoType?: EnumCargoTypeFilter<"CargoListing"> | $Enums.CargoType
    weightTons?: FloatFilter<"CargoListing"> | number
    lengthMeters?: FloatNullableFilter<"CargoListing"> | number | null
    originState?: StringFilter<"CargoListing"> | string
    originCity?: StringFilter<"CargoListing"> | string
    originAddress?: StringNullableFilter<"CargoListing"> | string | null
    destState?: StringFilter<"CargoListing"> | string
    destCity?: StringFilter<"CargoListing"> | string
    destAddress?: StringNullableFilter<"CargoListing"> | string | null
    requiredTruck?: EnumTruckTypeNullableFilter<"CargoListing"> | $Enums.TruckType | null
    neededBy?: DateTimeFilter<"CargoListing"> | Date | string
    budget?: FloatNullableFilter<"CargoListing"> | number | null
    isActive?: BoolFilter<"CargoListing"> | boolean
    createdAt?: DateTimeFilter<"CargoListing"> | Date | string
    updatedAt?: DateTimeFilter<"CargoListing"> | Date | string
    bookings?: BookingListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CargoListingOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    cargoType?: SortOrder
    weightTons?: SortOrder
    lengthMeters?: SortOrderInput | SortOrder
    originState?: SortOrder
    originCity?: SortOrder
    originAddress?: SortOrderInput | SortOrder
    destState?: SortOrder
    destCity?: SortOrder
    destAddress?: SortOrderInput | SortOrder
    requiredTruck?: SortOrderInput | SortOrder
    neededBy?: SortOrder
    budget?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type CargoListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CargoListingWhereInput | CargoListingWhereInput[]
    OR?: CargoListingWhereInput[]
    NOT?: CargoListingWhereInput | CargoListingWhereInput[]
    ownerId?: StringFilter<"CargoListing"> | string
    title?: StringFilter<"CargoListing"> | string
    description?: StringNullableFilter<"CargoListing"> | string | null
    cargoType?: EnumCargoTypeFilter<"CargoListing"> | $Enums.CargoType
    weightTons?: FloatFilter<"CargoListing"> | number
    lengthMeters?: FloatNullableFilter<"CargoListing"> | number | null
    originState?: StringFilter<"CargoListing"> | string
    originCity?: StringFilter<"CargoListing"> | string
    originAddress?: StringNullableFilter<"CargoListing"> | string | null
    destState?: StringFilter<"CargoListing"> | string
    destCity?: StringFilter<"CargoListing"> | string
    destAddress?: StringNullableFilter<"CargoListing"> | string | null
    requiredTruck?: EnumTruckTypeNullableFilter<"CargoListing"> | $Enums.TruckType | null
    neededBy?: DateTimeFilter<"CargoListing"> | Date | string
    budget?: FloatNullableFilter<"CargoListing"> | number | null
    isActive?: BoolFilter<"CargoListing"> | boolean
    createdAt?: DateTimeFilter<"CargoListing"> | Date | string
    updatedAt?: DateTimeFilter<"CargoListing"> | Date | string
    bookings?: BookingListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CargoListingOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    cargoType?: SortOrder
    weightTons?: SortOrder
    lengthMeters?: SortOrderInput | SortOrder
    originState?: SortOrder
    originCity?: SortOrder
    originAddress?: SortOrderInput | SortOrder
    destState?: SortOrder
    destCity?: SortOrder
    destAddress?: SortOrderInput | SortOrder
    requiredTruck?: SortOrderInput | SortOrder
    neededBy?: SortOrder
    budget?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CargoListingCountOrderByAggregateInput
    _avg?: CargoListingAvgOrderByAggregateInput
    _max?: CargoListingMaxOrderByAggregateInput
    _min?: CargoListingMinOrderByAggregateInput
    _sum?: CargoListingSumOrderByAggregateInput
  }

  export type CargoListingScalarWhereWithAggregatesInput = {
    AND?: CargoListingScalarWhereWithAggregatesInput | CargoListingScalarWhereWithAggregatesInput[]
    OR?: CargoListingScalarWhereWithAggregatesInput[]
    NOT?: CargoListingScalarWhereWithAggregatesInput | CargoListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CargoListing"> | string
    ownerId?: StringWithAggregatesFilter<"CargoListing"> | string
    title?: StringWithAggregatesFilter<"CargoListing"> | string
    description?: StringNullableWithAggregatesFilter<"CargoListing"> | string | null
    cargoType?: EnumCargoTypeWithAggregatesFilter<"CargoListing"> | $Enums.CargoType
    weightTons?: FloatWithAggregatesFilter<"CargoListing"> | number
    lengthMeters?: FloatNullableWithAggregatesFilter<"CargoListing"> | number | null
    originState?: StringWithAggregatesFilter<"CargoListing"> | string
    originCity?: StringWithAggregatesFilter<"CargoListing"> | string
    originAddress?: StringNullableWithAggregatesFilter<"CargoListing"> | string | null
    destState?: StringWithAggregatesFilter<"CargoListing"> | string
    destCity?: StringWithAggregatesFilter<"CargoListing"> | string
    destAddress?: StringNullableWithAggregatesFilter<"CargoListing"> | string | null
    requiredTruck?: EnumTruckTypeNullableWithAggregatesFilter<"CargoListing"> | $Enums.TruckType | null
    neededBy?: DateTimeWithAggregatesFilter<"CargoListing"> | Date | string
    budget?: FloatNullableWithAggregatesFilter<"CargoListing"> | number | null
    isActive?: BoolWithAggregatesFilter<"CargoListing"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CargoListing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CargoListing"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    cargoListingId?: StringFilter<"Booking"> | string
    ownerId?: StringFilter<"Booking"> | string
    driverId?: StringFilter<"Booking"> | string
    driverProfileId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    agreedAmount?: FloatFilter<"Booking"> | number
    commission?: FloatFilter<"Booking"> | number
    amount?: FloatFilter<"Booking"> | number
    pickupDate?: DateTimeFilter<"Booking"> | Date | string
    estimatedDelivery?: DateTimeNullableFilter<"Booking"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Booking"> | Date | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    acceptedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    declinedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    declineReason?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    cargoListing?: XOR<CargoListingScalarRelationFilter, CargoListingWhereInput>
    driver?: XOR<UserScalarRelationFilter, UserWhereInput>
    driverProfile?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    cargoListingId?: SortOrder
    ownerId?: SortOrder
    driverId?: SortOrder
    driverProfileId?: SortOrder
    status?: SortOrder
    agreedAmount?: SortOrder
    commission?: SortOrder
    amount?: SortOrder
    pickupDate?: SortOrder
    estimatedDelivery?: SortOrderInput | SortOrder
    actualDelivery?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    declinedAt?: SortOrderInput | SortOrder
    declineReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cargoListing?: CargoListingOrderByWithRelationInput
    driver?: UserOrderByWithRelationInput
    driverProfile?: DriverProfileOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    cargoListingId?: StringFilter<"Booking"> | string
    ownerId?: StringFilter<"Booking"> | string
    driverId?: StringFilter<"Booking"> | string
    driverProfileId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    agreedAmount?: FloatFilter<"Booking"> | number
    commission?: FloatFilter<"Booking"> | number
    amount?: FloatFilter<"Booking"> | number
    pickupDate?: DateTimeFilter<"Booking"> | Date | string
    estimatedDelivery?: DateTimeNullableFilter<"Booking"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Booking"> | Date | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    acceptedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    declinedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    declineReason?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    cargoListing?: XOR<CargoListingScalarRelationFilter, CargoListingWhereInput>
    driver?: XOR<UserScalarRelationFilter, UserWhereInput>
    driverProfile?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    cargoListingId?: SortOrder
    ownerId?: SortOrder
    driverId?: SortOrder
    driverProfileId?: SortOrder
    status?: SortOrder
    agreedAmount?: SortOrder
    commission?: SortOrder
    amount?: SortOrder
    pickupDate?: SortOrder
    estimatedDelivery?: SortOrderInput | SortOrder
    actualDelivery?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    declinedAt?: SortOrderInput | SortOrder
    declineReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    cargoListingId?: StringWithAggregatesFilter<"Booking"> | string
    ownerId?: StringWithAggregatesFilter<"Booking"> | string
    driverId?: StringWithAggregatesFilter<"Booking"> | string
    driverProfileId?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    agreedAmount?: FloatWithAggregatesFilter<"Booking"> | number
    commission?: FloatWithAggregatesFilter<"Booking"> | number
    amount?: FloatWithAggregatesFilter<"Booking"> | number
    pickupDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    estimatedDelivery?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    actualDelivery?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    declinedAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    declineReason?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    bookingId?: StringFilter<"Transaction"> | string
    merchantCode?: StringFilter<"Transaction"> | string
    payItemId?: StringFilter<"Transaction"> | string
    transactionReference?: StringFilter<"Transaction"> | string
    paymentReference?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    amountKobo?: IntFilter<"Transaction"> | number
    currency?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    channel?: StringNullableFilter<"Transaction"> | string | null
    responseCode?: StringNullableFilter<"Transaction"> | string | null
    responseDescription?: StringNullableFilter<"Transaction"> | string | null
    initiatedAt?: DateTimeFilter<"Transaction"> | Date | string
    completedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    merchantCode?: SortOrder
    payItemId?: SortOrder
    transactionReference?: SortOrder
    paymentReference?: SortOrderInput | SortOrder
    amount?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    channel?: SortOrderInput | SortOrder
    responseCode?: SortOrderInput | SortOrder
    responseDescription?: SortOrderInput | SortOrder
    initiatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    transactionReference?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    merchantCode?: StringFilter<"Transaction"> | string
    payItemId?: StringFilter<"Transaction"> | string
    paymentReference?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    amountKobo?: IntFilter<"Transaction"> | number
    currency?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    channel?: StringNullableFilter<"Transaction"> | string | null
    responseCode?: StringNullableFilter<"Transaction"> | string | null
    responseDescription?: StringNullableFilter<"Transaction"> | string | null
    initiatedAt?: DateTimeFilter<"Transaction"> | Date | string
    completedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId" | "transactionReference">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    merchantCode?: SortOrder
    payItemId?: SortOrder
    transactionReference?: SortOrder
    paymentReference?: SortOrderInput | SortOrder
    amount?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    channel?: SortOrderInput | SortOrder
    responseCode?: SortOrderInput | SortOrder
    responseDescription?: SortOrderInput | SortOrder
    initiatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    bookingId?: StringWithAggregatesFilter<"Transaction"> | string
    merchantCode?: StringWithAggregatesFilter<"Transaction"> | string
    payItemId?: StringWithAggregatesFilter<"Transaction"> | string
    transactionReference?: StringWithAggregatesFilter<"Transaction"> | string
    paymentReference?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    amountKobo?: IntWithAggregatesFilter<"Transaction"> | number
    currency?: StringWithAggregatesFilter<"Transaction"> | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    channel?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    responseCode?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    responseDescription?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    initiatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    bookingId?: StringFilter<"Review"> | string
    giverId?: StringFilter<"Review"> | string
    receiverId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    giver?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    giver?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    giverId?: StringFilter<"Review"> | string
    receiverId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    giver?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "bookingId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    bookingId?: StringWithAggregatesFilter<"Review"> | string
    giverId?: StringWithAggregatesFilter<"Review"> | string
    receiverId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingUncheckedCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingUncheckedCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUncheckedUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUncheckedUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverProfileCreateInput = {
    id?: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutDriverProfileInput
    user: UserCreateNestedOneWithoutDriverProfileInput
    servicesRoutes?: RouteCreateNestedManyWithoutDriverProfileInput
  }

  export type DriverProfileUncheckedCreateInput = {
    id?: string
    userId: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDriverProfileInput
    servicesRoutes?: RouteUncheckedCreateNestedManyWithoutDriverProfileInput
  }

  export type DriverProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutDriverProfileNestedInput
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
    servicesRoutes?: RouteUpdateManyWithoutDriverProfileNestedInput
  }

  export type DriverProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDriverProfileNestedInput
    servicesRoutes?: RouteUncheckedUpdateManyWithoutDriverProfileNestedInput
  }

  export type DriverProfileCreateManyInput = {
    id?: string
    userId: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    id?: string
    originState: string
    originCity?: string | null
    destState: string
    destCity?: string | null
    estimatedDays?: number
    createdAt?: Date | string
    driverProfile: DriverProfileCreateNestedOneWithoutServicesRoutesInput
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    driverProfileId: string
    originState: string
    originCity?: string | null
    destState: string
    destCity?: string | null
    estimatedDays?: number
    createdAt?: Date | string
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverProfile?: DriverProfileUpdateOneRequiredWithoutServicesRoutesNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateManyInput = {
    id?: string
    driverProfileId: string
    originState: string
    originCity?: string | null
    destState: string
    destCity?: string | null
    estimatedDays?: number
    createdAt?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargoListingCreateInput = {
    id?: string
    title: string
    description?: string | null
    cargoType?: $Enums.CargoType
    weightTons: number
    lengthMeters?: number | null
    originState: string
    originCity: string
    originAddress?: string | null
    destState: string
    destCity: string
    destAddress?: string | null
    requiredTruck?: $Enums.TruckType | null
    neededBy: Date | string
    budget?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutCargoListingInput
    owner: UserCreateNestedOneWithoutCargoListingsInput
  }

  export type CargoListingUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    cargoType?: $Enums.CargoType
    weightTons: number
    lengthMeters?: number | null
    originState: string
    originCity: string
    originAddress?: string | null
    destState: string
    destCity: string
    destAddress?: string | null
    requiredTruck?: $Enums.TruckType | null
    neededBy: Date | string
    budget?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCargoListingInput
  }

  export type CargoListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCargoListingNestedInput
    owner?: UserUpdateOneRequiredWithoutCargoListingsNestedInput
  }

  export type CargoListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCargoListingNestedInput
  }

  export type CargoListingCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    cargoType?: $Enums.CargoType
    weightTons: number
    lengthMeters?: number | null
    originState: string
    originCity: string
    originAddress?: string | null
    destState: string
    destCity: string
    destAddress?: string | null
    requiredTruck?: $Enums.TruckType | null
    neededBy: Date | string
    budget?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CargoListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargoListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cargoListing: CargoListingCreateNestedOneWithoutBookingsInput
    driver: UserCreateNestedOneWithoutBookingsAsDriverInput
    driverProfile: DriverProfileCreateNestedOneWithoutBookingsInput
    owner: UserCreateNestedOneWithoutBookingsAsOwnerInput
    review?: ReviewCreateNestedOneWithoutBookingInput
    transaction?: TransactionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    cargoListingId: string
    ownerId: string
    driverId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargoListing?: CargoListingUpdateOneRequiredWithoutBookingsNestedInput
    driver?: UserUpdateOneRequiredWithoutBookingsAsDriverNestedInput
    driverProfile?: DriverProfileUpdateOneRequiredWithoutBookingsNestedInput
    owner?: UserUpdateOneRequiredWithoutBookingsAsOwnerNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    cargoListingId: string
    ownerId: string
    driverId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    merchantCode: string
    payItemId: string
    transactionReference: string
    paymentReference?: string | null
    amount: number
    amountKobo: number
    currency?: string
    status?: $Enums.TransactionStatus
    channel?: string | null
    responseCode?: string | null
    responseDescription?: string | null
    initiatedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    bookingId: string
    merchantCode: string
    payItemId: string
    transactionReference: string
    paymentReference?: string | null
    amount: number
    amountKobo: number
    currency?: string
    status?: $Enums.TransactionStatus
    channel?: string | null
    responseCode?: string | null
    responseDescription?: string | null
    initiatedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantCode?: StringFieldUpdateOperationsInput | string
    payItemId?: StringFieldUpdateOperationsInput | string
    transactionReference?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    responseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    merchantCode?: StringFieldUpdateOperationsInput | string
    payItemId?: StringFieldUpdateOperationsInput | string
    transactionReference?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    responseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    bookingId: string
    merchantCode: string
    payItemId: string
    transactionReference: string
    paymentReference?: string | null
    amount: number
    amountKobo: number
    currency?: string
    status?: $Enums.TransactionStatus
    channel?: string | null
    responseCode?: string | null
    responseDescription?: string | null
    initiatedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantCode?: StringFieldUpdateOperationsInput | string
    payItemId?: StringFieldUpdateOperationsInput | string
    transactionReference?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    responseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    merchantCode?: StringFieldUpdateOperationsInput | string
    payItemId?: StringFieldUpdateOperationsInput | string
    transactionReference?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    responseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    giver: UserCreateNestedOneWithoutReviewsGivenInput
    receiver: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    bookingId: string
    giverId: string
    receiverId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    giver?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    receiver?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    bookingId: string
    giverId: string
    receiverId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type CargoListingListRelationFilter = {
    every?: CargoListingWhereInput
    some?: CargoListingWhereInput
    none?: CargoListingWhereInput
  }

  export type DriverProfileNullableScalarRelationFilter = {
    is?: DriverProfileWhereInput | null
    isNot?: DriverProfileWhereInput | null
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CargoListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    onboardingComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    onboardingComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    onboardingComplete?: SortOrder
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
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
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

  export type EnumTruckTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTruckTypeFilter<$PrismaModel> | $Enums.TruckType
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

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiry?: SortOrder
    yearsExperience?: SortOrder
    bio?: SortOrder
    isVerified?: SortOrder
    isAvailable?: SortOrder
    truckType?: SortOrder
    truckModel?: SortOrder
    truckYear?: SortOrder
    plateNumber?: SortOrder
    capacityTons?: SortOrder
    lengthMeters?: SortOrder
    ratePerKm?: SortOrder
    minimumCharge?: SortOrder
    baseState?: SortOrder
    baseCity?: SortOrder
    totalTrips?: SortOrder
    avgRating?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverProfileAvgOrderByAggregateInput = {
    yearsExperience?: SortOrder
    truckYear?: SortOrder
    capacityTons?: SortOrder
    lengthMeters?: SortOrder
    ratePerKm?: SortOrder
    minimumCharge?: SortOrder
    totalTrips?: SortOrder
    avgRating?: SortOrder
    totalEarnings?: SortOrder
  }

  export type DriverProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiry?: SortOrder
    yearsExperience?: SortOrder
    bio?: SortOrder
    isVerified?: SortOrder
    isAvailable?: SortOrder
    truckType?: SortOrder
    truckModel?: SortOrder
    truckYear?: SortOrder
    plateNumber?: SortOrder
    capacityTons?: SortOrder
    lengthMeters?: SortOrder
    ratePerKm?: SortOrder
    minimumCharge?: SortOrder
    baseState?: SortOrder
    baseCity?: SortOrder
    totalTrips?: SortOrder
    avgRating?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiry?: SortOrder
    yearsExperience?: SortOrder
    bio?: SortOrder
    isVerified?: SortOrder
    isAvailable?: SortOrder
    truckType?: SortOrder
    truckModel?: SortOrder
    truckYear?: SortOrder
    plateNumber?: SortOrder
    capacityTons?: SortOrder
    lengthMeters?: SortOrder
    ratePerKm?: SortOrder
    minimumCharge?: SortOrder
    baseState?: SortOrder
    baseCity?: SortOrder
    totalTrips?: SortOrder
    avgRating?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverProfileSumOrderByAggregateInput = {
    yearsExperience?: SortOrder
    truckYear?: SortOrder
    capacityTons?: SortOrder
    lengthMeters?: SortOrder
    ratePerKm?: SortOrder
    minimumCharge?: SortOrder
    totalTrips?: SortOrder
    avgRating?: SortOrder
    totalEarnings?: SortOrder
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

  export type EnumTruckTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTruckTypeWithAggregatesFilter<$PrismaModel> | $Enums.TruckType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTruckTypeFilter<$PrismaModel>
    _max?: NestedEnumTruckTypeFilter<$PrismaModel>
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

  export type DriverProfileScalarRelationFilter = {
    is?: DriverProfileWhereInput
    isNot?: DriverProfileWhereInput
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    driverProfileId?: SortOrder
    originState?: SortOrder
    originCity?: SortOrder
    destState?: SortOrder
    destCity?: SortOrder
    estimatedDays?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    estimatedDays?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    driverProfileId?: SortOrder
    originState?: SortOrder
    originCity?: SortOrder
    destState?: SortOrder
    destCity?: SortOrder
    estimatedDays?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    driverProfileId?: SortOrder
    originState?: SortOrder
    originCity?: SortOrder
    destState?: SortOrder
    destCity?: SortOrder
    estimatedDays?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    estimatedDays?: SortOrder
  }

  export type EnumCargoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoType | EnumCargoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoTypeFilter<$PrismaModel> | $Enums.CargoType
  }

  export type EnumTruckTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTruckTypeNullableFilter<$PrismaModel> | $Enums.TruckType | null
  }

  export type CargoListingCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cargoType?: SortOrder
    weightTons?: SortOrder
    lengthMeters?: SortOrder
    originState?: SortOrder
    originCity?: SortOrder
    originAddress?: SortOrder
    destState?: SortOrder
    destCity?: SortOrder
    destAddress?: SortOrder
    requiredTruck?: SortOrder
    neededBy?: SortOrder
    budget?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CargoListingAvgOrderByAggregateInput = {
    weightTons?: SortOrder
    lengthMeters?: SortOrder
    budget?: SortOrder
  }

  export type CargoListingMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cargoType?: SortOrder
    weightTons?: SortOrder
    lengthMeters?: SortOrder
    originState?: SortOrder
    originCity?: SortOrder
    originAddress?: SortOrder
    destState?: SortOrder
    destCity?: SortOrder
    destAddress?: SortOrder
    requiredTruck?: SortOrder
    neededBy?: SortOrder
    budget?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CargoListingMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cargoType?: SortOrder
    weightTons?: SortOrder
    lengthMeters?: SortOrder
    originState?: SortOrder
    originCity?: SortOrder
    originAddress?: SortOrder
    destState?: SortOrder
    destCity?: SortOrder
    destAddress?: SortOrder
    requiredTruck?: SortOrder
    neededBy?: SortOrder
    budget?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CargoListingSumOrderByAggregateInput = {
    weightTons?: SortOrder
    lengthMeters?: SortOrder
    budget?: SortOrder
  }

  export type EnumCargoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoType | EnumCargoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoTypeWithAggregatesFilter<$PrismaModel> | $Enums.CargoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoTypeFilter<$PrismaModel>
    _max?: NestedEnumCargoTypeFilter<$PrismaModel>
  }

  export type EnumTruckTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTruckTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TruckType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTruckTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTruckTypeNullableFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type CargoListingScalarRelationFilter = {
    is?: CargoListingWhereInput
    isNot?: CargoListingWhereInput
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    cargoListingId?: SortOrder
    ownerId?: SortOrder
    driverId?: SortOrder
    driverProfileId?: SortOrder
    status?: SortOrder
    agreedAmount?: SortOrder
    commission?: SortOrder
    amount?: SortOrder
    pickupDate?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    notes?: SortOrder
    acceptedAt?: SortOrder
    declinedAt?: SortOrder
    declineReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    agreedAmount?: SortOrder
    commission?: SortOrder
    amount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    cargoListingId?: SortOrder
    ownerId?: SortOrder
    driverId?: SortOrder
    driverProfileId?: SortOrder
    status?: SortOrder
    agreedAmount?: SortOrder
    commission?: SortOrder
    amount?: SortOrder
    pickupDate?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    notes?: SortOrder
    acceptedAt?: SortOrder
    declinedAt?: SortOrder
    declineReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    cargoListingId?: SortOrder
    ownerId?: SortOrder
    driverId?: SortOrder
    driverProfileId?: SortOrder
    status?: SortOrder
    agreedAmount?: SortOrder
    commission?: SortOrder
    amount?: SortOrder
    pickupDate?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    notes?: SortOrder
    acceptedAt?: SortOrder
    declinedAt?: SortOrder
    declineReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    agreedAmount?: SortOrder
    commission?: SortOrder
    amount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    merchantCode?: SortOrder
    payItemId?: SortOrder
    transactionReference?: SortOrder
    paymentReference?: SortOrder
    amount?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    responseCode?: SortOrder
    responseDescription?: SortOrder
    initiatedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    amountKobo?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    merchantCode?: SortOrder
    payItemId?: SortOrder
    transactionReference?: SortOrder
    paymentReference?: SortOrder
    amount?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    responseCode?: SortOrder
    responseDescription?: SortOrder
    initiatedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    merchantCode?: SortOrder
    payItemId?: SortOrder
    transactionReference?: SortOrder
    paymentReference?: SortOrder
    amount?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    responseCode?: SortOrder
    responseDescription?: SortOrder
    initiatedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    amountKobo?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutDriverInput = {
    create?: XOR<BookingCreateWithoutDriverInput, BookingUncheckedCreateWithoutDriverInput> | BookingCreateWithoutDriverInput[] | BookingUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDriverInput | BookingCreateOrConnectWithoutDriverInput[]
    createMany?: BookingCreateManyDriverInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput> | BookingCreateWithoutOwnerInput[] | BookingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOwnerInput | BookingCreateOrConnectWithoutOwnerInput[]
    createMany?: BookingCreateManyOwnerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CargoListingCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CargoListingCreateWithoutOwnerInput, CargoListingUncheckedCreateWithoutOwnerInput> | CargoListingCreateWithoutOwnerInput[] | CargoListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CargoListingCreateOrConnectWithoutOwnerInput | CargoListingCreateOrConnectWithoutOwnerInput[]
    createMany?: CargoListingCreateManyOwnerInputEnvelope
    connect?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
  }

  export type DriverProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutUserInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutGiverInput = {
    create?: XOR<ReviewCreateWithoutGiverInput, ReviewUncheckedCreateWithoutGiverInput> | ReviewCreateWithoutGiverInput[] | ReviewUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGiverInput | ReviewCreateOrConnectWithoutGiverInput[]
    createMany?: ReviewCreateManyGiverInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<BookingCreateWithoutDriverInput, BookingUncheckedCreateWithoutDriverInput> | BookingCreateWithoutDriverInput[] | BookingUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDriverInput | BookingCreateOrConnectWithoutDriverInput[]
    createMany?: BookingCreateManyDriverInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput> | BookingCreateWithoutOwnerInput[] | BookingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOwnerInput | BookingCreateOrConnectWithoutOwnerInput[]
    createMany?: BookingCreateManyOwnerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CargoListingUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CargoListingCreateWithoutOwnerInput, CargoListingUncheckedCreateWithoutOwnerInput> | CargoListingCreateWithoutOwnerInput[] | CargoListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CargoListingCreateOrConnectWithoutOwnerInput | CargoListingCreateOrConnectWithoutOwnerInput[]
    createMany?: CargoListingCreateManyOwnerInputEnvelope
    connect?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
  }

  export type DriverProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutUserInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutGiverInput = {
    create?: XOR<ReviewCreateWithoutGiverInput, ReviewUncheckedCreateWithoutGiverInput> | ReviewCreateWithoutGiverInput[] | ReviewUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGiverInput | ReviewCreateOrConnectWithoutGiverInput[]
    createMany?: ReviewCreateManyGiverInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutDriverNestedInput = {
    create?: XOR<BookingCreateWithoutDriverInput, BookingUncheckedCreateWithoutDriverInput> | BookingCreateWithoutDriverInput[] | BookingUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDriverInput | BookingCreateOrConnectWithoutDriverInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDriverInput | BookingUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: BookingCreateManyDriverInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDriverInput | BookingUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDriverInput | BookingUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput> | BookingCreateWithoutOwnerInput[] | BookingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOwnerInput | BookingCreateOrConnectWithoutOwnerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOwnerInput | BookingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BookingCreateManyOwnerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOwnerInput | BookingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOwnerInput | BookingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CargoListingUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CargoListingCreateWithoutOwnerInput, CargoListingUncheckedCreateWithoutOwnerInput> | CargoListingCreateWithoutOwnerInput[] | CargoListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CargoListingCreateOrConnectWithoutOwnerInput | CargoListingCreateOrConnectWithoutOwnerInput[]
    upsert?: CargoListingUpsertWithWhereUniqueWithoutOwnerInput | CargoListingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CargoListingCreateManyOwnerInputEnvelope
    set?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
    disconnect?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
    delete?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
    connect?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
    update?: CargoListingUpdateWithWhereUniqueWithoutOwnerInput | CargoListingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CargoListingUpdateManyWithWhereWithoutOwnerInput | CargoListingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CargoListingScalarWhereInput | CargoListingScalarWhereInput[]
  }

  export type DriverProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutUserInput
    upsert?: DriverProfileUpsertWithoutUserInput
    disconnect?: DriverProfileWhereInput | boolean
    delete?: DriverProfileWhereInput | boolean
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutUserInput, DriverProfileUpdateWithoutUserInput>, DriverProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithoutGiverNestedInput = {
    create?: XOR<ReviewCreateWithoutGiverInput, ReviewUncheckedCreateWithoutGiverInput> | ReviewCreateWithoutGiverInput[] | ReviewUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGiverInput | ReviewCreateOrConnectWithoutGiverInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGiverInput | ReviewUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: ReviewCreateManyGiverInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGiverInput | ReviewUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGiverInput | ReviewUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReceiverInput | ReviewUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReceiverInput | ReviewUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReceiverInput | ReviewUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<BookingCreateWithoutDriverInput, BookingUncheckedCreateWithoutDriverInput> | BookingCreateWithoutDriverInput[] | BookingUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDriverInput | BookingCreateOrConnectWithoutDriverInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDriverInput | BookingUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: BookingCreateManyDriverInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDriverInput | BookingUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDriverInput | BookingUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput> | BookingCreateWithoutOwnerInput[] | BookingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOwnerInput | BookingCreateOrConnectWithoutOwnerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOwnerInput | BookingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BookingCreateManyOwnerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOwnerInput | BookingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOwnerInput | BookingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CargoListingUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CargoListingCreateWithoutOwnerInput, CargoListingUncheckedCreateWithoutOwnerInput> | CargoListingCreateWithoutOwnerInput[] | CargoListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CargoListingCreateOrConnectWithoutOwnerInput | CargoListingCreateOrConnectWithoutOwnerInput[]
    upsert?: CargoListingUpsertWithWhereUniqueWithoutOwnerInput | CargoListingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CargoListingCreateManyOwnerInputEnvelope
    set?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
    disconnect?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
    delete?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
    connect?: CargoListingWhereUniqueInput | CargoListingWhereUniqueInput[]
    update?: CargoListingUpdateWithWhereUniqueWithoutOwnerInput | CargoListingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CargoListingUpdateManyWithWhereWithoutOwnerInput | CargoListingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CargoListingScalarWhereInput | CargoListingScalarWhereInput[]
  }

  export type DriverProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutUserInput
    upsert?: DriverProfileUpsertWithoutUserInput
    disconnect?: DriverProfileWhereInput | boolean
    delete?: DriverProfileWhereInput | boolean
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutUserInput, DriverProfileUpdateWithoutUserInput>, DriverProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUncheckedUpdateManyWithoutGiverNestedInput = {
    create?: XOR<ReviewCreateWithoutGiverInput, ReviewUncheckedCreateWithoutGiverInput> | ReviewCreateWithoutGiverInput[] | ReviewUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGiverInput | ReviewCreateOrConnectWithoutGiverInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGiverInput | ReviewUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: ReviewCreateManyGiverInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGiverInput | ReviewUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGiverInput | ReviewUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReceiverInput | ReviewUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReceiverInput | ReviewUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReceiverInput | ReviewUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type BookingCreateNestedManyWithoutDriverProfileInput = {
    create?: XOR<BookingCreateWithoutDriverProfileInput, BookingUncheckedCreateWithoutDriverProfileInput> | BookingCreateWithoutDriverProfileInput[] | BookingUncheckedCreateWithoutDriverProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDriverProfileInput | BookingCreateOrConnectWithoutDriverProfileInput[]
    createMany?: BookingCreateManyDriverProfileInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDriverProfileInput = {
    create?: XOR<UserCreateWithoutDriverProfileInput, UserUncheckedCreateWithoutDriverProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverProfileInput
    connect?: UserWhereUniqueInput
  }

  export type RouteCreateNestedManyWithoutDriverProfileInput = {
    create?: XOR<RouteCreateWithoutDriverProfileInput, RouteUncheckedCreateWithoutDriverProfileInput> | RouteCreateWithoutDriverProfileInput[] | RouteUncheckedCreateWithoutDriverProfileInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDriverProfileInput | RouteCreateOrConnectWithoutDriverProfileInput[]
    createMany?: RouteCreateManyDriverProfileInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutDriverProfileInput = {
    create?: XOR<BookingCreateWithoutDriverProfileInput, BookingUncheckedCreateWithoutDriverProfileInput> | BookingCreateWithoutDriverProfileInput[] | BookingUncheckedCreateWithoutDriverProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDriverProfileInput | BookingCreateOrConnectWithoutDriverProfileInput[]
    createMany?: BookingCreateManyDriverProfileInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutDriverProfileInput = {
    create?: XOR<RouteCreateWithoutDriverProfileInput, RouteUncheckedCreateWithoutDriverProfileInput> | RouteCreateWithoutDriverProfileInput[] | RouteUncheckedCreateWithoutDriverProfileInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDriverProfileInput | RouteCreateOrConnectWithoutDriverProfileInput[]
    createMany?: RouteCreateManyDriverProfileInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTruckTypeFieldUpdateOperationsInput = {
    set?: $Enums.TruckType
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

  export type BookingUpdateManyWithoutDriverProfileNestedInput = {
    create?: XOR<BookingCreateWithoutDriverProfileInput, BookingUncheckedCreateWithoutDriverProfileInput> | BookingCreateWithoutDriverProfileInput[] | BookingUncheckedCreateWithoutDriverProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDriverProfileInput | BookingCreateOrConnectWithoutDriverProfileInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDriverProfileInput | BookingUpsertWithWhereUniqueWithoutDriverProfileInput[]
    createMany?: BookingCreateManyDriverProfileInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDriverProfileInput | BookingUpdateWithWhereUniqueWithoutDriverProfileInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDriverProfileInput | BookingUpdateManyWithWhereWithoutDriverProfileInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutDriverProfileNestedInput = {
    create?: XOR<UserCreateWithoutDriverProfileInput, UserUncheckedCreateWithoutDriverProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverProfileInput
    upsert?: UserUpsertWithoutDriverProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDriverProfileInput, UserUpdateWithoutDriverProfileInput>, UserUncheckedUpdateWithoutDriverProfileInput>
  }

  export type RouteUpdateManyWithoutDriverProfileNestedInput = {
    create?: XOR<RouteCreateWithoutDriverProfileInput, RouteUncheckedCreateWithoutDriverProfileInput> | RouteCreateWithoutDriverProfileInput[] | RouteUncheckedCreateWithoutDriverProfileInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDriverProfileInput | RouteCreateOrConnectWithoutDriverProfileInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutDriverProfileInput | RouteUpsertWithWhereUniqueWithoutDriverProfileInput[]
    createMany?: RouteCreateManyDriverProfileInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutDriverProfileInput | RouteUpdateWithWhereUniqueWithoutDriverProfileInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutDriverProfileInput | RouteUpdateManyWithWhereWithoutDriverProfileInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutDriverProfileNestedInput = {
    create?: XOR<BookingCreateWithoutDriverProfileInput, BookingUncheckedCreateWithoutDriverProfileInput> | BookingCreateWithoutDriverProfileInput[] | BookingUncheckedCreateWithoutDriverProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDriverProfileInput | BookingCreateOrConnectWithoutDriverProfileInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDriverProfileInput | BookingUpsertWithWhereUniqueWithoutDriverProfileInput[]
    createMany?: BookingCreateManyDriverProfileInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDriverProfileInput | BookingUpdateWithWhereUniqueWithoutDriverProfileInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDriverProfileInput | BookingUpdateManyWithWhereWithoutDriverProfileInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutDriverProfileNestedInput = {
    create?: XOR<RouteCreateWithoutDriverProfileInput, RouteUncheckedCreateWithoutDriverProfileInput> | RouteCreateWithoutDriverProfileInput[] | RouteUncheckedCreateWithoutDriverProfileInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDriverProfileInput | RouteCreateOrConnectWithoutDriverProfileInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutDriverProfileInput | RouteUpsertWithWhereUniqueWithoutDriverProfileInput[]
    createMany?: RouteCreateManyDriverProfileInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutDriverProfileInput | RouteUpdateWithWhereUniqueWithoutDriverProfileInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutDriverProfileInput | RouteUpdateManyWithWhereWithoutDriverProfileInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type DriverProfileCreateNestedOneWithoutServicesRoutesInput = {
    create?: XOR<DriverProfileCreateWithoutServicesRoutesInput, DriverProfileUncheckedCreateWithoutServicesRoutesInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutServicesRoutesInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type DriverProfileUpdateOneRequiredWithoutServicesRoutesNestedInput = {
    create?: XOR<DriverProfileCreateWithoutServicesRoutesInput, DriverProfileUncheckedCreateWithoutServicesRoutesInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutServicesRoutesInput
    upsert?: DriverProfileUpsertWithoutServicesRoutesInput
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutServicesRoutesInput, DriverProfileUpdateWithoutServicesRoutesInput>, DriverProfileUncheckedUpdateWithoutServicesRoutesInput>
  }

  export type BookingCreateNestedManyWithoutCargoListingInput = {
    create?: XOR<BookingCreateWithoutCargoListingInput, BookingUncheckedCreateWithoutCargoListingInput> | BookingCreateWithoutCargoListingInput[] | BookingUncheckedCreateWithoutCargoListingInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCargoListingInput | BookingCreateOrConnectWithoutCargoListingInput[]
    createMany?: BookingCreateManyCargoListingInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCargoListingsInput = {
    create?: XOR<UserCreateWithoutCargoListingsInput, UserUncheckedCreateWithoutCargoListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCargoListingsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutCargoListingInput = {
    create?: XOR<BookingCreateWithoutCargoListingInput, BookingUncheckedCreateWithoutCargoListingInput> | BookingCreateWithoutCargoListingInput[] | BookingUncheckedCreateWithoutCargoListingInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCargoListingInput | BookingCreateOrConnectWithoutCargoListingInput[]
    createMany?: BookingCreateManyCargoListingInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumCargoTypeFieldUpdateOperationsInput = {
    set?: $Enums.CargoType
  }

  export type NullableEnumTruckTypeFieldUpdateOperationsInput = {
    set?: $Enums.TruckType | null
  }

  export type BookingUpdateManyWithoutCargoListingNestedInput = {
    create?: XOR<BookingCreateWithoutCargoListingInput, BookingUncheckedCreateWithoutCargoListingInput> | BookingCreateWithoutCargoListingInput[] | BookingUncheckedCreateWithoutCargoListingInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCargoListingInput | BookingCreateOrConnectWithoutCargoListingInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCargoListingInput | BookingUpsertWithWhereUniqueWithoutCargoListingInput[]
    createMany?: BookingCreateManyCargoListingInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCargoListingInput | BookingUpdateWithWhereUniqueWithoutCargoListingInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCargoListingInput | BookingUpdateManyWithWhereWithoutCargoListingInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCargoListingsNestedInput = {
    create?: XOR<UserCreateWithoutCargoListingsInput, UserUncheckedCreateWithoutCargoListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCargoListingsInput
    upsert?: UserUpsertWithoutCargoListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCargoListingsInput, UserUpdateWithoutCargoListingsInput>, UserUncheckedUpdateWithoutCargoListingsInput>
  }

  export type BookingUncheckedUpdateManyWithoutCargoListingNestedInput = {
    create?: XOR<BookingCreateWithoutCargoListingInput, BookingUncheckedCreateWithoutCargoListingInput> | BookingCreateWithoutCargoListingInput[] | BookingUncheckedCreateWithoutCargoListingInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCargoListingInput | BookingCreateOrConnectWithoutCargoListingInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCargoListingInput | BookingUpsertWithWhereUniqueWithoutCargoListingInput[]
    createMany?: BookingCreateManyCargoListingInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCargoListingInput | BookingUpdateWithWhereUniqueWithoutCargoListingInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCargoListingInput | BookingUpdateManyWithWhereWithoutCargoListingInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CargoListingCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CargoListingCreateWithoutBookingsInput, CargoListingUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CargoListingCreateOrConnectWithoutBookingsInput
    connect?: CargoListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsAsDriverInput = {
    create?: XOR<UserCreateWithoutBookingsAsDriverInput, UserUncheckedCreateWithoutBookingsAsDriverInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsDriverInput
    connect?: UserWhereUniqueInput
  }

  export type DriverProfileCreateNestedOneWithoutBookingsInput = {
    create?: XOR<DriverProfileCreateWithoutBookingsInput, DriverProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutBookingsInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsAsOwnerInput = {
    create?: XOR<UserCreateWithoutBookingsAsOwnerInput, UserUncheckedCreateWithoutBookingsAsOwnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsOwnerInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutBookingInput = {
    create?: XOR<TransactionCreateWithoutBookingInput, TransactionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutBookingInput
    connect?: TransactionWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<TransactionCreateWithoutBookingInput, TransactionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutBookingInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type CargoListingUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CargoListingCreateWithoutBookingsInput, CargoListingUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CargoListingCreateOrConnectWithoutBookingsInput
    upsert?: CargoListingUpsertWithoutBookingsInput
    connect?: CargoListingWhereUniqueInput
    update?: XOR<XOR<CargoListingUpdateToOneWithWhereWithoutBookingsInput, CargoListingUpdateWithoutBookingsInput>, CargoListingUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsAsDriverNestedInput = {
    create?: XOR<UserCreateWithoutBookingsAsDriverInput, UserUncheckedCreateWithoutBookingsAsDriverInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsDriverInput
    upsert?: UserUpsertWithoutBookingsAsDriverInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsAsDriverInput, UserUpdateWithoutBookingsAsDriverInput>, UserUncheckedUpdateWithoutBookingsAsDriverInput>
  }

  export type DriverProfileUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<DriverProfileCreateWithoutBookingsInput, DriverProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutBookingsInput
    upsert?: DriverProfileUpsertWithoutBookingsInput
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutBookingsInput, DriverProfileUpdateWithoutBookingsInput>, DriverProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsAsOwnerNestedInput = {
    create?: XOR<UserCreateWithoutBookingsAsOwnerInput, UserUncheckedCreateWithoutBookingsAsOwnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsOwnerInput
    upsert?: UserUpsertWithoutBookingsAsOwnerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsAsOwnerInput, UserUpdateWithoutBookingsAsOwnerInput>, UserUncheckedUpdateWithoutBookingsAsOwnerInput>
  }

  export type ReviewUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type TransactionUpdateOneWithoutBookingNestedInput = {
    create?: XOR<TransactionCreateWithoutBookingInput, TransactionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutBookingInput
    upsert?: TransactionUpsertWithoutBookingInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutBookingInput, TransactionUpdateWithoutBookingInput>, TransactionUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type TransactionUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<TransactionCreateWithoutBookingInput, TransactionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutBookingInput
    upsert?: TransactionUpsertWithoutBookingInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutBookingInput, TransactionUpdateWithoutBookingInput>, TransactionUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutTransactionInput = {
    create?: XOR<BookingCreateWithoutTransactionInput, BookingUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: BookingCreateOrConnectWithoutTransactionInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type BookingUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<BookingCreateWithoutTransactionInput, BookingUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: BookingCreateOrConnectWithoutTransactionInput
    upsert?: BookingUpsertWithoutTransactionInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutTransactionInput, BookingUpdateWithoutTransactionInput>, BookingUncheckedUpdateWithoutTransactionInput>
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumTruckTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTruckTypeFilter<$PrismaModel> | $Enums.TruckType
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

  export type NestedEnumTruckTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTruckTypeWithAggregatesFilter<$PrismaModel> | $Enums.TruckType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTruckTypeFilter<$PrismaModel>
    _max?: NestedEnumTruckTypeFilter<$PrismaModel>
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

  export type NestedEnumCargoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoType | EnumCargoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoTypeFilter<$PrismaModel> | $Enums.CargoType
  }

  export type NestedEnumTruckTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTruckTypeNullableFilter<$PrismaModel> | $Enums.TruckType | null
  }

  export type NestedEnumCargoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoType | EnumCargoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoTypeWithAggregatesFilter<$PrismaModel> | $Enums.CargoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoTypeFilter<$PrismaModel>
    _max?: NestedEnumCargoTypeFilter<$PrismaModel>
  }

  export type NestedEnumTruckTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTruckTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TruckType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTruckTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTruckTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutDriverInput = {
    id?: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cargoListing: CargoListingCreateNestedOneWithoutBookingsInput
    driverProfile: DriverProfileCreateNestedOneWithoutBookingsInput
    owner: UserCreateNestedOneWithoutBookingsAsOwnerInput
    review?: ReviewCreateNestedOneWithoutBookingInput
    transaction?: TransactionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutDriverInput = {
    id?: string
    cargoListingId: string
    ownerId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutDriverInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutDriverInput, BookingUncheckedCreateWithoutDriverInput>
  }

  export type BookingCreateManyDriverInputEnvelope = {
    data: BookingCreateManyDriverInput | BookingCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutOwnerInput = {
    id?: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cargoListing: CargoListingCreateNestedOneWithoutBookingsInput
    driver: UserCreateNestedOneWithoutBookingsAsDriverInput
    driverProfile: DriverProfileCreateNestedOneWithoutBookingsInput
    review?: ReviewCreateNestedOneWithoutBookingInput
    transaction?: TransactionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutOwnerInput = {
    id?: string
    cargoListingId: string
    driverId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutOwnerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput>
  }

  export type BookingCreateManyOwnerInputEnvelope = {
    data: BookingCreateManyOwnerInput | BookingCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CargoListingCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    cargoType?: $Enums.CargoType
    weightTons: number
    lengthMeters?: number | null
    originState: string
    originCity: string
    originAddress?: string | null
    destState: string
    destCity: string
    destAddress?: string | null
    requiredTruck?: $Enums.TruckType | null
    neededBy: Date | string
    budget?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutCargoListingInput
  }

  export type CargoListingUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    cargoType?: $Enums.CargoType
    weightTons: number
    lengthMeters?: number | null
    originState: string
    originCity: string
    originAddress?: string | null
    destState: string
    destCity: string
    destAddress?: string | null
    requiredTruck?: $Enums.TruckType | null
    neededBy: Date | string
    budget?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCargoListingInput
  }

  export type CargoListingCreateOrConnectWithoutOwnerInput = {
    where: CargoListingWhereUniqueInput
    create: XOR<CargoListingCreateWithoutOwnerInput, CargoListingUncheckedCreateWithoutOwnerInput>
  }

  export type CargoListingCreateManyOwnerInputEnvelope = {
    data: CargoListingCreateManyOwnerInput | CargoListingCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type DriverProfileCreateWithoutUserInput = {
    id?: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutDriverProfileInput
    servicesRoutes?: RouteCreateNestedManyWithoutDriverProfileInput
  }

  export type DriverProfileUncheckedCreateWithoutUserInput = {
    id?: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDriverProfileInput
    servicesRoutes?: RouteUncheckedCreateNestedManyWithoutDriverProfileInput
  }

  export type DriverProfileCreateOrConnectWithoutUserInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateWithoutGiverInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    receiver: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutGiverInput = {
    id?: string
    bookingId: string
    receiverId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutGiverInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutGiverInput, ReviewUncheckedCreateWithoutGiverInput>
  }

  export type ReviewCreateManyGiverInputEnvelope = {
    data: ReviewCreateManyGiverInput | ReviewCreateManyGiverInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReceiverInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    giver: UserCreateNestedOneWithoutReviewsGivenInput
  }

  export type ReviewUncheckedCreateWithoutReceiverInput = {
    id?: string
    bookingId: string
    giverId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput>
  }

  export type ReviewCreateManyReceiverInputEnvelope = {
    data: ReviewCreateManyReceiverInput | ReviewCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type BookingUpsertWithWhereUniqueWithoutDriverInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutDriverInput, BookingUncheckedUpdateWithoutDriverInput>
    create: XOR<BookingCreateWithoutDriverInput, BookingUncheckedCreateWithoutDriverInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutDriverInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutDriverInput, BookingUncheckedUpdateWithoutDriverInput>
  }

  export type BookingUpdateManyWithWhereWithoutDriverInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutDriverInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    cargoListingId?: StringFilter<"Booking"> | string
    ownerId?: StringFilter<"Booking"> | string
    driverId?: StringFilter<"Booking"> | string
    driverProfileId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    agreedAmount?: FloatFilter<"Booking"> | number
    commission?: FloatFilter<"Booking"> | number
    amount?: FloatFilter<"Booking"> | number
    pickupDate?: DateTimeFilter<"Booking"> | Date | string
    estimatedDelivery?: DateTimeNullableFilter<"Booking"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Booking"> | Date | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    acceptedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    declinedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    declineReason?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutOwnerInput, BookingUncheckedUpdateWithoutOwnerInput>
    create: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutOwnerInput, BookingUncheckedUpdateWithoutOwnerInput>
  }

  export type BookingUpdateManyWithWhereWithoutOwnerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CargoListingUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CargoListingWhereUniqueInput
    update: XOR<CargoListingUpdateWithoutOwnerInput, CargoListingUncheckedUpdateWithoutOwnerInput>
    create: XOR<CargoListingCreateWithoutOwnerInput, CargoListingUncheckedCreateWithoutOwnerInput>
  }

  export type CargoListingUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CargoListingWhereUniqueInput
    data: XOR<CargoListingUpdateWithoutOwnerInput, CargoListingUncheckedUpdateWithoutOwnerInput>
  }

  export type CargoListingUpdateManyWithWhereWithoutOwnerInput = {
    where: CargoListingScalarWhereInput
    data: XOR<CargoListingUpdateManyMutationInput, CargoListingUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CargoListingScalarWhereInput = {
    AND?: CargoListingScalarWhereInput | CargoListingScalarWhereInput[]
    OR?: CargoListingScalarWhereInput[]
    NOT?: CargoListingScalarWhereInput | CargoListingScalarWhereInput[]
    id?: StringFilter<"CargoListing"> | string
    ownerId?: StringFilter<"CargoListing"> | string
    title?: StringFilter<"CargoListing"> | string
    description?: StringNullableFilter<"CargoListing"> | string | null
    cargoType?: EnumCargoTypeFilter<"CargoListing"> | $Enums.CargoType
    weightTons?: FloatFilter<"CargoListing"> | number
    lengthMeters?: FloatNullableFilter<"CargoListing"> | number | null
    originState?: StringFilter<"CargoListing"> | string
    originCity?: StringFilter<"CargoListing"> | string
    originAddress?: StringNullableFilter<"CargoListing"> | string | null
    destState?: StringFilter<"CargoListing"> | string
    destCity?: StringFilter<"CargoListing"> | string
    destAddress?: StringNullableFilter<"CargoListing"> | string | null
    requiredTruck?: EnumTruckTypeNullableFilter<"CargoListing"> | $Enums.TruckType | null
    neededBy?: DateTimeFilter<"CargoListing"> | Date | string
    budget?: FloatNullableFilter<"CargoListing"> | number | null
    isActive?: BoolFilter<"CargoListing"> | boolean
    createdAt?: DateTimeFilter<"CargoListing"> | Date | string
    updatedAt?: DateTimeFilter<"CargoListing"> | Date | string
  }

  export type DriverProfileUpsertWithoutUserInput = {
    update: XOR<DriverProfileUpdateWithoutUserInput, DriverProfileUncheckedUpdateWithoutUserInput>
    create: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    where?: DriverProfileWhereInput
  }

  export type DriverProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: DriverProfileWhereInput
    data: XOR<DriverProfileUpdateWithoutUserInput, DriverProfileUncheckedUpdateWithoutUserInput>
  }

  export type DriverProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutDriverProfileNestedInput
    servicesRoutes?: RouteUpdateManyWithoutDriverProfileNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDriverProfileNestedInput
    servicesRoutes?: RouteUncheckedUpdateManyWithoutDriverProfileNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutGiverInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutGiverInput, ReviewUncheckedUpdateWithoutGiverInput>
    create: XOR<ReviewCreateWithoutGiverInput, ReviewUncheckedCreateWithoutGiverInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutGiverInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutGiverInput, ReviewUncheckedUpdateWithoutGiverInput>
  }

  export type ReviewUpdateManyWithWhereWithoutGiverInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutGiverInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    bookingId?: StringFilter<"Review"> | string
    giverId?: StringFilter<"Review"> | string
    receiverId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReceiverInput, ReviewUncheckedUpdateWithoutReceiverInput>
    create: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReceiverInput, ReviewUncheckedUpdateWithoutReceiverInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReceiverInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReceiverInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingsAsDriver?: BookingCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingsAsDriver?: BookingUncheckedCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingUncheckedCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingsAsDriver?: BookingUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingsAsDriver?: BookingUncheckedUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUncheckedUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingUncheckedCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingUncheckedCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUncheckedUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUncheckedUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type BookingCreateWithoutDriverProfileInput = {
    id?: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cargoListing: CargoListingCreateNestedOneWithoutBookingsInput
    driver: UserCreateNestedOneWithoutBookingsAsDriverInput
    owner: UserCreateNestedOneWithoutBookingsAsOwnerInput
    review?: ReviewCreateNestedOneWithoutBookingInput
    transaction?: TransactionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutDriverProfileInput = {
    id?: string
    cargoListingId: string
    ownerId: string
    driverId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutDriverProfileInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutDriverProfileInput, BookingUncheckedCreateWithoutDriverProfileInput>
  }

  export type BookingCreateManyDriverProfileInputEnvelope = {
    data: BookingCreateManyDriverProfileInput | BookingCreateManyDriverProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDriverProfileInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingCreateNestedManyWithoutOwnerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDriverProfileInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingUncheckedCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingUncheckedCreateNestedManyWithoutOwnerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDriverProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDriverProfileInput, UserUncheckedCreateWithoutDriverProfileInput>
  }

  export type RouteCreateWithoutDriverProfileInput = {
    id?: string
    originState: string
    originCity?: string | null
    destState: string
    destCity?: string | null
    estimatedDays?: number
    createdAt?: Date | string
  }

  export type RouteUncheckedCreateWithoutDriverProfileInput = {
    id?: string
    originState: string
    originCity?: string | null
    destState: string
    destCity?: string | null
    estimatedDays?: number
    createdAt?: Date | string
  }

  export type RouteCreateOrConnectWithoutDriverProfileInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutDriverProfileInput, RouteUncheckedCreateWithoutDriverProfileInput>
  }

  export type RouteCreateManyDriverProfileInputEnvelope = {
    data: RouteCreateManyDriverProfileInput | RouteCreateManyDriverProfileInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutDriverProfileInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutDriverProfileInput, BookingUncheckedUpdateWithoutDriverProfileInput>
    create: XOR<BookingCreateWithoutDriverProfileInput, BookingUncheckedCreateWithoutDriverProfileInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutDriverProfileInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutDriverProfileInput, BookingUncheckedUpdateWithoutDriverProfileInput>
  }

  export type BookingUpdateManyWithWhereWithoutDriverProfileInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutDriverProfileInput>
  }

  export type UserUpsertWithoutDriverProfileInput = {
    update: XOR<UserUpdateWithoutDriverProfileInput, UserUncheckedUpdateWithoutDriverProfileInput>
    create: XOR<UserCreateWithoutDriverProfileInput, UserUncheckedCreateWithoutDriverProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDriverProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDriverProfileInput, UserUncheckedUpdateWithoutDriverProfileInput>
  }

  export type UserUpdateWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUpdateManyWithoutOwnerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUncheckedUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUncheckedUpdateManyWithoutOwnerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RouteUpsertWithWhereUniqueWithoutDriverProfileInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutDriverProfileInput, RouteUncheckedUpdateWithoutDriverProfileInput>
    create: XOR<RouteCreateWithoutDriverProfileInput, RouteUncheckedCreateWithoutDriverProfileInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutDriverProfileInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutDriverProfileInput, RouteUncheckedUpdateWithoutDriverProfileInput>
  }

  export type RouteUpdateManyWithWhereWithoutDriverProfileInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutDriverProfileInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: StringFilter<"Route"> | string
    driverProfileId?: StringFilter<"Route"> | string
    originState?: StringFilter<"Route"> | string
    originCity?: StringNullableFilter<"Route"> | string | null
    destState?: StringFilter<"Route"> | string
    destCity?: StringNullableFilter<"Route"> | string | null
    estimatedDays?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
  }

  export type DriverProfileCreateWithoutServicesRoutesInput = {
    id?: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutDriverProfileInput
    user: UserCreateNestedOneWithoutDriverProfileInput
  }

  export type DriverProfileUncheckedCreateWithoutServicesRoutesInput = {
    id?: string
    userId: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDriverProfileInput
  }

  export type DriverProfileCreateOrConnectWithoutServicesRoutesInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutServicesRoutesInput, DriverProfileUncheckedCreateWithoutServicesRoutesInput>
  }

  export type DriverProfileUpsertWithoutServicesRoutesInput = {
    update: XOR<DriverProfileUpdateWithoutServicesRoutesInput, DriverProfileUncheckedUpdateWithoutServicesRoutesInput>
    create: XOR<DriverProfileCreateWithoutServicesRoutesInput, DriverProfileUncheckedCreateWithoutServicesRoutesInput>
    where?: DriverProfileWhereInput
  }

  export type DriverProfileUpdateToOneWithWhereWithoutServicesRoutesInput = {
    where?: DriverProfileWhereInput
    data: XOR<DriverProfileUpdateWithoutServicesRoutesInput, DriverProfileUncheckedUpdateWithoutServicesRoutesInput>
  }

  export type DriverProfileUpdateWithoutServicesRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutDriverProfileNestedInput
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutServicesRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDriverProfileNestedInput
  }

  export type BookingCreateWithoutCargoListingInput = {
    id?: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutBookingsAsDriverInput
    driverProfile: DriverProfileCreateNestedOneWithoutBookingsInput
    owner: UserCreateNestedOneWithoutBookingsAsOwnerInput
    review?: ReviewCreateNestedOneWithoutBookingInput
    transaction?: TransactionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCargoListingInput = {
    id?: string
    ownerId: string
    driverId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCargoListingInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCargoListingInput, BookingUncheckedCreateWithoutCargoListingInput>
  }

  export type BookingCreateManyCargoListingInputEnvelope = {
    data: BookingCreateManyCargoListingInput | BookingCreateManyCargoListingInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCargoListingsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCargoListingsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingUncheckedCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCargoListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCargoListingsInput, UserUncheckedCreateWithoutCargoListingsInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutCargoListingInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCargoListingInput, BookingUncheckedUpdateWithoutCargoListingInput>
    create: XOR<BookingCreateWithoutCargoListingInput, BookingUncheckedCreateWithoutCargoListingInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCargoListingInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCargoListingInput, BookingUncheckedUpdateWithoutCargoListingInput>
  }

  export type BookingUpdateManyWithWhereWithoutCargoListingInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCargoListingInput>
  }

  export type UserUpsertWithoutCargoListingsInput = {
    update: XOR<UserUpdateWithoutCargoListingsInput, UserUncheckedUpdateWithoutCargoListingsInput>
    create: XOR<UserCreateWithoutCargoListingsInput, UserUncheckedCreateWithoutCargoListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCargoListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCargoListingsInput, UserUncheckedUpdateWithoutCargoListingsInput>
  }

  export type UserUpdateWithoutCargoListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCargoListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUncheckedUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CargoListingCreateWithoutBookingsInput = {
    id?: string
    title: string
    description?: string | null
    cargoType?: $Enums.CargoType
    weightTons: number
    lengthMeters?: number | null
    originState: string
    originCity: string
    originAddress?: string | null
    destState: string
    destCity: string
    destAddress?: string | null
    requiredTruck?: $Enums.TruckType | null
    neededBy: Date | string
    budget?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCargoListingsInput
  }

  export type CargoListingUncheckedCreateWithoutBookingsInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    cargoType?: $Enums.CargoType
    weightTons: number
    lengthMeters?: number | null
    originState: string
    originCity: string
    originAddress?: string | null
    destState: string
    destCity: string
    destAddress?: string | null
    requiredTruck?: $Enums.TruckType | null
    neededBy: Date | string
    budget?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CargoListingCreateOrConnectWithoutBookingsInput = {
    where: CargoListingWhereUniqueInput
    create: XOR<CargoListingCreateWithoutBookingsInput, CargoListingUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsAsDriverInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookingsAsOwner?: BookingCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsAsDriverInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookingsAsOwner?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingUncheckedCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsAsDriverInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsAsDriverInput, UserUncheckedCreateWithoutBookingsAsDriverInput>
  }

  export type DriverProfileCreateWithoutBookingsInput = {
    id?: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDriverProfileInput
    servicesRoutes?: RouteCreateNestedManyWithoutDriverProfileInput
  }

  export type DriverProfileUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId: string
    licenseNumber?: string | null
    licenseExpiry?: Date | string | null
    yearsExperience?: number
    bio?: string | null
    isVerified?: boolean
    isAvailable?: boolean
    truckType: $Enums.TruckType
    truckModel: string
    truckYear: number
    plateNumber: string
    capacityTons: number
    lengthMeters?: number | null
    ratePerKm: number
    minimumCharge: number
    baseState: string
    baseCity: string
    totalTrips?: number
    avgRating?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesRoutes?: RouteUncheckedCreateNestedManyWithoutDriverProfileInput
  }

  export type DriverProfileCreateOrConnectWithoutBookingsInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutBookingsInput, DriverProfileUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsAsOwnerInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingCreateNestedManyWithoutDriverInput
    cargoListings?: CargoListingCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsAsOwnerInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingUncheckedCreateNestedManyWithoutDriverInput
    cargoListings?: CargoListingUncheckedCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutGiverInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsAsOwnerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsAsOwnerInput, UserUncheckedCreateWithoutBookingsAsOwnerInput>
  }

  export type ReviewCreateWithoutBookingInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    giver: UserCreateNestedOneWithoutReviewsGivenInput
    receiver: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    id?: string
    giverId: string
    receiverId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type TransactionCreateWithoutBookingInput = {
    id?: string
    merchantCode: string
    payItemId: string
    transactionReference: string
    paymentReference?: string | null
    amount: number
    amountKobo: number
    currency?: string
    status?: $Enums.TransactionStatus
    channel?: string | null
    responseCode?: string | null
    responseDescription?: string | null
    initiatedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutBookingInput = {
    id?: string
    merchantCode: string
    payItemId: string
    transactionReference: string
    paymentReference?: string | null
    amount: number
    amountKobo: number
    currency?: string
    status?: $Enums.TransactionStatus
    channel?: string | null
    responseCode?: string | null
    responseDescription?: string | null
    initiatedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBookingInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBookingInput, TransactionUncheckedCreateWithoutBookingInput>
  }

  export type CargoListingUpsertWithoutBookingsInput = {
    update: XOR<CargoListingUpdateWithoutBookingsInput, CargoListingUncheckedUpdateWithoutBookingsInput>
    create: XOR<CargoListingCreateWithoutBookingsInput, CargoListingUncheckedCreateWithoutBookingsInput>
    where?: CargoListingWhereInput
  }

  export type CargoListingUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CargoListingWhereInput
    data: XOR<CargoListingUpdateWithoutBookingsInput, CargoListingUncheckedUpdateWithoutBookingsInput>
  }

  export type CargoListingUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCargoListingsNestedInput
  }

  export type CargoListingUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBookingsAsDriverInput = {
    update: XOR<UserUpdateWithoutBookingsAsDriverInput, UserUncheckedUpdateWithoutBookingsAsDriverInput>
    create: XOR<UserCreateWithoutBookingsAsDriverInput, UserUncheckedCreateWithoutBookingsAsDriverInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsAsDriverInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsAsDriverInput, UserUncheckedUpdateWithoutBookingsAsDriverInput>
  }

  export type UserUpdateWithoutBookingsAsDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookingsAsOwner?: BookingUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsAsDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsOwner?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUncheckedUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DriverProfileUpsertWithoutBookingsInput = {
    update: XOR<DriverProfileUpdateWithoutBookingsInput, DriverProfileUncheckedUpdateWithoutBookingsInput>
    create: XOR<DriverProfileCreateWithoutBookingsInput, DriverProfileUncheckedCreateWithoutBookingsInput>
    where?: DriverProfileWhereInput
  }

  export type DriverProfileUpdateToOneWithWhereWithoutBookingsInput = {
    where?: DriverProfileWhereInput
    data: XOR<DriverProfileUpdateWithoutBookingsInput, DriverProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type DriverProfileUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
    servicesRoutes?: RouteUpdateManyWithoutDriverProfileNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yearsExperience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    truckType?: EnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType
    truckModel?: StringFieldUpdateOperationsInput | string
    truckYear?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    capacityTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    ratePerKm?: FloatFieldUpdateOperationsInput | number
    minimumCharge?: FloatFieldUpdateOperationsInput | number
    baseState?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    totalTrips?: IntFieldUpdateOperationsInput | number
    avgRating?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesRoutes?: RouteUncheckedUpdateManyWithoutDriverProfileNestedInput
  }

  export type UserUpsertWithoutBookingsAsOwnerInput = {
    update: XOR<UserUpdateWithoutBookingsAsOwnerInput, UserUncheckedUpdateWithoutBookingsAsOwnerInput>
    create: XOR<UserCreateWithoutBookingsAsOwnerInput, UserUncheckedCreateWithoutBookingsAsOwnerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsAsOwnerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsAsOwnerInput, UserUncheckedUpdateWithoutBookingsAsOwnerInput>
  }

  export type UserUpdateWithoutBookingsAsOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUpdateManyWithoutDriverNestedInput
    cargoListings?: CargoListingUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsAsOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUncheckedUpdateManyWithoutDriverNestedInput
    cargoListings?: CargoListingUncheckedUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutGiverNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithoutBookingInput = {
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutBookingInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giver?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    receiver?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithoutBookingInput = {
    update: XOR<TransactionUpdateWithoutBookingInput, TransactionUncheckedUpdateWithoutBookingInput>
    create: XOR<TransactionCreateWithoutBookingInput, TransactionUncheckedCreateWithoutBookingInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutBookingInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutBookingInput, TransactionUncheckedUpdateWithoutBookingInput>
  }

  export type TransactionUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantCode?: StringFieldUpdateOperationsInput | string
    payItemId?: StringFieldUpdateOperationsInput | string
    transactionReference?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    responseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantCode?: StringFieldUpdateOperationsInput | string
    payItemId?: StringFieldUpdateOperationsInput | string
    transactionReference?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    responseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutTransactionInput = {
    id?: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cargoListing: CargoListingCreateNestedOneWithoutBookingsInput
    driver: UserCreateNestedOneWithoutBookingsAsDriverInput
    driverProfile: DriverProfileCreateNestedOneWithoutBookingsInput
    owner: UserCreateNestedOneWithoutBookingsAsOwnerInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutTransactionInput = {
    id?: string
    cargoListingId: string
    ownerId: string
    driverId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutTransactionInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTransactionInput, BookingUncheckedCreateWithoutTransactionInput>
  }

  export type BookingUpsertWithoutTransactionInput = {
    update: XOR<BookingUpdateWithoutTransactionInput, BookingUncheckedUpdateWithoutTransactionInput>
    create: XOR<BookingCreateWithoutTransactionInput, BookingUncheckedCreateWithoutTransactionInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutTransactionInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutTransactionInput, BookingUncheckedUpdateWithoutTransactionInput>
  }

  export type BookingUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargoListing?: CargoListingUpdateOneRequiredWithoutBookingsNestedInput
    driver?: UserUpdateOneRequiredWithoutBookingsAsDriverNestedInput
    driverProfile?: DriverProfileUpdateOneRequiredWithoutBookingsNestedInput
    owner?: UserUpdateOneRequiredWithoutBookingsAsOwnerNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateWithoutReviewInput = {
    id?: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cargoListing: CargoListingCreateNestedOneWithoutBookingsInput
    driver: UserCreateNestedOneWithoutBookingsAsDriverInput
    driverProfile: DriverProfileCreateNestedOneWithoutBookingsInput
    owner: UserCreateNestedOneWithoutBookingsAsOwnerInput
    transaction?: TransactionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    id?: string
    cargoListingId: string
    ownerId: string
    driverId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type UserCreateWithoutReviewsGivenInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingUncheckedCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingUncheckedCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutGiverInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    phone?: string | null
    image?: string | null
    role?: $Enums.Role
    onboardingComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookingsAsDriver?: BookingUncheckedCreateNestedManyWithoutDriverInput
    bookingsAsOwner?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    cargoListings?: CargoListingUncheckedCreateNestedManyWithoutOwnerInput
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutGiverInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargoListing?: CargoListingUpdateOneRequiredWithoutBookingsNestedInput
    driver?: UserUpdateOneRequiredWithoutBookingsAsDriverNestedInput
    driverProfile?: DriverProfileUpdateOneRequiredWithoutBookingsNestedInput
    owner?: UserUpdateOneRequiredWithoutBookingsAsOwnerNestedInput
    transaction?: TransactionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUncheckedUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUncheckedUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutGiverNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsDriver?: BookingUncheckedUpdateManyWithoutDriverNestedInput
    bookingsAsOwner?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    cargoListings?: CargoListingUncheckedUpdateManyWithoutOwnerNestedInput
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutGiverNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type BookingCreateManyDriverInput = {
    id?: string
    cargoListingId: string
    ownerId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyOwnerInput = {
    id?: string
    cargoListingId: string
    driverId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CargoListingCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    cargoType?: $Enums.CargoType
    weightTons: number
    lengthMeters?: number | null
    originState: string
    originCity: string
    originAddress?: string | null
    destState: string
    destCity: string
    destAddress?: string | null
    requiredTruck?: $Enums.TruckType | null
    neededBy: Date | string
    budget?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyGiverInput = {
    id?: string
    bookingId: string
    receiverId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyReceiverInput = {
    id?: string
    bookingId: string
    giverId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargoListing?: CargoListingUpdateOneRequiredWithoutBookingsNestedInput
    driverProfile?: DriverProfileUpdateOneRequiredWithoutBookingsNestedInput
    owner?: UserUpdateOneRequiredWithoutBookingsAsOwnerNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargoListing?: CargoListingUpdateOneRequiredWithoutBookingsNestedInput
    driver?: UserUpdateOneRequiredWithoutBookingsAsDriverNestedInput
    driverProfile?: DriverProfileUpdateOneRequiredWithoutBookingsNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargoListingUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCargoListingNestedInput
  }

  export type CargoListingUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCargoListingNestedInput
  }

  export type CargoListingUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weightTons?: FloatFieldUpdateOperationsInput | number
    lengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: StringFieldUpdateOperationsInput | string
    destAddress?: NullableStringFieldUpdateOperationsInput | string | null
    requiredTruck?: NullableEnumTruckTypeFieldUpdateOperationsInput | $Enums.TruckType | null
    neededBy?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutGiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    receiver?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutGiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutGiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    giver?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyDriverProfileInput = {
    id?: string
    cargoListingId: string
    ownerId: string
    driverId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteCreateManyDriverProfileInput = {
    id?: string
    originState: string
    originCity?: string | null
    destState: string
    destCity?: string | null
    estimatedDays?: number
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargoListing?: CargoListingUpdateOneRequiredWithoutBookingsNestedInput
    driver?: UserUpdateOneRequiredWithoutBookingsAsDriverNestedInput
    owner?: UserUpdateOneRequiredWithoutBookingsAsOwnerNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargoListingId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpdateWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    originState?: StringFieldUpdateOperationsInput | string
    originCity?: NullableStringFieldUpdateOperationsInput | string | null
    destState?: StringFieldUpdateOperationsInput | string
    destCity?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyCargoListingInput = {
    id?: string
    ownerId: string
    driverId: string
    driverProfileId: string
    status?: $Enums.BookingStatus
    agreedAmount: number
    commission?: number
    amount?: number
    pickupDate: Date | string
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    notes?: string | null
    acceptedAt?: Date | string | null
    declinedAt?: Date | string | null
    declineReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutCargoListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutBookingsAsDriverNestedInput
    driverProfile?: DriverProfileUpdateOneRequiredWithoutBookingsNestedInput
    owner?: UserUpdateOneRequiredWithoutBookingsAsOwnerNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCargoListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCargoListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    driverProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    agreedAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
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