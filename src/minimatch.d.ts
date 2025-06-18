declare module 'minimatch' {
    class Minimatch {
        constructor(pattern: string, options?: IOptions);
        options: IOptions;
        pattern: string;
        set: string[][];
        regexp: RegExp;
        negate: boolean;
        comment: boolean;
        empty: boolean;
        make(): void;
        debug(): void;
        parse(pattern: string): string[][];
        match(file: string, pattern?: string): boolean;
        matchOne(file: string[], pattern: string[]): boolean;
    }

    interface IOptions {
        debug?: boolean;
        nobrace?: boolean;
        noglobstar?: boolean;
        dot?: boolean;
        noext?: boolean;
        nocase?: boolean;
        nonull?: boolean;
        matchBase?: boolean;
        nocomment?: boolean;
        escape?: boolean;
        noquantifiers?: boolean;
        pathname?: boolean;
        flipNegate?: boolean;
        partial?: boolean;
        globDebug?: boolean;
        maxLength?: number;
    }

    interface IMinimatch {
        options: IOptions;
        pattern: string;
        set: string[][];
        regexp: RegExp;
        negate: boolean;
        comment: boolean;
        empty: boolean;
        make(): void;
        debug(): void;
        parse(pattern: string): string[][];
        match(file: string, pattern?: string): boolean;
        matchOne(file: string[], pattern: string[]): boolean;
    }

    export = Minimatch;
}
