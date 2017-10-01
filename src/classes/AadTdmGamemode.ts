import { IGamemode } from '../interfaces/IGamemode'

export class AadTdmGamemode implements IGamemode
{
    /**
     * @var {number}
     */
    protected status: number

    /**
     * {@constructor}
     */
    constructor() {
        this.status = null
    }

    /**
     * {@inheritdoc}
     */
    load(config: object) {
        return !!0
    }
}
