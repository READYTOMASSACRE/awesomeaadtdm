import { Core } from './src/core'
import { AadTdmGamemode } from './src/classes/AadTdmGamemode'
import config from './config'

(new Core(new AadTdmGamemode(), config)).start()
