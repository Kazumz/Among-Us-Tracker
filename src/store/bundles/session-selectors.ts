import { useStateSelector } from "../useSelector";

export const GetError = (): boolean => useStateSelector(state => state.sessionState.error);