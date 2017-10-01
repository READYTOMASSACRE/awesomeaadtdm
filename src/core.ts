import { IGamemode } from './interfaces/IGamemode'
export class Core
{
    /**
     * @var {object}
     */
    protected config: object

    /**
     * @var {IGamemode}
     */
    protected gamemode: IGamemode

    /**
     * {@constructor}
     */
    constructor(gamemode: IGamemode, config: object) {
        this.config = config
        this.gamemode = gamemode
    }

    /**
     * Запускает приложение
     * @return {boolean}
     */
    start(): boolean {
        let result = this.gamemode.load(this.config)

        return result
    }
}
