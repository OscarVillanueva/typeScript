import sub from './validations/Numbers'
import * as Texts from './validations/Texts'

console.log(`messages`, Texts.getError(0))
console.log(`sub( 2, 1 )`, sub( 2, 1 ))
