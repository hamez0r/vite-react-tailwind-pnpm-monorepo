type Nullable<T> = T | null;
type RecursivePartial<T> = Partial<{ [P in keyof T]: RecursivePartial<T[P]> }>;
type Indexable<T> = T & Record<string, unknown>;
