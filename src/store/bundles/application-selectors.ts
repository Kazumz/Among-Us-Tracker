import { useStateSelector } from "../useSelector";

export const GetLoading = (): boolean => useStateSelector(state => state.applicationState.loading);