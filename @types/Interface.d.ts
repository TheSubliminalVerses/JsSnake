declare module 'index' {
    global {
        interface IGame {
            pickLocation(): void
            checkObjectBounds(object: Snake)
            setScore(initScore: number): void
            addScore(): void
            callController(controller: Controller, gameOver?: boolean): void
            setGameOverWindow(displayType: string, target: HTMLElement): void
        }

        interface IDisplayType {
            hidden: string
            block: string
            none: string
        }

        const Game: IGame
        const DisplayType: IDisplayType
    }
}