import { MouseAction } from '../actions/mouse.action'
import { InputAction } from '../actions/input.action'
import { NavigationAction } from '../actions/navigation.action'

// ActionClasses maps ActionTypes to their corresponding classes
export type ActionClasses = {
  click: MouseAction
  input: InputAction
  navigation: NavigationAction
}
