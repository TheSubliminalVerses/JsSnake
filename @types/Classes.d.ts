declare module 'index' {
    global {
        class Snake {
            public x: number
            public y: number
            public dx: number
            public dy: number
            public total: number
            private readonly color: string | number
            // @ts-ignore
            public tail: p5.Vector[]

            _update_(): void
            _show_(): void
            setDir(dx: number, dy: number): void
            eat(pos: Food): boolean
            death(): void

            constructor(color?: string | number)

        }

        class Food {
            // @ts-ignore
            public p5Vector: p5.Vector
            private color: string | number
            private red: number
            private green: number
            private blue: number

            // @ts-ignore
            constructor(vector: p5.Vector, color: string | number)
            // @ts-ignore
            constructor(vector: p5.Vector, red: number, green: number, blue: number)

            _show_(): void
        }

        class Controller {
            public controlFn: object

            constructor(fn: object)
        }
    }
}