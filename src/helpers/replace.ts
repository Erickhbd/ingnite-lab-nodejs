export type Replace<T, R> = Omit<T, Keyof R> & R;